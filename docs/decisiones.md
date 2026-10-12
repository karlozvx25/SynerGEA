# Registro de decisiones

Fecha de consolidación: 12 de octubre de 2026. Distingue lo implementado, su justificación y el trabajo que permanece abierto.

## Tecnología

| Decisión | Estado y razón | Consecuencia |
|---|---|---|
| Sitio estático sin framework | Implementado. La experiencia no requiere backend ni estado compartido. | Despliegue simple; sistemas de socios y pagos requieren otro alcance. |
| Interacciones en JavaScript nativo | Implementado: menú, pilares, necesidades, dialog y descarga. | Sin dependencias de ejecución; probar al cambiar estructura DOM. |
| Raster del logo más máscara SVG | Implementado para conservar el concepto 04. | No sustituye el vector definitivo; el archivo raster limita ampliación. |
| Revelado azul a rosa | Implementado tras corregir el barrido vertical inicial. | Una trayectoria curva vincula inicio, cruce y expansión; respetar movimiento reducido. |
| Videos optimizados | Implementado con H.264, carga por visibilidad y sin audio en las versiones web. | El MP4 evita descargas simultáneas al inicio; autoplay puede depender del navegador. |
| Ciudad vertical completa | Implementado: 14.4 s, 9:16, izquierda, sin recorte del encuadre. | El texto vive a la derecha en escritorio y debajo en móvil. |
| Presentación local | Implementado con FormData, textContent y Blob. | El formulario no genera solicitudes de afiliación ni contactos para ventas. |
| Aplicación SynerGEA | Mención implementada, integración pendiente. | No se simulan acceso, pantallas ni funciones sin confirmar. |
| Analítica | No instalada. | No hay evidencia para reportar clics, conversiones o mapas de calor reales. |
| Fuentes externas | Google Fonts en CSS. | Dependencia visual externa y solicitud de red a tercero; reserva sans serif. |

## Marketing y dirección de arte

| Decisión | Fundamento | Aplicación |
|---|---|---|
| Lema Crecer Conectando | El crecimiento empresarial surge de relaciones sostenidas. | Hero, narrativa y cierre. |
| Personalidad cercana y profesional | La confianza debe acompañar la innovación. | Textos de escucha, apoyo, aportación y colaboración. |
| Símbolo 04 | Selección del usuario para la web entre cuatro conceptos. | S en capas y doble bucle; gradiente y centro de convergencia. |
| Color reducido | Fuente rectora Identidad de Marca y lámina cromática. | Cian #00D2FF, cobalto #0084FF, violeta #9B27B0, magenta #FF1B6B; fondo #06080C. |
| Tres pilares | Arquitectura estratégica: Conecto, Crezco, Pertenezco. | Pestañas que explican relaciones, aprendizaje y pertenencia. |
| Formas de la presentación | Revisión del usuario: los diagramas iniciales eran demasiado simples. | Anillo con puente/red; ascensión de cristal; círculo magenta. Solo se presenta la zona ilustrada mediante CSS. |
| Personas y tecnología | Revisión del usuario: la primera web necesitaba experiencia humana. | Video de encuentro, mosaico de colaboración y sección de interconectividad. |
| Tecnología al servicio del vínculo | La aplicación extiende la comunidad después del encuentro. | “El encuentro termina. La conexión continúa.” |
| Participación antes que promesa | No hay datos que garanticen ventas o resultados individuales. | Acción útil: preparar una presentación personal. |
| Últimas secciones con imágenes | Evitar un cierre compuesto únicamente de texto. | Luz azul, video urbano, bienvenida y fondo visual de cierre. |

## Mensajes y pruebas pendientes

El sitio no presenta la cifra de negocios generados como garantía, no usa testimonios inventados y no asigna nombres de socios al material de referencia. La paleta y su asociación con confianza, convergencia y expansión son propuestas narrativas, no efectos psicológicos comprobados.

La próxima iteración debe confirmar: enlace de aplicación, contacto oficial, beneficios vigentes, calendario y condiciones de incorporación. Si se necesita captación, deberá existir un destino verificable, aviso de privacidad y operación de seguimiento. El CTA actual da una presentación descargable, no afiliación.

## Deuda de mantenimiento

El CSS conserva reglas añadidas durante la exploración. Funciona como prototipo publicado, pero debe consolidarse antes de ampliar componentes. Conviene convertir imágenes raster del deck en recursos específicos, revisar licencias, medir tamaño de recursos y probar teclado, contraste, zoom y lectores de pantalla. Las revisiones visuales previas no equivalen a una auditoría completa de accesibilidad.
