import Image from "next/image";
import { blogData } from "@/data/blogData";
import SectionTitle from "./SectionTitle";

export default function BlogSection() {
  return (
    <section
      className="relative w-full py-12 md:py-16 lg:py-20"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionTitle sectionNumber={7} title="BLOG & RESOURCES" className="mb-8 md:mb-12" />

        <div className="mb-12 md:mb-16">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 lg:gap-8">
            <div className="lg:flex-1 lg:max-w-2xl">
              <h3 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-semibold text-gray-900 leading-tight" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
                Stay updated on the latest trends and strategies to enhance your learning platform.
              </h3>
            </div>

            <div className="flex-shrink-0 lg:self-end">
              <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-medium flex items-center justify-center gap-3 transition-all group shadow-md hover:shadow-lg">
                <span className="text-sm md:text-base">Checkout More</span>
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-3.5 h-3.5 text-[#2563EB] group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          <div className="md:col-span-2 flex flex-col h-full">
            <div className="relative w-full aspect-[16/9] md:aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-6 group">
              <Image
                src={blogData[0].image}
                alt={blogData[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />

              {blogData[0].hasOverlay && blogData[0].overlayText && (
                <div className="absolute bottom-6 left-6 right-6 md:left-8 md:right-auto bg-white rounded-full pl-6 pr-4 py-3 flex items-center gap-4 shadow-lg border border-gray-100 max-w-sm">
                  <span className="text-gray-900 text-sm md:text-base font-semibold truncate flex-1">
                    {blogData[0].overlayText}
                  </span>
                  <svg className="w-5 h-5 text-[#2563EB] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              )}
            </div>

            <p className="text-gray-500 text-xs md:text-sm font-medium mb-3" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              {blogData[0].date}
            </p>

            <h4 className="text-gray-900 text-lg md:text-xl font-bold leading-tight hover:text-[#2563EB] transition-colors" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              {blogData[0].title}
            </h4>
          </div>

          <div className="flex flex-col h-full">
            <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-4 group">
              <Image
                src={blogData[1].image}
                alt={blogData[1].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-500 text-xs font-medium mb-2" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              {blogData[1].date}
            </p>

            <h4 className="text-gray-900 text-base font-semibold leading-snug hover:text-[#2563EB] transition-colors" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              {blogData[1].title}
            </h4>
          </div>

          <div className="flex flex-col h-full">
            <div className="relative w-full aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden mb-4 group">
              <Image
                src={blogData[2].image}
                alt={blogData[2].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <p className="text-gray-500 text-xs font-medium mb-2" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              {blogData[2].date}
            </p>

            <h4 className="text-gray-900 text-base font-semibold leading-snug hover:text-[#2563EB] transition-colors" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              {blogData[2].title}
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
}
