# Web responsiva · Plan Cerca (versión didáctica)

Actividad práctica de **HCI: Desarrollo web y móvil**: una pequeña página responsiva publicada con GitHub Pages.

🔗 **Demo:** https://jmromera.github.io/web-responsiva/

**Cambia el tamaño de la ventana** (o abre las herramientas de desarrollo en modo dispositivo): las etiquetas de colores muestran en directo qué concepto se aplica y su valor actual. El panel inferior indica qué media query está activa y dónde estás respecto a los puntos de corte. El botón *Ocultar etiquetas* muestra la página limpia.

## Conceptos aplicados

| # | Concepto | Dónde | Qué muestra la etiqueta |
|---|---|---|---|
| 1 | Diseño responsivo | `<meta name="viewport">` + *mobile first* | Panel: media query activa y ancho en px/rem |
| 2 | Rejillas fluidas | `.rejilla` → `repeat(auto-fit, minmax(16rem, 1fr))` | Nº de columnas y su ancho |
| 3 | Unidades relativas | `%`, `rem`, `em`, `fr`, `clamp()` + `vw` | Tamaño real del título y ancho del contenedor |
| 4 | Media queries | `min-width: 40rem` y `min-width: 64rem` | Cómo cambian cabecera y "Cómo funciona" |
| 5 | Contenido adaptable | `.extra` oculto en móvil | Si la descripción está oculta o visible |
| 6 | Imágenes flexibles | `max-width: 100%; height: auto` + `aspect-ratio` | Ancho real de cada imagen |

Los textos que dependen del ancho se cambian **solo con CSS** (`::after { content: … }` dentro de las mismas media queries). El JavaScript (`js/etiquetas.js`) solo mide valores reales (px, columnas) para mostrarlos; la web es responsiva sin él.

## Estructura

```
index.html
css/styles.css      → diseño + capa didáctica (al final)
js/etiquetas.js     → mediciones en directo de las etiquetas
img/                → imágenes SVG de ejemplo
```
