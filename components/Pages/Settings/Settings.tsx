import LiquidGlass from "@/components/Resuable/LiquideGlass/LiquideGlass";
import { LuImagePlus, LuSunMoon } from "react-icons/lu";

export default function Settings() {
  return (
    <div className="text-white">
      <div className="mb-4">
        <h1 className="heading-font text-3xl">Settings</h1>
        <p>
          Fine-tune your experience, manage your preferences, and keep
          everything just the way you like it.
        </p>
      </div>

      <div className="flex  justify-between items-start">
        <LiquidGlass className="w-56 p-4" tint={0} radius={10}>
          <input type="file" id="image" className="hidden" />
          <label htmlFor="image" className="cursor-pointer">
            <span className="border border-dashed border-gray-600 backdrop-blur-sm p-6 w-full flex justify-center items-center rounded-[10px]">
              <LuImagePlus className="text-3xl text-gray-600" />
            </span>
          </label>
        </LiquidGlass>
        
      </div>
    </div>
  );
}
