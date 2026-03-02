import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import Testimonials from '@/components/sections/Testimonials';
import Impact from '@/components/sections/Impact';
import FAQ from '@/components/sections/FAQ';
import BookACall from '@/components/sections/BookACall';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <WhyChooseUs />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Impact />
      <BookACall />
      <Footer />
    </main>
  );
}
