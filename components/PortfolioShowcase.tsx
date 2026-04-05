import { Card } from '@/components/ui/card';
import { FadeInImage } from '@/components/ui/fade-in-image';

import medicalUniform from '@assets/generated_images/medical_doctor_uniform_1766246371117.webp';
import chefUniform from '@assets/generated_images/chef_kitchen_uniform_1766246389501.webp';
import schoolUniform from '@assets/generated_images/school_children_uniform_1766246411582.webp';
import hospitalityUniform from '@assets/generated_images/hospitality_waiter_uniform_1766247992419.webp';
import corporateWear from '@assets/generated_images/corporate_woman_green_blazer.webp';
import premiumTshirts from '@assets/generated_images/premium_tshirts.webp';
import womensFormal from '@assets/generated_images/womens_formal_wear.webp';
import aviationUniform from '@assets/generated_images/aviation_pilot_uniform_1766247970368.webp';
import securityUniform from '@assets/generated_images/corporate_security_male_uniform_1766247952685.webp';
import luxuryFabrics from '@assets/generated_images/luxury_fabric_swatches.webp';
import customEmbroidery from '@assets/generated_images/custom_embroidery_service.png';

const services = [
  {
    id: 1,
    image: corporateWear,
    title: 'Corporate Wear',
    description: 'Sophisticated business attire and corporate uniforms for modern professionals.',
  },
  {
    id: 2,
    image: medicalUniform,
    title: 'Medical Uniforms',
    description: 'Professional medical scrubs and lab coats with comfort and durability.',
  },
  {
    id: 3,
    image: hospitalityUniform,
    title: 'Hospitality',
    description: 'Elegant waiter and service staff uniforms for luxury establishments.',
  },
  {
    id: 4,
    image: aviationUniform,
    title: 'Aviation',
    description: 'Bespoke pilot and cabin crew uniforms designed for safety and elegance.',
  },
  {
    id: 5,
    image: schoolUniform,
    title: 'School Uniforms',
    description: 'Premium school uniforms designed for comfort, durability, and style.',
  },
  {
    id: 6,
    image: chefUniform,
    title: 'Chef Uniforms',
    description: 'Custom chef coats and kitchen uniforms combining style with functionality.',
  },
  {
    id: 7,
    image: securityUniform,
    title: 'Security & Industrial',
    description: 'Durable workwear and security uniforms for demanding environments.',
  },
  {
    id: 8,
    image: luxuryFabrics,
    title: 'Luxury Fabrics',
    description: 'Access to the finest Italian and British fabrics for bespoke garments.',
  },
  {
    id: 9,
    image: customEmbroidery,
    title: 'Custom Embroidery',
    description: 'High-precision embroidery and branding for professional apparel.',
  },
  {
    id: 10,
    image: premiumTshirts,
    title: 'Promotional Wear',
    description: 'High-quality cotton t-shirts and polos for corporate branding.',
  },
  {
    id: 11,
    image: womensFormal,
    title: "Bespoke Tailoring",
    description: 'Elegant formal wear and suits meticulously tailored to your individuality.',
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
            Our Portfolio
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-portfolio-title"
          >
            Professional <span className="italic">Uniforms & Tailoring</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From healthcare to aviation, we provide high-quality uniforms and bespoke tailoring across all sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.id}
              className="border-0 shadow-none bg-transparent group"
              data-testid={`card-service-${index}`}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 relative bg-muted shadow-md group-hover:shadow-xl transition-shadow duration-300">
                <FadeInImage
                  src={service.image}
                  alt={service.title}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  fill
                  priority={index < 4}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
              </div>
              <div className="space-y-3">
                <h3 className="font-serif text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
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
