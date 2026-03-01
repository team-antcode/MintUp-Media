import SectionWrapper from '@/components/SectionWrapper';

const testimonials = [
  {
    text: 'MindUp Media helped us modernize our digital presence with a high-converting landing page and consistent social media management. We saw a clear increase in customer engagement and inquiries. Their team truly understands how to grow local businesses in Sri Lanka.',
    author: 'Neil Bakery',
    role: 'Local Business',
    tags: ['E-commerce', 'Growth'],
  },
  {
    text: 'Partnering with MindUp Media was one of the best decisions for our brand. Their content creation and social media strategies elevated our online image and boosted our sales. Professional, creative, and results-driven.',
    author: 'Formar Clothing',
    role: 'Fashion Brand',
    tags: ['Content', 'Strategy'],
  },
  {
    text: 'MindUp Media delivered exactly what they promised - performance and quality. From landing page development to digital marketing strategy, everything was executed with precision. Highly recommended for businesses looking to scale.',
    author: 'Mindika Enterprises',
    role: 'Business Services',
    tags: ['Performance', 'Scale'],
  },
];

// Combine and duplicate for infinite scroll effect
const firstRow = [...testimonials, ...testimonials];
const secondRow = [
  ...testimonials.slice(2),
  ...testimonials.slice(0, 2),
  ...testimonials.slice(2),
  ...testimonials.slice(0, 2),
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

      {/* Header */}
      <div className="text-center mb-16 md:mb-20 px-6">
        <div className="section-reveal mb-4">
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5 mx-auto">
            Testimonials
          </span>
        </div>
        <h2 className="section-reveal text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-tight mb-4">
          Wall of <span className="gradient-mint-text">Love</span>
        </h2>
        <p className="section-reveal stagger-1 text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Hear what real founders say about working with MindUp Media.
        </p>
      </div>

      {/* Marquee Container */}
      <div className="w-full overflow-hidden flex flex-col gap-6 md:gap-8 relative section-reveal stagger-2 -mx-6 px-6 md:mx-0 md:px-0">
        {/* Fading Edges */}
        <div className="absolute inset-y-0 left-0 w-24 md:w-48 bg-linear-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 md:w-48 bg-linear-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        {/* Row 1: Scroll Right */}
        <div className="flex w-max animate-scroll-right hover:[animation-play-state:paused] group">
          <div className="flex gap-6 md:gap-8 items-center shrink-0 pr-6 md:pr-8">
            {firstRow.map((testimonial, i) => (
              <TestimonialCard key={`row1-${i}`} {...testimonial} />
            ))}
          </div>
        </div>

        {/* Row 2: Scroll Left */}
        <div className="flex w-max animate-scroll-left hover:[animation-play-state:paused] group">
          <div className="flex gap-6 md:gap-8 items-center shrink-0 pr-6 md:pr-8">
            {secondRow.map((testimonial, i) => (
              <TestimonialCard key={`row2-${i}`} {...testimonial} />
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

function TestimonialCard({
  text,
  author,
  role,
  tags,
}: {
  text: string;
  author: string;
  role: string;
  tags: string[];
}) {
  return (
    <div className="w-[320px] md:w-112.5 p-6 md:p-8 rounded-3xl bg-[#0d0d0d] border border-white/10 flex flex-col justify-between shrink-0 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_10px_40px_rgba(79,255,176,0.05)]">
      <div>
        <div className="flex gap-1 mb-6 text-[#4fffb0] text-sm">★★★★★</div>
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-light">
          &quot;{text}&quot;
        </p>
      </div>

      <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
        <div>
          <h4 className="text-white font-bold text-sm md:text-base">
            {author}
          </h4>
          <p className="text-white/40 text-xs md:text-sm">{role}</p>
        </div>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-md text-[10px] font-bold tracking-widest uppercase bg-white/5 text-white/50 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
