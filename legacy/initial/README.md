# SynerGEA Empresarial × Vector Inside

Sitio web y experiencia digital de SynerGEA Empresarial, desarrollado por Vector Inside. Integra narrativa de marca, diseño adaptable, animaciones y audio para comunicar tres pilares: **conexión, crecimiento y pertenencia**.

## Estado del proyecto

Base conceptual editable para iniciar el desarrollo con el equipo. Esta versión fue reconstruida a partir de la propuesta inicial e incorpora la paleta azul, rosa y morado solicitada. No es todavía un lanzamiento de producción ni un Brand Book aprobado.

Incluye:
- Landing con significado de SYNER + GEA, manifiesto, pilares y cierre comercial de Vector Inside.
- Esfera generativa en Canvas y adaptación visual para pantallas pequeñas.
- Audio original de aproximadamente 1:08, con reproducción, pausa y navegación temporal.
- Seis escenas que se actualizan con la posición del audio.
- CTA que descarga un brief local; **no envía datos ni tiene backend**.
- Preferencia de movimiento reducido y navegación por teclado.

## Requisitos

- Git para clonar y colaborar.
- Python 3.9 o superior para la vista previa. No requiere instalar paquetes.
- Navegador moderno: Chrome, Edge, Firefox o Safari actualizado.
- Node.js, opcional, para verificar la sintaxis de JavaScript.

No se requiere npm, base de datos, claves de API ni archivo `.env`. Las fuentes de Google Fonts requieren conexión; se utilizan fuentes de respaldo si no están disponibles.

## Ejecutar en desarrollo

```sh
git clone https://github.com/karlozvx25/SynerGEA.git
cd SynerGEA
git switch develop
python3 preview.py
```

En Windows, si `python3` no está disponible:

```powershell
py -3 preview.py
```

Abrir **http://127.0.0.1:8766/** y pulsar **Activar experiencia**. El navegador requiere una interacción para iniciar el audio.

Mantener la terminal abierta mientras se revisa la web. Detener el servidor con `Ctrl+C`. Si la página deja de cargar, volver a ejecutar el comando. Esta dirección solo funciona en el equipo donde corre el servidor; no es un enlace público para compartir con el cliente.

El servidor `preview.py` soporta peticiones por rangos de bytes para adelantar y retroceder el audio. Es solo para desarrollo y escucha en `127.0.0.1`.

### Cambiar de puerto

El puerto predeterminado es 8766. Si está ocupado:

```sh
python3 preview.py --port 8767
```

Abrir entonces http://127.0.0.1:8767/.

También se puede abrir `index.html` directamente en un navegador conservando juntos los archivos y la carpeta `assets`; para el equipo se recomienda usar el servidor.

## Estructura

```text
SynerGEA/
├── index.html                  # Contenido, secciones, diálogos y CTA
├── styles.css                  # Paleta, tipografía, composición y responsive
├── script.js                   # Animación Canvas, audio, escenas y brief
├── preview.py                  # Servidor local con soporte de rangos
├── assets/
│   └── narracion-original.wav  # Audio original
├── .gitignore
└── README.md
```

Los ZIP, HTML autocontenidos, registros y dependencias locales se excluyen del repositorio para evitar duplicados. Los archivos fuente anteriores son la base de edición.

## Ramas y colaboración

| Rama | Uso |
| --- | --- |
| `main` | Base estable y versiones aprobadas. No implica despliegue automático. |
| `develop` | Integración del trabajo antes de aprobación. |
| `feature/<nombre>` | Nueva funcionalidad, creada desde `develop` cuando se inicia trabajo. |
| `fix/<nombre>` | Correcciones, creadas desde `develop`. |

Ejemplo:

```sh
git switch develop
git pull --ff-only origin develop
git switch -c feature/ajustar-sincronizacion
# Editar y verificar los cambios
git add index.html styles.css script.js
git commit -m "feat: ajustar escenas de la narración"
git push -u origin feature/ajustar-sincronizacion
```

Abrir un Pull Request hacia `develop` con descripción, capturas y verificaciones. Una versión aprobada se integra mediante un Pull Request de `develop` a `main`. No subir credenciales ni datos reales de prospectos.

Este es el flujo recomendado; las protecciones de ramas y revisiones obligatorias aún no están configuradas.

## Guía de edición

### Diseño y paleta

Editar `styles.css`. Referencias actuales, pendientes de validación contra el Brand Book definitivo:

| Rol | Color |
| --- | --- |
| Fondo azul profundo | `#0B1026` |
| Azul | `#78A6FF` |
| Rosa | `#FF83B5` |
| Morado | `#B28BFA` |
| Texto claro | `#F5F3FF` |

Los colores del Canvas están en `draw()` dentro de `script.js`; deben mantenerse alineados con CSS. No introducir nuevamente verdes en esta dirección visual.

### Audio y escenas

El archivo original está en `assets/narracion-original.wav`. La constante `scenes` de `script.js` contiene `at` (segundos), `label`, `title` y `detail` para cada escena.

Los puntos de entrada actuales —0, 10, 21, 33, 46 y 58 segundos— son una distribución editorial inicial. **La sincronización palabra por palabra todavía debe afinarse escuchando la locución.** La lógica sigue `audio.currentTime`, también cuando se adelanta o retrocede.

Si se cambia el audio, actualizar la ruta en `index.html` y revisar todos los puntos de entrada. Conservar un original antes de optimizar o convertir archivos.

### CTA comercial

El botón “Quiero esto para mi marca” abre un formulario y descarga un archivo de texto en el dispositivo. No existen envíos de correo, CRM, WhatsApp ni almacenamiento de datos.

Para lanzamiento, definir y aprobar el destino comercial real, implementar el envío y revisar la información de privacidad que corresponda. No presentar el brief descargado como un contacto enviado.

## Verificación antes de un Pull Request

1. Abrir la landing y comprobar encabezado, secciones, formulario y ausencia de errores de consola.
2. Activar el audio; comprobar pausa, reanudación y avance/retroceso en la barra.
3. Confirmar que las escenas cambian con el audio y que el cierre permite volver a explorar.
4. Revisar en escritorio y en móvil, sin desbordamientos ni controles inaccesibles.
5. Revisar teclado, foco, contraste y preferencia de movimiento reducido.
6. Descargar un brief de prueba y comprobar su contenido.

Comprobaciones opcionales de sintaxis:

```sh
node --check script.js
python3 -m py_compile preview.py
```

No hay una suite automatizada ni CI configurados en esta base. La reproducción y el cambio de escenas al adelantar se comprobaron en Chrome durante la preparación de la propuesta; cada cambio requiere su propia revisión.

## Publicación y pendientes

El sitio es estático y no necesita compilación. Para publicar, el hosting debe servir `index.html`, `styles.css`, `script.js` y `assets/` con HTTPS y soporte de audio por rangos. No usar `preview.py` como servidor de producción.

No hay hosting, dominio ni despliegue automático configurados desde este repositorio.

Pendientes iniciales:
- Validar identidad, logotipo, códigos de color y contenidos con SynerGEA.
- Afinar sincronización de voz y movimiento.
- Definir destino y funcionamiento del CTA comercial.
- Optimizar audio y rendimiento manteniendo una copia original.
- Completar revisión responsive, accesibilidad, metadatos y criterios de aceptación.
- Definir estrategia de publicación, revisiones y protecciones de ramas.

No se incluye una licencia de código abierto. Acordar con las partes los derechos y permisos de uso de código, audio e identidad antes de distribuir públicamente.
