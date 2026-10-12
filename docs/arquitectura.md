# Arquitectura implementada

La solución actual es una web estática. El navegador solicita los archivos y ejecuta las interacciones. El alojamiento de Sites aplica el acceso privado; el código de la web no autentica visitantes ni consulta servicios de negocio.

## Componentes

```mermaid
flowchart LR
  U[Visitante] --> A[Control de acceso de Sites]
  A --> H[Alojamiento estático HTTPS]
  H --> HTML[index.html]
  H --> CSS[style.css]
  H --> JS[script.js]
  H --> MEDIA[PNG JPG SVG MP4]
  CSS --> F[Google Fonts]
  HTML --> B[Navegador]
  JS --> B
  MEDIA --> B
  B --> T[Pilares y selector de necesidades]
  B --> D[Dialog de presentación]
  D --> M[Texto en memoria de la página]
  M --> TXT[Archivo TXT descargado]
  APP[Aplicación SynerGEA] -. Mención editorial sin integración .-> HTML
```

La aplicación queda fuera del flujo ejecutable. No se conocen su arquitectura, autenticación, API, almacenamiento o plataforma; no se dibujan como componentes existentes de esta web.

## Carriles del sistema

```mermaid
sequenceDiagram
  actor V as Visitante
  participant H as Alojamiento y acceso Sites
  participant N as Navegador
  participant J as Interacciones JavaScript
  participant M as Medios estáticos
  V->>H: Abre el enlace
  H-->>V: Solicita acceso si corresponde
  H-->>N: Entrega HTML CSS y JavaScript
  N->>M: Solicita logo y posters
  J->>N: Inicia revelado SVG si permite movimiento
  V->>N: Desplaza la página
  N->>J: IntersectionObserver informa visibilidad
  alt Video visible y movimiento permitido
    J->>M: Asigna src y solicita MP4
    M-->>N: Entrega video
    J->>N: Intenta reproducir silenciado
  else Fuera de vista o movimiento pausado
    J->>N: Pausa reproducción
  end
  V->>J: Selecciona pilar o necesidad
  J-->>N: Actualiza el contenido local
```

## Carriles de presentación personal

```mermaid
sequenceDiagram
  actor V as Visitante
  participant UI as Dialog y formulario
  participant JS as JavaScript local
  participant RAM as Memoria de la página
  participant FS as Descarga del navegador
  V->>UI: Abre Prepara tu presentación
  V->>UI: Completa nombre negocio aporte y búsqueda
  UI->>UI: Valida campos requeridos y longitudes
  UI->>JS: Evento submit sin envío HTTP
  JS->>RAM: Construye texto con FormData
  JS-->>UI: Muestra resultado mediante textContent
  V->>JS: Descargar presentación
  JS->>FS: Blob de texto y enlace temporal
  FS-->>V: mi-presentacion-synergea.txt
  JS->>JS: Revoca URL temporal
```

No se almacena en localStorage, no se envía por correo y no se registra un prospecto. La página no debe mostrar mensajes como “solicitud recibida”.

## Movimiento y accesibilidad

- SVG contiene una imagen raster enmascarada; el path normalizado revela azul, unión y rosa en unos 5.2 segundos.
- Un rectángulo final completa la máscara para evitar regiones omitidas. Es revelado visual, no reconstrucción geométrica del logotipo.
- `prefers-reduced-motion` evita la animación y la reproducción inicial de los videos.
- El botón de movimiento pausa los medios; los controles nativos permiten operar el video de la ciudad.
- Pestañas con roles y navegación por flechas; formularios etiquetados; dialog nativo; resultado de selector con `aria-live`.
- En móvil se apilan las columnas. La ciudad usa `aspect-ratio: 9/16` y `object-fit: contain`.

## Flujo de mantenimiento

```mermaid
flowchart TB
  REF[Referencias y decisiones aprobadas] --> EDIT[Edición de HTML CSS JS y recursos]
  EDIT --> CHECK[Validación de sintaxis y rutas]
  CHECK --> QA[Revisión en navegador escritorio y móvil]
  QA --> GIT[Commit del código exacto]
  GIT --> PACK[Empaquetado de dist]
  PACK --> DEPLOY[Publicación privada en Sites]
  DEPLOY --> VERIFY[Resultado terminal con URL]
  GIT -. Actualización independiente .-> GH[Repositorio GitHub]
```

No hay CI/CD de GitHub configurado en este paquete. Subir cambios a GitHub no publica automáticamente en Sites.
