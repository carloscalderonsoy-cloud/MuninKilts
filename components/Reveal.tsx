"use client";

import type { CSSProperties, ElementType, ReactNode } from "react";
import { useReveal } from "@/lib/useReveal";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delayMs?: number;
  photo?: boolean;
  style?: CSSProperties;
};

export default function Reveal({
  children,
  as: As = "div",
  className = "",
  delayMs = 0,
  photo = false,
  style,
}: RevealProps) {
  const { ref, visible } = useReveal<HTMLElement>();

  return (
    <As
      ref={ref}
      className={`reveal${photo ? " reveal--photo" : ""}${visible ? " is-visible" : ""}${
        className ? ` ${className}` : ""
      }`}
      style={{ ...style, transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </As>
  );
}
