"use client";

import React from "react";
import Image from "next/image";
import SectionTitle from "./SectionTitle";

const HEADER_BLUE = "#2962FF";
const STEPS = [
  { label: "Sign Up", bg: HEADER_BLUE, textWhite: true, icon: "person" },
  { label: "Complete Profile", bg: "#E6FFFA", textWhite: false, icon: "checklist" },
  { label: "Choose Class", bg: "#FFFACD", textWhite: false, icon: "sparkle" },
  { label: "Learn", bg: "#B2EBF2", textWhite: false, icon: "target" },
  { label: "Apply to Schools", bg: "#E6E6FA", textWhite: false, icon: "star" },
];

function StepIcon({ type }: { type: string }) {
  const cls = "w-4 h-4 md:w-5 md:h-5 flex-shrink-0";
  if (type === "person")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "inherit" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    );
  if (type === "checklist")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "inherit" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    );
  if (type === "sparkle")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "inherit" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    );
  if (type === "target")
    return (
      <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "inherit" }}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    );
  return (
    <svg className={cls} fill="none" stroke="currentColor" viewBox="0 0 24 24" style={{ color: "inherit" }}>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

export default function StepsToJoinSection() {
  return (
    <section className="relative w-full min-h-0 md:min-h-[500px] lg:min-h-[600px] py-12 md:py-16 lg:py-24 px-4 md:px-6 lg:px-8 overflow-hidden border-t border-b" style={{ borderColor: "#9CA3AF" }}>
      <div className="absolute inset-0 bg-[#E9F0FA]" />
      <div className="absolute inset-0 z-0 w-1/2 left-0">
        <Image
          src="/bg-1.jpeg"
          alt=""
          fill
          className="object-cover object-right opacity-30"
          sizes="50vw"
        />
      </div>
      <div className="absolute inset-0 z-0 w-1/2 left-1/2">
        <Image
          src="/bg-2.jpeg"
          alt=""
          fill
          className="object-cover object-left opacity-30"
          sizes="50vw"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <SectionTitle sectionNumber={3} title="STEPS TO JOIN" showTopBorder={false} className="mb-6 md:mb-8" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-stretch">
          <div className="lg:col-span-5 xl:col-span-5 flex flex-col">
            <div
              className="rounded-2xl md:rounded-3xl overflow-hidden shadow-lg bg-white flex flex-col flex-shrink-0 w-full max-w-full lg:w-[514px] lg:h-[763px] min-h-[420px] md:min-h-[520px] lg:min-h-0"
            >
              <div
                className="px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-5 flex items-start justify-between gap-2 md:gap-3"
                style={{ backgroundColor: "#0F6CD7" }}
              >
                <div className="flex flex-col min-w-0">
                  <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl leading-tight flex items-center gap-1.5 flex-wrap">
                    <span className="text-white">5 steps for </span>
                    <span style={{ color: "#FFD700" }}>student</span>
                    <Image
                      src="/chevron-down-icon.png"
                      alt=""
                      width={28}
                      height={28}
                      className="w-5 h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 object-contain inline-block flex-shrink-0"
                    />
                  </p>
                  <p className="text-white font-bold text-xl md:text-2xl lg:text-3xl leading-tight mt-0.5">
                    <span className="text-white">and </span>
                    <span style={{ color: "#FFD700" }}>zero stress</span>
                  </p>
                </div>
                <div className="w-7 h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 flex items-center justify-center flex-shrink-0 mt-1 md:mt-2">
                  <Image
                    src="/rank-icon.png"
                    alt=""
                    width={36}
                    height={36}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
              <div className="px-4 py-4 md:px-5 md:py-5 lg:px-6 lg:py-6 flex-1 min-h-0 flex flex-col items-center justify-center">
                <div className="relative flex flex-col gap-4 md:gap-6 lg:gap-8">
                  <div
                    className="absolute left-3 md:left-[13px] lg:left-[15px] top-3 bottom-3 md:top-4 md:bottom-4 w-0.5 z-0"
                    style={{ backgroundColor: HEADER_BLUE }}
                    aria-hidden
                  />
                  {STEPS.map((step) => (
                    <div key={step.label} className="relative z-10 flex items-center gap-3 md:gap-4">
                      <div className="flex-shrink-0 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: HEADER_BLUE }}>
                        <svg className="w-3 h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 text-white" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div
                        className="rounded-full px-3 py-2 md:px-4 md:py-2.5 lg:px-5 lg:py-3 inline-flex items-center gap-2 md:gap-2.5 text-xs md:text-sm font-medium w-fit min-w-0"
                        style={{
                          backgroundColor: step.bg,
                          color: step.textWhite ? "#fff" : "#374151",
                        }}
                      >
                        <StepIcon type={step.icon} />
                        {step.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-7 flex items-center justify-center lg:justify-end overflow-visible ml-0 md:ml-0 lg:ml-4 xl:ml-8">
            <div className="relative overflow-visible w-full max-w-full lg:w-[572px] lg:h-[302px] h-auto min-h-[280px] md:min-h-[300px] lg:min-h-0">
              <div
                className="absolute top-0 left-0 rounded-xl md:rounded-2xl z-0 translate-x-3 translate-y-3 md:translate-x-6 md:translate-y-6 lg:translate-x-10 lg:translate-y-10 w-[calc(100%-12px)] h-[calc(100%-12px)] md:w-[calc(100%-24px)] md:h-[calc(100%-24px)] lg:w-[560px] lg:h-[290px] lg:left-0 lg:top-0"
                style={{ backgroundColor: "#B7D7FA" }}
                aria-hidden
              />
              <div
                className="absolute top-0 left-0 rounded-xl md:rounded-2xl z-0 translate-x-1.5 translate-y-1.5 md:translate-x-3 md:translate-y-3 lg:translate-x-5 lg:translate-y-5 w-[calc(100%-6px)] h-[calc(100%-6px)] md:w-[calc(100%-12px)] md:h-[calc(100%-12px)] lg:w-[560px] lg:h-[290px] lg:left-0 lg:top-0"
                style={{ backgroundColor: "#88BCF7" }}
                aria-hidden
              />
              <div
                className="absolute top-0 left-0 rounded-xl md:rounded-2xl z-10 flex flex-col justify-center w-full h-full min-h-[280px] md:min-h-[300px] lg:w-[560px] lg:h-[290px] lg:min-h-0"
                style={{ backgroundColor: "#0F6CD7" }}
              >
                <div className="px-4 py-5 md:px-6 md:py-6 lg:px-8 lg:py-8">
                  <h2 className="text-white text-lg md:text-2xl lg:text-4xl font-bold leading-tight mb-3 md:mb-4">
                    Whether you&apos;re learning,
                    <br />
                    teaching, or managing a
                    <br />
                    school
                  </h2>
                  <p className="text-white text-sm md:text-base lg:text-lg leading-relaxed">
                    we simplify your journey with clear, guided steps that load as you scroll. Hover to explore details in real-time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
