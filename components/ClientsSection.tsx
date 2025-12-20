import { Building2, Briefcase, Crown, Diamond, Award, Star } from 'lucide-react';

const clients = [
  { name: 'Prestige Hotels', icon: Crown },
  { name: 'Sterling & Co', icon: Diamond },
  { name: 'Executive Partners', icon: Briefcase },
  { name: 'Grand Plaza', icon: Building2 },
  { name: 'Elite Awards', icon: Award },
  { name: 'Star Events', icon: Star },
];

export default function ClientsSection() {
  return (
    <section
      id="clients"
      className="py-16 md:py-20 bg-card border-y border-border"
      data-testid="section-clients"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-10 md:mb-12">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Trusted By
          </p>
          <h2
            className="font-serif text-2xl md:text-3xl font-bold text-foreground"
            data-testid="text-clients-title"
          >
            Distinguished Clientele
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client, index) => (
            <div
              key={client.name}
              className="group flex items-center justify-center"
              data-testid={`icon-client-${index}`}
            >
              <client.icon
                className="w-10 h-10 md:w-12 md:h-12 text-muted-foreground/50 transition-colors duration-300 group-hover:text-foreground"
                aria-label={client.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
