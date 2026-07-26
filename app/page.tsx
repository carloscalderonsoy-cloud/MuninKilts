import Link from "next/link";
import Hero from "@/components/Hero";
import DataBar from "@/components/DataBar";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function HomePage() {
  const preview = products.slice(0, 3);

  return (
    <>
      <Hero />
      <DataBar />

      <section id="coleccion" className="merch-section tartan-band">
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
          {preview.map((p, i) => (
            <ProductCard key={p.sku} product={p} delayMs={i * 60} />
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 64 }}>
          <Link href="/coleccion" className="btn">
            Ver toda la colección
          </Link>
        </div>
      </section>
    </>
  );
}
