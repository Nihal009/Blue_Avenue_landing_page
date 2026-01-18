import { Inter, Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-serif" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata = {
    metadataBase: new URL('https://blueavenuestitches.ae'),
    title: 'Top Uniform Supplier & Professional Tailoring in Dubai | Blue Avenue Stitches',
    description: 'Blue Avenue Stitches offers premium uniform supply and professional stitching services in Dubai. Specialist in corporate, medical, and industrial uniforms.',
    alternates: {
        canonical: 'https://blueavenuestitches.ae',
    },
    openGraph: {
        title: 'Blue Avenue Stitches | Dubai Uniform Experts',
        images: ['/og-image-uniforms.jpg'],
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
