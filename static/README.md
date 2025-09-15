# Wayzor Static Export

This folder contains a static Tailwind (CDN) export of the two pages you requested from the original React project:

- `index.html` — Homepage
- `fleet.html` — Fleet listing page

Each page:
- Uses Tailwind via the official CDN (`<script src="https://cdn.tailwindcss.com" ...>`)
- Declares the same custom Tailwind theme (colors + Lato font) inline in a small `<script>` block
- Is fully self‑contained (no build step required)
- Embeds SVG icons inline so you can move/host without additional assets (aside from remote images)

## How to View
Simply open the files in any browser:

```
static/index.html
static/fleet.html
```
(You can double‑click them in your file explorer or drag into a browser window.)

## Tailwind Configuration (Inline)
Both pages define:
```js
 tailwind.config = {
   darkMode: ['class'],
   theme: {
     extend: {
       fontFamily: { lato: ['Lato','sans-serif'] },
       colors: {
         wayzor: { green:'#78BE20','green-dark':'#528116', purple:'#332634' },
         content: {
           'dark-strong':'#262E2F','dark-medium':'#363F41', bodytext:'#171C1D', label:'#6D7679', invert:'#FFF'
         },
         bg: {
           'light-soft':'#F8FAFA','light-medium':'#EEF2F4',
           'overlay-black-10':'rgba(0,0,0,0.10)', 'overlay-black-05':'rgba(0,0,0,0.05)', 'overlay-white-10':'rgba(255,255,255,0.10)'
         }
       }
     }
   }
 }
```

If you need to add utilities (e.g., more colors), duplicate the structure above and extend it.

## Notes / Differences vs React Source
- Interactivity (menus, checkboxes logic, booking actions) is static placeholder only — no JavaScript state management.
- The fleet cards are generated on the fly in `fleet.html` by a tiny inline `<script>` building the grid from a `fleetData` array. You can replace that with hardcoded HTML if you prefer totally script‑free markup (copy the rendered HTML from DevTools after load).
- Navigation links between the two pages are plain anchors (`index.html` ↔ `fleet.html`).

## Customization Tips
1. Change hero background image (Fleet page) — look for the `bg-[url('...')]` utility in the intro section.
2. Replace logos or icons — swap the `img` `src` URLs (they currently point to Builder.io temporary assets).
3. Add a new page — copy one of these files, update `<title>`, header active link styling, and content.
4. Remove dynamic generation — inspect the fleet grid after load, copy outerHTML, and paste back replacing the `<script>` block.

## Optional: Local HTTP Server
If you want to serve these pages over `http://localhost` instead of opening from the file system (sometimes needed for strict browser features):

PowerShell (Windows):
```
cd static
python -m http.server 8000
```
Then open http://localhost:8000/index.html

## License / Attribution
All inline SVG and markup derived from your original project structure. Remote placeholder images should be replaced before production use.

Let me know if you’d like a version without any JavaScript at all, or if you want the filters to actually filter the fleet list.
