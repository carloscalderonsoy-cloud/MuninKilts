"use client";

import type { ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
  photo?: boolean;
};

export default function Reveal({
  children,
  as: As = "div",
  className = "",
  delayMs = 0,
  photo = false,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <As
      ref={ref}
      className={`reveal${photo ? " reveal--photo" : ""}${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </As>
  );
}
