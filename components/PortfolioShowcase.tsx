import { Card } from '@/components/ui/card';
import Image from 'next/image';

import medicalUniform from '@assets/generated_images/medical_doctor_uniform_1766246371117.png';
import chefUniform from '@assets/generated_images/chef_kitchen_uniform_1766246389501.png';
import schoolUniform from '@assets/generated_images/school_children_uniform_1766246411582.png';
import hospitalityUniform from '@assets/generated_images/hospitality_waiter_uniform_1766247992419.png';

const services = [
  {
    id: 1,
    image: medicalUniform,
    title: 'Medical Uniforms',
    description: 'Professional medical scrubs and lab coats with comfort and durability.',
  },
  {
    id: 2,
    image: chefUniform,
    title: 'Chef Uniforms',
    description: 'Custom chef coats and kitchen uniforms combining style with functionality.',
  },
  {
    id: 3,
    image: schoolUniform,
    title: 'School Uniforms',
    description: 'Premium school uniforms designed for comfort, durability, and style.',
  },
  {
    id: 4,
    image: hospitalityUniform,
    title: 'Hospitality',
    description: 'Elegant waiter and service staff uniforms for luxury establishments.',
  },
];

export default function PortfolioShowcase() {
  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-card"
      data-testid="section-portfolio"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Our Services
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-portfolio-title"
          >
            Professional <span className="italic">Uniforms</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to hospitality, we provide high-quality uniforms tailored for professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="border-0 shadow-none bg-transparent group"
              data-testid={`card-service-${index}`}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative bg-muted">
                <Image
                  src={service.image}
                  alt={service.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
