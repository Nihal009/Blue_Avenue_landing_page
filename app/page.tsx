"use client";

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutServices from '@/components/AboutServices';
import PortfolioShowcase from '@/components/PortfolioShowcase';
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
        "description": "Premium uniform supply and professional stitching services in Dubai, specializing in corporate, medical, and hospitality uniforms.",
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
            "name": "Tailoring Services",
            "itemListElement": [
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Corporate Uniform Stitching" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Medical Scrubs & Lab Coats" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "School Uniform Manufacturing" } },
                { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hospitality Staff Uniforms" } }
            ]
        }
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "Who is the leading uniform supplier in Dubai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Blue Avenue Stitches is a premier uniform supplier in Dubai, specializing in high-quality stitching for corporate, medical, hospitality, and school sectors across the UAE."
                }
            },
            {
                "@type": "Question",
                "name": "How long does professional uniform stitching take in Dubai?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "At Blue Avenue Stitches, our standard lead time for uniform stitching ranges from 7 to 14 business days, depending on the order size and design complexity. We also offer express services for urgent requirements."
                }
            },
            {
                "@type": "Question",
                "name": "Do you provide custom logo embroidery for uniforms?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we provide high-precision custom logo embroidery and screen printing services for all types of professional uniforms to help build your brand identity in the Dubai market."
                }
            },
            {
                "@type": "Question",
                "name": "What industries do you provide uniforms for in the UAE?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We cater to a wide range of industries including healthcare (scrubs and lab coats), hospitality (chef coats and staff attire), corporate (suits and shirts), and industrial workwear across Dubai."
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
                    onBookConsultation={() => scrollToSection('footer')}
                    onViewWork={() => scrollToSection('portfolio')}
                />
                <AboutServices />
                <PortfolioShowcase />
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
