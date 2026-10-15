import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Award,
  Flame,
  Wheat,
  Sparkles,
  ChefHat,
  Leaf,
  UtensilsCrossed,
  Heart,
  Clock,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
} from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import type { AboutContent } from '@/data/business.types';

export const metadata: Metadata = {
  title: businessConfig.about.metaTitle,
  description: businessConfig.about.metaDescription,
  alternates: {
    canonical: '/about',
  },
};

const PILLAR_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Flame,
  Wheat,
  Sparkles,
  Award,
  ChefHat,
  Leaf,
  UtensilsCrossed,
  Heart,
  Clock,
  ShieldCheck,
};

export default function AboutPage() {
  const about = businessConfig.about;

  return (
    <div className="pb-20">
      {/* Page Header (Warm Restaurant Aesthetic) */}
      <section className="py-8 sm:py-12 md:py-16 bg-surface-alt border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-2.5 sm:mb-3">
            <span className="badge-kicker">
              <ChefHat className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
              <span>{about.kicker}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-ink-primary tracking-tight">
            {about.headline}
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
            {about.intro}
          </p>
        </div>
      </section>

      {/* Story Narrative & Visuals */}
      <section className="section-spacing bg-surface-ground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-ink-primary">
                {about.storySectionTitle}
              </h2>

              <div className="space-y-4 text-base text-ink-secondary leading-relaxed">
                {about.fullStory.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Tenets Checklist */}
              <div className="pt-3 space-y-3">
                {about.coreTenets.map((tenet, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-ink-primary font-medium">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span>{tenet}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Showcase Card */}
            <div className="lg:col-span-6">
              <div className="card-base p-5 sm:p-6">
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0c0d0f]">
                  <Image
                    src={about.foundersQuote.image}
                    alt={about.foundersQuote.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0f]/90 via-transparent to-transparent" />

                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-xs uppercase tracking-wider text-amberGrill-400 font-bold">
                      {about.foundersQuote.badge}
                    </span>
                    <p className="text-lg font-bold text-white mt-1">
                      &ldquo;{about.foundersQuote.quote}&rdquo;
                    </p>
                    <p className="text-xs text-zinc-300 mt-1">
                      {about.foundersQuote.author}
                    </p>
                  </div>
                </div>

                {/* Metrics Banner */}
                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  {about.metrics.map((m, idx) => (
                    <div key={idx} className="p-2.5 sm:p-3 rounded-xl bg-surface-alt border border-surface-border">
                      <div className="text-xl sm:text-2xl font-black text-amberGrill-600">{m.value}</div>
                      <div className="text-[10px] sm:text-[11px] text-ink-secondary font-semibold">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-10 sm:py-16 md:py-20 bg-surface-alt border-y border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-black text-ink-primary">{about.pillarsTitle}</h2>
            <p className="mt-2 text-xs sm:text-sm text-ink-secondary">
              {about.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
            {about.pillars.map((pillar, idx) => {
              const IconComponent = PILLAR_ICON_MAP[pillar.icon] || Award;
              return (
                <div key={idx} className="card-base p-3.5 sm:p-6 flex flex-col justify-between h-full">
                  <div>
                    <IconComponent className="w-5 h-5 sm:w-7 sm:h-7 text-amberGrill-600 mb-2 sm:mb-3" />
                    <h3 className="text-xs sm:text-base font-bold text-ink-primary mb-1 sm:mb-2 leading-snug">{pillar.title}</h3>
                    <p className="text-[11px] sm:text-xs md:text-sm text-ink-secondary leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Link */}
          {about.ctaText && (
            <div className="mt-8 sm:mt-12 text-center">
              <Link
                href={about.ctaLink || '/menu'}
                className="btn-primary px-8 py-3.5 text-sm font-bold space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
              >
                <span>{about.ctaText}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
