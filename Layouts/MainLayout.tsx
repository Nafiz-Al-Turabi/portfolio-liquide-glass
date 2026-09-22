"use client";

import { ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  FiGrid,
  FiUsers,
  FiBarChart2,
  FiSettings,
  FiFolder,
  FiMail,
  FiCalendar,
  FiImage,
  FiMusic,
  FiTrash2,
} from "react-icons/fi";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";

interface MainLayoutProps {
  children: ReactNode;
}

const dockItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: FiGrid,
  },
  {
    name: "Users",
    href: "/dashboard/users",
    icon: FiUsers,
  },
  {
    name: "Analytics",
    href: "/dashboard/analytics",
    icon: FiBarChart2,
  },
  {
    name: "Files",
    href: "/dashboard/files",
    icon: FiFolder,
  },
  {
    name: "Messages",
    href: "/dashboard/messages",
    icon: FiMail,
  },
  {
    name: "Calendar",
    href: "/dashboard/calendar",
    icon: FiCalendar,
  },
];

const utilityItems = [
  {
    name: "Settings",
    href: "/dashboard/settings",
    icon: FiSettings,
  },
  {
    name: "Gallery",
    href: "/dashboard/gallery",
    icon: FiImage,
  },
  {
    name: "Music",
    href: "/dashboard/music",
    icon: FiMusic,
  },
];

export default function MainLayout({ children }: MainLayoutProps) {
  const pathname = usePathname();

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isActive = (href: string) => {
    if (href === "/dashboard") {
      return pathname === href;
    }

    return pathname.startsWith(href);
  };

  return (
    <div
      className="min-h-screen overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
      style={{
        backgroundImage: "url('/bg-lummipng.png')",
      }}
    >
      {/* <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px]" /> */}

      {/* =====================================================
          LEFT DOCK
      ====================================================== */}
      <aside className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
        <LiquidGlass
          className="p-4 w-20"
          tint={0.4}
          tintTone="light"
          frost={0.5}
          radius={10}
          backdrop="auto"
        >
          <div className="flex flex-col gap-4 ">
            {dockItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              const distance =
                hoveredIndex === null ? 999 : Math.abs(index - hoveredIndex);

              let size = 48;

              if (distance === 0) {
                size = 68;
              } else if (distance === 1) {
                size = 58;
              } else if (distance === 2) {
                size = 52;
              }

              return (
                <div
                  key={item.href}
                  className="group relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Tooltip */}
                  <div
                    className="pointer-events-none absolute left-full top-1/2 ml-4 -translate-y-1/2 whitespace-nowrap rounded-lg bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100
                  "
                  >
                    {item.name}
                  </div>

                  <Link
                    href={item.href}
                    className="relative flex items-center justify-center transition-all duration-200 ease-out"
                    style={{
                      width: size,
                      height: size,
                    }}
                  >
                    <div
                      className={`flex h-full w-full items-center justify-center rounded-2xl border shadow-xl transition-all
                      ${
                        active
                          ? "border-white/40 bg-white/35"
                          : "border-white/20 bg-white/15"
                      }
                    `}
                    >
                      <Icon
                        size={size > 60 ? 28 : 22}
                        className="text-white drop-shadow-lg"
                      />
                    </div>

                    {/* Active indicator */}
                    {active && (
                      <span className="absolute -right-1 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-white shadow-[0_0_8px_white]" />
                    )}
                  </Link>
                </div>
              );
            })}

            {/* Separator */}
            <div className="my-1 h-px w-8 bg-white/25" />

            {/* Utilities */}
            {utilityItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group relative flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/15 bg-white/10 text-white transition-all duration-200 hover:scale-110 hover:bg-white/25
                "
                >
                  <Icon size={20} />

                  <span
                    className="pointer-events-none absolute left-full ml-4 whitespace-nowrap rounded-lg bg-black/70 px-3 py-1.5 text-xs opacity-0 backdrop-blur-xl transition group-hover:opacity-100
                  "
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Separator */}
            <div className="my-1 h-px w-8 bg-white/25" />

            {/* Trash */}
            <button className="flex h-11 w-11 items-center justify-center rounded-[14px] border border-white/15 bg-white/10 text-white transition hover:scale-110 hover:bg-white/25">
              <FiTrash2 size={20} />
            </button>
          </div>
        </LiquidGlass>
      </aside>

      {/* =====================================================
          MOBILE DOCK
      ====================================================== */}
      <nav className="fixed bottom-3 left-1/2 z-50 flex -translate-x-1/2 items-center gap-1 rounded-[22px] border border-white/20 bg-white/15 px-2 py-2 shadow-2xl backdrop-blur-2xl lg:hidden">
        {dockItems.slice(0, 5).map((item) => {
          const Icon = item.icon;
          const active = isActive(item.href);

          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex h-11 w-11 items-center justify-center rounded-[13px] transition
                ${
                  active
                    ? "bg-white/30 text-white"
                    : "text-white/80 hover:bg-white/20"
                }
              `}
            >
              <Icon size={20} />
            </Link>
          );
        })}
      </nav>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="relative z-10 min-h-screen p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
