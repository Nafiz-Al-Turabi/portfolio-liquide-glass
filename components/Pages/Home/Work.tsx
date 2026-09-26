"use client";

import ProjectCard from "@/components/Resuable/Card/ProjectCard";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import { useSettings } from "@/context/SettingsContext";
import { useState } from "react";
import { projects } from "@/Data/projectData";

export default function Work() {
  const { glassFrost, glassTint } = useSettings();
  const [activeTab, setActiveTab] = useState("all");
  const tabs = [
    { label: "All", key: "all" },
    { label: "React.js", key: "react" },
    { label: "Next.js", key: "next" },
    { label: "Vue.js", key: "vue" },
    { label: "Others", key: "others" },
  ];
  const activeIndex = tabs.findIndex((tab) => tab.key === activeTab);
  const filteredProjects =
    activeTab === "all"
      ? projects
      : projects.filter((project) => project.category === activeTab);

  return (
    <div className="text-white px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
        {/* Heading */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            My Work
          </p>

          <h1 className="mt-1 w-fit bg-linear-to-l from-white to-green-500 bg-clip-text text-4xl sm:text-5xl font-bold text-transparent">
            Featured Projects
          </h1>

          <p className="mt-3 max-w-[70ch] text-sm leading-6 text-white">
            A collection of projects I&apos;ve designed and developed with a
            focus on modern interfaces, smooth interactions, scalable
            architecture, and meaningful user experiences. Each project reflects
            my approach to turning ideas and designs into polished, functional
            digital experiences.
          </p>
        </div>

        {/* Tabs */}
        <LiquidGlass
          className="h-fit w-fit px-1 py-0.5"
          radius={50}
          tint={glassTint}
          frost={glassFrost}
        >
          <div
            className="relative grid items-center gap-1"
            role="group"
            aria-label="Filter projects"
            style={{
              gridTemplateColumns: `repeat(${tabs.length}, minmax(0, 1fr))`,
            }}
          >
            <LiquidGlass
              className="absolute inset-y-0.5 z-0 transition-transform duration-300 ease-out cursor-pointer"
              style={{
                position: "absolute",
                top: 2,
                height: "calc(100% - 4px)",
                left: 0,
                width: `calc((100% - ${(tabs.length - 1) * 4}px) / ${tabs.length})`,
                transform: `translateX(calc(${activeIndex} * (100% + 4px)))`,
                pointerEvents: "none",
              }}
              tint={0.5}
              radius={50}
              frost={1}
            >
              <span />
            </LiquidGlass>
            {tabs.map((tab) => (
              <button
                key={tab.key}
                type="button"
                aria-pressed={activeTab === tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative z-10 whitespace-nowrap rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  activeTab === tab.key
                    ? "text-green-300"
                    : "text-white/75 hover:text-white"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </LiquidGlass>
      </div>
      <LiquidGlass
        className="mt-10"
        tint={glassTint}
        frost={glassFrost}
        targets=".project-glass-target"
      >
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </LiquidGlass>
    </div>
  );
}
