'use client';

export default function BookACall() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="contact"
      className="relative px-6 md:px-12 py-24 md:py-32 flex flex-col items-center"
    >
      <div className="w-full">
        <div
          className="relative rounded-[2.5rem] overflow-hidden px-6 md:px-12 py-16 md:py-16 text-center
            bg-linear-to-br from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]
            border border-white/10 shadow-2xl"
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4fffb0]/30 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-[#4fffb0]/10 to-transparent" />

            {/* Dynamic glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] rounded-full
              bg-[radial-gradient(circle,rgba(79,255,176,0.06)_0%,transparent_60%)] animate-pulse"
            />

            {/* Grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)`,
                backgroundSize: '50px 50px',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10 flex flex-col items-center">
            <span
              className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full
              border border-[#4fffb0]/20 bg-[#4fffb0]/5
              text-[#4fffb0] text-[10px] font-black uppercase tracking-[0.2em] mb-10"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#4fffb0] animate-pulse shadow-[0_0_10px_#4fffb0]" />
              Limited Availability
            </span>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-6">
              Ready to build
              <br />
              <span className="gradient-mint-text glow-mint-text">
                something great?
              </span>
            </h2>

            <p className="text-white/55 text-base md:text-lg mx-auto mb-12 font-light leading-relaxed max-w-xl">
              Let&apos;s talk about your project. I&apos;ll tell you exactly how
              I&apos;d approach it - and what it would take to make it
              exceptional.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full sm:w-auto">
              <a
                href="https://wa.me/94769952397"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center gap-3 px-7 py-5 rounded-full
                  bg-[#4fffb0] text-[#0a0a0a] font-bold
                  hover:scale-105 active:scale-95
                  transition-all duration-400 cursor-pointer overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 text-sm">
                  Ready to build something great?
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M7 17L17 7M17 7H7M17 7v10"
                    />
                  </svg>
                </span>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-20 pt-12 border-t border-white/5 flex flex-wrap justify-center gap-10 md:gap-16">
              {[
                { emoji: '⭐', text: 'Premium Design' },
                { emoji: '🚀', text: 'Rapid Delivery' },
                { emoji: '🌍', text: 'Global Standards' },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-center gap-3 text-white/60 group"
                >
                  <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                    {item.emoji}
                  </span>
                  <span className="text-sm font-bold tracking-widest uppercase">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
