"""Local preview server with byte-range support for audio seeking."""
from http.server import ThreadingHTTPServer, SimpleHTTPRequestHandler
from pathlib import Path
import re
import argparse

class Handler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(Path(__file__).parent), **kwargs)

    def send_head(self):
        path = Path(self.translate_path(self.path))
        request_range = self.headers.get('Range')
        if request_range and path.is_file():
            match = re.fullmatch(r'bytes=(\d+)-(\d*)', request_range)
            if match:
                size = path.stat().st_size
                start = int(match[1])
                end = min(int(match[2]) if match[2] else size - 1, size - 1)
                if start > end:
                    self.send_error(416)
                    return None
                self.send_response(206)
                self.send_header('Content-Type', self.guess_type(str(path)))
                self.send_header('Content-Length', str(end - start + 1))
                self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
                self.send_header('Accept-Ranges', 'bytes')
                self.end_headers()
                stream = path.open('rb')
                stream.seek(start)
                self.bytes_left = end - start + 1
                return stream
        return super().send_head()

    def copyfile(self, source, outputfile):
        left = getattr(self, 'bytes_left', None)
        if left is None:
            return super().copyfile(source, outputfile)
        while left:
            chunk = source.read(min(65536, left))
            if not chunk:
                break
            outputfile.write(chunk)
            left -= len(chunk)
        del self.bytes_left

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Vista previa local de SynerGEA')
    parser.add_argument('--port', type=int, default=8766)
    args = parser.parse_args()
    print(f'SynerGEA: http://127.0.0.1:{args.port}/ — Ctrl+C para detener', flush=True)
    ThreadingHTTPServer(('127.0.0.1', args.port), Handler).serve_forever()
