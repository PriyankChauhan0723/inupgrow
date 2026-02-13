import Image from "next/image";

export default function Header() {
  return (
    <header className="relative z-50 px-4 md:px-6 lg:px-8 py-4 md:py-5 lg:py-6" role="banner">
      <div className="max-w-7xl mx-auto">
        <div className="bg-transparent backdrop-blur-md rounded-2xl px-4 py-3 md:px-5 md:py-3.5 lg:px-6 lg:py-4 flex flex-col gap-3 lg:flex-row lg:flex-wrap lg:items-center lg:justify-between lg:gap-4">
          <div className="flex items-center justify-between w-full lg:w-auto lg:justify-start lg:flex-shrink-0 gap-4">
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="INUPGRO Logo"
                width={120}
                height={40}
                className="h-7 w-auto sm:h-8"
              />
            </div>
            <div className="h-5 w-px bg-white/30 hidden lg:block" aria-hidden="true" />
            <button
              type="button"
              className="px-3 py-2 sm:px-4 text-white text-sm font-medium hover:opacity-80 transition-opacity flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-lg"
              aria-haspopup="listbox"
              aria-expanded={false}
              aria-label="Choose goal"
            >
              Choose Goal
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>

          <div className="w-full order-3 lg:order-2 lg:flex-1 lg:min-w-[250px] lg:max-w-2xl lg:mx-4 min-w-0">
            <div className="relative">
              <label htmlFor="header-search" className="sr-only">
                Search for School College, and more
              </label>
              <input
                id="header-search"
                type="search"
                placeholder="Search for School College, and more..."
                aria-label="Search for School College, and more"
                className="w-full px-4 py-3 pl-11 rounded-full bg-[#60A5FA]/30 backdrop-blur-md border border-white/20 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 text-sm"
              />
              <svg className="absolute left-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/70 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <nav className="flex justify-center order-2 lg:order-3 lg:justify-end" aria-label="Main navigation">
            <div className="hidden lg:flex items-center gap-6">
              <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm font-medium flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 rounded-lg">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
                Explore
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm font-medium flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 rounded-lg">
                <Image src="/inspiration-icon.svg" alt="" width={16} height={16} className="w-4 h-4" aria-hidden="true" />
                Inspiration
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm font-medium flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 rounded-lg">
                <Image src="/career-icon.svg" alt="" width={16} height={16} className="w-4 h-4" aria-hidden="true" />
                Career
              </a>
              <a href="#" className="text-white hover:opacity-80 transition-opacity text-sm font-medium flex items-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 rounded-lg">
                <Image src="/news-icon.svg" alt="" width={16} height={16} className="w-4 h-4" aria-hidden="true" />
                News
              </a>
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="rounded-full px-4 py-2.5 flex items-center justify-center gap-4 text-white bg-[#60A5FA]/30 backdrop-blur-md border border-white/20 hover:bg-[#60A5FA]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 rounded-full"
                aria-label="Open menu"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </button>
              <button
                type="button"
                className="w-10 h-10 rounded-full bg-[#60A5FA]/30 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-[#60A5FA]/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2"
                aria-label="Web"
                title="Web"
              >
                <Image src="/web-icon.svg" alt="" width={20} height={20} className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
