"use client"

import { useState } from "react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#121212]/90 backdrop-blur-sm border-b border-[#fafafa]/10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between py-6">
          <a href="/" className="text-[#fafafa] font-serif text-xl tracking-wide">
            Japan Lens
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#vision" 
              onClick={(e) => scrollToSection(e, 'vision')}
              className="text-[#fafafa]/80 text-sm tracking-wide hover:text-[#fafafa] transition-colors"
            >
              The Vision
            </a>
            <a 
              href="#expedition" 
              onClick={(e) => scrollToSection(e, 'expedition')}
              className="text-[#fafafa]/80 text-sm tracking-wide hover:text-[#fafafa] transition-colors"
            >
              Expedition
            </a>
            <a 
              href="#guide" 
              onClick={(e) => scrollToSection(e, 'guide')}
              className="text-[#fafafa]/80 text-sm tracking-wide hover:text-[#fafafa] transition-colors"
            >
              Your Guide
            </a>
            <a 
              href="#apply" 
              onClick={(e) => scrollToSection(e, 'apply')}
              className="text-sm tracking-[0.15em] uppercase border border-[#fafafa]/50 text-[#fafafa] px-6 py-3 hover:bg-[#fafafa] hover:text-[#121212] transition-colors duration-300"
            >
              Apply Now
            </a>
          </nav>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-[#fafafa] p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-6 h-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <nav className="border-t border-[#fafafa]/10 py-4">
            <div className="flex flex-col gap-4">
              <a 
                href="#vision" 
                onClick={(e) => scrollToSection(e, 'vision')}
                className={`text-[#fafafa]/80 text-sm tracking-wide hover:text-[#fafafa] transition-all px-2 py-2 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '100ms' : '0ms' }}
              >
                The Vision
              </a>
              <a 
                href="#expedition" 
                onClick={(e) => scrollToSection(e, 'expedition')}
                className={`text-[#fafafa]/80 text-sm tracking-wide hover:text-[#fafafa] transition-all px-2 py-2 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '150ms' : '0ms' }}
              >
                Expedition
              </a>
              <a 
                href="#guide" 
                onClick={(e) => scrollToSection(e, 'guide')}
                className={`text-[#fafafa]/80 text-sm tracking-wide hover:text-[#fafafa] transition-all px-2 py-2 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '200ms' : '0ms' }}
              >
                Your Guide
              </a>
              <a 
                href="#apply" 
                onClick={(e) => scrollToSection(e, 'apply')}
                className={`text-sm tracking-[0.15em] uppercase border border-[#fafafa]/50 text-[#fafafa] px-6 py-3 hover:bg-[#fafafa] hover:text-[#121212] transition-all duration-300 text-center mx-2 ${
                  isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                }`}
                style={{ transitionDelay: isMenuOpen ? '250ms' : '0ms' }}
              >
                Apply Now
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
