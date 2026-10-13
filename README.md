# SynerGEA · Crecer Conectando

Web de presentación de una comunidad empresarial de networking. La experiencia conecta tres ideas: **Conecto, Crezco y Pertenezco**, con una narrativa que une relaciones humanas y evolución tecnológica.

[Ver el sitio](https://synergea-crecer-conectando.karlozvx.chatgpt.site) · Acceso privado de Sites, independiente de la visibilidad de este repositorio.

## Estado de la entrega

Versión documental del 13 de octubre de 2026. El código corresponde a la publicación de Sites `d274f4aea2836eec2cdb9f6abadb3185e78976c3`. Esta referencia identifica la versión del repositorio de Sites; no es un commit de GitHub.

La web está implementada y publicada. Incluye navegación adaptable, animación del infinito diagonal aprobado, pilares interactivos, videos, preguntas desplegables y un generador descargable de presentación personal. **No incluye afiliación, autenticación propia, pagos, CRM ni integración con la aplicación de SynerGEA.** La aplicación se menciona como parte de la evolución de la comunidad; su enlace y sus funciones específicas están pendientes de confirmar.

## Ejecutar localmente

Requiere Python 3 para servir archivos; el sitio no necesita instalación de paquetes ni compilación.

```sh
python3 -m http.server 8000 --directory dist
```

Abrir `http://localhost:8000`. Para validar referencias de recursos y estructura básica:

```sh
python3 scripts/check_site.py
node --check dist/script.js
```

No abrir simplemente `index.html` como archivo: las rutas, videos y el comportamiento de descarga se verifican mediante HTTP.

## Estructura

```text
dist/
  index.html          Contenido, navegación y estructura accesible
  style.css           Identidad visual y adaptación de pantallas
  script.js           Interacciones locales y control de medios
  assets/             Logo, imágenes, composiciones y videos
docs/
  arquitectura.md     Componentes y diagramas de carriles
  decisiones.md       Decisiones tecnológicas y de marketing
  experiencia.md      Arquitectura de información y recorrido
  mapas-de-calor.md   Hipótesis y plan de medición
  mapa-atencion.html  Mapa esquemático interactivo no medido
  materiales.md       Inventario, origen y derechos pendientes
  brandbook/          Evaluación de cuatro propuestas PDF y DOCX
  previews/           Capturas de revisión
legacy/initial/      Versión inicial preservada con su audio y README
preview.py           Servidor de desarrollo previo con rangos de bytes
scripts/
  check_site.py       Verificación ligera del paquete
```

## Decisiones principales

| Perspectiva | Decisión | Motivo |
|---|---|---|
| Marketing | “Crecer Conectando” como eje del hero y cierre | Explicar el crecimiento a través de las relaciones. |
| Marca | Variante oficial: infinito diagonal en capas | Vincular el doble bucle, el movimiento ascendente y la integración de capacidades. |
| Narrativa | Encuentro humano → experiencia → comunidad → tecnología → participación | Explicar el valor antes de pedir una acción. |
| Visual | Cian, cobalto, violeta y magenta | Continuidad cromática; convergencia en el centro del símbolo. |
| Tecnología | HTML, CSS y JavaScript sin framework | Adecuado al alcance informativo y a las interacciones locales. |
| Movimiento | Máscara SVG desde azul a rosa | Revelar el raster existente siguiendo una trayectoria, sin simular que ya hay un vector final. |
| Medios | Carga al entrar en pantalla y pausa al salir | Limitar transferencias y reproducción simultánea. |
| Video vertical | Ciudad completa 9:16 a la izquierda | Conservar la composición original y separar texto y video. |
| Datos | Presentación personal en memoria y descarga local | Dar utilidad sin implementar un sistema de captación inexistente. |

## Documentación y mapas

- [Arquitectura y carriles del sistema](docs/arquitectura.md)
- [Decisiones y consecuencias](docs/decisiones.md)
- [Recorrido del usuario](docs/experiencia.md)
- [Zonas de atención y medición](docs/mapas-de-calor.md)
- [Mapa interactivo de hipótesis](docs/mapa-atencion.html): abrir con un servidor HTTP apuntando a la raíz del repositorio.
- [Materiales y trazabilidad](docs/materiales.md)
- [Propuestas para el equipo del brandbook](docs/brandbook/SynerGEA_cuatro_propuestas_brandbook.pdf)

**No hay mapas de calor medidos.** No existe instrumentación de clics, desplazamiento o sesiones en el código. El mapa incluido es una evaluación editorial de atención prevista, no una predicción estadística ni evidencia de comportamiento.

## Publicación y límites

`dist/` puede servirse desde cualquier alojamiento estático con soporte HTTPS, MIME correctos y entrega de MP4. La publicación actual se realiza en Sites. No se incluye aquí su identificador ni sus credenciales: el código puede mantenerse en GitHub sin acoplarlo al acceso privado del alojamiento.

Las tipografías DM Sans y Manrope se solicitan a Google Fonts. Si ese servicio no responde, se usan las fuentes de reserva. Para una política sin solicitudes a terceros, alojar las fuentes localmente después de revisar sus licencias.

Las imágenes y videos proceden de referencias provistas para el proyecto. No prueban que las personas mostradas sean socios de SynerGEA. Confirmar licencia y procedencia de cada recurso antes de reutilizarlo en otras campañas. No se concede una licencia nueva sobre estos materiales en este repositorio.

## Próximos pasos

1. Confirmar enlace de la aplicación, contacto oficial y condiciones de incorporación.
2. Construir el vector definitivo del símbolo y especificar tipografía y versiones de reproducción.
3. Definir un destino real para solicitudes de afiliación si se requiere captación.
4. Aprobar un plan de analítica y privacidad antes de instrumentar la medición.
5. Consolidar el CSS acumulado en la exploración y separar contenido de componentes al ampliar el sitio.

## Colaboración

Se conserva el flujo del repositorio: ramas de trabajo → Pull Request a develop → revisión → Pull Request a main. La versión inicial se preserva en legacy/initial; el index.html de la raíz dirige a la web actual en dist. El servidor previo preview.py sigue disponible para servir el repositorio completo con soporte de rangos. No es un servidor de producción.

## Variante oficial aprobada

El infinito diagonal en capas, proporcionado por el cliente el 13 de octubre de 2026, reemplaza el símbolo anterior. Se aplica en el hero, navegación, tecnología, pie y favicon. La animación recorre del azul inferior al rosa superior. Las cuatro propuestas originales se conservan como historial, no como selección vigente. El manual actualizado se entrega en docs/manual/SynerGEA_Manual_tecnico_desarrollo_web.pdf.
