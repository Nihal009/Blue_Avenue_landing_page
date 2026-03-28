"use client";

import Image from 'next/image';

import subaruLogo from '@assets/clients/subaru.webp';
import website9Logo from '@assets/clients/website-9.webp';
import yutongLogo from '@assets/clients/yutong.webp';
import awesomeDriveLogo from '@assets/clients/awesome_drive.webp';
import fixandgoLogo from '@assets/clients/fixandgo.webp';
import jksLogo from '@assets/clients/jks.webp';
import maxusLogo from '@assets/clients/maxus.webp';
import motivateLogo from '@assets/clients/motivate.webp';
import samarajLogo from '@assets/clients/samaraj.webp';
import tajviLogo from '@assets/clients/tajvi.webp';
import yachtRentalLogo from '@assets/clients/yacht-rental.webp';

const clients = [
    { name: 'Subaru', src: subaruLogo, hasBg: true },
    { name: 'Website 9', src: website9Logo, hasBg: false },
    { name: 'Yutong', src: yutongLogo, hasBg: false },
    { name: 'Awesome Drive', src: awesomeDriveLogo, hasBg: false },
    { name: 'Fix & Go', src: fixandgoLogo, hasBg: false },
    { name: 'JKS', src: jksLogo, hasBg: false },
    { name: 'Maxus', src: maxusLogo, hasBg: true },
    { name: 'Motivate', src: motivateLogo, hasBg: false },
    { name: 'Samaraj', src: samarajLogo, hasBg: false },
    { name: 'Tajvi', src: tajviLogo, hasBg: false },
    { name: 'Yacht Rental Dubai', src: yachtRentalLogo, hasBg: false },
];

// Tripled for seamless infinite loop
const duplicated = [...clients, ...clients, ...clients];

export default function ClientsSection() {
    return (
        <section
            id="clients"
            className="py-16 md:py-20 bg-muted/30 overflow-hidden"
            data-testid="section-clients"
        >
            {/* Heading */}
            <div className="max-w-7xl mx-auto px-6 md:px-8 mb-10 text-center">
                <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground font-medium mb-3">
                    Trusted By
                </p>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
                    Our Esteemed <span className="italic">Clients</span>
                </h2>
                <p className="mt-4 text-muted-foreground max-w-xl mx-auto">
                    Proud to serve leading organizations across Dubai and the UAE with premium uniforms and tailoring.
                </p>
            </div>

            {/* Marquee */}
            <div className="relative w-full">
                {/* Fade edges */}
                <div className="pointer-events-none absolute left-0 top-0 h-full w-28 z-10 bg-gradient-to-r from-background to-transparent" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-28 z-10 bg-gradient-to-l from-background to-transparent" />

                <div className="clients-marquee-track flex items-center gap-6 w-max py-2">
                    {duplicated.map((client, idx) => (
                        <div
                            key={idx}
                            title={client.name}
                            className={[
                                'flex-shrink-0 flex items-center justify-center rounded-xl transition-all duration-300 hover:scale-105',
                                // White card bg for logos that need it (jpg / opaque), transparent for PNGs
                                client.hasBg
                                    ? 'bg-white shadow-sm border border-border px-5 py-3'
                                    : 'bg-transparent px-4 py-3',
                            ].join(' ')}
                            style={{ width: '160px', height: '80px' }}
                        >
                            <Image
                                src={client.src}
                                alt={client.name}
                                width={140}
                                height={60}
                                className="object-contain w-full h-full"
                                style={{
                                    // For dark / coloured PNGs on a light bg – keep natural colour
                                    maxWidth: '140px',
                                    maxHeight: '60px',
                                }}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
