# travelnow-simple-chapu

Sitio estático básico de Travel Now. Solo se publica la carpeta `site/`. Lo demás del repo (este README, `.gitignore`) no se sirve.

## Despliegue en Cloudflare Pages

1. Cloudflare → **Workers & Pages → Create → Pages → Connect to Git**.
2. Repo: `systems-idappsh/travelnow-simple-chapu`, rama: `main`.
3. Configuración de build:
   - Framework preset: None
   - Build command: (vacío)
   - Build output directory: `site`
4. **Save and Deploy**. Cloudflare asigna una URL `*.pages.dev` para revisar el sitio.
5. En el proyecto, **Custom domains → Set up a custom domain** → `travel-now.com.mx` (y `www` si aplica).
6. Antes de agregar el dominio, elimina en DNS cualquier registro que apunte a `github.io` para ese host, para evitar conflictos.

## Actualizar el sitio

Cada `push` a `main` redeploya automáticamente. Edita los archivos dentro de `site/`.

## Notas

- `site/CNAME` solo aplica a GitHub Pages; con Cloudflare Pages no es necesario, pero no estorba.
- No subir secretos, llaves ni archivos de prueba al repo.
