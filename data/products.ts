export type Annotation = {
  title: string;
  sub: string;
  top: string;
  left: string;
};

export type Product = {
  sku: string;
  slug: string;
  name: string;
  material: string;
  price: string;
  agotado?: string;
  photo?: {
    src: string;
    alt: string;
    position: string;
  };
  annotations?: Annotation[];
};

export const products: Product[] = [
  {
    sku: "MK-K01",
    slug: "kilt-munin-negro",
    name: "Kilt Munin Negro",
    material: "algodón pesado, bolsillo cargo",
    price: "$2,400 MXN",
    photo: {
      src: "/images/kilt-negro.png",
      alt: "Kilt Munin Negro con rúnica dorada y bolsillo cargo, algodón pesado",
      position: "50% 82%",
    },
    annotations: [
      { title: "BOLSILLO CARGO", sub: "costura reforzada", top: "22%", left: "12%" },
      { title: "RÚNICA DORADA", sub: "serigrafía metálica", top: "66%", left: "12%" },
    ],
  },
  {
    sku: "MK-K02",
    slug: "kilt-tartan-indigo",
    name: "Kilt Tartán Índigo",
    material: "lana mezcla, tabla profunda",
    price: "$2,900 MXN",
    photo: {
      src: "/images/kilt-tartan.png",
      alt: "Kilt Tartán Índigo, lana mezcla con tabla profunda",
      position: "50% 96%",
    },
    annotations: [
      { title: "TABLA PROFUNDA", sub: "plisado a mano", top: "22%", left: "12%" },
      { title: "HERRAJE ANTIGUO", sub: "broche fundido", top: "66%", left: "12%" },
    ],
  },
  {
    sku: "MK-C01",
    slug: "cinturon-celta",
    name: "Cinturón Celta",
    material: "cuero vacuno, hebilla de latón",
    price: "$890 MXN",
  },
  {
    sku: "MK-P01",
    slug: "playera-odin-runico",
    name: "Playera Odín Rúnico",
    material: "algodón, serigrafía a mano",
    price: "$650 MXN",
  },
  {
    sku: "MK-A01",
    slug: "colgante-ingwaz",
    name: "Colgante Ingwaz",
    material: "latón fundido, cadena de acero",
    price: "$540 MXN",
    photo: {
      src: "/images/colgante-ingwaz.png",
      alt: "Colgante Ingwaz de latón fundido sobre anilla de acero, montado en cuero",
      position: "55% 45%",
    },
    annotations: [
      { title: "MEDALLÓN INGWAZ", sub: "latón fundido a mano", top: "22%", left: "12%" },
      { title: "MONTAJE DE CUERO", sub: "anilla reforzada", top: "66%", left: "12%" },
    ],
  },
];
