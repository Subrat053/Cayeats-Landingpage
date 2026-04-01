import React, { useState, useEffect } from 'react'
import logo from '../assets/logo.jpg'

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Market', href: '#market' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-slate-900/5 border-b border-slate-100'
        : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative">
              <img src={logo} alt="CayEats" className="h-10 md:h-12 rounded-xl group-hover:scale-125 scale-150 transition-transform duration-300" />
              <div className="absolute -inset-1 bg-teal-500/20 rounded-xl blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 hover:text-teal-500 relative group ${scrolled ? 'text-slate-600' : 'text-white/80 hover:text-white'
                  }`}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-teal-500 rounded-full group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#restaurants"
              className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${scrolled ? 'text-slate-600 hover:text-teal-600' : 'text-white/80 hover:text-white'
                }`}
            >
              For Restaurants
            </a>
            <a
              href="#join"
              className="bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:-translate-y-0.5"
            >
              Get Listed
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-white'
              }`}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`block h-0.5 rounded-full transform transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'
                } ${menuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
              <span className={`block h-0.5 rounded-full transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'
                } ${menuOpen ? 'opacity-0 scale-0' : ''}`}></span>
              <span className={`block h-0.5 rounded-full transform transition-all duration-300 ${scrolled ? 'bg-slate-900' : 'bg-white'
                } ${menuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-100 shadow-xl transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
        <div className="px-6 py-6 space-y-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block text-slate-700 hover:text-teal-600 hover:bg-teal-50 font-medium px-4 py-3 rounded-xl transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 border-t border-slate-100 mt-4">
            <a
              href="#join"
              className="block text-center bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg shadow-teal-500/25"
            >
              Get Listed — It's Free
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar