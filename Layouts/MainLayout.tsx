"use client";

import { ReactNode } from "react";
import Dock from "@/components/Resuable/Dock/Dock";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div
      className="min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/lummi_QmPLmnAj.png')",
      }}
    >
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px]" />

      <Dock />

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="relative z-10 min-h-screen p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
