"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import RuneSeal from "./RuneSeal";

const LINKS = [
  { href: "/coleccion", label: "Colección" },
  { href: "/taller", label: "Taller" },
  { href: "/medidas", label: "Medidas" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.9);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <Link href="/" className="nav__brand">
        <RuneSeal size={28} />
        <span className="nav__wordmark">Munin Kilts</span>
      </Link>
      <div className="nav__links">
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} className="nav__link">
            {l.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
