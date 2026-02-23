'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Most landing pages take 1-2 weeks, while full SaaS platforms can take 4-8 weeks. I prioritize rapid delivery without compromising on the premium quality of the output.',
  },
  {
    question: 'Do you design and code everything yourself?',
    answer:
      'Yes! By handling both design and development, I ensure the final product looks exactly like the design, with flawless animations and responsive layouts.',
  },
  {
    question: 'What tech stack do you use?',
    answer:
      'I specialize in modern, high-performance web technologies: Next.js, React, TypeScript, Tailwind CSS, and Framer Motion for animations. For backend, I typically use Prisma, Supabase, or Firebase.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer:
      'Absolutely. I offer specialized retainer packages for content updates, new features, and ongoing maintenance to ensure your product continues to scale smoothly.',
  },
  {
    question: 'How do we get started?',
    answer:
      "It starts with a discovery call. We'll discuss your goals, timeline, and budget. If it's a good fit, I'll send over a proposal and we can kick off the project immediately.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper id="faq">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

      {/* Header */}
      <div className="text-center mb-16 md:mb-24 px-6 w-full">
        <div className="section-reveal mb-4">
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5 mx-auto">
            FAQs
          </span>
        </div>
        <h2 className="section-reveal text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-tight mb-4">
          Frequently Asked <span className="gradient-mint-text">Questions</span>
        </h2>
        <p className="section-reveal stagger-1 text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Questions we hear, answered!
        </p>
      </div>

      <div className="w-full max-w-4xl mx-auto flex flex-col gap-4 section-reveal stagger-2">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${
              openIndex === index
                ? 'bg-white/5 border-white/20'
                : 'bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:bg-white/[0.02]'
            }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
            >
              <h3
                className={`text-lg md:text-xl font-medium transition-colors duration-300 ${
                  openIndex === index ? 'text-white' : 'text-white/80'
                }`}
              >
                {faq.question}
              </h3>
              <div className="ml-4 shrink-0 flex items-center justify-center w-8 h-8 rounded-full border border-white/10 bg-white/5 text-white/50 relative">
                <span
                  className={`absolute w-3 h-[2px] bg-current transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
                <span
                  className={`absolute w-3 h-[2px] bg-current transition-transform duration-300 ${openIndex === index ? 'rotate-0' : 'rotate-90'}`}
                />
              </div>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out origin-top ${
                openIndex === index
                  ? 'max-h-96 opacity-100 scale-y-100'
                  : 'max-h-0 opacity-0 scale-y-95'
              }`}
            >
              <p className="p-6 md:p-8 pt-0 text-white/50 font-light leading-relaxed text-base md:text-lg">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
