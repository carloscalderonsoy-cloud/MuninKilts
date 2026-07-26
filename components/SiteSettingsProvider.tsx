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
    blurb: "Oro sobre negro, Cinzel, texto a la izquierda. El look base del brief.",
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
    blurb: "Acento índigo, texto a la derecha. Más frío, más de bitácora de taller.",
    swatch: "#37485A",
    theme: "indigo",
    displayFont: "cinzel",
    bodyFont: "work",
    heroLayout: "left",
  },
  {
    id: "editorial",
    label: "Editorial Suave",
    blurb: "Latón + Eczar + Work Sans, texto a la derecha. El más editorial de los seis.",
    swatch: "#E8CE8B",
    theme: "laton",
    displayFont: "eczar",
    bodyFont: "work",
    heroLayout: "left",
  },
  {
    id: "indigo-moderno",
    label: "Índigo Moderno",
    blurb: "Acento índigo con Eczar + Work Sans, texto a la izquierda. Frío pero más suave que el Taller Nórdico.",
    swatch: "#37485A",
    theme: "indigo",
    displayFont: "eczar",
    bodyFont: "work",
    heroLayout: "right",
  },
  {
    id: "oro-documental",
    label: "Oro Documental",
    blurb: "Oro clásico con Eczar + Work Sans, texto a la derecha. El acento de siempre, tono más de bitácora.",
    swatch: "#C9A227",
    theme: "oro",
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
};

const DEFAULTS: Settings = {
  theme: STYLE_PRESETS[0].theme,
  displayFont: STYLE_PRESETS[0].displayFont,
  bodyFont: STYLE_PRESETS[0].bodyFont,
  heroLayout: STYLE_PRESETS[0].heroLayout,
  activePreset: STYLE_PRESETS[0].id,
};

const STORAGE_KEY = "munin-review-settings";

type Ctx = Settings & {
  applyPreset: (id: string) => void;
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
