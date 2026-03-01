import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
        <h1 className="text-4xl md:text-5xl font-black text-white mb-8">
          Privacy <span className="gradient-mint-text">Policy</span>
        </h1>
        <div className="space-y-8 text-white/70 leading-relaxed font-light">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
            <p>
              At MintUp Media, we value your privacy. This Privacy Policy
              explains how we collect, use, and protect your personal
              information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Information We Collect
            </h2>
            <p>
              We collect information that you provide to us directly, such as
              when you book a call, sign up for our newsletter, or contact us.
              This may include your name, email address, and company details.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              How We Use Your Information
            </h2>
            <p>
              We use the information we collect to provide and improve our
              services, communicate with you, and send you marketing materials
              if you have opted in to receive them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              Cookie Policy
            </h2>
            <p>
              Our website uses cookies to enhance your experience. By using our
              site, you consent to our use of cookies in accordance with this
              policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please
              contact us at hello@mintupmedia.com.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
