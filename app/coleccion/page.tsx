import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "La Colección — Munin Kilts",
  description:
    "Cinco piezas. Todas se cortan y se cosen aquí, a mano, sobre tu medida.",
};

export default function ColeccionPage() {
  return (
    <section className="merch-section tartan-band" style={{ paddingTop: "calc(var(--nav-h) + 64px)" }}>
      <div className="section-head">
        <div className="kicker kicker--center">
          <span className="kicker__text">El taller</span>
        </div>
        <h2 className="section-head__title">La colección</h2>
        <p className="section-head__dek">
          Cinco piezas. Todas se cortan y se cosen aquí, a mano, sobre tu
          medida.
        </p>
      </div>

      <div className="merch-grid">
        {products.map((p, i) => (
          <ProductCard key={p.sku} product={p} delayMs={i * 60} />
        ))}
      </div>
    </section>
  );
}
