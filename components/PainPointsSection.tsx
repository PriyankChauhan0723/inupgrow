"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import ArrowButton from "./ArrowButton";
import SectionTitle from "./SectionTitle";

const TABS = ["Students", "Teachers", "Schools"] as const;

const PAIN_POINT_CARDS = [
  {
    id: 1,
    image: "/one-time-document.png",
    icon: "/one-icon.png",
    title: "One-time Document Upload",
    description: "Apply to multiple schools without resubmitting documents.",
  },
  {
    id: 2,
    image: "/application-tracking.png",
    icon: "/two-icon.png",
    title: "Application Tracking",
    description: "Get real-time updates and status for each school.",
  },
  {
    id: 3,
    image: "/multilingual-support.png",
    icon: "/three-icon.png",
    title: "Multilingual support",
    description: "Learn in your preferred language (Hindi, English, more coming)",
  },
  {
    id: 4,
    image: "/flipbook.png",
    icon: "/four-icon.png",
    title: "Flipbook + Video Learning",
    description: "Access interactive books with teacher videos and practice quizzes.",
  },
];

export default function PainPointsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<(typeof TABS)[number]>("Students");

  const CARD_WIDTH = 448;
  const CARD_HEIGHT = 800;
  const GAP = 24;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const step = CARD_WIDTH + GAP;
    const newScroll = scrollRef.current.scrollLeft + (direction === "left" ? -step : step);
    scrollRef.current.scrollTo({ left: Math.max(0, newScroll), behavior: "smooth" });
  };

  return (
    <section className="relative w-full bg-white py-16 md:py-24">
      <div className="px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle sectionNumber={2} title="PAIN POINTS" showTopBorder={false} />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12 mt-10">
            <div className="lg:col-span-5">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                We built Inupgro to
                <br />
                Solve What Actually Matters
              </h2>
            </div>
            <div className="lg:col-span-7 flex items-end">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-xl text-right lg:text-left">
                From learning struggles to school admissions chaos and underpaid teachers – everything you see here is shaped by real user pain points, not assumptions.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
            <div className="flex items-center gap-2">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-colors ${
                    activeTab === tab
                      ? "bg-[#2563EB] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-700 text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                See All Features
              </a>
              <div className="flex items-center gap-1">
                <ArrowButton direction="left" onClick={() => scroll("left")} aria-label="Scroll left" />
                <ArrowButton direction="right" onClick={() => scroll("right")} aria-label="Scroll right" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto overflow-y-hidden scroll-smooth pb-2 pl-4 md:pl-8 pr-0 scrollbar-hide"
        >
            {PAIN_POINT_CARDS.map((card) => (
              <article
                key={card.id}
                className="flex-shrink-0 w-[280px] md:w-[448px] h-[500px] md:h-[800px] bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="relative w-full h-[180px] md:h-[520px] bg-gray-100 overflow-hidden rounded-2xl">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover object-top"
                    sizes="448px"
                  />
                </div>
                <div className="flex-1 flex flex-col p-6 md:p-8 bg-[#FAFAFA]">
                  <div className="mb-4 w-[68px] h-[68px] rounded-full bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 overflow-hidden">
                    <Image
                      src={card.icon}
                      alt=""
                      width={68}
                      height={68}
                      className="w-[68px] h-[68px] object-contain"
                    />
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg md:text-xl mb-2">{card.title}</h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 flex-1">
                    {card.description}
                  </p>
                  <div className="flex justify-end">
                    <ArrowButton direction="right" aria-label={`Read more about ${card.title}`} />
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </section>
  );
}
