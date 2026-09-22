"use client";

import { ReactNode, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";

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
  const dockRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const dock = dockRef.current;
    if (!dock) return;

    const items = itemRefs.current.filter(
      (item): item is HTMLElement => item !== null,
    );

    const resetItems = () => {
      gsap.to(items, {
        scale: 1,
        y: 0,
        marginLeft: 0,
        marginRight: 0,
        duration: 0.35,
        ease: "power3.out",
        overwrite: true,
      });
    };

    const handlePointerMove = (event: PointerEvent) => {
      items.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        const distance = Math.abs(
          event.clientX - (bounds.left + bounds.width / 2),
        );
        const influence = Math.max(0, 1 - distance / 180);

        gsap.to(item, {
          scale: 1 + influence * 0.55,
          y: -influence * 12,
          marginLeft: influence * 14,
          marginRight: influence * 14,
          duration: 0.25,
          ease: "power3.out",
          overwrite: true,
        });
      });
    };

    dock.addEventListener("pointermove", handlePointerMove);
    dock.addEventListener("pointerleave", resetItems);

    return () => {
      dock.removeEventListener("pointermove", handlePointerMove);
      dock.removeEventListener("pointerleave", resetItems);
      gsap.killTweensOf(items);
    };
  }, []);

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
        backgroundImage: "url('/lummi_QmPLmnAj.png')",
      }}
    >
      <div className="fixed inset-0 bg-black/20 backdrop-blur-[1px]" />

      {/* =====================================================
          BOTTOM DOCK
      ====================================================== */}
      <aside
        ref={dockRef}
        className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2"
      >
        <LiquidGlass
          className="px-4 py-3 max-w-7xl mx-auto"
          tint={0.4}
          tintTone="light"
          frost={0.5}
          radius={18}
          backdrop="auto"
        >
          <div className="flex items-end gap-3">
            {dockItems.map((item, index) => {
              const Icon = item.icon;
              const active = isActive(item.href);

              return (
                <div
                  key={item.href}
                  className="group relative"
                  ref={(element) => {
                    itemRefs.current[index] = element;
                  }}
                >
                  {/* Tooltip */}
                  <div
                    className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100
                  "
                  >
                    {item.name}
                  </div>

                  <Link
                    href={item.href}
                    className="relative flex h-12 w-12 items-center justify-center"
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
                      <Icon size={22} className="text-white drop-shadow-lg" />
                    </div>

                    {/* Active indicator */}
                    {active && (
                      <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_white]" />
                    )}
                  </Link>
                </div>
              );
            })}

            {/* Separator */}
            <div className="mx-1 h-8 w-px bg-white/25" />

            {/* Utilities */}
            {utilityItems.map((item, index) => {
              const Icon = item.icon;
              const itemIndex = dockItems.length + index;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  ref={(element) => {
                    itemRefs.current[itemIndex] = element;
                  }}
                  className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white"
                >
                  <Icon size={20} />

                  <span
                    className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/70 px-3 py-1.5 text-xs opacity-0 backdrop-blur-xl transition group-hover:opacity-100
                  "
                  >
                    {item.name}
                  </span>
                </Link>
              );
            })}

            {/* Separator */}
            <div className="mx-1 h-8 w-px bg-white/25" />

            {/* Trash */}
            <button
              ref={(element) => {
                itemRefs.current[dockItems.length + utilityItems.length] = element;
              }}
              className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white"
            >
              <FiTrash2 size={20} />
            </button>
          </div>
        </LiquidGlass>
      </aside>

      {/* =====================================================
          MAIN CONTENT
      ====================================================== */}
      <main className="relative z-10 min-h-screen p-6 max-w-7xl mx-auto">
        {children}
      </main>
    </div>
  );
}
