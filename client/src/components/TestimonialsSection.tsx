import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';

import maleClient from '@assets/generated_images/male_client_testimonial.png';
import femaleClient from '@assets/generated_images/female_client_testimonial.png';
import seniorClient from '@assets/generated_images/senior_client_testimonial.png';

const testimonials = [
  {
    id: 1,
    name: 'Michael Richardson',
    role: 'CEO, Tech Innovations',
    image: maleClient,
    rating: 5,
    quote:
      'Blue Avenue transformed my wardrobe. The attention to detail and perfect fit of my custom suits have elevated my professional presence. Absolutely exceptional service.',
  },
  {
    id: 2,
    name: 'Sarah Mitchell',
    role: 'Creative Director',
    image: femaleClient,
    rating: 5,
    quote:
      'From the first consultation to the final fitting, the experience was impeccable. My tailored blazers and shirts are works of art. I highly recommend their expertise.',
  },
  {
    id: 3,
    name: 'Robert Thompson',
    role: 'Managing Partner',
    image: seniorClient,
    rating: 5,
    quote:
      "I've been a loyal client for over a decade. The consistency in quality and the personalized service keeps me coming back. They understand timeless elegance.",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-16 md:py-24 lg:py-32 bg-background"
      data-testid="section-testimonials"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Testimonials
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-testimonials-title"
          >
            Client <span className="italic">Stories</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what our distinguished clients have to say about their Blue Avenue experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.id}
              className="p-6 md:p-8 relative"
              data-testid={`card-testimonial-${index}`}
            >
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
              
              <div className="space-y-6">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-primary text-primary"
                    />
                  ))}
                </div>

                <p className="text-foreground leading-relaxed italic">
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.image} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
