"use client";

import React, { useState } from "react";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import {
  PRESET_WALLPAPERS,
  useSettings,
} from "@/context/SettingsContext";
import {
  LuSlidersHorizontal,
  LuSparkles,
  LuRotateCcw,
  LuCheck,
  LuEye,
  LuVolume2,
  LuVolumeX,
  LuActivity,
  LuLayers,
} from "react-icons/lu";

export default function Settings() {
  const {
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
  } = useSettings();

  const [activeTab, setActiveTab] = useState<"appearance" | "glass" | "system">("appearance");

  return (
    <div className="text-white w-full max-w-7xl mx-auto pb-24 sm:pb-28 pt-1 sm:pt-4 px-1">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 sm:mb-8">
        <div>
          <h1 className="heading-font text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wide drop-shadow-md">
            System & Visual Settings
          </h1>
          <p className="text-white/70 text-xs sm:text-sm md:text-base mt-1">
            Personalize your wallpaper, backdrop blur, liquid glass reflections, and ambient behavior.
          </p>
        </div>

        <button
          onClick={resetToDefault}
          className="flex items-center gap-2 self-start sm:self-auto px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium border border-white/20 bg-white/10 hover:bg-white/20 text-white/90 hover:text-white backdrop-blur-md transition-all active:scale-95 cursor-pointer shadow-lg shrink-0"
          title="Reset to default settings"
        >
          <LuRotateCcw className="text-sm sm:text-base" />
          <span>Reset Defaults</span>
        </button>
      </div>

      {/* Tabs Switcher - Fully responsive */}
      <div className="w-full overflow-x-auto no-scrollbar mb-6 sm:mb-8 pb-1">
        <div className="flex items-center gap-1.5 sm:gap-2 p-1 sm:p-1.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl w-max shadow-inner">
          <button
            onClick={() => setActiveTab("appearance")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "appearance"
                ? "bg-white/25 text-white shadow-md border border-white/20 backdrop-blur-md"
                : "text-white/60 hover:text-white/90 hover:bg-white/5"
            }`}
          >
            <LuEye className="text-sm sm:text-base" />
            <span>Wallpaper & Backdrop</span>
          </button>

          <button
            onClick={() => setActiveTab("glass")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "glass"
                ? "bg-white/25 text-white shadow-md border border-white/20 backdrop-blur-md"
                : "text-white/60 hover:text-white/90 hover:bg-white/5"
            }`}
          >
            <LuSparkles className="text-sm sm:text-base" />
            <span>Glass Dynamics</span>
          </button>

          <button
            onClick={() => setActiveTab("system")}
            className={`flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer whitespace-nowrap ${
              activeTab === "system"
                ? "bg-white/25 text-white shadow-md border border-white/20 backdrop-blur-md"
                : "text-white/60 hover:text-white/90 hover:bg-white/5"
            }`}
          >
            <LuSlidersHorizontal className="text-sm sm:text-base" />
            <span>Interactions</span>
          </button>
        </div>
      </div>

      {/* TAB 1: Wallpaper & Backdrop */}
      {activeTab === "appearance" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 animate-fadeIn">
          {/* Wallpaper Selection (Curated Presets) */}
          <div className="lg:col-span-8 flex flex-col gap-5 sm:gap-6">
            <LiquidGlass className="p-4 sm:p-6" radius={16} tint={glassTint} frost={glassFrost}>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide">Wallpaper Selection</h2>
                  <p className="text-xs sm:text-sm text-white/60">
                    Choose from our curated collection of aesthetic wallpapers.
                  </p>
                </div>
              </div>

              {/* Wallpaper Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {PRESET_WALLPAPERS.map((preset) => {
                  const isSelected = wallpaper === preset.url;
                  return (
                    <div
                      key={preset.id}
                      onClick={() => setWallpaper(preset.url)}
                      className={`group relative h-28 sm:h-36 rounded-xl overflow-hidden cursor-pointer border-2 transition-all shadow-md ${
                        isSelected
                          ? "border-emerald-400 ring-2 sm:ring-4 ring-emerald-400/20 scale-[1.02]"
                          : "border-white/20 hover:border-white/50"
                      }`}
                    >
                      <img
                        src={preset.url}
                        alt={preset.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-2 sm:p-2.5">
                        <span className="text-[11px] sm:text-xs font-semibold text-white drop-shadow truncate">
                          {preset.name}
                        </span>
                      </div>
                      {isSelected && (
                        <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 bg-emerald-500 text-white p-1 rounded-full shadow-lg">
                          <LuCheck className="text-[10px] sm:text-xs stroke-3" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </LiquidGlass>

            {/* Backdrop Controls (Blur & Dimmer) */}
            <LiquidGlass className="p-4 sm:p-6" radius={16} tint={glassTint} frost={glassFrost}>
              <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide mb-1">
                Backdrop Filters
              </h2>
              <p className="text-xs sm:text-sm text-white/60 mb-5 sm:mb-6">
                Fine-tune the ambient background blur and darkening overlay for optimal readability.
              </p>

              <div className="space-y-5 sm:space-y-6">
                {/* Blur Slider */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                    <span className="text-white/80">Background Blur</span>
                    <span className="text-[11px] sm:text-xs font-mono text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
                      {blur}px
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="25"
                    step="1"
                    value={blur}
                    onChange={(e) => setBlur(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[9px] sm:text-[10px] text-white/40 mt-1">
                    <span>Sharp (0px)</span>
                    <span>Subtle (10px)</span>
                    <span>Heavy (25px)</span>
                  </div>
                </div>

                {/* Dark Overlay Opacity */}
                <div>
                  <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                    <span className="text-white/80">Dark Overlay Dimmer</span>
                    <span className="text-[11px] sm:text-xs font-mono text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
                      {overlayOpacity}%
                    </span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="85"
                    step="5"
                    value={overlayOpacity}
                    onChange={(e) => setOverlayOpacity(Number(e.target.value))}
                    className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                  />
                  <div className="flex justify-between text-[9px] sm:text-[10px] text-white/40 mt-1">
                    <span>Vibrant (10%)</span>
                    <span>Balanced (50%)</span>
                    <span>Stealth (85%)</span>
                  </div>
                </div>
              </div>
            </LiquidGlass>
          </div>

          {/* Live Preview Card */}
          <div className="lg:col-span-4">
            <LiquidGlass className="p-4 sm:p-5 h-fit flex flex-col" radius={16} tint={glassTint} frost={glassFrost}>
              <h2 className="text-sm sm:text-base font-semibold text-white tracking-wide mb-3 flex items-center gap-2">
                <LuLayers className="text-base sm:text-lg text-emerald-400" />
                Live Preview
              </h2>

              <div className="relative flex-1 min-h-45 sm:min-h-55 rounded-xl overflow-hidden border border-white/20 shadow-2xl flex items-center justify-center p-3 sm:p-4">
                {/* Background image preview */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-300"
                  style={{
                    backgroundImage: `url('${wallpaper}')`,
                  }}
                />
                {/* Overlay & blur simulation */}
                <div
                  className="absolute inset-0 transition-all duration-300"
                  style={{
                    backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
                    backdropFilter: `blur(${blur / 2}px)`,
                  }}
                />

                {/* Sample Mini Glass Card */}
                <div className="relative z-10 w-full max-w-47.5 p-3 sm:p-4 rounded-xl border border-white/30 bg-white/15 backdrop-blur-md shadow-lg text-center">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 mx-auto mb-2 flex items-center justify-center">
                    <LuSparkles className="text-emerald-300 text-xs sm:text-sm" />
                  </div>
                  <h4 className="text-[11px] sm:text-xs font-semibold text-white">Liquid Glass</h4>
                  <p className="text-[9px] sm:text-[10px] text-white/70 mt-1">Live backdrop simulation</p>
                </div>
              </div>

              <p className="text-[10px] sm:text-[11px] text-white/50 text-center mt-3">
                Changes apply instantly across your whole portfolio view.
              </p>
            </LiquidGlass>
          </div>
        </div>
      )}

      {/* TAB 2: Glass Dynamics */}
      {activeTab === "glass" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
          <LiquidGlass className="p-4 sm:p-6" radius={16} tint={glassTint} frost={glassFrost}>
            <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide mb-1">
              Liquid Glass Reflection & Frost
            </h2>
            <p className="text-xs sm:text-sm text-white/60 mb-5 sm:mb-6">
              Configure WebGL refraction highlights and surface frostiness.
            </p>

            <div className="space-y-5 sm:space-y-6">
              {/* Glass Frost Slider */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                  <span className="text-white/80">Glass Frost Intensity</span>
                  <span className="text-[11px] sm:text-xs font-mono text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
                    {Math.round(glassFrost * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="0.8"
                  step="0.05"
                  value={glassFrost}
                  onChange={(e) => setGlassFrost(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-white/40 mt-1">
                  <span>Ultra Clear (10%)</span>
                  <span>Crystal (35%)</span>
                  <span>Frosted Ice (80%)</span>
                </div>
              </div>

              {/* Glass Tint Slider */}
              <div>
                <div className="flex justify-between items-center text-xs sm:text-sm font-medium mb-2">
                  <span className="text-white/80">Glass Tint Luminance</span>
                  <span className="text-[11px] sm:text-xs font-mono text-emerald-400 bg-white/10 px-2 py-0.5 rounded">
                    {Math.round(glassTint * 100)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="0.8"
                  step="0.05"
                  value={glassTint}
                  onChange={(e) => setGlassTint(Number(e.target.value))}
                  className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-emerald-400"
                />
                <div className="flex justify-between text-[9px] sm:text-[10px] text-white/40 mt-1">
                  <span>Transparent (0%)</span>
                  <span>Soft Luster (30%)</span>
                  <span>Bright Milk (80%)</span>
                </div>
              </div>
            </div>
          </LiquidGlass>

          {/* Interactive preview box */}
          <LiquidGlass className="p-4 sm:p-6 flex flex-col justify-between" radius={16} tint={glassTint} frost={glassFrost}>
            <div>
              <h2 className="text-base sm:text-lg font-semibold text-white tracking-wide mb-1">
                Refraction Material Test
              </h2>
              <p className="text-xs text-white/60 mb-4">
                Watch how the glass panel refracts background colors dynamically.
              </p>
            </div>

            <div className="relative h-36 sm:h-44 rounded-2xl overflow-hidden border border-white/20 flex items-center justify-center">
              <div className="absolute -top-10 -left-10 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-purple-500/60 blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -right-8 w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-cyan-500/60 blur-xl animate-pulse" />
              <div className="relative z-10 px-4 sm:px-6 py-3 sm:py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-center shadow-xl">
                <span className="text-[11px] sm:text-xs font-semibold text-white tracking-widest uppercase">
                  WebGL Liquid Glass
                </span>
                <p className="text-[10px] sm:text-[11px] text-white/70 mt-1">Real-time shader light blending</p>
              </div>
            </div>

            <span className="text-[10px] sm:text-[11px] text-white/40 mt-4 block text-center">
              Settings automatically persist across page reloads.
            </span>
          </LiquidGlass>
        </div>
      )}

      {/* TAB 3: System & Interactions */}
      {activeTab === "system" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 animate-fadeIn">
          {/* Audio toggle */}
          <LiquidGlass className="p-4 sm:p-6" radius={16} tint={glassTint} frost={glassFrost}>
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/10 text-white mt-1 shrink-0 h-fit">
                  {soundEffects ? <LuVolume2 className="text-xl sm:text-2xl" /> : <LuVolumeX className="text-xl sm:text-2xl text-white/40" />}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">Audio & Feedback</h3>
                  <p className="text-[11px] sm:text-xs text-white/60 mt-1">
                    Play subtle haptic click and hover sounds when navigating through the dock and menus.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSoundEffects(!soundEffects)}
                className={`w-11 sm:w-12 h-4 sm:h-5 rounded-full p-0.5 sm:p-1 transition-colors cursor-pointer border shrink-0 ${
                  soundEffects ? "bg-emerald-500/80 border-emerald-400" : "bg-white/10 border-white/20"
                }`}
              >
                <div
                  className={`w-4.5 -mt-1.75 sm:w-6 h-4.5 sm:h-6 rounded-full bg-white transition-transform ${
                    soundEffects ? "translate-x-5" : "-translate-x-1"
                  }`}
                />
              </button>
            </div>
          </LiquidGlass>

          {/* Reduce Motion */}
          <LiquidGlass className="p-4 sm:p-6" radius={16} tint={glassTint} frost={glassFrost}>
            <div className="flex items-start justify-between gap-3 sm:gap-4">
              <div className="flex gap-2.5 sm:gap-3">
                <div className="p-2.5 sm:p-3 rounded-xl bg-white/10 text-white mt-1 shrink-0 h-fit">
                  <LuActivity className="text-xl sm:text-2xl" />
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-white">Reduce Motion & Animations</h3>
                  <p className="text-[11px] sm:text-xs text-white/60 mt-1">
                    Minimize GSAP fluid dock scaling and background transitions for lower-end devices or battery saving.
                  </p>
                </div>
              </div>

              <button
                onClick={() => setReduceMotion(!reduceMotion)}
                className={`w-11 sm:w-12 h-4 sm:h-5 rounded-full p-0.5 sm:p-1 transition-colors cursor-pointer border shrink-0 ${
                  reduceMotion ? "bg-emerald-500/80 border-emerald-400" : "bg-white/10 border-white/20"
                }`}
              >
                <div
                  className={`w-4.5 -mt-1.75 sm:w-6 h-4.5 sm:h-6 rounded-full bg-white transition-transform ${
                    reduceMotion ? "translate-x-5" : "-translate-x-1"
                  }`}
                />
              </button>
            </div>
          </LiquidGlass>
        </div>
      )}
    </div>
  );
}