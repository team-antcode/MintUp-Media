'use client';

import { useState, useEffect, useRef } from 'react';
import SectionWrapper from '@/components/SectionWrapper';

interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}

function StatItem({ value, label, suffix = '', delay = 0 }: StatItemProps) {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);
    const countRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let start = 0;
        const duration = 2000; // 2 seconds
        const increment = value / (duration / 16); // 60fps

        const timer = setTimeout(() => {
            const interval = setInterval(() => {
                start += increment;
                if (start >= value) {
                    setCount(value);
                    clearInterval(interval);
                } else {
                    setCount(Math.floor(start));
                }
            }, 16);
            return () => clearInterval(interval);
        }, delay);

        return () => clearTimeout(timer);
    }, [isVisible, value, delay]);

    return (
        <div
            ref={countRef}
            className="section-reveal flex flex-col items-center justify-center p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 transition-all duration-300 hover:border-[#4fffb0]/30 hover:shadow-[0_10px_40px_rgba(79,255,176,0.05)] group"
        >
            <div className="text-5xl md:text-6xl font-bold text-white mb-2 tracking-tighter">
                <span className="gradient-mint-text">{count}</span>
                <span className="text-[#4fffb0]">{suffix}</span>
            </div>
            <div className="text-white/50 text-sm md:text-base font-medium tracking-wide uppercase">
                {label}
            </div>
        </div>
    );
}

export default function Impact() {
    return (
        <SectionWrapper id="impact" className="bg-[#0a0a0a]">
            <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/5 to-transparent" />

            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <div className="text-center mb-16 px-6">
                    <div className="section-reveal mb-4">
                        <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5 mx-auto">
                            Our Impact
                        </span>
                    </div>
                    <h2 className="section-reveal text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
                        Proven <span className="gradient-mint-text">Results</span> for Brands
                    </h2>
                    <p className="section-reveal text-white/50 text-lg max-w-2xl mx-auto font-light">
                        We don't just build, we drive growth through data-backed strategies and pixel-perfect execution.
                    </p>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-6">
                    <StatItem value={4} label="Happy Brands" suffix="+" delay={200} />
                    <StatItem value={99.9} label="Client Satisfaction" suffix="%" delay={400} />
                    <StatItem value={5} label="Projects Completed" suffix="+" delay={600} />
                </div>
            </div>
        </SectionWrapper>
    );
}
