import { Button } from '@/components/ui/button';
import { Play, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import heroImage from '@assets/generated_images/tailoring_craftsmanship_hero_image.png';

interface HeroSectionProps {
  onBookConsultation?: () => void;
  onViewWork?: () => void;
}

export default function HeroSection({ onBookConsultation, onViewWork }: HeroSectionProps) {
  const scrollToContent = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      data-testid="section-hero"
    >
      <div className="absolute inset-0">
        <Image
          src={heroImage}
          alt="Blue Avenue Tailoring Craftsmanship"
          className="object-cover"
          fill
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
          <p
            className="text-sm md:text-base uppercase tracking-[0.3em] text-white/80 font-medium"
            data-testid="text-hero-tagline"
          >
            Custom Tailoring Services
          </p>



          <p
            className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed"
            data-testid="text-hero-description"
          >
            We provide high quality custom suits, shirts, and alterations in Dubai.
            Expert service with attention to detail.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={onBookConsultation}
              className="w-full sm:w-auto px-8 py-6 text-base md:text-lg uppercase tracking-wider font-semibold"
              data-testid="button-hero-consultation"
            >
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onViewWork}
              className="w-full sm:w-auto px-8 py-6 text-base md:text-lg uppercase tracking-wider font-semibold bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              data-testid="button-hero-portfolio"
            >
              <Play className="w-5 h-5 mr-2" />
              View Our Work
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/80 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll to content"
        data-testid="button-scroll-down"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  );
}
