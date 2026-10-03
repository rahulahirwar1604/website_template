import React from 'react';
import Link from 'next/link';
import { Flame, Sparkles, ShieldCheck, Award } from 'lucide-react';
import Hero from '@/components/Hero';
import MenuSection from '@/components/MenuSection';
import Offers from '@/components/Offers';
import Testimonials from '@/components/Testimonials';
import Location from '@/components/Location';
import { businessConfig } from '@/data/business.config';
import { cn, getWhatsAppOrderUrl } from '@/lib/utils';

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
      {/* Hero Section */}
      <Hero />

      {/* Feature Highlights Grid */}
      <section className="py-12 md:py-16 bg-[#101216] border-b border-white/[0.06]" aria-label="Our Culinary Quality Standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => {
              const IconComponent = FEATURE_ICON_MAP[feature.icon] || Award;
              const iconColorClass = feature.iconColor || 'text-amberGrill-500';

              return (
                <div
                  key={feature.title || idx}
                  className="card-base p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-surface-ground border border-white/10 flex items-center justify-center text-amberGrill-500 mb-4">
                      <IconComponent className={cn('w-5 h-5', iconColorClass)} />
                    </div>
                    <h3 className="text-base font-bold text-white mb-1.5">{feature.title}</h3>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Menu Items */}
      <MenuSection
        featuredOnly={true}
        title={featuredMenu.title}
        subtitle={featuredMenu.subtitle}
        kicker={featuredMenu.kicker}
      />

      {/* Exclusive Combo Deals & Offers */}
      <Offers />

      {/* Customer Testimonials & Critics */}
      <Testimonials />

      {/* Physical Grill Location & Pickup Details */}
      <Location />

      {/* Bottom Conversion Banner */}
      <section className="py-16 md:py-20 bg-[#14161a] border-t border-white/[0.08]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-kicker mb-3">
            <span>{homeCta.kicker}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            {homeCta.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            {homeCta.description}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full sm:w-auto px-8 py-3.5 text-base font-bold"
            >
              {homeCta.primaryCtaText}
            </a>
            <Link
              href={homeCta.secondaryCtaLink}
              className="btn-secondary w-full sm:w-auto px-8 py-3.5 text-base font-semibold"
            >
              {homeCta.secondaryCtaText}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
