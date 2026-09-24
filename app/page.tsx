import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-white min-h-[80%] flex items-center justify-between ">
      <div className="">
        <p className="text-xs font-semibold">Hi, I'm</p>
        <h1 className="bg-linear-to-l to-white  from-green-500 text-5xl font-bold w-fit text-transparent bg-clip-text">
          Nafiz Al Turabi
        </h1>
        <h3 className="text-2xl font-medium my-3">Front-end Developer</h3>
        <p className="text-sm w-[70ch] ">
          Hello! I’m Nafiz Al Turabi. Web Developer with over 1.5 years of
          learning experience and 3 months working experience. Experienced with
          all stages of the development cycle for dynamic web projects.
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
      </div>
      <div>
        <LiquidGlass className="pt-4" radius={16}>
          <img src="/profile.png" alt="" className="rounded-2xl w-96" />
        </LiquidGlass>
      </div>
    </div>
  );
}
