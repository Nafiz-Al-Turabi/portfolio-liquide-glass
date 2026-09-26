import React from "react";
import LiquidGlass from "../LiquideGlass/LiquideGlass";
import { useSettings } from "@/context/SettingsContext";
import { RiGithubLine } from "react-icons/ri";
import { CiMonitor } from "react-icons/ci";

export default function ProjectCard() {
  const { glassFrost, glassTint } = useSettings();
  return (
    <LiquidGlass
      className="group overflow-hidden border border-white/15 transition duration-500 hover:-translate-y-1 hover:border-white/30"
      radius={20}
      tint={glassTint}
      frost={glassFrost}
    >
      <article>
        <div className="relative aspect-16/10 overflow-hidden">
        <img
          src="https://plus.unsplash.com/premium_photo-1726704048841-50f7864d3e11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
          alt="Project preview"
          className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/10 to-black/20" />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-3">
          <LiquidGlass
            className="border border-white/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-white"
            radius={50}
            tint={glassTint}
            frost={glassFrost}
          >
            Selected work
          </LiquidGlass>
          <span className="grid size-9 place-items-center rounded-full border border-white/25 bg-black/20 text-lg text-white backdrop-blur-md transition-transform duration-300 group-hover:rotate-45">
            ↗
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
          <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white/70">
            Digital experience
          </p>
          <h2 className="text-2xl font-semibold leading-tight text-white sm:text-3xl">
            Name of project
          </h2>
        </div>
        </div>

        <div className="p-4 sm:p-5">
          <p className="line-clamp-2 text-sm leading-6 text-white/75">
            A thoughtful digital experience with a clear visual identity and
            smooth, purposeful interactions.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
              React
            </span>
            <span className="rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs font-medium text-white/85">
              Frontend
            </span>
          </div>
        </div>

        <div className="flex gap-3 border-t border-white/15 px-4 py-4 sm:px-5">
          <LiquidGlass
            className="flex-1 border border-white/15 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            radius={10}
            tint={glassTint}
            frost={glassFrost}
          >
            <a href="" className="flex items-center justify-center gap-2">
              <RiGithubLine size={19} /> Github Repo
            </a>
          </LiquidGlass>
          <LiquidGlass
            className="flex-1 border border-white/15 px-3 py-2 text-sm font-medium text-white/90 transition-colors hover:text-white"
            radius={10}
            tint={glassTint}
            frost={glassFrost}
          >
            <a href="" className="flex items-center justify-center gap-2">
              <CiMonitor size={19} /> Live Site
            </a>
          </LiquidGlass>
        </div>
      </article>
    </LiquidGlass>
  );
}
