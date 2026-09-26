import React from "react";
import LiquidGlass from "../LiquideGlass/LiquideGlass";
import { useSettings } from "@/context/SettingsContext";
import { RiGithubLine } from "react-icons/ri";
import { CiMonitor } from "react-icons/ci";

export default function ProjectCard() {
  const { glassFrost, glassTint } = useSettings();
  return (
    <LiquidGlass className="" radius={16} tint={glassTint} frost={glassFrost}>
      <div>
        <img
          src="https://plus.unsplash.com/premium_photo-1726704048841-50f7864d3e11?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d2Vic2l0ZSUyMGJhbm5lcnxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="rounded-t-2xl h-40 w-full object-cover"
        />
        <div className="p-4">
          <div>
            <h2 className="text-2xl font-semibold">Name of project</h2>
            <p className="line-clamp-2 text-sm font-medium text-gray-200">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptatibus vel mollitia ea molestiae neque, dolorem rem.
              Corrupti illum corporis assumenda.
            </p>
          </div>
          <div className="mt-2">
            <p className="text-[10px] px-4 py-1 border border-white/20 w-fit rounded-full bg-white/5">
              React
            </p>
          </div>
        </div>
        <div className="border-t border-white/20 p-4 flex gap-4">
          <LiquidGlass
            className="p-1 w-fit px-3 capitalize cursor-pointer"
            radius={4}
          >
            <a href="" className="flex items-center">
              <RiGithubLine size={24} /> Github Repo
            </a>
          </LiquidGlass>
          <LiquidGlass
            className="p-1 w-fit px-3 capitalize cursor-pointer"
            radius={4}
          >
            <a href="" className="flex items-center">
              <CiMonitor size={24} /> Live Site
            </a>
          </LiquidGlass>
        </div>
      </div>
    </LiquidGlass>
  );
}
