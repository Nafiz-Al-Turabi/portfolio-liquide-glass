"use client";

import { useEffect, useRef } from "react";
import { LiquidGlass as LG } from "apple-liquid-glass-webgl";

type Props = {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  tint?: number;
  tintTone?: "light" | "dark" | "auto";
  frost?: number;
  radius?: number;
  backdrop?: "auto" | string;
  targets?: string;
};

export default function LiquidGlass({
  children,
  className = "",
  style,
  tint = 0.35,
  tintTone = "light",
  frost = 0.28,
  radius,
  backdrop = "auto",
  targets,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const glass = new LG(ref.current, {
      tint,
      tintTone,
      frost,
      backdrop,
      targets,
      material: {
        refraction: 50,
      },
      ...(radius !== undefined && { radius }),
    });

    return () => {
      glass.destroy();
    };
  }, [tint, tintTone, frost, radius, backdrop]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        position: "relative",
        borderRadius: radius ?? 4,
        ...style,
      }}
    >
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
}
