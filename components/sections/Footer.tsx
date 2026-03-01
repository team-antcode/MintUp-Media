/* eslint-disable @next/next/no-img-element */
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      label: 'Facebook',
      href: 'https://www.facebook.com/share/p/16zecDKtPU/',
    },
    { label: 'WhatsApp', href: 'https://wa.me/94769952397' },
    {
      label: 'Instagram',
      href: 'https://www.instagram.com/mintup.media?igsh=MmVieHlmNmk4ZGd5&utm_source=ig_contact_invite',
    },
  ];

  const pageLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  const serviceLinks = [
    'Brand Identity',
    'Web Design',
    'Framer Development',
    'UI/UX Design',
    'Motion Graphics',
  ];

  return (
    <footer className="relative border-t border-white/10 py-20 bg-[#0a0a0a] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-linear-to-r from-transparent via-[#4fffb0]/30 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-xl h-50 bg-[#4fffb0]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 md:mb-24">
          {/* Brand Column */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <img src="/Mintup.png" alt="Logo" className="h-16 w-auto -ml-3" />
            <p className="text-white/50 text-base md:text-lg max-w-sm mb-8 font-light leading-relaxed">
              We specialize in crafting compelling content, SEO optimization,
              and executing strategic campaigns that drive engagement and
              growth.
            </p>
            <a
              href="mailto:mintupmedia@gmail.com"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white transition-all duration-300 gap-2 font-medium"
            >
              mintupmedia@gmail.com
            </a>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold mb-6">Navigation</h4>
            <ul className="flex flex-col gap-4">
              {pageLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-[#4fffb0] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="flex flex-col gap-4">
              {serviceLinks.map((service) => (
                <li key={service}>
                  <span className="text-white/50 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-6">Socials</h4>
            <ul className="flex flex-col gap-4">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-white transition-colors duration-300 text-sm flex items-center gap-2"
                  >
                    {link.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © {currentYear} MindUp Media. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-white/40">
            <a href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
