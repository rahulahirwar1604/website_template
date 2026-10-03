import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { businessConfig } from '@/data/business.config';

export const metadata: Metadata = {
  title: businessConfig.seo.metaTitle,
  description: businessConfig.seo.metaDescription,
  keywords: businessConfig.seo.keywords,
  authors: [{ name: businessConfig.seo.author }],
  openGraph: {
    title: businessConfig.seo.openGraph.title,
    description: businessConfig.seo.openGraph.description,
    url: businessConfig.seo.siteUrl,
    siteName: businessConfig.identity.name,
    images: [
      {
        url: businessConfig.seo.openGraph.image,
        width: 1200,
        height: 630,
        alt: businessConfig.seo.openGraph.imageAlt,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${businessConfig.identity.name} - ${businessConfig.tagline}`,
    description: businessConfig.shortDescription,
    images: [businessConfig.seo.openGraph.image],
  },
  icons: {
    icon: businessConfig.identity.logo,
    apple: businessConfig.identity.logo,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Schema.org Structured Data for Local SEO Rich Snippets
  const structuredSchema = {
    '@context': 'https://schema.org',
    '@type': businessConfig.seo.schema.type,
    name: businessConfig.identity.name,
    image: businessConfig.seo.openGraph.image,
    '@id': businessConfig.seo.siteUrl,
    url: businessConfig.seo.siteUrl,
    telephone: businessConfig.contact.phone,
    priceRange: businessConfig.seo.priceRange,
    servesCuisine: businessConfig.seo.cuisineTypes,
    menu: `${businessConfig.seo.siteUrl}/menu`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: businessConfig.address.street,
      addressLocality: businessConfig.address.city,
      addressRegion: businessConfig.address.state,
      postalCode: businessConfig.address.postalCode,
      addressCountry: businessConfig.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: businessConfig.seo.coordinates.latitude,
      longitude: businessConfig.seo.coordinates.longitude,
    },
    openingHoursSpecification: businessConfig.seo.schema.openingHours.map((item) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: item.dayOfWeek,
      opens: item.opens,
      closes: item.closes,
    })),
    sameAs: businessConfig.socials.map((s) => s.url),
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredSchema) }}
        />
      </head>
      <body
        className="bg-surface-ground text-cream-50 antialiased selection:bg-amberGrill-500 selection:text-white flex flex-col min-h-screen"
        suppressHydrationWarning
      >
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
