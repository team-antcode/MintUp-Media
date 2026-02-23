import { projects } from '@/data/content';
import SectionWrapper from '@/components/SectionWrapper';

export default function Portfolio() {
  return (
    <SectionWrapper id="portfolio">
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/6 to-transparent" />

      {/* Header */}
      <div className="text-center mb-20">
        <div className="section-reveal mb-4">
          <span className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-white/20 text-white text-sm bg-white/5">
            Portfolio
          </span>
        </div>
        <h2 className="section-reveal text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
          Recent <span className="gradient-mint-text">work & projects</span>
        </h2>
        <p className="section-reveal stagger-2 mt-6 text-white/50 text-lg mx-auto font-light">
          A curated selection of projects I&apos;ve designed and engineered from
          concept to launch.
        </p>
      </div>

      {/* Projects grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 w-full">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`section-reveal stagger-${(i % 4) + 1} group border border-white/10 bg-[#0a0a0a] rounded-[2rem] transition-all duration-300 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(79,255,176,0.05)] overflow-hidden p-0!`}
          >
            {/* Project image preview area */}
            <div className="relative h-60 w-full overflow-hidden border-b border-white/10">
              <img
                src={
                  [
                    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=800&q=80',
                    'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
                  ][i % 6]
                }
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a0a0a] via-transparent to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-50" />
            </div>

            {/* Project info */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#4fffb0] transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-white/55 text-base leading-relaxed mb-6 font-light">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-[11px] font-black uppercase tracking-widest
                      bg-white/5 border border-white/8 text-white/40 group-hover:text-[#4fffb0] group-hover:border-[#4fffb0]/20 transition-all duration-300"
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
