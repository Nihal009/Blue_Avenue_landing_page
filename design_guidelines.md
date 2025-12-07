# Blue Avenue Tailoring - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from luxury service brands like Brunello Cucinelli, Tom Ford, and premium hospitality sites (Four Seasons). Focus on sophistication, craftsmanship, and timeless elegance that reflects bespoke tailoring excellence.

## Core Design Principles
- **Refined Elegance**: Clean, spacious layouts that communicate premium quality
- **Craftsmanship Focus**: Visual hierarchy that showcases meticulous attention to detail
- **Trust & Authority**: Professional presentation that inspires confidence in bespoke services

## Typography System
- **Primary Font**: Playfair Display (serif) for headlines - conveys luxury and tradition
- **Secondary Font**: Inter (sans-serif) for body text - modern readability
- **Hierarchy**:
  - Hero headline: text-6xl md:text-7xl lg:text-8xl, font-bold
  - Section headers: text-4xl md:text-5xl, font-bold
  - Subheadings: text-xl md:text-2xl, font-medium
  - Body text: text-base md:text-lg, leading-relaxed
  - Buttons/CTAs: text-base md:text-lg, font-semibold, uppercase tracking-wide

## Layout System
**Spacing Scale**: Use Tailwind units 4, 6, 8, 12, 16, 20, 24 for consistency
- Section padding: py-16 md:py-24 lg:py-32
- Container: max-w-7xl mx-auto px-6 md:px-8
- Component spacing: space-y-12 md:space-y-16
- Grid gaps: gap-6 md:gap-8 lg:gap-12

## Page Structure & Sections

### 1. Hero Section (Full viewport with video)
- **Layout**: Full-screen (min-h-screen) with video background
- **Video Treatment**: Subtle overlay (dark gradient) for text legibility
- **Content**: Centered layout with headline, tagline, dual CTAs
- **CTAs**: Primary "Schedule Consultation" + Secondary "View Our Work" with blurred backdrop (backdrop-blur-sm bg-white/10)
- **Video Description**: Slow-motion footage of fabric draping, measuring tape on premium textiles, close-ups of hand-stitching, suit jackets on tailoring forms - 20-30 second loop

### 2. About/Services Section
- **Layout**: Two-column on desktop (lg:grid-cols-2), stacked on mobile
- **Left**: Brand story, heritage, craftsmanship philosophy
- **Right**: Service categories grid (2x2) with icons: Custom Suits, Alterations, Shirt Tailoring, Luxury Fabrics
- **Image**: Professional tailor measuring client in workshop setting

### 3. Portfolio Showcase
- **Layout**: Masonry grid (3 columns desktop, 2 tablet, 1 mobile)
- **Cards**: Hover effect with project details overlay
- **Content**: 9-12 high-quality images of finished garments
- **Images Needed**: 
  - 3-piece navy suits on mannequins
  - Custom shirts with monogramming details
  - Wedding suit collections
  - Close-ups of fabric textures and stitching
  - Before/after alteration comparisons

### 4. Testimonials Section
- **Layout**: 3-column grid (lg:grid-cols-3, md:grid-cols-2)
- **Cards**: Quote format with customer photo, name, star rating
- **Design**: Elevated cards with subtle shadow, border accents
- **Content**: 6 testimonials minimum

### 5. Notable Clients Section
- **Layout**: Horizontal scrolling logo marquee or static 5-6 column grid
- **Treatment**: Grayscale logos with subtle hover color reveal
- **Content**: Corporate clients, wedding venues, local businesses

### 6. Contact Section
- **Layout**: Two-column (60/40 split)
- **Left**: Contact form (Name, Email, Phone, Service Interest, Message)
- **Right**: Business details (Address, Hours, Phone, Email), Google Maps embed
- **Design**: Form inputs with refined borders, generous padding

### 7. Footer
- **Layout**: 4-column grid collapsing to 2/1 on smaller screens
- **Content**: Quick links, Services, Contact info, Social media, Newsletter signup
- **Bottom bar**: Copyright, Privacy Policy, Terms

## Component Specifications

### WhatsApp Button
- **Position**: Fixed bottom-right (bottom-6 right-6)
- **Design**: Circular (w-16 h-16), branded green (#25D366)
- **Icon**: WhatsApp logo, white fill
- **Interaction**: Pulse animation on load, scale on hover
- **Mobile**: Slightly smaller (w-14 h-14), adjusted positioning (bottom-4 right-4)

### Navigation
- **Desktop**: Transparent on hero, solid white on scroll with shadow
- **Mobile**: Hamburger menu with slide-in drawer
- **Links**: Home, Services, Portfolio, Testimonials, Contact
- **CTA**: "Book Consultation" button in navigation

### Buttons
- **Primary**: Solid fill, medium rounded corners (rounded-lg), generous padding (px-8 py-4)
- **Secondary**: Outline style with backdrop blur when on images
- **States**: Subtle scale transform on hover, no color change

## Responsive Strategy
- **Mobile-first**: All sections stack vertically on mobile
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Hero video**: Pause/reduced motion on mobile for performance
- **Touch targets**: Minimum 44x44px for all interactive elements
- **Grid collapsing**: 3→2→1 columns as viewport narrows

## SEO & Accessibility
- **Semantic HTML**: Proper heading hierarchy (h1 → h6)
- **Alt text**: Descriptive for all images
- **ARIA labels**: For navigation, forms, interactive elements
- **Meta tags**: Title, description, OG tags for social sharing
- **Structured data**: LocalBusiness schema markup

## Performance Considerations
- **Video**: Compressed MP4, WebM fallback, poster image for loading
- **Images**: Next.js Image component with lazy loading
- **Above-fold priority**: Hero content loads first
- **Font loading**: Font-display: swap for web fonts