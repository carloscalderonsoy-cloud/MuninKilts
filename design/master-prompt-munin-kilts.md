# MASTER PROMPT — MUNIN KILTS
### Landing page: Hero + Sección Merch
*Documento de dirección creativa y prompt de ejecución para Claude Design*
Preparado por Carlos Calderón

---

## 0. Cómo usar este documento

Este documento cumple dos funciones:

1. **Prompt de ejecución.** Se pega completo en Claude Design para generar el diseño.
2. **Guía de marca para el cliente.** Munin Kilts puede leerlo y entender *por qué* se toma cada decisión, y aprobar o ajustar antes de que se escriba una línea de código.

Al final hay una versión comprimida para iteraciones rápidas.

---

## 1. Briefing

**Cliente:** Munin Kilts (@muninkilts / @enfaldado) — Guadalajara, México.
**Producto:** Kilts y faldas para caballero, confeccionados a mano. Playeras, cinturones, escarcelas y herrajes de latón como línea complementaria.
**Lema de marca:** *"Viste con dignidad, vive con principios."*
**Audiencia:** Hombres de 28 a 50 años. Cultura nórdica, metal, motociclismo, barbería, tatuaje, artesanía. Gente que ya decidió vestir distinto y busca una prenda que aguante el uso diario, no un disfraz.
**Trabajo único de la página:** convencer de que el kilt es una prenda seria, hecha a mano, bien resuelta — y llevar a la colección.

**Alcance de esta entrega:** exclusivamente dos bloques.
- **Bloque A — Hero**
- **Bloque B — Merch / La colección**

No se diseña navegación completa, footer, carrito, ni páginas internas. Sí se incluye una barra superior mínima porque el hero la necesita para respirar.

---

## 2. Tesis de diseño

> **La prenda se presenta como un artefacto documentado, no como un producto de catálogo.**

La referencia visual central no es un e-commerce de ropa: es una **hoja de concepto de vestuario** — la lámina donde un diseñador anota materiales, herrajes y construcción con líneas finas que apuntan al detalle. Ese lenguaje de *anotación* es lo que separa a Munin de cualquier tienda nórdica genérica, y es coherente con la verdad del negocio: cada pieza se corta y se cose a mano en un taller de Guadalajara.

**Elemento firma de la página:** las **líneas de anotación en oro** (hairline de 1px + punto de origen + etiqueta en versalitas) que salen de un detalle real de la foto y lo nombran. Aparecen una sola vez en el hero y se activan al hover en las fichas de producto. En ningún otro lugar. Toda la audacia visual se gasta ahí; lo demás se mantiene en silencio.

---

## 3. Sistema de color

Derivado de las fotografías reales de producto (negro carbón, latón, cuero curtido, tartán índigo) y del contraste oro-sobre-negro de la referencia de cervecería.

| Token | HEX | Uso |
|---|---|---|
| `--negro-hugin` | `#0C0B0A` | Fondo base de toda la página |
| `--negro-munin` | `#16130F` | Superficies elevadas: fichas de producto, barra superior |
| `--oro-munin` | `#C9A227` | Acento primario: filetes, rúnica, etiquetas de anotación, borde de CTA |
| `--laton-claro` | `#E8CE8B` | Estado hover del oro, brillo en hairlines |
| `--hueso` | `#EFE7D8` | Todo el texto de lectura y titulares |
| `--indigo-tartan` | `#2E3B45` | Único color frío. Fondo de la banda de la colección y badges |
| `--cuero` | `#6B4630` | Uso mínimo: subrayados, precio agotado, iconografía secundaria |

**Reglas de color**
- Negro dominante en al menos el 70% del área visible.
- El oro es un **material**, no un color de relleno: solo filetes, tipografía pequeña y bordes. **Nunca** botones sólidos dorados, nunca degradados dorados, nunca oro como fondo de bloque.
- El texto de lectura siempre va en hueso, nunca en oro (contraste insuficiente en cuerpo).
- Prohibido: neón, acid green, terracota, morados, glassmorphism, degradados de dos tonos vibrantes.

---

## 4. Tipografía

Tres roles, tres funciones distintas. Nada de variaciones de peso de una sola familia.

**Display — Norseland** *(el cliente licencia la fuente; se auto-hospeda como WOFF2)*
Serif nórdica moderna de alto contraste, con terminaciones angulosas. Solo para el H1 y el título de sección. Siempre en mayúsculas, `letter-spacing: -0.01em`, tamaño grande y con aire.
*Fallback en el prototipo:* `'Cinzel', 'Eczar', serif`.

**Utilidad — Jost** *(Google Fonts)*
Geométrica, la misma familia de sensación que el lettering de "VISTE CON DIGNIDAD" en sus piezas actuales. Solo mayúsculas, peso 400–500, `letter-spacing: 0.18em`, tamaño 11–12px. Para: kickers, etiquetas de anotación, nombres de categoría, botones, SKU.

**Cuerpo — Karla** *(Google Fonts)*
Grotesca humanista, peso 400, `line-height: 1.6`, medida máxima de 62 caracteres. Para párrafos y descripciones de producto.

**Runas:** el sustituir letras por runas (la Đ de "DIGNIDAD", la V invertida) se permite **solo en el H1 del hero** y se resuelve con un `<span>` decorativo más `aria-label` con el texto correcto. Jamás en párrafos, botones ni navegación.

---

## 5. Materia y textura

- **Grano fotográfico sutil** sobre el fondo negro (overlay de ruido a 3–4% de opacidad). Da la sensación de papel y película, no de pantalla.
- **Radio de borde: 0px** en todo. Metal, cuero y tela pesada no tienen esquinas redondeadas. Única excepción: elementos circulares por naturaleza (el sello rúnico).
- **Filetes de 1px en oro al 30% de opacidad** como único divisor entre bloques. Nada de sombras suaves difusas.
- **Tartán:** patrón generado en CSS (líneas cruzadas en `--indigo-tartan`), a 8% de opacidad, en un solo lugar: el fondo de la banda que separa el hero del merch. Nunca detrás de texto.
- **Contraste fotográfico real:** la legibilidad se resuelve con zonas de sombra natural de la propia foto. **No agregar viñetas ni degradados sintéticos** detrás del texto; producen bordes duros y líneas de corte visibles.

---

## 6. BLOQUE A — HERO

### Estructura

```
┌──────────────────────────────────────────────────────┐
│  [sello rúnico]   MUNIN KILTS        COLECCIÓN  MEDIDAS  CONTACTO │
├──────────────────────────────────────────────────────┤
│                                                      │
│  HECHO A MANO EN GDL          ╱───────────────────╲   │
│                              ╱│  FOTO A SANGRE   │╲  │
│  VISTE CON                   │  (kilt negro,    │  │
│  ĐIGNIDAD                    │   detalle oro)   │  │
│                              │        •──────────┼─ Broche Ingwaz
│  Kilts y faldas para         │                  │  │   latón fundido
│  caballero. Tela pesada,     │                  │  │
│  herrajes de latón.          ╲───────────────────╱   │
│                                                      │
│  [ VER LA COLECCIÓN ]  Cómo se toma la medida →      │
│                                                      │
├──────────────────────────────────────────────────────┤
│  A MEDIDA  ·  ENVÍOS A TODO MÉXICO  ·  2 SEMANAS DE TALLER │
└──────────────────────────────────────────────────────┘
```

### Especificaciones

- **Altura:** `min-height: 92vh` en desktop. En móvil, la foto pasa a fondo a sangre y el texto se monta encima, alineado abajo.
- **Barra superior:** transparente sobre el hero, altura 72px. Sello rúnico en oro a la izquierda (28px), wordmark en Jost tracking amplio, tres enlaces a la derecha. Se vuelve `sticky` con fondo `--negro-munin` al hacer scroll pasando los 100vh.
- **Kicker:** `HECHO A MANO EN GUADALAJARA` en Jost 11px, oro, con un filete de 24px a la izquierda.
- **H1:** `VISTE CON DIGNIDAD` en Norseland, `clamp(3.2rem, 8vw, 7rem)`, hueso, dos líneas forzadas. La D de "DIGNIDAD" se sustituye por la runa; el resto queda intacto.
- **Bajada:** una sola frase en Karla, hueso al 80%, máximo dos líneas.
- **CTA primaria:** `VER LA COLECCIÓN` — fondo transparente, borde 1px oro, texto hueso, padding 18px 36px, altura táctil mínima 48px. En hover el borde pasa a `--laton-claro` y el fondo a oro al 8%. Nunca se rellena de oro sólido.
- **CTA secundaria:** `Cómo se toma la medida →` como enlace de texto en hueso con subrayado de 1px en cuero.
- **Anotación firme (elemento firma):** un punto de 4px en oro colocado sobre un detalle real de la foto (el broche, el herraje o el bordado), del que sale una línea hairline horizontal de ~120px hasta una etiqueta de dos líneas: `BROCHE INGWAZ` / `latón fundido a mano`. La línea se dibuja al cargar la página en 600ms. **Solo una.** Si se ponen dos, deja de ser un gesto y se vuelve decoración.
- **Barra de datos inferior:** franja de 56px con filete oro arriba, tres datos separados por punto medio, en Jost 11px hueso al 70%. Son hechos operativos reales, no beneficios de marketing.

### Copy exacto del hero

- Kicker: `HECHO A MANO EN GUADALAJARA`
- H1: `VISTE CON DIGNIDAD`
- Bajada: `Kilts y faldas para caballero. Tela pesada, herrajes de latón y un patrón que aguanta el uso diario.`
- CTA 1: `VER LA COLECCIÓN`
- CTA 2: `Cómo se toma la medida`
- Anotación: `BROCHE INGWAZ` / `latón fundido a mano`
- Barra de datos: `A MEDIDA` · `ENVÍOS A TODO MÉXICO` · `2 SEMANAS DE TALLER`

---

## 7. BLOQUE B — MERCH / LA COLECCIÓN

### Concepto

Cada producto se presenta como una **ficha de taller**, no como una tarjeta de tienda. La ficha lleva su código real de referencia, su material declarado y, al hover, las anotaciones que nombran los detalles de construcción. El precio no se esconde ni se disfraza.

### Estructura

```
────────── banda tartán 8% ──────────
        LA COLECCIÓN
        Cinco piezas. Todas se cortan y se cosen aquí.

┌─────────────┐ ┌─────────────┐ ┌─────────────┐
│  MK-K01     │ │  MK-K02     │ │  MK-C01     │  ← SKU en oro, arriba izq.
│             │ │             │ │             │
│   [FOTO]    │ │   [FOTO]    │ │   [FOTO]    │  ← 4:5, b/n al 20% desat.
│             │ │             │ │             │     a color en hover
└─────────────┘ └─────────────┘ └─────────────┘  ← filete oro 1px
│ Kilt Munin  │ │ Kilt Tartán │ │ Cinturón    │  ← Norseland 22px
│ NEGRO       │ │ ÍNDIGO      │ │ CELTA       │
│ algodón     │ │ lana mezcla │ │ cuero vac.  │  ← Karla 13px hueso 70%
│ $2,400 MXN  │ │ $2,900 MXN  │ │ $890 MXN    │  ← Jost 14px oro
└─────────────┘ └─────────────┘ └─────────────┘
        [ VER TODA LA COLECCIÓN ]
```

### Especificaciones

- **Grid:** 3 columnas en desktop (≥1024px), 2 en tablet, 1 en móvil con scroll vertical normal — no carrusel horizontal, el carrusel esconde producto.
- **Ficha:** fondo `--negro-munin`, borde 1px en oro al 15%. En hover el borde sube a oro al 60%, la foto pasa a color pleno y aparecen **dos líneas de anotación** sobre la imagen nombrando detalles reales (`BOLSILLO CARGO` / `costura reforzada`, `HERRAJE DE LATÓN` / `hebilla celta`). Transición de 320ms `ease-out`.
- **SKU:** el código de referencia va arriba a la izquierda, en Jost 10px oro. Es información real de inventario, no un contador decorativo — por eso no se usa 01/02/03.
- **Foto:** relación 4:5, `object-fit: cover`, desaturada al 20% en reposo. Todas las fotos deben tener el mismo tratamiento de luz para que la retícula lea como una sola serie.
- **Sin badges de "NUEVO" ni contadores de descuento.** Rompen el tono. Si una pieza está agotada, la etiqueta va en `--cuero`: `AGOTADO · próxima corrida en marzo`.
- **Cierre de sección:** una sola CTA de ancho contenido, mismo tratamiento que la del hero.

### Copy exacto de la sección

- Eyebrow: `EL TALLER`
- Título: `LA COLECCIÓN`
- Bajada: `Cinco piezas. Todas se cortan y se cosen aquí, a mano, sobre tu medida.`
- Productos (placeholder editable por el cliente):
  1. `MK-K01` — Kilt Munin Negro — algodón pesado, bolsillo cargo — `$2,400 MXN`
  2. `MK-K02` — Kilt Tartán Índigo — lana mezcla, tabla profunda — `$2,900 MXN`
  3. `MK-C01` — Cinturón Celta — cuero vacuno, hebilla de latón — `$890 MXN`
  4. `MK-P01` — Playera Odín Rúnico — algodón, serigrafía a mano — `$650 MXN`
  5. `MK-A01` — Colgante Ingwaz — latón fundido, cadena de acero — `$540 MXN`
- CTA: `VER TODA LA COLECCIÓN`

---

## 8. Fotografía y assets

Usar exclusivamente material real de la marca. Nada de stock de vikingos.

| Posición | Asset |
|---|---|
| Hero | Detalle a media distancia del kilt negro con herraje de latón sobre muro de ladrillo — el punto de anotación cae sobre el broche |
| Ficha MK-K01 | Kilt negro completo, plano medio |
| Ficha MK-K02 | Kilt tartán índigo (foto del hoodie sentado, recorte inferior) |
| Ficha MK-C01 | Macro del cinturón y hebilla celta |
| Ficha MK-P01 | Playera Odín, plano frontal |
| Ficha MK-A01 | Macro del colgante rúnico sobre cuero |

Si falta una foto, usar un bloque sólido en `--negro-munin` con el sello rúnico en oro al 12% al centro. **Nunca** un placeholder gris genérico ni una imagen generada por IA mezclada con foto real.

---

## 9. Movimiento

Un solo momento orquestado al cargar, y micro-interacciones discretas después.

- **Carga:** el H1 aparece con fade + 12px de desplazamiento vertical (500ms). La línea de anotación se dibuja después (600ms de retraso, `stroke-dashoffset`). Nada más se anima al cargar.
- **Scroll:** las fichas de producto entran con fade escalonado de 60ms entre ellas. Sin parallax, sin zoom, sin contadores.
- **Hover:** solo cambio de borde, saturación de foto y aparición de anotaciones.
- `prefers-reduced-motion: reduce` — todo se muestra en estado final, sin transiciones. Las anotaciones quedan visibles de forma permanente.

---

## 10. Piso de calidad (no negociable)

- Mobile-first, primer breakpoint a 390px. Probar en 390 / 768 / 1440.
- Objetivos táctiles de 44px mínimo. Inputs a 16px mínimo.
- `env(safe-area-inset-*)` respetado en la barra superior e inferior.
- Foco de teclado visible: outline de 2px en `--oro-munin` con 2px de offset.
- Contraste: todo texto de lectura en hueso sobre negro (≥ 12:1). El oro solo en textos de 11px+ en tracking amplio o elementos no informativos.
- `alt` descriptivo en cada foto de producto, con material incluido.
- Un solo archivo HTML autocontenido, CSS en `<style>`, JS envuelto en IIFE. Sin frameworks ni dependencias externas para contenido visible. Fuentes por `<link>` a Google Fonts.
- Entregar como archivo descargable, no como bloque de código.

---

## 11. Lista de prohibiciones

Para evitar que el resultado caiga en el default de "sitio oscuro con acento brillante":

- ❌ Fondo crema con serif de alto contraste y acento terracota
- ❌ Degradados dorados, oro sólido como fondo de botón, efectos "metálicos" con `background-clip`
- ❌ Blackletter / gótica de fantasía tipo videojuego
- ❌ Border-radius, sombras difusas grandes, glassmorphism
- ❌ Marcadores decorativos 01/02/03 (los SKU cargan esa función con información real)
- ❌ Cascos con cuernos, hachas, barcos drakkar, mapas de Escandinavia
- ❌ Copy épico: "desata al guerrero que llevas dentro", "forjado en el fuego de los dioses"
- ❌ Iconos genéricos de librería en la barra de datos
- ❌ Texto encima de foto sin contraste natural resuelto en la propia imagen

---

## 12. Voz de marca

Directa, de artesano. Habla de tela, costura, medida y tiempo de taller. La dignidad se demuestra en la calidad del dato, no en el adjetivo.

- **Sí:** "Tela pesada, herrajes de latón y un patrón que aguanta el uso diario."
- **No:** "Una prenda legendaria para el guerrero moderno."

Verbos activos, misma palabra en toda la ruta: si el botón dice `VER LA COLECCIÓN`, la sección se llama `LA COLECCIÓN`.

---

## 13. Decisiones abiertas para el cliente

Estas quedan pendientes de confirmación antes de la versión final:

1. **Licencia tipográfica.** ¿Munin ya tiene Norseland comprada para uso web? Si no, se define la alternativa antes de producción.
2. **Precios y SKU.** Los de este documento son placeholders con formato correcto. Se necesitan los reales.
3. **Plataforma final.** ¿El sitio vive en Shopify, Webflow o HTML propio? Cambia cómo se estructura el bloque de merch, no cómo se ve.
4. **Bilingüe.** ¿Se contempla versión en inglés? Su feed ya mezcla ambos idiomas.
5. **Sello rúnico.** Se necesita el logotipo en SVG vectorial para que el filete de oro lea limpio en pantallas de alta densidad.

---

## 14. Versión comprimida (para iterar rápido)

> Diseña el hero y una sección de merch para Munin Kilts, marca mexicana de kilts y faldas para caballero hechos a mano en Guadalajara. Lema: "Viste con dignidad, vive con principios". Audiencia: hombres 28–50 de cultura nórdica, metal, tatuaje y artesanía.
>
> Concepto: la prenda como artefacto documentado — lenguaje visual de hoja de concepto de vestuario, con líneas finas de anotación en oro que salen de un detalle real de la foto y lo nombran. Ese es el elemento firma; aparece una vez en el hero y al hover en las fichas de producto. Todo lo demás, silencioso.
>
> Paleta: negro `#0C0B0A` base, superficie `#16130F`, oro `#C9A227` solo como material (filetes, tipografía chica, bordes — nunca relleno ni degradado), latón `#E8CE8B` en hover, hueso `#EFE7D8` para todo el texto, índigo tartán `#2E3B45` como único frío, cuero `#6B4630` mínimo.
>
> Tipografía: display Norseland (fallback Cinzel) solo en H1 y título de sección, mayúsculas; Jost mayúsculas con tracking 0.18em a 11px para kickers, etiquetas, SKU y botones; Karla 400 para cuerpo. Runa sustituyendo una letra solo en el H1, con aria-label correcto.
>
> Hero: foto real a sangre del kilt negro con herraje de latón, H1 "VISTE CON DIGNIDAD", bajada de una frase sobre tela y herrajes, CTA con borde de oro (nunca relleno), y una sola línea de anotación que apunta al broche. Barra inferior con datos operativos: a medida · envíos a todo México · 2 semanas de taller.
>
> Merch: título "LA COLECCIÓN", grid de 3 columnas con fichas de taller sobre `#16130F`, borde de oro al 15%, SKU real arriba en oro, foto 4:5 desaturada al 20% que se satura en hover mientras aparecen dos anotaciones de construcción, nombre en display, material en cuerpo, precio en Jost oro.
>
> Border-radius 0 en todo, grano fotográfico al 3%, sin degradados, sin glassmorphism, sin cuernos ni hachas, sin copy épico. Un archivo HTML autocontenido, mobile-first a 390px, targets de 44px, foco visible en oro, `prefers-reduced-motion` respetado.

---

*Carlos Calderón*
