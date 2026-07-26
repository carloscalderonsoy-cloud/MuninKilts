"use client";

import { useState } from "react";
import {
  useSiteSettings,
  type ThemeId,
  type DisplayFontId,
  type BodyFontId,
  type HeroLayoutId,
} from "./SiteSettingsProvider";

const THEMES: { id: ThemeId; label: string; dot: string }[] = [
  { id: "oro", label: "Oro clásico", dot: "#C9A227" },
  { id: "laton", label: "Latón cálido", dot: "#D4A934" },
  { id: "indigo", label: "Índigo taller", dot: "#37485A" },
];

const DISPLAY_FONTS: { id: DisplayFontId; label: string }[] = [
  { id: "cinzel", label: "Cinzel" },
  { id: "eczar", label: "Eczar" },
];

const BODY_FONTS: { id: BodyFontId; label: string }[] = [
  { id: "karla", label: "Karla" },
  { id: "work", label: "Work Sans" },
];

const LAYOUTS: { id: HeroLayoutId; label: string }[] = [
  { id: "right", label: "Foto derecha" },
  { id: "left", label: "Foto izquierda" },
];

export default function SettingsPanel() {
  const [open, setOpen] = useState(false);
  const s = useSiteSettings();

  return (
    <>
      <button
        type="button"
        className="settings-toggle"
        aria-label="Abrir panel de revisión de diseño"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M12 15a3 3 0 100-6 3 3 0 000 6z"
            stroke="currentColor"
            strokeWidth="1.6"
          />
          <path
            d="M19.4 13.5a1.7 1.7 0 00.34 1.87l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.7 1.7 0 00-1.87-.34 1.7 1.7 0 00-1 1.55V20a2 2 0 11-4 0v-.09a1.7 1.7 0 00-1-1.56 1.7 1.7 0 00-1.87.34l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.7 1.7 0 00.34-1.87 1.7 1.7 0 00-1.55-1H4a2 2 0 110-4h.09a1.7 1.7 0 001.56-1 1.7 1.7 0 00-.34-1.87l-.06-.06a2 2 0 112.83-2.83l.06.06a1.7 1.7 0 001.87.34H10a1.7 1.7 0 001-1.55V4a2 2 0 114 0v.09a1.7 1.7 0 001 1.55 1.7 1.7 0 001.87-.34l.06-.06a2 2 0 112.83 2.83l-.06.06a1.7 1.7 0 00-.34 1.87V10a1.7 1.7 0 001.55 1H20a2 2 0 110 4h-.09a1.7 1.7 0 00-1.55 1z"
            stroke="currentColor"
            strokeWidth="1.4"
          />
        </svg>
      </button>

      <aside
        className={`settings-panel${open ? " is-open" : ""}`}
        aria-hidden={!open}
      >
        <div className="settings-panel__head">
          <span className="settings-panel__title">Revisión de diseño</span>
          <button
            type="button"
            className="settings-panel__close"
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
          >
            ×
          </button>
        </div>
        <p className="settings-panel__note">
          Solo visible en tu navegador — sirve para comparar opciones antes de
          decidir. No cambia el contenido real del sitio para tus visitantes.
        </p>

        <div className="settings-group">
          <span className="settings-group__label">Texto del hero</span>
          <div className="settings-field">
            <label htmlFor="f-kicker">Kicker</label>
            <input
              id="f-kicker"
              value={s.hero.kicker}
              onChange={(e) => s.setHero({ kicker: e.target.value })}
            />
          </div>
          <div className="settings-field">
            <label htmlFor="f-line1">Título — línea 1</label>
            <input
              id="f-line1"
              value={s.hero.line1}
              onChange={(e) => s.setHero({ line1: e.target.value })}
            />
          </div>
          <div className="settings-field">
            <label htmlFor="f-line2">Título — línea 2</label>
            <input
              id="f-line2"
              value={s.hero.line2}
              onChange={(e) => s.setHero({ line2: e.target.value })}
            />
          </div>
          <div className="settings-field">
            <label htmlFor="f-dek">Bajada</label>
            <textarea
              id="f-dek"
              rows={3}
              value={s.hero.dek}
              onChange={(e) => s.setHero({ dek: e.target.value })}
            />
          </div>
          <div className="settings-field">
            <label htmlFor="f-cta1">Botón principal</label>
            <input
              id="f-cta1"
              value={s.hero.cta1}
              onChange={(e) => s.setHero({ cta1: e.target.value })}
            />
          </div>
          <div className="settings-field">
            <label htmlFor="f-cta2">Enlace secundario</label>
            <input
              id="f-cta2"
              value={s.hero.cta2}
              onChange={(e) => s.setHero({ cta2: e.target.value })}
            />
          </div>
        </div>

        <div className="settings-group">
          <span className="settings-group__label">Acomodo editorial</span>
          <div className="settings-swatches">
            {LAYOUTS.map((l) => (
              <button
                key={l.id}
                type="button"
                className={`settings-swatch${s.heroLayout === l.id ? " is-active" : ""}`}
                onClick={() => s.setHeroLayout(l.id)}
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-group">
          <span className="settings-group__label">Paleta</span>
          <div className="settings-swatches">
            {THEMES.map((t) => (
              <button
                key={t.id}
                type="button"
                className={`settings-swatch${s.theme === t.id ? " is-active" : ""}`}
                onClick={() => s.setTheme(t.id)}
              >
                <span className="settings-swatch__dot" style={{ background: t.dot }} />
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-group">
          <span className="settings-group__label">Tipografía display</span>
          <div className="settings-swatches">
            {DISPLAY_FONTS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`settings-swatch${s.displayFont === f.id ? " is-active" : ""}`}
                onClick={() => s.setDisplayFont(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="settings-group">
          <span className="settings-group__label">Tipografía de cuerpo</span>
          <div className="settings-swatches">
            {BODY_FONTS.map((f) => (
              <button
                key={f.id}
                type="button"
                className={`settings-swatch${s.bodyFont === f.id ? " is-active" : ""}`}
                onClick={() => s.setBodyFont(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <button type="button" className="settings-reset" onClick={s.reset}>
          Restablecer todo
        </button>
      </aside>
    </>
  );
}
