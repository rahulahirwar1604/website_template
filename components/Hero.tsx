import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ShieldCheck, Clock, Award, Flame, Sparkles, MessageCircle } from 'lucide-react';
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
};

export default function Hero({
  content = businessConfig.hero,
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

  return (
    <section className="relative overflow-hidden py-6 sm:py-8 lg:py-16 bg-surface-ground border-b border-surface-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-12 lg:gap-x-12 lg:gap-y-6 lg:items-center items-center text-center lg:text-left">
          {/* 1. Kicker Badge */}
          <div className="order-1 lg:order-1 lg:col-span-7 flex justify-center lg:justify-start mb-2 lg:mb-0">
            <span className="badge-kicker">
              <Flame className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
              <span>{kicker}</span>
            </span>
          </div>

          {/* 2. Single Primary Headline */}
          <h1 className="order-2 lg:order-2 lg:col-span-7 text-2xl sm:text-3xl lg:text-[3.35rem] font-black tracking-tight text-ink-primary leading-tight lg:leading-[1.14] max-w-lg lg:max-w-none mx-auto lg:mx-0">
            <span className="lg:block">
              {headlinePart1} <span className="text-amberGrill-600">{headlineHighlight}</span>
            </span>{' '}
            <span className="lg:block">{headlinePart2}</span>
          </h1>

          {/* 3. Hero Visual Food Showcase Card (Rendered exactly once) */}
          <div className="order-3 lg:order-none lg:col-start-8 lg:col-span-5 lg:row-start-1 lg:row-span-3 w-full max-w-md sm:max-w-xl lg:max-w-none mx-auto mt-3 sm:mt-4 lg:mt-0 flex justify-center items-center">
            <div className="card-base p-3 sm:p-4 lg:p-5 bg-white border border-surface-border rounded-2xl shadow-card-subtle overflow-hidden w-full">
              {/* Appetizing Showcase Imagery */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[4/3] rounded-xl overflow-hidden bg-surface-alt">
                <Image
                  src={showcase.image}
                  alt={showcase.imageAlt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 576px, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                  priority
                />
                {/* Subtle dark gradient behind text for legibility */}
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/75 via-black/30 to-transparent pointer-events-none" />

                {/* Corner Badge */}
                <div className="absolute top-2.5 left-2.5 sm:top-3.5 sm:left-3.5">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[10px] sm:text-xs font-bold bg-amberGrill-600 text-white shadow-xs">
                    {showcase.cornerBadge}
                  </span>
                </div>

                {/* Image Bottom Overlay Details */}
                <div className="absolute bottom-2.5 left-3 right-3 sm:bottom-3.5 sm:left-4 sm:right-4 text-left">
                  <p className="text-[10px] sm:text-[11px] uppercase tracking-wider text-amber-300 font-bold">
                    {showcase.recipeCategory}
                  </p>
                  <h3 className="text-base sm:text-lg font-bold text-white leading-tight mt-0.5 truncate sm:whitespace-normal">
                    {showcase.title}
                  </h3>
                </div>
              </div>

              {/* Feature Highlights */}
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 mt-2.5 sm:mt-3 text-center">
                {showcase.features.map((feat, i) => {
                  const IconComponent = ICON_MAP[feat.icon] || Award;
                  return (
                    <div
                      key={i}
                      className="p-1.5 sm:p-2.5 rounded-xl bg-surface-alt border border-surface-border flex flex-col items-center justify-center"
                    >
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amberGrill-600 mb-0.5 sm:mb-1 shrink-0" />
                      <span className="text-[10px] sm:text-xs font-semibold text-ink-primary leading-tight">
                        {feat.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* 4. Description and Actions Block */}
          <div className="order-4 lg:order-3 lg:col-span-7 w-full max-w-md sm:max-w-xl lg:max-w-none mx-auto lg:mx-0 mt-3.5 sm:mt-5 lg:mt-0 pt-3.5 sm:pt-4 lg:pt-0 border-t border-surface-border lg:border-t-0 text-left">
            <div className="flex flex-col sm:flex-row lg:flex-col sm:items-center lg:items-start justify-between gap-3.5 sm:gap-4 lg:gap-6">
              {/* Angus Beef Description */}
              <p className="text-xs sm:text-sm lg:text-lg text-ink-secondary leading-relaxed sm:flex-1 lg:flex-none lg:max-w-xl font-normal">
                {description}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center sm:shrink-0 lg:shrink gap-2.5 sm:gap-3 lg:gap-3.5 w-full sm:w-auto lg:pt-1">
                <Link
                  href={primaryCtaLink}
                  className="btn-primary w-full sm:w-auto px-6 lg:px-7 py-3 lg:py-3.5 text-xs sm:text-sm lg:text-base font-bold flex items-center justify-center space-x-2 rounded-xl shadow-btn-subtle min-h-[44px] group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
                >
                  <span>{primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform shrink-0" />
                </Link>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary w-full sm:w-auto px-5 lg:px-7 py-2.5 lg:py-3.5 text-xs sm:text-sm lg:text-base font-semibold text-ink-primary hover:text-amberGrill-600 border border-surface-border hover:border-amberGrill-400 hover:bg-surface-hover transition-colors rounded-xl flex items-center justify-center space-x-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{secondaryCtaText}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
