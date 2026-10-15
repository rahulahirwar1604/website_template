import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Flame, Sparkles, ShieldCheck, Award } from 'lucide-react';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Offers from '@/components/Offers';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import { businessConfig } from '@/data/business.config';
import { cn, getWhatsAppOrderUrl } from '@/lib/utils';

export const metadata: Metadata = {
  alternates: {
    canonical: '/',
  },
};

const FEATURE_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Award,
  Sparkles,
  ShieldCheck,
};

export default function HomePage() {
  const { homeCta, features, featuredMenu } = businessConfig;

  const whatsappUrl =
    homeCta.primaryCtaLink ||
    getWhatsAppOrderUrl({
      customMessage: homeCta.whatsappMessage,
    });

  return (
    <>
      {/* 1. Hero Section (Warm Ivory Foundation) */}
      <Hero />

      {/* 2. Feature Highlights Strip (Warm Alternate Surface Transition) */}
      <section className="py-8 sm:py-12 bg-surface-alt border-b border-surface-border" aria-label="Our Culinary Quality Standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {features.map((feature, idx) => {
              const IconComponent = FEATURE_ICON_MAP[feature.icon] || Award;
              const iconColorClass = feature.iconColor || 'text-amberGrill-600';

              return (
                <div
                  key={feature.title || idx}
                  className="card-base p-3.5 sm:p-5 lg:p-6 bg-white border border-surface-border rounded-2xl shadow-card-subtle flex flex-col justify-between h-full hover:border-amberGrill-500/40 transition-colors"
                >
                  <div>
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-surface-alt border border-surface-border flex items-center justify-center text-amberGrill-600 mb-2 sm:mb-3.5">
                      <IconComponent className={cn('w-4 h-4 sm:w-5 sm:h-5', iconColorClass)} />
                    </div>
                    <h3 className="text-xs sm:text-base font-bold text-ink-primary mb-1 leading-snug">{feature.title}</h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-ink-secondary leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Featured Menu Items (Warm Ivory Surface) */}
      <MenuSection
        featuredOnly={true}
        title={featuredMenu.title}
        subtitle={featuredMenu.subtitle}
        kicker={featuredMenu.kicker}
      />

      {/* 4. Exclusive Combo Deals & Offers (Warm Alternate Surface) */}
      <Offers />

      {/* 5. Customer Testimonials & Critic Praise (Warm Ivory Surface) */}
      <Testimonials />

      {/* 6. Physical Grill Location & Pickup Details (Warm Alternate Surface) */}
      <Location />

      {/* 7. Bottom Conversion Banner (Architectural Deep Charcoal Anchor) */}
      <section className="py-16 md:py-20 bg-[#14161a] border-t border-white/[0.08]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-kicker mb-3">
            <span>{homeCta.kicker}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {homeCta.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            {homeCta.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl shadow-btn-subtle"
            >
              {homeCta.primaryCtaText}
            </a>
            <Link
              href={homeCta.secondaryCtaLink}
              className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
            >
              {homeCta.secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
