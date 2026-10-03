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
    <div className="pt-2 pb-20">
      {/* Page Header */}
      <section className="py-12 md:py-20 bg-[#101216] border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-kicker mb-3">
            <span>{about.kicker}</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {about.headline}
          </h1>

          <p className="mt-4 text-base sm:text-xl text-zinc-300 leading-relaxed">
            {about.intro}
          </p>
        </div>
      </section>

      {/* Story Narrative & Visuals */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Story Column */}
            <div className="lg:col-span-6 space-y-6">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                {about.storySectionTitle}
              </h2>

              <div className="space-y-4 text-base text-zinc-300 leading-relaxed">
                {about.fullStory.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>

              {/* Core Tenets Checklist */}
              <div className="pt-3 space-y-3">
                {about.coreTenets.map((tenet, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-sm text-zinc-200">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
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
                    <p className="text-xs text-zinc-400 mt-1">
                      {about.foundersQuote.author}
                    </p>
                  </div>
                </div>

                {/* Metrics Banner */}
                <div className="grid grid-cols-3 gap-3 mt-4 text-center">
                  {about.metrics.map((m, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-surface-ground border border-white/10">
                      <div className="text-2xl font-black text-amberGrill-500">{m.value}</div>
                      <div className="text-[11px] text-zinc-400 font-medium">{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The 4 Pillars */}
      <section className="py-16 md:py-20 bg-[#101216] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl font-black text-white">{about.pillarsTitle}</h2>
            <p className="mt-2 text-sm text-zinc-400">
              {about.pillarsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {about.pillars.map((pillar, idx) => {
              const IconComponent = PILLAR_ICON_MAP[pillar.icon] || Award;
              return (
                <div key={idx} className="card-base p-6">
                  <IconComponent className="w-7 h-7 text-amberGrill-500 mb-3" />
                  <h3 className="text-base font-bold text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Link */}
          {about.ctaText && (
            <div className="mt-12 text-center">
              <Link
                href={about.ctaLink || '/menu'}
                className="btn-primary px-8 py-3.5 text-sm font-bold space-x-2"
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
