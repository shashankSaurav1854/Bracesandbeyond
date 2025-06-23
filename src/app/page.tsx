import AboutSection from '../components/about-section';
import ContactSection from '../components/contact-section';
import Footer from '../components/footer';
import Header from '../components/header';
import HeroSection from '../components/hero-section';
import Navigation from '../components/navigation';
import ServicesSection from '../components/services-section';
import TestimonialsSection from '../components/testimonials-section';

export default function Home() {
  return (
    <main>
      <div className="min-h-screen bg-white">
        <Header />
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
