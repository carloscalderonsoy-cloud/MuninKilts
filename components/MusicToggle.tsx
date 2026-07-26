"use client";

import { useAudio } from "./AudioProvider";

export default function MusicToggle() {
  const { playing, toggle } = useAudio();

  return (
    <button
      type="button"
      className="music-toggle"
      onClick={toggle}
      aria-pressed={playing}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 9v6h4l5 5V4L8 9H4z" fill="currentColor" />
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
  );
}
