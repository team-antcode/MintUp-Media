'use client';

import { useState } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

const faqs = [
  {
    question: 'What services does MintUp Media offer?',
    answer:
      'We specialize in building high-converting landing pages, social media management, content creation, and comprehensive digital marketing strategies. We handle everything from web development to growing your brand across social platforms.',
  },
  {
    question: 'How long does it take to build a landing page?',
    answer:
      'Most landing pages are completed within 1-2 weeks, depending on complexity. We focus on rapid delivery while ensuring pixel-perfect design and optimal conversion rates.',
  },
  {
    question: 'Do you handle social media management?',
    answer:
      'Absolutely! We offer full-service social media management including content creation, posting schedules, engagement strategies, and performance analytics. We help you build a consistent brand presence that drives real engagement and growth.',
  },
  {
    question: 'What platforms do you work with?',
    answer:
      'We work across all major social media platforms including Instagram, Facebook, LinkedIn, Twitter, and TikTok. For web development, we use modern technologies like Next.js, React, TypeScript, and Tailwind CSS.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer:
      'Yes! We offer ongoing support packages for website maintenance, content updates, social media management, and continuous optimization to ensure your digital presence keeps growing and performing at its best.',
  },
  {
    question: 'How do we get started with MintUp Media?',
    answer:
      "Simply book a free consultation call with us. We'll discuss your goals, target audience, and budget. Then we'll create a custom strategy tailored to your business needs and can start immediately.",
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
            className={`rounded-2xl border transition-colors duration-300 overflow-hidden ${openIndex === index
              ? 'border-white/20'
              : 'bg-[#0a0a0a] border-white/5 hover:border-white/10 hover:bg-white/2'
              }`}
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full flex items-center justify-between p-6 md:p-8 text-left cursor-pointer"
            >
              <h3
                className={`text-base md:text-xl font-medium transition-colors duration-300 ${openIndex === index ? 'text-white' : 'text-white/80'
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
              className={`transition-all duration-300 ease-in-out origin-top ${openIndex === index
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
