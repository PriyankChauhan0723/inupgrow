"use client";

import React, { useState } from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const FEATURES = [
  {
    id: "smart-sync",
    label: "Smart Application Sync",
    tag: "SMART APPLICATION SYNC",
    headline: "Upload Once, Apply Anywhere",
    description:
      "Submit your documents once and use them across multiple school applications — no resubmitting, no stress.",
    benefits: [
      "ONE-TIME UPLOAD",
      "NO REPEATED SUBMISSIONS",
      "AUTO-SYNC WITH NEW SCHOOLS",
      "SMART ALERTS FOR MISSING FILES",
    ],
  },
  {
    id: "flipbooks",
    label: "Flipbooks with Embedded Videos",
    tag: "FLIPBOOKS WITH EMBEDDED VIDEOS",
    headline: "Rich Content, One Place",
    description:
      "Create and share interactive flipbooks with embedded videos for engaging learning experiences.",
    benefits: [
      "EMBED VIDEOS IN PAGES",
      "INTERACTIVE FLIPBOOKS",
      "SHARE WITH ONE LINK",
      "TRACK ENGAGEMENT",
    ],
  },
  {
    id: "analytics",
    label: "Performance Analytics for Teachers",
    tag: "PERFORMANCE ANALYTICS",
    headline: "Data That Drives Growth",
    description:
      "See where your students are from, what topics work best, and grow your reach with clear insights.",
    benefits: [
      "REAL-TIME ANALYTICS",
      "STUDENT INSIGHTS",
      "TOPIC PERFORMANCE",
      "EARNINGS TRACKING",
    ],
  },
  {
    id: "dashboard",
    label: "Automated School Dashboard",
    tag: "AUTOMATED SCHOOL DASHBOARD",
    headline: "One Dashboard, Full Control",
    description:
      "Manage admissions, hiring, and operations from a single automated dashboard.",
    benefits: [
      "UNIFIED VIEW",
      "AUTOMATED WORKFLOWS",
      "ADMISSIONS & HIRING",
      "REAL-TIME UPDATES",
    ],
  },
  {
    id: "jobs",
    label: "Job & School Matching",
    tag: "JOB & SCHOOL MATCHING",
    headline: "Right Fit, Right Time",
    description:
      "Connect teachers with schools and students with the right institutions through smart matching.",
    benefits: [
      "SMART MATCHING",
      "APPLY TO MULTIPLE SCHOOLS",
      "JOB ALERTS",
      "TRACK APPLICATIONS",
    ],
  },
];

function FeatureImage() {
  const [imgError, setImgError] = useState(false);
  return (
    <div className="relative w-full flex items-center justify-center p-4 md:p-6 lg:p-8">
      <div className="relative w-full max-w-[618px]" style={{ aspectRatio: "618/495" }}>
        {!imgError ? (
          <Image
            src="/key-feature.png"
            alt="Smart Application Sync"
            width={618}
            height={495}
            className="object-contain w-full h-full rounded-xl"
            sizes="(max-width: 768px) 100vw, 618px"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="w-full h-full min-h-[280px] rounded-xl bg-white/60 border border-gray-200 flex items-center justify-center text-gray-500 text-sm">
            Feature image
          </div>
        )}
      </div>
    </div>
  );
}

export default function KeyFeaturesSection() {
  const [activeId, setActiveId] = useState(FEATURES[0].id);
  const activeFeature = FEATURES.find((f) => f.id === activeId) ?? FEATURES[0];

  return (
    <section className="relative w-full bg-white py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionTitle sectionNumber={4} title="KEY FEATURES" className="mb-6 md:mb-8 lg:mb-10" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12">
          <div className="lg:col-span-5">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Key Features
            </h2>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-900 leading-tight mt-1 lg:ml-4">
              That Power Inupgro
            </h2>
          </div>
          <div className="lg:col-span-7 flex items-center">
            <p className="text-gray-600 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl">
              Everything You Need, Nothing You Don&apos;t. From student learning to school hiring — Inupgro&apos;s
              features are designed for simplicity, speed, and real results.
            </p>
          </div>
        </div>

        <div
          className="w-full max-w-[1440px] mx-auto rounded-xl md:rounded-2xl overflow-hidden shadow-xl border border-gray-100 flex flex-col bg-[#E7F2FD] min-h-[360px] md:min-h-[480px] lg:min-h-[667px]"
          style={{ backgroundColor: "#E7F2FD" }}
        >
          <div className="flex w-full justify-start lg:justify-evenly gap-4 md:gap-6 border-b border-gray-300 px-4 md:px-6 pt-4 md:pt-6 pb-3 md:pb-4 overflow-x-auto overflow-y-hidden bg-[#E7F2FD] scrollbar-hide">
            {FEATURES.map((f) => (
              <button
                key={f.id}
                onClick={() => setActiveId(f.id)}
                className={`flex-shrink-0 text-center whitespace-nowrap text-xs md:text-sm font-bold transition-colors pb-1 border-b-2 -mb-[13px] md:-mb-[17px] ${
                  activeId === f.id
                    ? "text-[#2563EB] border-[#2563EB]"
                    : "text-gray-500 border-transparent hover:text-gray-700"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <div className="flex flex-col lg:flex-row flex-1 min-h-0">
            <div className="lg:w-[55%] xl:w-[52%] flex-shrink-0 flex items-center justify-center order-2 lg:order-1">
              <FeatureImage />
            </div>
            <div className="lg:w-[45%] xl:w-[48%] p-5 md:p-6 lg:p-8 xl:p-10 lg:py-12 flex flex-col justify-center order-1 lg:order-2">
              <p className="text-[#2563EB] font-semibold text-[10px] md:text-xs uppercase tracking-widest mb-1.5 md:mb-2">
                {activeFeature.tag}
              </p>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4">
                {activeFeature.headline}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-6 md:mb-8">
                {activeFeature.description}
              </p>
              <ul className="space-y-2 md:space-y-3 mb-6 md:mb-10">
                {activeFeature.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2 md:gap-3 text-gray-700 text-xs md:text-sm font-medium uppercase tracking-wide">
                    <span className="flex-shrink-0 w-4 h-4 md:w-5 md:h-5 rounded-full bg-[#2563EB] flex items-center justify-center">
                      <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap items-center gap-4 md:gap-6">
                <button
                  type="button"
                  className="px-5 py-2.5 md:px-6 md:py-3 bg-[#2563EB] hover:bg-[#1d4ed8] text-white text-sm md:text-base font-semibold rounded-full transition-colors"
                >
                  Join for Free
                </button>
                <a
                  href="#"
                  className="inline-flex items-center gap-1.5 text-black text-sm md:text-base font-semibold hover:underline"
                >
                  See Features
                  <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
