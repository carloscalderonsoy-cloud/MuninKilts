import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Munin Kilts",
  description: "Escríbenos por WhatsApp o Instagram para encargar tu kilt.",
};

// Placeholders — reemplazar con los datos reales de Munin antes de publicar.
const WHATSAPP_NUMBER = "5213312345678";
const EMAIL = "hola@muninkilts.com";

export default function ContactoPage() {
  return (
    <div className="page">
      <div className="kicker">
        <span className="kicker__rule" />
        <span className="kicker__text">Contacto</span>
      </div>
      <h1 className="page__title">Hablemos de tu kilt</h1>
      <p className="page__lede">
        No hay carrito ni checkout en línea — cada pieza se confirma por
        WhatsApp o Instagram antes de entrar al taller.
      </p>

      <div className="contact-grid">
        <a
          className="contact-card"
          href={`https://wa.me/${WHATSAPP_NUMBER}`}
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-card__label">WhatsApp</div>
          <div className="contact-card__value">Escríbenos</div>
        </a>
        <a
          className="contact-card"
          href="https://instagram.com/muninkilts"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-card__label">Instagram</div>
          <div className="contact-card__value">@muninkilts</div>
        </a>
        <a
          className="contact-card"
          href="https://instagram.com/enfaldado"
          target="_blank"
          rel="noreferrer"
        >
          <div className="contact-card__label">Instagram</div>
          <div className="contact-card__value">@enfaldado</div>
        </a>
        <a className="contact-card" href={`mailto:${EMAIL}`}>
          <div className="contact-card__label">Correo</div>
          <div className="contact-card__value">{EMAIL}</div>
        </a>
      </div>

      <hr className="rule" />

      <div className="prose">
        <p>
          Guadalajara, México · Envíos a todo el país · Tiempo de taller: dos
          semanas desde que se confirma la medida.
        </p>
      </div>
    </div>
  );
}
