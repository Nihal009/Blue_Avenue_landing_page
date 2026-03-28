import { FadeInImage } from '@/components/ui/fade-in-image';

import corporateSuitHero from '@assets/generated_images/corporate_suit_hero.png';
import tradeUniformsHero from '@assets/generated_images/trade_uniforms_hero.png';
import healthSpaHero from '@assets/generated_images/health_spa_hero.png';
import hospitalityHotelUniforms from '@assets/generated_images/hospitality_hotel_uniforms.png';
import customEmbroideryService from '@assets/generated_images/custom_embroidery_service.png';

const serviceCategories = [
  {
    id: 1,
    image: corporateSuitHero,
    title: 'Corporate',
    accentColor: '#b5a43a',
    items: ['Suits', 'Jackets', 'Aviation', 'Shirts & Blouse', 'Trousers', 'Skirts'],
  },
  {
    id: 2,
    image: tradeUniformsHero,
    title: 'Trade',
    accentColor: '#e07b39',
    items: ['Educational', 'Industrial', 'Sports', 'Promotional', 'Military'],
  },
  {
    id: 3,
    image: healthSpaHero,
    title: 'Health & Spa',
    accentColor: '#3a9e9e',
    items: ['Health Care', 'Trousers & Shorts', 'Scrubs', 'Tunics'],
  },
  {
    id: 4,
    image: hospitalityHotelUniforms,
    title: 'Hospitality',
    accentColor: '#b5405a',
    items: ['Restaurant', 'Hotel & Resorts', 'Cleaning', 'House Keeping', 'Security'],
  },
  {
    id: 5,
    image: customEmbroideryService,
    title: 'Custom',
    accentColor: '#c0392b',
    items: [
      'Embroidery',
      'Fabric & Textiles',
      'Resizing & Alteration',
      'Custom Wear',
      'Caps & Belts',
      'Flags & National Day Wear',
      'Winter Jackets',
      'TShirts & Polo Shirts',
    ],
  },
];

export default function PortfolioShowcase() {
  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 bg-background"
      data-testid="section-portfolio"
    >
      <div className="max-w-[1400px] mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            What We Offer
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-portfolio-title"
          >
            Our Service <span className="italic">Categories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From corporate suites to custom embroidery, we provide high-quality uniforms and tailoring across all sectors.
          </p>
        </div>

        {/* 5-category grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              className="group flex flex-col rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 bg-card border border-border"
              data-testid={`card-service-${category.id}`}
            >
              {/* Image — full visibility, no overlay */}
              <div className="aspect-[4/3] relative bg-muted flex-shrink-0">
                <FadeInImage
                  src={category.image}
                  alt={category.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  fill
                />
              </div>

              {/* Text panel — modern design */}
              <div className="flex flex-col flex-1">
                {/* Gradient header strip */}
                <div
                  className="px-5 py-3.5"
                  style={{
                    background: `linear-gradient(135deg, ${category.accentColor}18 0%, ${category.accentColor}08 100%)`,
                    borderTop: `3px solid ${category.accentColor}`,
                  }}
                >
                  <h3
                    className="font-sans text-base font-black uppercase tracking-[0.18em]"
                    style={{ color: category.accentColor }}
                  >
                    {category.title}
                  </h3>
                </div>

                {/* Pill tags */}
                <div className="flex flex-wrap gap-1.5 px-4 py-4">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase transition-all duration-200 cursor-default border"
                      style={{
                        borderColor: `${category.accentColor}50`,
                        color: category.accentColor,
                        backgroundColor: `${category.accentColor}0d`,
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = `${category.accentColor}22`;
                        (e.currentTarget as HTMLElement).style.borderColor = category.accentColor;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLElement).style.backgroundColor = `${category.accentColor}0d`;
                        (e.currentTarget as HTMLElement).style.borderColor = `${category.accentColor}50`;
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
