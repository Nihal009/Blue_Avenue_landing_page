import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutServices from '@/components/AboutServices';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import TestimonialsSection from '@/components/TestimonialsSection';
import ClientsSection from '@/components/ClientsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function LandingPage() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation onNavigate={scrollToSection} />
      
      <main>
        <HeroSection
          onBookConsultation={() => scrollToSection('contact')}
          onViewWork={() => scrollToSection('portfolio')}
        />
        <AboutServices />
        <PortfolioShowcase />
        <TestimonialsSection />
        <ClientsSection />
        <ContactSection />
      </main>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
