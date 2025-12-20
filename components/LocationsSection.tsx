import { Card } from '@/components/ui/card';
import { MapPin, Phone, Clock } from 'lucide-react';

const locations = [
  {
    id: 1,
    name: 'Shop 1: Union Metro',
    address: 'West Zone Supermarket Building, Union Metro Station Exit 2, Dubai - UAE',
    phone: '045753696',
    hours: 'Daily 10 AM - 10 PM',
    latitude: 25.2662, // Approx for Union Metro
    longitude: 55.3057,
  },
  {
    id: 2,
    name: 'Shop 2: Al Quoz',
    address: 'Farnek Building, Near Belhasa Exchange, Alquoz 4 Opp. Community Market Dubai-UAE',
    phone: '+971588836772',
    hours: 'Daily 10 AM - 10 PM',
    latitude: 25.1325, // Approx for Al Quoz 4
    longitude: 55.2570,
  },
];

export default function LocationsSection() {
  return (
    <section
      id="locations"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-locations"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Our Locations
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-locations-title"
          >
            Visit Our <span className="text-primary italic">Shops</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Visit us at one of our convenient locations in Dubai.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {locations.map((location, index) => (
            <Card
              key={location.id}
              className="p-6 md:p-8 hover-elevate transition-all duration-300"
              data-testid={`card-location-${index}`}
            >
              <div className="space-y-6">
                <div>
                  <h3
                    className="font-serif text-2xl font-semibold text-foreground mb-2"
                    data-testid={`text-location-name-${index}`}
                  >
                    {location.name}
                  </h3>
                  <div className="flex items-start gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <p className="text-sm">{location.address}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a
                      href={`tel:${location.phone}`}
                      className="text-sm font-medium text-foreground hover:text-primary transition-colors"
                      data-testid={`link-location-phone-${index}`}
                    >
                      {location.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{location.hours}</p>
                  </div>
                </div>

                <div className="aspect-video rounded-lg overflow-hidden bg-card/50">
                  <iframe
                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3610.${Math.floor(Math.random() * 100000)}!2d${location.longitude}!3d${location.latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zBlue%20Avenue%20${location.name}!5e0!3m2!1sen!2sae!4v${Date.now()}`}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={location.name}
                    data-testid={`map-location-${index}`}
                  />
                </div>

                <a
                  href={`https://maps.google.com/?q=${location.latitude},${location.longitude}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                  data-testid={`link-location-map-${index}`}
                >
                  Get Directions →
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
