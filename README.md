# travelnow-simple-chapu

Sitio estático básico de Travel Now. Solo se publica la carpeta `docs/`.

## Publicación (GitHub Pages)

- **Settings → Pages → Source: Deploy from a branch → Branch `main` / `/docs`**.
- Dominio: `travel-now.com.mx` (archivo `docs/CNAME`).

## Estructura

- `docs/index.html` y `docs/pages/`: todas las páginas.
- `docs/assets/`: CSS, JS (solo menú), imágenes e iconos.
- `docs/CNAME`, `docs/robots.txt`, `docs/sitemap.xml`, `docs/site.webmanifest`, favicons: archivos de publicación.
- `docs/.nojekyll`: evita que Jekyll procese los archivos.
- `README.md`, `.gitignore`: no se publican.

## Notas

- No subir secretos, llaves ni archivos de prueba.
