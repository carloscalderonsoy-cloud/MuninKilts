"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import { useSiteSettings } from "./SiteSettingsProvider";
import SettingsPanel from "./SettingsPanel";

export default function Hero() {
  const { hero, heroLayout } = useSiteSettings();

  const kicker = useReveal<HTMLDivElement>();
  const h1 = useReveal<HTMLHeadingElement>();
  const dek = useReveal<HTMLParagraphElement>();
  const ctas = useReveal<HTMLDivElement>();
  const photo = useReveal<HTMLDivElement>();

  const [annotationReady, setAnnotationReady] = useState(false);

  useEffect(() => {
    if (!photo.visible) return;
    const t = setTimeout(() => setAnnotationReady(true), 2200);
    return () => clearTimeout(t);
  }, [photo.visible]);

  const [firstLetter, ...restLetters] = hero.line2;
  const rune = firstLetter?.toUpperCase() === "D" ? "Đ" : firstLetter ?? "";

  return (
    <section className={`hero${heroLayout === "left" ? " hero--left" : ""}`}>
      <div className="hero__copy">
        <div
          ref={kicker.ref}
          className={`kicker reveal${kicker.visible ? " is-visible" : ""}`}
        >
          <span className="kicker__rule" />
          <span className="kicker__text">{hero.kicker}</span>
        </div>

        <h1
          ref={h1.ref}
          className={`hero__h1 reveal${h1.visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <span>{hero.line1}</span>
          <span aria-label={hero.line2}>
            <span aria-hidden="true" className="hero__rune">
              {rune}
            </span>
            {restLetters.join("").toUpperCase()}
          </span>
        </h1>

        <p
          ref={dek.ref}
          className={`hero__dek reveal${dek.visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "350ms" }}
        >
          {hero.dek}
        </p>

        <div
          ref={ctas.ref}
          className={`hero__ctas reveal${ctas.visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "550ms" }}
        >
          <Link href="/coleccion" className="btn">
            {hero.cta1}
          </Link>
          <Link href="/medidas" className="link-underline">
            {hero.cta2} →
          </Link>
        </div>
      </div>

      <div className="hero__frame">
        <div
          ref={photo.ref}
          className={`hero__photo-wrap reveal reveal--photo${photo.visible ? " is-visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <img
            src="/images/hero-broche.png"
            alt="Detalle del kilt negro Munin: broche de latón fundido y herraje sobre cuero, contra muro de ladrillo"
          />

          <svg viewBox="0 0 100 125" className="annotation" aria-hidden="true">
            <circle className="annotation-dot" cx="45" cy="58" r="1.6" />
            <line
              className={`annotation-line${annotationReady ? " is-drawn" : ""}`}
              x1="45"
              y1="58"
              x2="75"
              y2="58"
            />
          </svg>
          <div
            className={`annotation-label${annotationReady ? " is-visible" : ""}`}
            style={{ left: "76%", top: "44.5%" }}
          >
            <div className="annotation-label__title">Broche Ingwaz</div>
            <div className="annotation-label__sub">latón fundido a mano</div>
          </div>
        </div>
      </div>

      <SettingsPanel />
    </section>
  );
}
