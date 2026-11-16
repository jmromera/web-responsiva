# Web responsiva · Plan Cerca

Pequeña página responsiva (actividad práctica de HCI: Desarrollo web y móvil), publicada con GitHub Pages.

## Conceptos aplicados

| Concepto | Dónde |
|---|---|
| Diseño responsivo | `<meta name="viewport">` + enfoque *mobile first* |
| Rejillas fluidas | `.rejilla` con `repeat(auto-fit, minmax(16rem, 1fr))` |
| Unidades relativas | `%` en el contenedor, `rem`/`em` en espacios y textos, `fr` en la rejilla, `clamp()` en títulos |
| Media queries | `min-width: 40rem` (tablet) y `min-width: 64rem` (escritorio) |
| Contenido adaptable | La descripción de las tarjetas y el texto del pie solo aparecen en pantallas mayores |
| Imágenes flexibles | `img { max-width: 100%; height: auto; }` + `aspect-ratio` y `object-fit` |

## Publicar en GitHub Pages

1. Crea un repositorio público en GitHub (p. ej. `web-responsiva`).
2. Sube el contenido de esta carpeta (que `index.html` quede en la raíz):
   ```bash
   git init
   git add .
   git commit -m "Web responsiva"
   git branch -M main
   git remote add origin https://github.com/TU_USUARIO/web-responsiva.git
   git push -u origin main
   ```
3. En el repositorio: **Settings → Pages → Build and deployment → Source: Deploy from a branch**, rama `main`, carpeta `/ (root)` → **Save**.
4. Al cabo de un minuto estará en `https://TU_USUARIO.github.io/web-responsiva/`.
