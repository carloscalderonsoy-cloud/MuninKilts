import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cómo se toma la medida — Munin Kilts",
  description:
    "Guía para tomar tu medida antes de encargar un kilt Munin. Tres medidas, una cinta métrica.",
};

const STEPS = [
  {
    title: "Cintura",
    text: "Mide sobre pantalón, donde normalmente descansa tu cinturón — no sobre el ombligo. El kilt se ajusta ahí, no en la cadera.",
  },
  {
    title: "Cadera",
    text: "Mide en el punto más ancho de la cadera y el glúteo, cinta paralela al piso.",
  },
  {
    title: "Largo",
    text: "De la cintura a donde quieres que caiga el dobladillo — normalmente a la mitad de la rodilla. Si dudas, manda una foto de referencia por WhatsApp.",
  },
];

export default function MedidasPage() {
  return (
    <div className="page">
      <div className="kicker">
        <span className="kicker__rule" />
        <span className="kicker__text">Guía de medida</span>
      </div>
      <h1 className="page__title">Cómo se toma la medida</h1>
      <p className="page__lede">
        Cada kilt Munin se corta sobre tu medida real. No manejamos tallas
        estándar (S/M/L) — tres medidas y una cinta métrica bastan para
        empezar.
      </p>

      <div className="steps">
        {STEPS.map((s, i) => (
          <div className="step" key={s.title}>
            <span className="step__num">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </div>
          </div>
        ))}
      </div>

      <hr className="rule" />

      <h2 style={{ fontFamily: "var(--font-utility)", fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--oro-munin)" }}>
        Tabla de referencia
      </h2>
      <table className="measure-table">
        <thead>
          <tr>
            <th>Talla</th>
            <th>Cintura (cm)</th>
            <th>Cadera (cm)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>CH</td>
            <td>72–78</td>
            <td>92–98</td>
          </tr>
          <tr>
            <td>M</td>
            <td>80–86</td>
            <td>100–106</td>
          </tr>
          <tr>
            <td>G</td>
            <td>88–94</td>
            <td>108–114</td>
          </tr>
          <tr>
            <td>XG</td>
            <td>96–104</td>
            <td>116–124</td>
          </tr>
        </tbody>
      </table>

      <p className="page__lede" style={{ marginBottom: 32 }}>
        Fuera de rango o entre dos tallas: mándanos tus tres medidas por
        WhatsApp y confirmamos antes de cortar.
      </p>

      <Link href="/contacto" className="btn">
        Enviar mis medidas
      </Link>
    </div>
  );
}
