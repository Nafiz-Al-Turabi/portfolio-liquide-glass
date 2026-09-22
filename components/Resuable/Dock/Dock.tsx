"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import {
  FiBarChart2,
  FiCalendar,
  FiFolder,
  FiGrid,
  FiImage,
  FiMail,
  FiMusic,
  FiSettings,
  FiTrash2,
  FiUsers,
} from "react-icons/fi";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";

const dockItems = [
  { name: "Dashboard", href: "/dashboard", icon: FiGrid },
  { name: "Users", href: "/dashboard/users", icon: FiUsers },
  { name: "Analytics", href: "/dashboard/analytics", icon: FiBarChart2 },
  { name: "Files", href: "/dashboard/files", icon: FiFolder },
  { name: "Messages", href: "/dashboard/messages", icon: FiMail },
  { name: "Calendar", href: "/dashboard/calendar", icon: FiCalendar },
];

const utilityItems = [
  { name: "Settings", href: "/dashboard/settings", icon: FiSettings },
  { name: "Gallery", href: "/dashboard/gallery", icon: FiImage },
  { name: "Music", href: "/dashboard/music", icon: FiMusic },
];

function Tooltip({ name }: { name: string }) {
  return (
    <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-lg bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-xl transition group-hover:opacity-100">
      {name}
    </span>
  );
}

export default function Dock() {
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

  const isActive = (href: string) =>
    href === "/dashboard" ? pathname === href : pathname.startsWith(href);

  return (
    <aside
      ref={dockRef}
      className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2"
    >
      <LiquidGlass
        className="mx-auto max-w-7xl px-4 py-3"
        tint={0}
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
                ref={(element) => {
                  itemRefs.current[index] = element;
                }}
                className="group relative"
              >
                <Tooltip name={item.name} />
                <Link
                  href={item.href}
                  className="relative flex h-12 w-12 items-center justify-center"
                >
                  <span
                    className={`flex h-full w-full items-center justify-center rounded-2xl border shadow-xl transition-all ${
                      active
                        ? "border-white/40 bg-white/50 text-black"
                        : "border-white/20 bg-white/15 backdrop-blur-md"
                    }`}
                  >
                    <Icon size={22} className="drop-shadow-lg" />
                  </span>
                  {active && (
                    <span className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_white]" />
                  )}
                </Link>
              </div>
            );
          })}

          <DockSeparator />

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
                className="group relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white backdrop-blur-md"
              >
                <Icon size={20} />
                <Tooltip name={item.name} />
              </Link>
            );
          })}

          <DockSeparator />

          <button
            type="button"
            aria-label="Trash"
            ref={(element) => {
              itemRefs.current[dockItems.length + utilityItems.length] =
                element;
            }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white"
          >
            <FiTrash2 size={20} />
          </button>
        </div>
      </LiquidGlass>
    </aside>
  );
}

function DockSeparator() {
  return <div className="mx-1 h-8 w-px bg-white/25" aria-hidden="true" />;
}
