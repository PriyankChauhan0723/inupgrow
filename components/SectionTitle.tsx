"use client";

interface SectionTitleProps {
  sectionNumber: number;
  title: string;
  totalSections?: number;
  className?: string;
  showTopBorder?: boolean;
}

export default function SectionTitle({
  sectionNumber,
  title,
  totalSections = 7,
  className = "",
  showTopBorder = false,
}: SectionTitleProps) {
  const numStr = String(sectionNumber).padStart(2, "0");
  const totalStr = String(totalSections).padStart(2, "0");

  return (
    <div
      className={`w-full flex items-center justify-between gap-4 py-4 md:py-5 ${
        showTopBorder ? "border-t-2 border-[#2563EB]" : ""
      } ${className}`}
      style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}
    >
      <span className="text-gray-800 font-semibold text-base md:text-lg flex-shrink-0 ml-2 lg:ml-0 lg:-ml-12">
        {numStr}
      </span>
      <span className="uppercase tracking-[0.15em] md:tracking-[0.2em] font-bold text-gray-900 text-base md:text-lg flex-1 text-left pl-8 md:pl-12">
        {title}
      </span>
      <span className="text-gray-800 font-semibold text-base md:text-lg flex-shrink-0">
        /{totalStr}
      </span>
    </div>
  );
}
