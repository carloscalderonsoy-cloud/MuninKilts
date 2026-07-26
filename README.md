# Munin Kilts

Sitio completo de Munin Kilts (Guadalajara, MX) — kilts y faldas para caballero hechos a mano. Next.js (App Router) + TypeScript, sin frameworks de UI: el sistema de diseño vive en `app/globals.css` como variables CSS, siguiendo `design/master-prompt-munin-kilts.md`.

## Estructura

```
app/
  layout.tsx        Shell: fuentes, providers (settings + audio), nav, footer, grano
  page.tsx           Home — Hero + preview de La Colección
  coleccion/page.tsx Grid completo de las 5 piezas
  taller/page.tsx    Nosotros / el taller
  medidas/page.tsx   Guía para tomar la medida
  contacto/page.tsx  WhatsApp / Instagram / correo
  globals.css        Tokens de marca (color, tipografía, componentes)
components/
  Header.tsx               Nav con estado sticky al hacer scroll
  Footer.tsx
  Hero.tsx                 Hero con video de fondo, anotación firma, toggle de música
  SiteSettingsProvider.tsx  Estado de las propuestas de estilo (tema/tipografía/layout), localStorage
  AudioProvider.tsx         Estado global de la música de fondo (persiste entre páginas)
  SettingsPanel.tsx         Panel de revisión de diseño (botón engrane en el hero)
  Reveal.tsx / useReveal    Animación de entrada al hacer scroll (2.5s, respeta reduced-motion)
  DataBar.tsx               Franja de datos operativos
  ProductCard.tsx           Ficha de taller (foto real o placeholder + anotaciones en hover)
  RuneSeal.tsx              Sello rúnico SVG (logo / placeholder de foto)
data/
  products.ts        Las 5 piezas: SKU, precio, material, anotaciones
public/
  images/            Fotos reales de producto
  video/             Video de fondo del hero
  audio/             Pista de música de fondo (opt-in vía botón)
design/              Handoff original (.dc.html, support.js, fotos fuente, master prompt)
```

## Desarrollo local

```bash
npm install
npm run dev
```

Abre http://localhost:3000

## Deploy en Vercel

El proyecto es un Next.js estándar — cero configuración adicional necesaria:

1. Sube el repo a GitHub.
2. En Vercel: **New Project → Import** el repo.
3. Framework Preset: **Next.js** (autodetectado). Build command y output se infieren solos.
4. Deploy.

## Pendientes antes de producción

Ver `design/master-prompt-munin-kilts.md`, sección 13 ("Decisiones abiertas"):

- **Tipografía Norseland**: usando fallback `Cinzel`/`Eczar` (Google Fonts). Reemplazar en `app/layout.tsx` + `globals.css` cuando el cliente confirme la licencia web y entregue el WOFF2.
- **Foto de producto**: solo `MK-C01` (Cinturón Celta) y `MK-P01` (Playera Odín) siguen en placeholder de marca (`data/products.ts`) — faltan esas dos fotos reales.
- **Video del hero**: `public/video/hero-kilts.mp4` reemplaza la foto del broche como fondo del hero. La anotación "Broche Ingwaz" se dejó en la misma posición aproximada — confirmar en el navegador que sigue señalando un detalle real del video y reubicarla si no.
- **Audio de fondo**: `public/audio/fondo.wav` pesa ~8.5 MB (WAV sin comprimir). Recomendado convertir a MP3/OGG (~192kbps) antes de producción para no castigar datos móviles — no se hizo aquí por no tener `ffmpeg` disponible en este entorno.
- **Datos de contacto**: número de WhatsApp y correo en `app/contacto/page.tsx` son placeholders — reemplazar con los reales de Munin.
- **Precios y SKU**: los de `data/products.ts` son los del brief; confirmar con el cliente antes de publicar.
- **Sello rúnico**: `components/RuneSeal.tsx` es un SVG generado a partir de la referencia visual — sustituir por el logotipo vectorial real si Munin ya lo tiene.
