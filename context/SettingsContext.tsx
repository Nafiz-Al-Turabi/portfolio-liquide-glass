"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export interface WallpaperPreset {
  id: string;
  name: string;
  url: string;
}

export const PRESET_WALLPAPERS: WallpaperPreset[] = [
  {
    id: "default-lummi",
    name: "Cyber Neon",
    url: "/lummi_QmPLmnAj.png",
  },
  {
    id: "bg-lummi",
    name: "Abstract Fluid",
    url: "/bg-lummipng.png",
  },
  {
    id: "deep-space",
    name: "Deep Space",
    url: "https://images.unsplash.com/photo-1506703719100-a0f3a48c0f86?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: "velvet-dusk",
    name: "Velvet Dusk",
    url: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2128&auto=format&fit=crop",
  },
  {
    id: "aurora-glow",
    name: "Aurora Glow",
    url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: "dark-mountain",
    name: "Obsidian Peak",
    url: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
  },
];

interface SettingsState {
  wallpaper: string;
  blur: number; // 0 to 25
  overlayOpacity: number; // 10 to 90
  glassFrost: number; // 0.1 to 1
  glassTint: number; // 0 to 1
  soundEffects: boolean;
  reduceMotion: boolean;
  setWallpaper: (url: string) => void;
  setBlur: (blur: number) => void;
  setOverlayOpacity: (opacity: number) => void;
  setGlassFrost: (frost: number) => void;
  setGlassTint: (tint: number) => void;
  setSoundEffects: (enabled: boolean) => void;
  setReduceMotion: (enabled: boolean) => void;
  resetToDefault: () => void;
}

const DEFAULT_SETTINGS = {
  wallpaper: "/lummi_QmPLmnAj.png",
  blur: 10,
  overlayOpacity: 50,
  glassFrost: 0.35,
  glassTint: 0.2,
  soundEffects: true,
  reduceMotion: false,
};

const SettingsContext = createContext<SettingsState | undefined>(undefined);

export function SettingsProvider({ children }: { children: React.ReactNode }) {
  const [wallpaper, setWallpaperState] = useState<string>(DEFAULT_SETTINGS.wallpaper);
  const [blur, setBlurState] = useState<number>(DEFAULT_SETTINGS.blur);
  const [overlayOpacity, setOverlayOpacityState] = useState<number>(DEFAULT_SETTINGS.overlayOpacity);
  const [glassFrost, setGlassFrostState] = useState<number>(DEFAULT_SETTINGS.glassFrost);
  const [glassTint, setGlassTintState] = useState<number>(DEFAULT_SETTINGS.glassTint);
  const [soundEffects, setSoundEffectsState] = useState<boolean>(DEFAULT_SETTINGS.soundEffects);
  const [reduceMotion, setReduceMotionState] = useState<boolean>(DEFAULT_SETTINGS.reduceMotion);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio_settings");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.wallpaper) setWallpaperState(parsed.wallpaper);
        if (typeof parsed.blur === "number") setBlurState(parsed.blur);
        if (typeof parsed.overlayOpacity === "number") setOverlayOpacityState(parsed.overlayOpacity);
        if (typeof parsed.glassFrost === "number") setGlassFrostState(parsed.glassFrost);
        if (typeof parsed.glassTint === "number") setGlassTintState(parsed.glassTint);
        if (typeof parsed.soundEffects === "boolean") setSoundEffectsState(parsed.soundEffects);
        if (typeof parsed.reduceMotion === "boolean") setReduceMotionState(parsed.reduceMotion);
      }
    } catch (e) {
      console.error("Error reading localStorage settings:", e);
    }
    setMounted(true);
  }, []);

  const saveSettings = (partial: Partial<typeof DEFAULT_SETTINGS>) => {
    try {
      const current = {
        wallpaper,
        blur,
        overlayOpacity,
        glassFrost,
        glassTint,
        soundEffects,
        reduceMotion,
        ...partial,
      };
      localStorage.setItem("portfolio_settings", JSON.stringify(current));
    } catch (e) {
      console.error("Failed to save settings to localStorage:", e);
    }
  };

  const setWallpaper = (url: string) => {
    setWallpaperState(url);
    saveSettings({ wallpaper: url });
  };

  const setBlur = (val: number) => {
    setBlurState(val);
    saveSettings({ blur: val });
  };

  const setOverlayOpacity = (val: number) => {
    setOverlayOpacityState(val);
    saveSettings({ overlayOpacity: val });
  };

  const setGlassFrost = (val: number) => {
    setGlassFrostState(val);
    saveSettings({ glassFrost: val });
  };

  const setGlassTint = (val: number) => {
    setGlassTintState(val);
    saveSettings({ glassTint: val });
  };

  const setSoundEffects = (val: boolean) => {
    setSoundEffectsState(val);
    saveSettings({ soundEffects: val });
  };

  const setReduceMotion = (val: boolean) => {
    setReduceMotionState(val);
    saveSettings({ reduceMotion: val });
  };

  const resetToDefault = () => {
    setWallpaperState(DEFAULT_SETTINGS.wallpaper);
    setBlurState(DEFAULT_SETTINGS.blur);
    setOverlayOpacityState(DEFAULT_SETTINGS.overlayOpacity);
    setGlassFrostState(DEFAULT_SETTINGS.glassFrost);
    setGlassTintState(DEFAULT_SETTINGS.glassTint);
    setSoundEffectsState(DEFAULT_SETTINGS.soundEffects);
    setReduceMotionState(DEFAULT_SETTINGS.reduceMotion);
    try {
      localStorage.removeItem("portfolio_settings");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <SettingsContext.Provider
      value={{
        wallpaper,
        blur,
        overlayOpacity,
        glassFrost,
        glassTint,
        soundEffects,
        reduceMotion,
        setWallpaper,
        setBlur,
        setOverlayOpacity,
        setGlassFrost,
        setGlassTint,
        setSoundEffects,
        setReduceMotion,
        resetToDefault,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export function useSettings() {
  const context = useContext(SettingsContext);
  if (!context) {
    throw new Error("useSettings must be used within a SettingsProvider");
  }
  return context;
}

