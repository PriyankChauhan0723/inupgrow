import Image from "next/image";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 lg:py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-6 md:gap-8 mb-8 md:mb-10 lg:mb-12 pb-8 md:pb-10 lg:pb-12 border-b border-gray-200">
          <div className="flex items-center flex-shrink-0">
            <Image
              src="/logo-black.png"
              alt="INUPGRO Logo"
              width={140}
              height={45}
              className="h-8 md:h-9 lg:h-10 w-auto object-contain"
              priority
            />
          </div>

          <div className="flex flex-col gap-3 md:gap-4 w-full lg:w-auto lg:max-w-md">
            <h3 id="newsletter-heading" className="text-base md:text-lg font-semibold text-gray-900" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
              Sign Up Today.
            </h3>
            <div className="flex flex-col sm:flex-row gap-2">
              <label htmlFor="footer-email" className="sr-only">
                Enter your email for newsletter
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                aria-describedby="newsletter-heading"
                className="px-4 py-2.5 md:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:border-transparent text-sm flex-1 min-w-0 sm:min-w-[200px] bg-gray-50 placeholder:text-gray-500"
              />
              <button className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-5 py-2.5 md:px-6 md:py-3 rounded-full font-medium flex items-center justify-center gap-2 transition-colors whitespace-nowrap text-sm md:text-base min-h-[44px]">
                Get Started
                <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <p className="text-[11px] md:text-xs text-gray-500">
              By proceeding, you agree to our{" "}
              <a href="#" className="text-[#2563EB] hover:underline">Platform Terms</a>
              {" "}&{" "}
              <a href="#" className="text-[#2563EB] hover:underline">Privacy Notice</a>.
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-12 mb-8 md:mb-10 lg:mb-12 pb-8 md:pb-10 lg:pb-12 border-b border-gray-200">
          <div className="flex flex-col gap-4 md:gap-6 w-full lg:w-auto lg:min-w-[200px]">
            <div className="flex items-center gap-3 md:gap-4 flex-wrap">
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#2563EB] transition-colors min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#2563EB] transition-colors min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#2563EB] transition-colors min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#2563EB] transition-colors min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.866.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#2563EB] transition-colors min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 flex items-center justify-center text-gray-700 hover:text-[#2563EB] transition-colors min-w-[44px] min-h-[44px] md:min-w-0 md:min-h-0">
                <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
              </a>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <a href="#" className="flex-shrink-0">
                <div className="flex items-center gap-2 bg-black text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px]">Download on the</span>
                    <span className="text-sm font-semibold">App Store</span>
                  </div>
                </div>
              </a>
              <a href="#" className="flex-shrink-0">
                <div className="flex items-center gap-2 bg-black text-white px-3 py-2 md:px-4 md:py-2.5 rounded-lg hover:opacity-90 transition-opacity">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="flex flex-col leading-tight">
                    <span className="text-[10px]">GET IT ON</span>
                    <span className="text-sm font-semibold">Google Play</span>
                  </div>
                </div>
              </a>
            </div>
          </div>

          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-6 md:gap-y-8 lg:gap-6 min-w-0">
            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-sm" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
                About Inupgro:
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Leadership Team</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Press</a></li>
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-sm" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
                Explore:
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">For Students</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">For Teachers</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">For Institutions</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Blog/Resources</a></li>
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-sm" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
                Features:
              </h4>
              <div className="grid grid-cols-2 gap-x-3 lg:gap-x-4 gap-y-2 md:gap-y-3">
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Smart Application Sync</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Flipbooks with Embedded Videos</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Teacher Analytics Dashboard</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Automated School Dashboard</a></li>
                </ul>
                <ul className="space-y-2 md:space-y-3">
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Unified Student Profile</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Job & News Publishing</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Skill-Based Search Filters</a></li>
                  <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Multilingual Experience</a></li>
                </ul>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-sm" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
                Support:
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Community</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">FAQs</a></li>
              </ul>
            </div>

            <div className="min-w-0">
              <h4 className="font-semibold text-gray-900 mb-3 md:mb-4 text-xs md:text-sm" style={{ fontFamily: 'var(--font-ibm-plex-sans), "IBM Plex Sans", sans-serif' }}>
                Legal:
              </h4>
              <ul className="space-y-2 md:space-y-3">
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Terms of Use</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Accessibility</a></li>
                <li><a href="#" className="text-gray-600 hover:text-[#2563EB] text-xs md:text-sm transition-colors">Cookie Preferences</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-6 md:pt-8">
          <div className="flex flex-col gap-1">
            <p className="text-xs md:text-sm text-gray-700">
              Copyright © {currentYear} INUPGRO
            </p>
            <p className="text-xs md:text-sm text-gray-500 italic">
              Built with purpose, passion, and way too much coffee.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
