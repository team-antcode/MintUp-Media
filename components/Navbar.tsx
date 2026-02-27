/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect, useCallback } from 'react';
import { navItems } from '@/data/content';

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-us', 'services', 'portfolio'];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = useCallback((href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-5 px-6">
        <nav className="max-w-5xl mx-auto bg-[#0a0a0a]/90 backdrop-blur-xl rounded-3xl border border-white/8 px-6 h-70px] shadow-[0_8px_32px_rgba(0,0,0,0.4)] flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#home')}
            className="flex items-center cursor-pointer group"
          >
            <img src="/Mintup.png" alt="Logo" className="h-16 w-auto" />
          </button>

          {/* Desktop Nav - Centered */}
          <ul className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <li key={item.href}>
                  <button
                    onClick={() => scrollTo(item.href)}
                    className={`px-5 py-2 text-[15px] font-normal transition-colors duration-200 cursor-pointer ${
                      isActive ? 'text-white' : 'text-white/60 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button
              onClick={() => scrollTo('#contact')}
              className="px-6 py-2.5 rounded-lg bg-[#4fffb0] text-black font-medium text-[14px]
                transition-all duration-300 hover:bg-[#4fffb0] hover:shadow-[0_4px_20px_rgba(79,255,176,0.35)]
                active:scale-95 cursor-pointer"
            >
              Book a call
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'w-0 opacity-0' : 'w-4'
              }`}
            />
            <span
              className={`block h-0.5 bg-white transition-all duration-300 ${
                mobileOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          mobileOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-[#0a0a0a] border-l border-white/10
            flex flex-col pt-24 px-6 gap-1 transition-transform duration-500 ${
              mobileOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
        >
          {navItems.map((item) => (
            <button
              key={item.href}
              onClick={() => scrollTo(item.href)}
              className="text-left px-4 py-3 rounded-lg text-white/70 hover:text-white hover:bg-white/5
                transition-all duration-200 font-normal cursor-pointer"
            >
              {item.label}
            </button>
          ))}
          <div className="mt-6 pt-6 border-t border-white/10">
            <button
              onClick={() => scrollTo('#contact')}
              className="w-full py-3 rounded-full bg-[#ff6b6b] text-white font-medium
                hover:bg-[#ff5252] transition-all duration-300 cursor-pointer"
            >
              Book a call
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
