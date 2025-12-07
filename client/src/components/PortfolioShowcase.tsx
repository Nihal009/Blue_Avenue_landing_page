import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { X, ZoomIn } from 'lucide-react';

import navySuit from '@assets/generated_images/navy_three-piece_suit.png';
import customShirt from '@assets/generated_images/custom_monogram_shirt.png';
import weddingTuxedo from '@assets/generated_images/wedding_tuxedo_display.png';
import fabricSwatches from '@assets/generated_images/luxury_fabric_swatches.png';
import stitchingDetail from '@assets/stock_images/close_up_hand_stitch_a832e4fc.jpg';
import heroImage from '@assets/generated_images/tailoring_craftsmanship_hero_image.png';

const portfolioItems = [
  {
    id: 1,
    image: navySuit,
    title: 'Classic Navy Three-Piece',
    category: 'Custom Suits',
  },
  {
    id: 2,
    image: customShirt,
    title: 'Monogrammed Dress Shirt',
    category: 'Shirt Tailoring',
  },
  {
    id: 3,
    image: weddingTuxedo,
    title: 'Wedding Collection',
    category: 'Special Occasions',
  },
  {
    id: 4,
    image: fabricSwatches,
    title: 'Premium Fabric Selection',
    category: 'Luxury Fabrics',
  },
  {
    id: 5,
    image: stitchingDetail,
    title: 'Hand Stitching Detail',
    category: 'Craftsmanship',
  },
  {
    id: 6,
    image: heroImage,
    title: 'Precision Measurement',
    category: 'Custom Fitting',
  },
];

export default function PortfolioShowcase() {
  const [selectedImage, setSelectedImage] = useState<typeof portfolioItems[0] | null>(null);

  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 lg:py-32 bg-card"
      data-testid="section-portfolio"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center space-y-4 mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Our Portfolio
          </p>
          <h2
            className="font-serif text-4xl md:text-5xl font-bold text-foreground"
            data-testid="text-portfolio-title"
          >
            Featured <span className="italic">Work</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our craftsmanship. Each piece represents our commitment to excellence
            and attention to detail.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <Card
                  className="group relative overflow-hidden cursor-pointer border-0"
                  data-testid={`card-portfolio-${index}`}
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm uppercase tracking-wider text-white/70 mb-1">
                        {item.category}
                      </p>
                      <h3 className="font-serif text-xl font-semibold">{item.title}</h3>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-4xl p-0 overflow-hidden">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-auto max-h-[80vh] object-contain"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                    <p className="text-sm uppercase tracking-wider text-white/70 mb-1">
                      {item.category}
                    </p>
                    <h3 className="font-serif text-2xl font-semibold text-white">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  );
}
