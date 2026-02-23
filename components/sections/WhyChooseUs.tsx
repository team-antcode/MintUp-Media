import { features } from '@/data/content';
import SectionWrapper from '@/components/SectionWrapper';

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us">
      {/* Subtle divider glow */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

      {/* Header */}
      <div className="text-center mb-20">
        <div className="section-reveal mb-4">
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5">
            Why Choose Us
          </span>
        </div>
        <h2 className="section-reveal text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          The difference is{' '}
          <span className="gradient-mint-text">in the details</span>
        </h2>
        <p className="section-reveal stagger-2 mt-6 text-white/50 text-lg mx-auto font-light">
          Anyone can write code. Not everyone can build products that feel
          premium, load instantly, and actually grow businesses.
        </p>
      </div>

      {/* Feature cards grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full">
        {features.map((feature, i) => (
          <div
            key={i}
            className={`section-reveal stagger-${i + 1} border border-white/10 bg-[#0a0a0a] rounded-[2rem] p-8 md:p-10 transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(79,255,176,0.05)] group`}
          >
            {/* Icon */}
            <div
              className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl
              bg-[rgba(79,255,176,0.08)] border border-[rgba(79,255,176,0.15)]
              group-hover:border-[rgba(79,255,176,0.3)] group-hover:shadow-[0_0_20px_rgba(79,255,176,0.15)]
              transition-all duration-300"
            >
              <span className="text-3xl">{feature.icon}</span>
            </div>

            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#4fffb0] transition-colors duration-300">
              {feature.title}
            </h3>
            <p className="text-white/55 leading-relaxed font-light text-lg">
              {feature.description}
            </p>

            {/* Bottom accent */}
            <div className="mt-8 w-0 group-hover:w-16 h-1 rounded-full bg-linear-to-r from-[#4fffb0] to-transparent transition-all duration-500" />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
