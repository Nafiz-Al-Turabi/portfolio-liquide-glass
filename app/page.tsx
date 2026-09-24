import Technology from "@/components/Pages/Home/Technology";
import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";

export default function Home() {
  return (
    <div className="pt-20 fade-in">
      <div className="text-white min-h-[80%] flex items-center justify-between ">
        <div className="">
          <p className="text-xs font-semibold">Hi, I'm</p>
          <h1 className="bg-linear-to-l to-white  from-green-500 text-5xl font-bold w-fit text-transparent bg-clip-text">
            Nafiz Al Turabi
          </h1>
          <h3 className="text-2xl font-medium my-3">Front-end Developer</h3>
          <p className="text-sm lg:w-[70ch] ">
            Hello! I’m Nafiz Al Turabi. Web Developer with over 1.5 years of
            learning experience and 3 months working experience. Experienced
            with all stages of the development cycle for dynamic web projects.
          </p>
          <div className="flex gap-4 mt-4">
            <LiquidGlass
              className="w-fit px-6 py-2 hover:scale-105 duration-300 cursor-pointer"
              radius={50}
              frost={1}
              tint={0.5}
            >
              <Link href="/">View Projects</Link>
            </LiquidGlass>
            <LiquidGlass
              className="px-6 py-2 w-fit hover:scale-105 duration-300 cursor-pointer"
              radius={50}
              tint={0}
            >
              <Link href="/"> Contact Me</Link>
            </LiquidGlass>
          </div>
          <div className="mt-10 flex  gap-10">
            <div>
              <h2 className="text-xl font-bold">2.5+</h2>
              <p className="text-sm font-semibold tracking-wide">
                Years Experience
              </p>
            </div>
            <div>
              <h2 className="text-xl font-bold">20+</h2>
              <p className="text-sm font-semibold tracking-wide">Projects</p>
            </div>
            <div>
              <h2 className="text-xl font-bold">100%</h2>
              <p className="text-sm font-semibold tracking-wide">
                Clients Satisfaction
              </p>
            </div>
          </div>
        </div>
        <div>
          <LiquidGlass
            className="p-6 w-60 lg:w-80 h-80 rotate-y-[-30deg] rotate-x-20 rotate-z-6 transition-transform duration-500 hover:rotate-y-[5deg] hover:rotate-x-0 hover:rotate-z-0"
            radius={16}
          >
            <img
              src="/profile.png"
              alt=""
              className="rounded-full w-30 border border-gray-400/50 p-1 "
            />
            <h1 className="text-sm font-bold tracking-wide mt-4">
              Nafiz AL Turabi
            </h1>
            <p className="text-sm font-thin">Front-end Developer</p>
            <div className="flex items-center gap-2 text-xs mt-4 bg-green-500/10 text-green-500 w-fit px-4 py-2 rounded-full">
              <div className="h-2 w-2 bg-green-500 rounded-full"></div>{" "}
              Available For Work
            </div>
            <div className="flex justify-end">
              <Link href="/">
                <LiquidGlass
                  className="w-fit p-2 hover:scale-105 duration-300"
                  radius={50}
                  tint={0}
                >
                  <MdOutlineArrowOutward size={24} />
                </LiquidGlass>
              </Link>
            </div>
          </LiquidGlass>
        </div>
      </div>
      <Technology />
    </div>
  );
}
