import SectionWrapper from '@/components/SectionWrapper';

const mainServices = [
  {
    title: 'Deck & Presentation',
    description: 'Win investors. Close deals. Impress audiences.',
    image:
      'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80',
    tags: [
      'Pitch Decks',
      'Sales Decks',
      'Presentations',
      'Custom Graphics',
      '+ More',
    ],
  },
  {
    title: 'Web Design & Dev',
    description: 'High-converting, modern, scalable websites.',
    image:
      'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80',
    tags: ['Framer Dev', 'Landing Pages', 'Multi-Page', '+ More'],
  },
  {
    title: 'Packaging & Merch',
    description: 'Design that sells on shelves.',
    image:
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=800&q=80',
    tags: ['Product Packaging', 'Labels', 'Apparel & Merch', '+ More'],
  },
  {
    title: 'UI / UX Design',
    description: 'Design experiences people love using.',
    image:
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80',
    tags: ['Web & Mobile UI', 'User Flows', 'Wireframes', '+ More'],
  },
  {
    title: 'Social Media & Ads',
    description: 'Content built to convert.',
    image:
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&w=800&q=80',
    tags: ['Social Branding', 'Static & Carousel', 'Paid Ads', '+ More'],
  },
  {
    title: 'Content Creation',
    description:
      'Engaging content that drives organic growth and brand loyalty.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
    tags: ['Copywriting', 'Video Scripts', 'Blog Posts', '+ More'],
  },
];

export default function Services() {
  return (
    <SectionWrapper id="services">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

      {/* Header */}
      <div className="text-center mb-16 md:mb-20">
        <div className="section-reveal mb-4">
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5">
            Our Services
          </span>
        </div>
        <h2 className="section-reveal text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-white tracking-tight leading-tight mb-4">
          Create Unlimited <span className="gradient-mint-text">Creatives</span>
        </h2>
        <p className="section-reveal stagger-1 text-white/50 text-lg md:text-xl font-light max-w-2xl mx-auto">
          Graphics. Video. Web. Everything your brand needs — in one place.
        </p>
      </div>

      {/* Services Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {mainServices.map((service, i) => (
          <div
            key={i}
            className={`section-reveal stagger-${(i % 3) + 1} flex flex-col bg-[#0a0a0a] border border-white/10 rounded-3xl overflow-hidden group transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/20 hover:shadow-[0_10px_40px_rgba(79,255,176,0.05)]`}
          >
            {/* Top Image Area */}
            <div className="relative h-56 w-full overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent transition-opacity duration-500 group-hover:opacity-80" />
            </div>

            {/* Content Area */}
            <div className="flex flex-col flex-1 p-8 relative z-10 -mt-10">
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-[#4fffb0] transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-white/60 text-base mb-8 font-light leading-relaxed">
                {service.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide
                            bg-white/5 text-white/70 border border-white/10
                            transition-colors duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
