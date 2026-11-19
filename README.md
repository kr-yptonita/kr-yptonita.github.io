# kr-yptonita.github.io

Portafolio editorial asimétrico y bilingüe (ES / EN) de **Karla Romina Juárez Torres (`@kr-yptonita`)**, publicado como sitio estático sin paso de compilación para GitHub Pages.

## Estructura

- `index.html` — Estructura semántica principal (Presentación, Trayectoria e Investigación, Selección Editorial, Archivo Técnico y Colofón).
- `css/tokens.css` — Variables tipográficas y paleta editorial **Bi & Trans** en modos **Papel e Imprenta** (claro) y **Tinta Nocturna** (oscuro).
- `css/editorial.css` — Maquetación asimétrica sobre CSS Grid de 12 columnas y drawer de fichas técnicas.
- `js/main.js` — Renderizado dinámico bilingüe, filtros por categoría/lenguaje/búsqueda, alternancia de tema y modal accesible.
- `js/svg-plates.js` — Láminas vectoriales adaptativas para proyectos sin imagen rasterizada.
- `data/profile.json` — Identidad, contactos, lenguajes principales (Python, Java, Rust) y experiencia e investigación.
- `data/projects.json` — Catálogo curado de proyectos públicos y fichas técnicas privadas/metodológicas.
- `assets/img/` — Figuras científicas y diagramas optimizados en WebP.

## Previsualización local

```bash
python3 -m http.server 8000
```

Abre `http://localhost:8000` en el navegador.
