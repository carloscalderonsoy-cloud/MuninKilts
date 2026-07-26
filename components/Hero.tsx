import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__copy">
        <div className="kicker fade-up">
          <span className="kicker__rule" />
          <span className="kicker__text">Hecho a mano en Guadalajara</span>
        </div>

        <h1 className="hero__h1 fade-up" style={{ animationDelay: "80ms" }}>
          <span>Viste con</span>
          <span aria-label="Dignidad">
            <span aria-hidden="true" className="hero__rune">
              Đ
            </span>
            IGNIDAD
          </span>
        </h1>

        <p className="hero__dek fade-up" style={{ animationDelay: "160ms" }}>
          Kilts y faldas para caballero. Tela pesada, herrajes de latón y un
          patrón que aguanta el uso diario.
        </p>

        <div className="hero__ctas fade-up" style={{ animationDelay: "220ms" }}>
          <Link href="/coleccion" className="btn">
            Ver la colección
          </Link>
          <Link href="/medidas" className="link-underline">
            Cómo se toma la medida →
          </Link>
        </div>
      </div>

      <div className="hero__frame">
        <div className="hero__photo-wrap">
          <img
            src="/images/hero-broche.png"
            alt="Detalle del kilt negro Munin: broche de latón fundido y herraje sobre cuero, contra muro de ladrillo"
          />

          <svg
            viewBox="0 0 100 125"
            className="annotation"
            aria-hidden="true"
          >
            <circle className="annotation-dot" cx="45" cy="58" r="1.6" />
            <line
              className="annotation-line is-drawn"
              x1="45"
              y1="58"
              x2="75"
              y2="58"
            />
          </svg>
          <div className="annotation-label is-visible" style={{ left: "76%", top: "44.5%" }}>
            <div className="annotation-label__title">Broche Ingwaz</div>
            <div className="annotation-label__sub">latón fundido a mano</div>
          </div>
        </div>
      </div>
    </section>
  );
}
