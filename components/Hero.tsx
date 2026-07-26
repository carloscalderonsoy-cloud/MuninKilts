"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import { useSiteSettings, DEFAULT_HERO_CONTENT as hero } from "./SiteSettingsProvider";
import { useAudio } from "./AudioProvider";
import SettingsPanel from "./SettingsPanel";

export default function Hero() {
  const { heroLayout } = useSiteSettings();
  const { playing, toggle } = useAudio();

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
          <video
            src="/video/hero-kilts.mp4"
            autoPlay
            muted
            loop
            playsInline
            aria-hidden="true"
          />

          <button
            type="button"
            className="hero__sound-toggle"
            onClick={toggle}
            aria-pressed={playing}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 9v6h4l5 5V4L8 9H4z"
                fill="currentColor"
              />
              {playing ? (
                <path
                  d="M16.5 8.5a5 5 0 010 7M19 6a8.5 8.5 0 010 12"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  fill="none"
                />
              ) : (
                <path
                  d="M16.5 9.5l4 5m0-5l-4 5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              )}
            </svg>
            {playing ? "Apagar música" : "Encender música"}
          </button>

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
