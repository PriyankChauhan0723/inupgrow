"use client";

import Image from "next/image";
import { sliderData } from "@/data/sliderData";

type StatsSliderProps = {
  variant?: "default" | "hero" | "light";
};

export default function StatsSlider({ variant = "default" }: StatsSliderProps) {
  const duplicatedData = [...sliderData, ...sliderData];
  const isHero = variant === "hero";
  const isLight = variant === "light";

  return (
    <div
      className={`w-full py-5 md:py-6 overflow-hidden ${
        isHero ? "bg-[#083C77]" : isLight ? "bg-[#E7F2FD] border-t" : "bg-white py-6 md:py-8"
      }`}
      style={isLight ? { backgroundColor: "#E7F2FD", borderColor: "#9CA3AF" } : undefined}
    >
      <div className="relative w-full">
        <div className="overflow-hidden w-full">
          <div className="flex items-center animate-infinite-scroll whitespace-nowrap w-max">
            {duplicatedData.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="flex items-center gap-2 md:gap-3 px-4 md:px-6 lg:px-8 flex-shrink-0"
              >
                <div
                  className={`flex-shrink-0 w-4 h-4 md:w-5 md:h-5 ${isHero ? "[filter:brightness(0)_saturate(1)_invert(0.89)_sepia(0.45)_saturate(8)_hue-rotate(5deg)]" : ""}`}
                  aria-hidden="true"
                >
                  <Image
                    src="/Vector.png"
                    alt=""
                    width={20}
                    height={20}
                    className="w-full h-full object-contain"
                  />
                </div>

                <div className="flex items-center gap-1 md:gap-1.5 whitespace-nowrap">
                  {isHero ? (
                    <>
                      <span className="text-[#FEE86A] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">
                        {item.value}
                      </span>
                      <span className="text-[#93C5FD] text-sm md:text-base whitespace-nowrap">/</span>
                      <span className="text-[#BFDBFE] text-xs md:text-sm lg:text-base whitespace-nowrap">
                        {item.description}
                      </span>
                    </>
                  ) : isLight ? (
                    <>
                      <span className="text-[#2563EB] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">
                        {item.value}
                      </span>
                      <span className="text-gray-900 text-sm md:text-base whitespace-nowrap">/</span>
                      <span className="text-gray-900 text-xs md:text-sm lg:text-base whitespace-nowrap">
                        {item.description}
                      </span>
                    </>
                  ) : (
                    <>
                      <span className="text-[#2563EB] font-semibold text-sm md:text-base lg:text-lg whitespace-nowrap">
                        {item.value}
                      </span>
                      <span className="text-gray-900 text-sm md:text-base whitespace-nowrap">/</span>
                      <span className="text-gray-900 text-xs md:text-sm lg:text-base whitespace-nowrap">
                        {item.description}
                      </span>
                    </>
                  )}
                </div>

                {!isHero && index < duplicatedData.length - 1 && (
                  <div className={`h-5 md:h-6 lg:h-8 w-px mx-3 md:mx-4 lg:mx-6 flex-shrink-0 ${isLight ? "bg-blue-200/70" : "bg-gray-200"}`} />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
