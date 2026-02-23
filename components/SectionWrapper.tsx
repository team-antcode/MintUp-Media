'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = '',
}: SectionWrapperProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-reveal').forEach((el) => {
              el.classList.add('revealed');
            });
          }
        });
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`relative px-6 md:px-12 lg:px-24 py-16 md:py-24 w-full flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </section>
  );
}
