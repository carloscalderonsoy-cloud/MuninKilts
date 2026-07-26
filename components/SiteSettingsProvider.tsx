"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type ThemeId = "oro" | "laton" | "indigo";
export type DisplayFontId = "cinzel" | "eczar";
export type BodyFontId = "karla" | "work";
export type HeroLayoutId = "right" | "left";

export type HeroContent = {
  kicker: string;
  line1: string;
  line2: string; // rendered with first letter as rune
  dek: string;
  cta1: string;
  cta2: string;
};

export const DEFAULT_HERO_CONTENT: HeroContent = {
  kicker: "Hecho a mano en Guadalajara",
  line1: "Viste con",
  line2: "Dignidad",
  dek: "Kilts y faldas para caballero. Tela pesada, herrajes de latón y un patrón que aguanta el uso diario.",
  cta1: "Ver la colección",
  cta2: "Cómo se toma la medida",
};

type Settings = {
  theme: ThemeId;
  displayFont: DisplayFontId;
  bodyFont: BodyFontId;
  heroLayout: HeroLayoutId;
  hero: HeroContent;
};

const DEFAULTS: Settings = {
  theme: "oro",
  displayFont: "cinzel",
  bodyFont: "karla",
  heroLayout: "right",
  hero: DEFAULT_HERO_CONTENT,
};

const STORAGE_KEY = "munin-review-settings";

type Ctx = Settings & {
  setTheme: (v: ThemeId) => void;
  setDisplayFont: (v: DisplayFontId) => void;
  setBodyFont: (v: BodyFontId) => void;
  setHeroLayout: (v: HeroLayoutId) => void;
  setHero: (v: Partial<HeroContent>) => void;
  reset: () => void;
};

const SiteSettingsContext = createContext<Ctx | null>(null);

export function SiteSettingsProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<Settings>(DEFAULTS);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setSettings({ ...DEFAULTS, ...JSON.parse(raw) });
    } catch {
      // ignore malformed storage
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    document.documentElement.setAttribute("data-theme", settings.theme);
    document.documentElement.setAttribute("data-display-font", settings.displayFont);
    document.documentElement.setAttribute("data-body-font", settings.bodyFont);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore quota errors
    }
  }, [settings, hydrated]);

  const value: Ctx = {
    ...settings,
    setTheme: (theme) => setSettings((s) => ({ ...s, theme })),
    setDisplayFont: (displayFont) => setSettings((s) => ({ ...s, displayFont })),
    setBodyFont: (bodyFont) => setSettings((s) => ({ ...s, bodyFont })),
    setHeroLayout: (heroLayout) => setSettings((s) => ({ ...s, heroLayout })),
    setHero: (partial) => setSettings((s) => ({ ...s, hero: { ...s.hero, ...partial } })),
    reset: () => setSettings(DEFAULTS),
  };

  return (
    <SiteSettingsContext.Provider value={value}>{children}</SiteSettingsContext.Provider>
  );
}

export function useSiteSettings() {
  const ctx = useContext(SiteSettingsContext);
  if (!ctx) throw new Error("useSiteSettings must be used within SiteSettingsProvider");
  return ctx;
}
