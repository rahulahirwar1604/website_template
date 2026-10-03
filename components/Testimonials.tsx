import React from 'react';
import Image from 'next/image';
import { Star, Quote, CheckCircle2, MessageSquare } from 'lucide-react';
import { testimonialsData, Testimonial } from '@/data/testimonials';
import { businessConfig } from '@/data/business.config';
import type { TestimonialsContent } from '@/data/business.types';

export interface TestimonialsProps {
  content?: TestimonialsContent;
  items?: Testimonial[];
}

const TESTIMONIALS_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  MessageSquare,
  Star,
  Quote,
};

export default function Testimonials({
  content = businessConfig.testimonials,
  items = testimonialsData,
}: TestimonialsProps = {}) {
  const {
    kicker,
    kickerIcon,
    title,
    subtitle,
    ratingScore,
    ratingStars = 5,
    socialProofText,
    favoriteItemLabel,
  } = content;

  const KickerIcon = TESTIMONIALS_ICON_MAP[kickerIcon || 'MessageSquare'] || MessageSquare;

  return (
    <section id="testimonials-section" className="section-spacing bg-[#0c0d0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="badge-kicker mb-3">
            <KickerIcon className="w-3.5 h-3.5" />
            <span>{kicker}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            {subtitle}
          </p>

          {/* Social Proof Rating Banner */}
          <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-3 px-5 py-2.5 rounded-xl bg-surface-card border border-white/10">
            <div className="flex text-amber-400">
              {[...Array(ratingStars)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400" />
              ))}
            </div>
            <span className="text-sm font-bold text-white">{ratingScore}</span>
            <span className="text-zinc-600">•</span>
            <span className="text-xs text-zinc-400 font-medium">{socialProofText}</span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              className="card-base p-6 sm:p-8 flex flex-col justify-between relative"
            >
              <Quote className="absolute top-6 right-6 w-7 h-7 text-white/[0.05] pointer-events-none" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center space-x-1 text-amber-400 mb-4" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-zinc-200 leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>

                {/* Favorite Item Pill */}
                {item.favoriteItem && (
                  <div className="mt-4 inline-flex items-center space-x-1.5 px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.06] text-xs">
                    <span className="text-zinc-400">{favoriteItemLabel}</span>
                    <span className="text-amberGrill-400 font-semibold">{item.favoriteItem}</span>
                  </div>
                )}
              </div>

              {/* Author Row */}
              <div className="mt-6 pt-5 border-t border-white/[0.08] flex items-center space-x-3.5">
                <div className="relative w-11 h-11 rounded-full overflow-hidden border border-white/10 bg-[#0c0d0f] shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1.5">
                    <h4 className="text-sm font-bold text-white truncate">{item.author}</h4>
                    {item.verifiedOrder && (
                      <span title="Verified Customer" className="flex items-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-400 truncate">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
