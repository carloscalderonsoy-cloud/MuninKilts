"use client";

import { useState } from "react";
import { useSiteSettings, STYLE_PRESETS } from "./SiteSettingsProvider";

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
          <span className="settings-group__label">Propuestas de estilo</span>
          <div className="preset-list">
            {STYLE_PRESETS.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`preset-card${s.activePreset === p.id ? " is-active" : ""}`}
                onClick={() => s.applyPreset(p.id)}
              >
                <span className="preset-card__dot" style={{ background: p.swatch }} />
                <span className="preset-card__copy">
                  <span className="preset-card__label">{p.label}</span>
                  <span className="preset-card__blurb">{p.blurb}</span>
                </span>
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
