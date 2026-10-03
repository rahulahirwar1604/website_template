import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Star, ArrowRight, ShieldCheck, Clock, Award, Flame, Sparkles } from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import type { HeroContent } from '@/data/business.types';
import { createWhatsAppUrl, getWhatsAppOrderMessage } from '@/lib/utils';

export interface HeroProps {
  content?: HeroContent;
  stats?: Array<{ label: string; value: string }>;
  whatsappNumber?: string;
}

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Award,
  Clock,
  ShieldCheck,
  Flame,
  Sparkles,
  Star,
};

export default function Hero({
  content = businessConfig.hero,
  stats = businessConfig.stats,
  whatsappNumber = businessConfig.whatsapp.number,
}: HeroProps) {
  const {
    kicker,
    headlinePart1,
    headlineHighlight,
    headlinePart2,
    description,
    primaryCtaText,
    primaryCtaLink,
    secondaryCtaText,
    secondaryCtaLink,
    showcase,
  } = content;

  const whatsappUrl =
    secondaryCtaLink ||
    createWhatsAppUrl(
      whatsappNumber,
      getWhatsAppOrderMessage({
        productName: showcase.title,
      })
    );

  const starCount = showcase.ratingStars ?? 5;

  return (
    <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-24 lg:pt-20 lg:pb-28 border-b border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Left Column: Typography Hierarchy & CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            {/* Kicker Badge */}
            <div className="inline-flex items-center justify-center lg:justify-start">
              <span className="badge-kicker">
                <span>{kicker}</span>
              </span>
            </div>

            {/* Primary Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08]">
              {headlinePart1} <br />
              <span className="text-amberGrill-500">{headlineHighlight}</span> <br />
              {headlinePart2}
            </h1>

            {/* Lead Narrative */}
            <p className="text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              {description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                href={primaryCtaLink}
                className="btn-primary w-full sm:w-auto px-7 py-3.5 text-base space-x-2 group"
              >
                <span>{primaryCtaText}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary w-full sm:w-auto px-7 py-3.5 text-base"
              >
                <span>{secondaryCtaText}</span>
              </a>
            </div>

            {/* Trust Proof Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/[0.08]">
              {stats.map((stat, i) => (
                <div key={i} className="flex flex-col items-center lg:items-start text-center lg:text-left">
                  <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    {stat.value}
                  </span>
                  <span className="text-xs text-zinc-400 font-medium mt-0.5">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Hero Visual Food Showcase */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-lg lg:max-w-none">
              <div className="card-base p-4 sm:p-5 overflow-hidden">
                {/* Large Appetizing Showcase Imagery */}
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0c0d0f]">
                  <Image
                    src={showcase.image}
                    alt={showcase.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0d0f]/90 via-[#0c0d0f]/20 to-transparent" />

                  {/* Corner Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold bg-[#14161a]/90 text-amberGrill-400 border border-white/10 backdrop-blur-sm">
                      {showcase.cornerBadge}
                    </span>
                  </div>

                  {/* Image Bottom Overlay Details */}
                  <div className="absolute bottom-3.5 left-4 right-4 flex items-end justify-between">
                    <div>
                      <p className="text-[11px] uppercase tracking-wider text-amberGrill-400 font-semibold">
                        {showcase.recipeCategory}
                      </p>
                      <h3 className="text-lg font-bold text-white leading-tight">
                        {showcase.title}
                      </h3>
                      <div className="flex items-center space-x-1.5 mt-1">
                        <div className="flex text-amber-400">
                          {[...Array(starCount)].map((_, i) => (
                            <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                          ))}
                        </div>
                        <span className="text-xs font-medium text-zinc-300">
                          {showcase.ratingText}
                        </span>
                      </div>
                    </div>
                    <span className="text-xl font-bold text-white bg-amberGrill-500 px-3 py-1 rounded-lg">
                      {showcase.price}
                    </span>
                  </div>
                </div>

                {/* Restrained Feature Pills */}
                <div className="grid grid-cols-3 gap-2.5 mt-3.5 text-center">
                  {showcase.features.map((feat, i) => {
                    const IconComponent = ICON_MAP[feat.icon] || Award;
                    return (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.05] flex flex-col items-center"
                      >
                        <IconComponent className="w-4 h-4 text-amberGrill-500 mb-1" />
                        <span className="text-xs font-semibold text-zinc-200">{feat.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
