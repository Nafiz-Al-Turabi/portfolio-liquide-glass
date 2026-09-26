"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import gsap from "gsap";
import {
  FiBookOpen,
  FiBriefcase,
  FiDownload,
  FiFacebook,
  FiGithub,
  FiHome,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiSettings,
  FiUser,
} from "react-icons/fi";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";

const dockItems = [
  { name: "Home", href: "/", icon: FiHome },
  // { name: "About", href: "/about", icon: FiUser },
  { name: "Work", href: "/work", icon: FiBriefcase },
  { name: "Journal", href: "/journal", icon: FiBookOpen },
  { name: "Contact", href: "/contact", icon: FiMail },
];
const utilityItems = [
  { name: "GitHub", href: "https://github.com/Nafiz-Al-Turabi", icon: FiGithub },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/nafiz-al-turabi-570386278/", icon: FiLinkedin },
  { name: "Facebook", href: "https://facebook.com", icon: FiFacebook },
  { name: "Instagram", href: "https://instagram.com", icon: FiInstagram },
  { name: "Resume", href: "/resume.pdf", icon: FiDownload },
];

function Tooltip({ name }: { name: string }) {
  return (
    <span className="pointer-events-none absolute bottom-full left-1/2 mb-3 -translate-x-1/2 whitespace-nowrap rounded-full bg-black/70 px-3 py-1.5 text-xs text-white opacity-0 backdrop-blur-md transition group-hover:opacity-100 after:absolute after:left-1/2 after:top-full after:-translate-x-1/2 after:border-x-[5px] after:border-t-[5px] after:border-x-transparent after:border-t-black/70 after:content-['']">
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
    href === "/" ? pathname === href : pathname.startsWith(href);

  return (
    <aside
      ref={dockRef}
      className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-max -translate-x-1/2"
    >
      <LiquidGlass
        className="mx-auto px-3 py-2.5 sm:px-4 sm:py-3"
        tint={0}
        tintTone="light"
        frost={0.5}
        radius={18}
        backdrop="auto"
      >
        <div className="flex items-end gap-1.5 sm:gap-3">
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
                  className="relative flex h-11 w-11 items-center justify-center sm:h-12 sm:w-12"
                >
                  <span
                    className={`flex h-full w-full items-center justify-center rounded-2xl border shadow-xl transition-all ${
                      active
                        ? "border-white/60 bg-white/65 text-black shadow-[0_8px_24px_rgba(255,255,255,0.2)]"
                        : "border-white/20 bg-white/15 text-white/85 backdrop-blur-md hover:border-white/40 hover:bg-white/30 hover:text-white"
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
                target="_blank"
                ref={(element) => {
                  itemRefs.current[itemIndex] = element;
                }}
                className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white/75 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/30 hover:text-white sm:h-12 sm:w-12"
              >
                <Icon size={20} />
                <Tooltip name={item.name} />
              </Link>
            );
          })}

          <DockSeparator />

          <Link
            href="/settings"
            ref={(element) => {
              itemRefs.current[dockItems.length + utilityItems.length] =
                element;
            }}
            aria-label="Settings"
            className="group relative flex h-11 w-11 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-white/75 backdrop-blur-md transition-colors hover:border-white/40 hover:bg-white/30 hover:text-white sm:h-12 sm:w-12"
          >
            <FiSettings size={20} />
            <Tooltip name="Settings" />
          </Link>

        </div>
      </LiquidGlass>
    </aside>
  );
}

function DockSeparator() {
  return (
    <div
      className="mx-1 h-8 w-px self-center bg-white/25"
      aria-hidden="true"
    />
  );
}
