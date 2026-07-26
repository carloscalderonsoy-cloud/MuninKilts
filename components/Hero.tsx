"use client";

import Link from "next/link";
import { useReveal } from "@/lib/useReveal";
import { useSiteSettings, DEFAULT_HERO_CONTENT as hero } from "./SiteSettingsProvider";
import SettingsPanel from "./SettingsPanel";
import MusicToggle from "./MusicToggle";
import DataBar from "./DataBar";

export default function Hero() {
  const { heroLayout } = useSiteSettings();

  const bg = useReveal<HTMLDivElement>();
  const kicker = useReveal<HTMLDivElement>();
  const h1 = useReveal<HTMLHeadingElement>();
  const dek = useReveal<HTMLParagraphElement>();
  const ctas = useReveal<HTMLDivElement>();
  const databar = useReveal<HTMLDivElement>();

  const [firstLetter, ...restLetters] = hero.line2;
  const rune = firstLetter?.toUpperCase() === "D" ? "Đ" : firstLetter ?? "";

  return (
    <section className={`hero${heroLayout === "left" ? " hero--left" : ""}`}>
      <div
        ref={bg.ref}
        className={`hero__bg reveal${bg.visible ? " is-visible" : ""}`}
      >
        <video
          src="/video/hero-kilts.mp4"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        />
        <div className="hero__scrim" aria-hidden="true" />
      </div>

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

      <div
        ref={databar.ref}
        className={`hero__databar reveal${databar.visible ? " is-visible" : ""}`}
        style={{ transitionDelay: "750ms" }}
      >
        <DataBar />
      </div>

      <MusicToggle />
      <SettingsPanel />
    </section>
  );
}
