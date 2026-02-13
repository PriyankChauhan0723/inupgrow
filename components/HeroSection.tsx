import Image from "next/image";
import StatsSlider from "@/components/StatsSlider";

export default function HeroSection() {
  return (
    <section className="relative w-full -mt-16 md:-mt-[4.5rem] lg:-mt-20" aria-label="Hero">
      <div className="relative z-10 pt-16 md:pt-[4.5rem] lg:pt-20">
        <main className="px-4 md:px-6 lg:px-8 pb-12 md:pb-14 lg:pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mt-6 md:mt-7 lg:mt-8 mb-8 md:mb-10 lg:mb-12 px-2 md:px-3 lg:px-4 relative min-h-0 lg:min-h-[70vh] flex flex-col items-center">
              <h1
                className="text-white mb-4 md:mb-5 lg:mb-6 relative z-0 mx-auto font-bold max-w-[90vw] sm:max-w-none"
                style={{
                  fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif',
                  fontSize: "clamp(1.75rem, 5vw, 4rem)",
                  lineHeight: 1.25,
                  letterSpacing: "-0.02em",
                }}
              >
                <span className="block">
                  <span className="relative inline-block">
                    Learn
                  </span>{" "}
                  Smarter. Teach
                </span>
                <span className="block">Better. Grow Digitally.</span>
              </h1>

              <p className="text-white text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed px-1">
                Inupgro lets students explore, teachers earn, and schools scale — all in one platform designed to evolve with education.
              </p>

              <div className="flex flex-col items-center mt-6 md:mt-8 lg:mt-10 mb-6 px-2 md:px-3 lg:px-4 w-full max-w-2xl relative">
                <div
                  className="w-full rounded-2xl md:rounded-[28px] lg:rounded-[32px] p-[2px] md:p-[3px] relative bg-[#E7F2FD]"
                  style={{
                    boxShadow: "0 0 0 1px rgba(59, 130, 246, 0.4), 0 0 20px rgba(59, 130, 246, 0.2)",
                  }}
                >
                  <div className="w-full rounded-[20px] md:rounded-[26px] lg:rounded-[28px] overflow-hidden bg-[#f5f5f5] shadow-md min-h-0 flex flex-col">
                    <div className="flex flex-col md:flex-row md:items-stretch md:min-h-[56px]">
                      <button
                        type="button"
                        className="flex-1 flex items-center gap-2 md:gap-3 pl-4 md:pl-5 pr-3 py-3 text-left hover:bg-gray-100/80 transition-colors min-w-0 rounded-t-[20px] md:rounded-t-none md:rounded-l-[26px] lg:rounded-l-[28px] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563EB]/50 focus-visible:ring-offset-2"
                        aria-label="Choose your career goal"
                      >
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <span className="relative inline-block font-bold text-gray-800 text-xs md:text-sm lg:text-base uppercase tracking-tight min-w-0">
                          CHOOSE YOUR CAREER GOAL
                          <svg className="absolute left-0 right-0 -bottom-0.5 w-full h-1 text-[#2563EB]" viewBox="0 0 200 6" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M0 3 Q15 1 30 3 T60 3 T90 3 T120 3 T150 3 T200 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                          </svg>
                        </span>
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-gray-500 flex-shrink-0 ml-auto hidden md:block" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      <div className="flex items-center p-2 md:p-1.5 pr-2 md:pr-1.5 flex-shrink-0 border-t border-gray-200/80 md:border-t-0">
                        <button
                          type="button"
                          className="w-full md:w-auto rounded-xl md:rounded-full bg-[#2563EB] hover:bg-[#1d4ed8] text-white pl-4 pr-4 md:pl-5 md:pr-5 py-2.5 md:py-3 font-semibold flex items-center justify-center gap-2 transition-colors whitespace-nowrap border-2 border-white/90 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#2563EB]"
                          aria-label="Show me how"
                        >
                          <svg className="w-4 h-4 md:w-5 md:h-5 flex-shrink-0" fill="#FF9800" viewBox="0 0 20 20" aria-hidden="true">
                            <path d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" />
                          </svg>
                          <span className="text-sm md:text-base">Show Me How</span>
                        </button>
                      </div>
                    </div>
                    <div className="px-4 md:px-5 pb-4 pt-0">
                      <span className="relative inline-block text-gray-500 text-xs md:text-sm">
                        Software Developer, Product Manager, Marketing Specialist, Business Analyst, + 5 more
                        <svg className="absolute left-0 right-0 -bottom-1 w-full h-1 text-[#2563EB]" viewBox="0 0 200 6" preserveAspectRatio="none" aria-hidden="true">
                          <path d="M0 3 Q12 0.5 25 3 T50 3 T75 3 T100 3 T125 3 T150 3 T200 3" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="hidden xl:flex items-start absolute right-0 top-1/2 translate-x-full translate-y-1 ml-6" aria-hidden="true">
                  <Image src="/Media/arrow.png" alt="" width={52} height={52} className="flex-shrink-0 opacity-90" />
                  <div className="text-left ml-2 mt-6 max-w-[185px]">
                    <p className="text-white/80 text-xs leading-relaxed">Not sure how to get there?</p>
                    <p className="text-white/80 text-xs leading-relaxed">We&apos;ll show you every step —</p>
                    <p className="text-white/80 text-xs leading-relaxed">No sign-up required</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-4 right-4 md:top-8 md:right-8 lg:top-12 lg:right-12 w-10 h-10 md:w-16 md:h-16 lg:w-20 lg:h-20 z-10" aria-hidden="true">
                <Image src="/Star 1.png" alt="" width={80} height={80} className="w-full h-full object-contain" />
              </div>
            </div>

            <div className="relative mt-10 md:mt-16 lg:mt-20 pb-0 overflow-visible">
              <div className="absolute left-0 right-0 bottom-0 top-[-12rem] md:top-[-16rem] lg:top-[-20rem] flex items-end justify-center overflow-hidden pointer-events-none z-0">
                <div className="absolute left-1/2 -translate-x-1/2 translate-y-[50%] w-[min(92vw,700px)] aspect-square rounded-full bg-[#4274ad]" />
                <div className="absolute left-1/2 -translate-x-1/2 translate-y-[50%] w-[min(78vw,580px)] aspect-square rounded-full bg-[#6b96c7]" />
                <div className="absolute left-1/2 -translate-x-1/2 translate-y-[50%] w-[min(58vw,460px)] aspect-square rounded-full bg-[#a3bfdf]" />
              </div>

              <div className="absolute left-[18%] md:left-[20%] lg:left-[22%] top-[18%] lg:top-[12%] -translate-x-1/2 -translate-y-1/2 z-20 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 hidden md:block" aria-hidden="true">
                <Image src="/Star 2.png" alt="" width={48} height={48} className="w-full h-full object-contain" />
              </div>

              <div className="absolute left-4 md:left-8 lg:left-12 top-[54%] lg:top-[55%] -translate-y-1/2 z-20 w-44 md:w-52 lg:w-64 hidden lg:block">
                <div className="relative bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">4.8</span>
                    <div className="flex gap-0.5 items-center" aria-hidden="true">
                      {[1, 2, 3, 4].map((i) => (
                        <Image key={i} src="/Media/Star.png" alt="" width={18} height={18} className="w-[18px] h-[18px] object-contain" />
                      ))}
                      <Image src="/Media/Rating-3.png" alt="" width={18} height={18} className="w-[18px] h-[18px] object-contain flex-shrink-0" />
                    </div>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm leading-snug">
                    By students worldwide for quality learning and support.
                  </p>
                </div>
              </div>

              <div className="absolute right-4 md:right-12 lg:right-20 top-[10%] z-20 w-44 md:w-52 lg:w-64 hidden lg:block">
                <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-5 lg:p-6 shadow-xl">
                  <div className="flex -space-x-2 mb-3" aria-hidden="true">
                    {["/Icons.png", "/Icons-1.png", "/Icons-2.png", "/Icons-3.png"].map((src) => (
                      <div key={src} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden flex-shrink-0 bg-gray-100">
                        <Image src={src} alt="" width={40} height={40} className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="mb-2">
                    <span className="text-4xl font-bold text-gray-900">60+</span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    Learners growing with expert guidance from trusted mentors.
                  </p>
                </div>
              </div>

              <div className="relative z-10 flex items-end justify-center gap-0 pb-0">
                <div className="relative z-10 -mr-3 md:-mr-8 lg:-mr-14 w-24 h-32 md:w-36 md:h-48 lg:w-44 lg:h-60 rounded-xl md:rounded-2xl overflow-hidden grayscale opacity-90 flex-shrink-0">
                  <Image
                    src="/indian-girl-2.png"
                    alt=""
                    width={176}
                    height={240}
                    className="w-full h-full object-cover object-top"
                    aria-hidden
                  />
                </div>
                <div className="relative z-20 flex flex-col items-center flex-shrink-0">
                  <div className="relative w-40 h-44 md:w-64 md:h-72 lg:w-80 lg:h-80 rounded-xl md:rounded-2xl overflow-hidden">
                    <Image
                      src="/indian girl.png"
                      alt="Student"
                      width={320}
                      height={320}
                      className="w-full h-full object-cover object-top object-[center_top]"
                    />
                    <div className="absolute bottom-2 left-2 right-2 lg:bottom-3 lg:left-3 lg:right-3 hidden lg:flex justify-center">
                      <div className="flex items-center flex-nowrap gap-0.5 p-1 rounded-full w-full max-w-[90%] min-w-0 bg-[rgba(124,92,76,0.45)] backdrop-blur-md border border-white/10 shadow-lg" role="group" aria-label="Audience type">
                        <button type="button" className="flex-1 min-w-0 py-2 px-2 lg:py-2.5 lg:px-3 rounded-full bg-white text-black font-bold text-[10px] lg:text-xs uppercase shadow-sm transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2" aria-pressed="true" aria-label="Students">
                          STUDENTS
                        </button>
                        <button type="button" className="flex-1 min-w-0 py-2 px-2 lg:py-2.5 lg:px-3 rounded-full bg-transparent text-white font-medium text-[10px] lg:text-xs uppercase hover:text-white/95 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2" aria-pressed="false" aria-label="Teacher">
                          TEACHER
                        </button>
                        <button type="button" className="flex-1 min-w-0 py-2 px-2 lg:py-2.5 lg:px-3 rounded-full bg-transparent text-white font-medium text-[10px] lg:text-xs uppercase hover:text-white/95 transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2" aria-pressed="false" aria-label="School">
                          SCHOOL
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 -ml-3 md:-ml-8 lg:-ml-14 w-24 h-32 md:w-36 md:h-48 lg:w-44 lg:h-60 rounded-xl md:rounded-2xl overflow-hidden grayscale opacity-90 flex-shrink-0">
                  <Image
                    src="/indian-boy.png"
                    alt=""
                    width={176}
                    height={240}
                    className="w-full h-full object-cover object-top"
                    aria-hidden
                  />
                </div>
              </div>

              <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6 hidden lg:flex flex-col gap-2 z-20 floating-icons-pos">
                <a href="#" className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-full" aria-label="Message us">
                  <Image src="/message.png" alt="" width={44} height={44} className="w-full h-full object-cover" aria-hidden />
                </a>
                <a href="#" className="w-11 h-11 rounded-full shadow-lg flex items-center justify-center overflow-hidden hover:scale-105 transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 rounded-full" aria-label="Contact on WhatsApp">
                  <Image src="/whatsapp.png" alt="" width={44} height={44} className="w-full h-full object-cover" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </main>

        <div className="-mt-12 md:-mt-16">
          <StatsSlider variant="hero" />
        </div>
      </div>
    </section>
  );
}
