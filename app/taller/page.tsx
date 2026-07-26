import type { Metadata } from "next";
import RuneSeal from "@/components/RuneSeal";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "El Taller — Munin Kilts",
  description:
    "Munin Kilts: taller de confección en Guadalajara. Kilts y faldas para caballero, cortados y cosidos a mano.",
};

export default function TallerPage() {
  return (
    <div className="page">
      <Reveal as="div">
        <div className="kicker">
          <span className="kicker__rule" />
          <span className="kicker__text">El taller</span>
        </div>
        <h1 className="page__title">Viste con dignidad, vive con principios</h1>
        <p className="page__lede">
          Munin Kilts nace en Guadalajara con un solo trabajo: hacer que el
          kilt se tome en serio. No es un disfraz ni una pieza de temporada —
          es una prenda de trabajo, cortada y cosida a mano, pensada para
          aguantar el uso diario.
        </p>
      </Reveal>

      <Reveal photo>
        <div
          style={{
            width: "100%",
            aspectRatio: "16/7",
            background: "var(--negro-munin)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 48,
          }}
        >
          <RuneSeal size={72} opacity={0.12} />
        </div>
      </Reveal>

      <div className="feature-grid">
        <Reveal as="div" className="feature">
          <h3 className="feature__title">Tela pesada</h3>
          <p className="feature__text">
            Algodón grueso y lana mezcla, elegidos por peso y caída, no por
            costo. La misma tela que usarías para un pantalón de trabajo, no
            para un disfraz.
          </p>
        </Reveal>
        <Reveal as="div" className="feature" delayMs={80}>
          <h3 className="feature__title">Herrajes de latón</h3>
          <p className="feature__text">
            Broches, hebillas y herrajes fundidos en latón. Cada pieza lleva
            su rúnica de origen — no es decoración genérica de librería.
          </p>
        </Reveal>
        <Reveal as="div" className="feature" delayMs={160}>
          <h3 className="feature__title">Corte a la medida</h3>
          <p className="feature__text">
            Cada kilt se corta sobre tu medida real, no sobre una talla
            estándar. El patrón se ajusta a cómo se mueve el cuerpo, no al
            revés.
          </p>
        </Reveal>
        <Reveal as="div" className="feature" delayMs={240}>
          <h3 className="feature__title">Dos semanas de taller</h3>
          <p className="feature__text">
            Tiempo real de producción, no una fecha de marketing. Se corta,
            se cose y se revisa antes de salir del taller.
          </p>
        </Reveal>
      </div>

      <hr className="rule" />

      <Reveal as="div" className="prose">
        <p>
          Trabajamos para hombres que ya decidieron vestir distinto: cultura
          nórdica, metal, motociclismo, barbería, tatuaje y artesanía. Gente
          que busca una prenda que resista el uso diario, no una pieza de
          cosplay.
        </p>
        <p>
          La escarcela, los herrajes de latón y la playera son la línea
          complementaria — el kilt es y sigue siendo el trabajo principal del
          taller.
        </p>
      </Reveal>
    </div>
  );
}
