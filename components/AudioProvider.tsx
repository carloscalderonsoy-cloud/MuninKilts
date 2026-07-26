"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";

type Ctx = {
  playing: boolean;
  toggle: () => void;
};

const AudioContext = createContext<Ctx | null>(null);

export function AudioProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    const el = ref.current;
    if (!el) return;

    if (playing) {
      el.pause();
      setPlaying(false);
      return;
    }

    el.play()
      .then(() => setPlaying(true))
      .catch(() => setPlaying(false));
  };

  return (
    <AudioContext.Provider value={{ playing, toggle }}>
      {children}
      <audio ref={ref} src="/audio/audio-back-2.mp3" loop preload="none" />
    </AudioContext.Provider>
  );
}

export function useAudio() {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within AudioProvider");
  return ctx;
}
