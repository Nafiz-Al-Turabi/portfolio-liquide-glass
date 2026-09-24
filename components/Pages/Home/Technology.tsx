import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import React from "react";
const technologies = [
  { img: "/technology/pngwing.com (1).png", name: "HTML" },
  { img: "/technology/pngwing.com (2).png", name: "CSS" },
  { img: "/technology/pngwing.com (6).png", name: "Tailwind" },
  { img: "/technology/pngwing.com (3).png", name: "JS" },
  { img: "/technology/pngwing.com (4).png", name: "React.js" },
  { img: "/technology/pngwing.com (5).png", name: "Next.js" },
  { img: "/technology/pngwing.com (13).png", name: "Vue.js" },
  { img: "/technology/pngwing.com (14).png", name: "Nuxt.js" },
  { img: "/technology/pngwing.com (12).png", name: "Node.js" },
  { img: "/technology/pngwing.com (8).png", name: "Express.js" },
  // { img: "/technology/pngwing.com (16).png", name: "Docker" },
];
export default function Technology() {
  return (
    <div className="mt-20">
      <h1 className="text-lg font-bold tracking-wide mb-4 text-white">
        My Tech Stack
      </h1>
      <LiquidGlass className="p-6">
        <div className="flex flex-wrap justify-between gap-5">
          {technologies.map((technology) => (
            <div>
              <LiquidGlass key={technology.name} className="p-2 w-fit">
                <img
                  src={technology.img}
                  alt={technology.name}
                  className="h-16 w-16 object-contain"
                />
              </LiquidGlass>
              <p className="text-center mt-2 text-white font-semibold tracking-wide">{technology.name}</p>
            </div>
          ))}
        </div>
      </LiquidGlass>
    </div>
  );
}
