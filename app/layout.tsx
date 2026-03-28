import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
    metadataBase: new URL('https://blueavenuestitches.ae'),
    title: 'Blue Avenue Garments, Tailoring & Uniforms in Dubai | Blue Avenue Stitches',
    description: 'Blue Avenue Stitches — your trusted source for Blue Avenue garments, Blue Avenue tailoring, and Blue Avenue uniforms in Dubai, UAE. Premium corporate, hospitality, medical & custom uniforms with expert stitching.',
    keywords: [
        'blue avenue garments',
        'blue avenue tailoring',
        'blue avenue uniforms',
        'Blue Avenue Stitches',
        'Blue Avenue Dubai',
        'uniform supplier Dubai',
        'professional tailoring Dubai',
        'corporate uniforms UAE',
        'medical scrubs Dubai',
        'school uniforms Dubai',
        'hospitality uniforms UAE',
        'custom embroidery Dubai',
        'industrial workwear Dubai',
        'uniform stitching Dubai',
        'garments supplier Dubai',
        'bespoke tailoring UAE',
        'custom garments Dubai',
    ],
    robots: {
        index: true,
        follow: true,
        'max-image-preview': 'large' as const,
        'max-snippet': -1,
        'max-video-preview': -1,
        googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large' as const,
            'max-snippet': -1,
            'max-video-preview': -1,
        },
    },
    alternates: {
        canonical: 'https://blueavenuestitches.ae',
    },
    openGraph: {
        type: 'website',
        locale: 'en_AE',
        siteName: 'Blue Avenue Stitches',
        title: 'Blue Avenue Garments & Uniforms | Blue Avenue Stitches Dubai',
        description: 'Blue Avenue garments, tailoring & uniforms in Dubai. Expert stitching for corporate, medical, hospitality & custom sectors across the UAE.',
        url: 'https://blueavenuestitches.ae',
        images: [
            {
                url: '/og-image-uniforms.jpg',
                width: 1200,
                height: 630,
                alt: 'Blue Avenue Stitches — Professional Uniforms in Dubai',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blue Avenue Garments & Uniforms | Blue Avenue Stitches Dubai',
        description: 'Blue Avenue tailoring, garments & uniforms in Dubai, UAE. Corporate, medical, hospitality & custom uniforms.',
        images: ['/og-image-uniforms.jpg'],
    },
    icons: {
        icon: [
            { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/web-app-manifest-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/web-app-manifest-192x192.png', sizes: '192x192', type: 'image/png' },
        ],
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${playfair.variable} ${outfit.variable} font-sans antialiased`}>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
