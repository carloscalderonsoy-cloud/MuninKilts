# Munin Kilts

Sitio completo de Munin Kilts (Guadalajara, MX) — kilts y faldas para caballero hechos a mano. Next.js (App Router) + TypeScript, sin frameworks de UI: el sistema de diseño vive en `app/globals.css` como variables CSS, siguiendo `design/master-prompt-munin-kilts.md`.

## Estructura

```
app/
  layout.tsx        Shell: fuentes, nav, footer, grano fotográfico
  page.tsx           Home — Hero + preview de La Colección
  coleccion/page.tsx Grid completo de las 5 piezas
  taller/page.tsx    Nosotros / el taller
  medidas/page.tsx   Guía para tomar la medida
  contacto/page.tsx  WhatsApp / Instagram / correo
  globals.css        Tokens de marca (color, tipografía, componentes)
components/
  Header.tsx          Nav con estado sticky al hacer scroll
  Footer.tsx
  Hero.tsx            Bloque hero + anotación firma (broche)
  DataBar.tsx          Franja de datos operativos
  ProductCard.tsx       Ficha de taller (foto real o placeholder + anotaciones en hover)
  RuneSeal.tsx          Sello rúnico SVG (logo / placeholder de foto)
data/
  products.ts        Las 5 piezas: SKU, precio, material, anotaciones
public/images/       Fotos reales de producto
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

- **Tipografía Norseland**: usando fallback `Cinzel` (Google Fonts). Reemplazar en `app/layout.tsx` + `globals.css` cuando el cliente confirme la licencia web y entregue el WOFF2.
- **Fotos de producto**: `MK-C01` (Cinturón Celta), `MK-P01` (Playera Odín) y `MK-A01` (Colgante Ingwaz) usan el placeholder de marca (`data/products.ts`) — faltan fotos reales.
- **Datos de contacto**: número de WhatsApp y correo en `app/contacto/page.tsx` son placeholders — reemplazar con los reales de Munin.
- **Precios y SKU**: los de `data/products.ts` son los del brief; confirmar con el cliente antes de publicar.
- **Sello rúnico**: `components/RuneSeal.tsx` es un SVG generado a partir de la referencia visual — sustituir por el logotipo vectorial real si Munin ya lo tiene.
