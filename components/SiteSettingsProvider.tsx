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

export type StylePreset = {
  id: string;
  label: string;
  blurb: string;
  swatch: string;
  theme: ThemeId;
  displayFont: DisplayFontId;
  bodyFont: BodyFontId;
  heroLayout: HeroLayoutId;
};

// Each button is a complete, cohesive look — color + type + editorial layout
// bundled together — not independent dials the client has to mix themselves.
export const STYLE_PRESETS: StylePreset[] = [
  {
    id: "clasico",
    label: "Clásico Munin",
    blurb: "Oro sobre negro, Cinzel, foto a la derecha. El look base del brief.",
    swatch: "#C9A227",
    theme: "oro",
    displayFont: "cinzel",
    bodyFont: "karla",
    heroLayout: "right",
  },
  {
    id: "calido",
    label: "Cálido Latón",
    blurb: "Acento más luminoso, Eczar en el título. Más cálido, mismo negro.",
    swatch: "#D4A934",
    theme: "laton",
    displayFont: "eczar",
    bodyFont: "karla",
    heroLayout: "right",
  },
  {
    id: "taller",
    label: "Taller Nórdico",
    blurb: "Acento índigo, foto a la izquierda. Más frío, más de bitácora de taller.",
    swatch: "#37485A",
    theme: "indigo",
    displayFont: "cinzel",
    bodyFont: "work",
    heroLayout: "left",
  },
  {
    id: "editorial",
    label: "Editorial Suave",
    blurb: "Latón + Eczar + Work Sans, foto a la izquierda. El más editorial de los cuatro.",
    swatch: "#E8CE8B",
    theme: "laton",
    displayFont: "eczar",
    bodyFont: "work",
    heroLayout: "left",
  },
];

type Settings = {
  theme: ThemeId;
  displayFont: DisplayFontId;
  bodyFont: BodyFontId;
  heroLayout: HeroLayoutId;
  activePreset: string;
  hero: HeroContent;
};

const DEFAULTS: Settings = {
  theme: STYLE_PRESETS[0].theme,
  displayFont: STYLE_PRESETS[0].displayFont,
  bodyFont: STYLE_PRESETS[0].bodyFont,
  heroLayout: STYLE_PRESETS[0].heroLayout,
  activePreset: STYLE_PRESETS[0].id,
  hero: DEFAULT_HERO_CONTENT,
};

const STORAGE_KEY = "munin-review-settings";

type Ctx = Settings & {
  applyPreset: (id: string) => void;
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
    applyPreset: (id) => {
      const preset = STYLE_PRESETS.find((p) => p.id === id);
      if (!preset) return;
      setSettings((s) => ({
        ...s,
        theme: preset.theme,
        displayFont: preset.displayFont,
        bodyFont: preset.bodyFont,
        heroLayout: preset.heroLayout,
        activePreset: preset.id,
      }));
    },
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
