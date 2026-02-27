'use client';

import { useState, useEffect } from 'react';
import { aboutContent } from '@/data/content';
import SectionWrapper from '@/components/SectionWrapper';

const sliderImages = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80',
  'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80',
];

export default function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % sliderImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <SectionWrapper id="about">
      {/* Label */}
      <div className="section-reveal mb-16">
        <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5 mx-auto">
          About Us
        </span>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-stretch">
        {/* Left */}
        <div className="section-reveal flex flex-col items-center lg:items-start text-center lg:text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight mb-8">
            {aboutContent.headline.split(' ').slice(0, 3).join(' ')}{' '}
            <span className="gradient-mint-text">
              {aboutContent.headline.split(' ').slice(3).join(' ')}
            </span>
          </h2>

          {/* Decorative line
          <div className="w-16 h-1 rounded-full bg-linear-to-r from-[#4fffb0] to-transparent mb-10" /> */}

          {aboutContent.paragraphs.map((para, i) => (
            <p
              key={i}
              className="text-white/55 text-lg leading-relaxed mb-6 font-light"
            >
              {para}
            </p>
          ))}

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4">
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/2 border border-white/6">
              <span className="text-xl">👨‍💻</span>
              <span className="text-white/70 text-sm font-medium">
                Based in Sri Lanka
              </span>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/2 border border-white/6">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4fffb0] animate-pulse" />
              <span className="text-white/70 text-sm font-medium">
                Open to work
              </span>
            </div>
          </div>
        </div>

        {/* Right — Image Slider */}
        <div className="section-reveal stagger-2 w-full h-full min-h-[400px] relative rounded-[2rem] overflow-hidden border border-white/10 group">
          {sliderImages.map((src, idx) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                idx === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={src}
                alt={`About image ${idx + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[10s] ease-out"
              />
            </div>
          ))}
          <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  );
}
