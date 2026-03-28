"use client";

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutServices from '@/components/AboutServices';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import ClientsSection from '@/components/ClientsSection';
import LocationsSection from '@/components/LocationsSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function LandingPage() {
    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Blue Avenue Stitches",
        "alternateName": ["Blue Avenue Garments", "Blue Avenue Tailoring", "Blue Avenue Uniforms"],
        "description": "Blue Avenue Stitches provides premium Blue Avenue garments, Blue Avenue tailoring, and Blue Avenue uniforms in Dubai, UAE. Specialising in corporate, medical, hospitality, and custom uniforms with expert stitching and embroidery.",
        "url": "https://blueavenuestitches.ae",
        "telephone": "045753696",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "West Zone Supermarket Building, Union Metro Station Exit 2",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
        },
        "areaServed": "Dubai, UAE",
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Blue Avenue Garments & Uniform Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blue Avenue Corporate Uniforms" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blue Avenue Tailoring Services" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blue Avenue Medical Scrubs & Lab Coats" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blue Avenue Hospitality Staff Uniforms" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Blue Avenue Custom Garments & Embroidery" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is Blue Avenue Stitches and what are Blue Avenue uniforms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Blue Avenue Stitches is Dubai's premier Blue Avenue uniforms and garments provider, specialising in high-quality stitching for corporate, medical, hospitality, and school sectors across the UAE."
                }
            },
            {
                "@type": "Question",
                "name": "How long does Blue Avenue tailoring take in Dubai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "At Blue Avenue Stitches, our standard lead time for Blue Avenue tailoring and uniform stitching ranges from 7 to 14 business days, depending on the order size and design complexity. We also offer express services for urgent requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Does Blue Avenue provide custom logo embroidery on garments?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, Blue Avenue garments include high-precision custom logo embroidery and screen printing services for all types of professional uniforms, helping build your brand identity across the Dubai market."
                }
            },
            {
                "@type": "Question",
                "name": "What industries does Blue Avenue Stitches provide uniforms for?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Blue Avenue uniforms and garments cover a wide range of industries including healthcare (scrubs and lab coats), hospitality (chef coats and staff attire), corporate (suits and shirts), and industrial workwear across Dubai and the UAE."
                }
            }
        ]
    };

    return (
        <div className="min-h-screen bg-background">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />

            <Navigation onNavigate={scrollToSection} />

            <main>
                <HeroSection
                    onBookConsultation={() => scrollToSection('contact')}
                    onViewWork={() => scrollToSection('portfolio')}
                />
                <AboutServices />
                <PortfolioShowcase />
                <ClientsSection />
                <LocationsSection />

                {/* Visual FAQ Section */}
                <section className="py-16 md:py-24 bg-muted/30">
                    <div className="max-w-4xl mx-auto px-6 md:px-8">
                        <div className="text-center mb-12">
                            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Frequently Asked Questions</h2>
                        </div>
                        <div className="space-y-6">
                            {faqSchema.mainEntity.map((item, index) => (
                                <div key={index} className="bg-card p-6 rounded-lg shadow-sm border border-sidebar-border hover:border-primary/50 transition-colors">
                                    <h3 className="font-semibold text-lg mb-3 text-foreground">{item.name}</h3>
                                    <p className="text-muted-foreground leading-relaxed">{item.acceptedAnswer.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
            <WhatsAppButton />
        </div>
    );
}
