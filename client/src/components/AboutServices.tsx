import { Card } from '@/components/ui/card';
import { Scissors, Ruler, Shirt, Sparkles } from 'lucide-react';
import tailorImage from '@assets/stock_images/luxury_tailor_measur_7f5ed999.jpg';

const services = [
  {
    icon: Scissors,
    title: 'Custom Suits',
    description: 'Bespoke suits tailored to your exact measurements and style preferences.',
  },
  {
    icon: Ruler,
    title: 'Alterations',
    description: 'Expert alterations to ensure the perfect fit for any garment.',
  },
  {
    icon: Shirt,
    title: 'Shirt Tailoring',
    description: 'Custom dress shirts crafted with premium fabrics and attention to detail.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Fabrics',
    description: 'Access to the finest Italian and British fabrics for your wardrobe.',
  },
];

export default function AboutServices() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-services"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
                About Blue Avenue
              </p>
              <h2
                className="font-serif text-4xl md:text-5xl font-bold text-foreground leading-tight"
                data-testid="text-services-title"
              >
                A Legacy of
                <br />
                <span className="italic">Craftsmanship</span>
              </h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-services-description">
              For over twenty years, Blue Avenue has been synonymous with exceptional tailoring.
              Our master craftsmen blend time-honored techniques with contemporary style to create
              garments that are as unique as our clients.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Every stitch tells a story of dedication, precision, and the pursuit of perfection.
              From the first consultation to the final fitting, we ensure an experience as refined
              as the garments we create.
            </p>

            <div className="relative aspect-[4/3] rounded-lg overflow-hidden mt-8">
              <img
                src={tailorImage}
                alt="Master tailor measuring client for custom suit"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-8">
              Our Services
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <Card
                  key={service.title}
                  className="p-6 hover-elevate transition-all duration-300"
                  data-testid={`card-service-${index}`}
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h4 className="font-serif text-xl font-semibold text-foreground">
                      {service.title}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
