"use client";

import { ReactNode } from "react";
import Dock from "@/components/Resuable/Dock/Dock";
import { SettingsProvider, useSettings } from "@/context/SettingsContext";

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayoutContent({ children }: MainLayoutProps) {
  const { wallpaper, blur, overlayOpacity } = useSettings();

  return (
    <div
      className="min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed transition-all duration-300"
      style={{
        backgroundImage: `url('${wallpaper}')`,
      }}
    >
      <div
        className="fixed inset-0 transition-all duration-300 pointer-events-none"
        style={{
          backgroundColor: `rgba(0, 0, 0, ${overlayOpacity / 100})`,
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
        }}
      />

      <Dock />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="relative z-10 min-h-screen px-3 py-6 sm:px-6 md:px-8 max-w-7xl mx-auto pb-32 sm:pb-36">
        {children}
      </main>
    </div>
  );
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <SettingsProvider>
      <MainLayoutContent>{children}</MainLayoutContent>
    </SettingsProvider>
  );
}
