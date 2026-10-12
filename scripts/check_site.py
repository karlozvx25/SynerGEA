"""Verifica referencias locales e identificadores sin introducir dependencias."""
from pathlib import Path
from html.parser import HTMLParser

ROOT = Path(__file__).resolve().parents[1] / 'dist'

class SiteCheck(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.anchors = []
        self.errors = []

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        ident = attrs.get('id')
        if ident:
            if ident in self.ids:
                self.errors.append('ID duplicado: ' + ident)
            self.ids.add(ident)
        for key in ('src', 'poster', 'data-src', 'href'):
            val = attrs.get(key, '')
            if val.startswith('assets/') and not (ROOT / val).is_file():
                self.errors.append('Recurso ausente: ' + val)
        if attrs.get('href', '').startswith('#') and len(attrs['href']) > 1:
            self.anchors.append(attrs['href'][1:])

check = SiteCheck()
check.feed((ROOT / 'index.html').read_text())
check.errors += ['Ancla sin destino: ' + a for a in check.anchors if a not in check.ids]
if check.errors:
    raise SystemExit('\n'.join(check.errors))
print('Referencias locales, identificadores y anclas correctos')
