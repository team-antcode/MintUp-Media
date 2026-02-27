import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';

export default function TermsOfService() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
          Terms of <span className="gradient-mint-text">Service</span>
        </h1>
        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Acceptance of Terms
            </h2>
            <p>
              By accessing and using our services, you agree to be bound by
              these Terms of Service. If you do not agree to these terms, please
              do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Services</h2>
            <p>
              MindUp Media provides digital marketing, social media handling,
              and web development services. We reserve the right to modify or
              discontinue any part of our services at any time.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">User Conduct</h2>
            <p>
              You agree to use our services only for lawful purposes and in a
              way that does not infringe the rights of others or restrict their
              use and enjoyment of our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Intellectual Property
            </h2>
            <p>
              All content and materials provided as part of our services are the
              property of MindUp Media or its licensors and are protected by
              intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Limitation of Liability
            </h2>
            <p>
              MindUp Media shall not be liable for any direct, indirect,
              incidental, or consequential damages arising out of your use of
              our services.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
