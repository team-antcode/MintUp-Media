'use client';

import { useEffect, useRef } from 'react';
import { heroContent } from '@/data/content';
import Button from '@/components/Button';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sectionRef.current?.querySelectorAll('.hero-reveal').forEach((el, i) => {
        setTimeout(() => el.classList.add('revealed'), i * 120);
      });
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-svh flex items-center justify-center overflow-hidden px-6 pt-28 pb-14 sm:pb-16 md:px-10 md:pt-32 md:pb-20"
    >
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-[22%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-160 h-160 md:w-185 md:h-185 rounded-full
          bg-[radial-gradient(circle,rgba(79,255,176,0.08)_0%,transparent_70%)] animate-drift"
        />
        <div
          className="absolute top-1/3 left-[18%] w-80 h-80 md:w-96 md:h-96 rounded-full
          bg-[radial-gradient(circle,rgba(79,255,176,0.05)_0%,transparent_70%)] animate-drift-slow"
        />
        <div
          className="absolute bottom-[18%] right-[18%] w-72 h-72 md:w-80 md:h-80 rounded-full
          bg-[radial-gradient(circle,rgba(0,212,170,0.04)_0%,transparent_70%)] animate-drift"
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center w-full flex flex-col items-center">
        {/* Badge */}
        <div className="hero-reveal section-reveal mb-12 md:mb-7 inline-flex justify-center">
          <span className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5">
            <span className="w-2 h-2 rounded-full bg-[#4fffb0] animate-pulse" />
            {heroContent.badge}
          </span>
        </div>

        {/* Headline */}
        <h1 className="hero-reveal section-reveal mb-6 md:mb-8">
          {heroContent.headline.map((line, i) => (
            <span
              key={i}
              className={`block ${i < heroContent.headline.length - 1 ? 'mb-1 md:mb-1.5' : ''}`}
            >
              {i === 1 ? (
                <span className="gradient-mint-text glow-mint-text text-[clamp(2.25rem,7vw,5.2rem)] font-black tracking-[-0.025em] leading-[0.98]">
                  {line}
                </span>
              ) : (
                <span className="text-white text-[clamp(2.25rem,7vw,5.2rem)] font-black tracking-[-0.025em] leading-[0.98]">
                  {line}
                </span>
              )}
            </span>
          ))}
        </h1>

        {/* Subheading */}
        <p className="hero-reveal section-reveal mb-10 md:mb-12 text-white/55 text-base sm:text-lg md:text-xl mx-auto leading-relaxed font-light max-w-3xl">
          {heroContent.subheading}
        </p>

        {/* CTAs */}
        <div className="hero-reveal section-reveal flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center items-center">
          <Button
            variant="primary"
            size="md"
            className="min-w-45 rounded-lg"
            onClick={() => scrollTo('contact')}
          >
            {heroContent.ctaPrimary}
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M7 17L17 7M17 7H7M17 7v10"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/35 text-[11px] tracking-[0.16em] uppercase">
          Scroll
        </span>
        <div className="w-px h-9 md:h-10 bg-linear-to-b from-white/20 to-transparent" />
      </div>
    </section>
  );
}
