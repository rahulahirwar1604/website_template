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
    <section id="testimonials-section" className="py-10 sm:py-16 md:py-20 bg-surface-ground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <span className="badge-kicker mb-2.5 sm:mb-3">
            <KickerIcon className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
            <span>{kicker}</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
            {title}
          </h2>

          <p className="mt-2 sm:mt-3 text-xs sm:text-base lg:text-lg text-ink-secondary">
            {subtitle}
          </p>

          {/* Social Proof Rating Banner */}
          <div className="mt-4 sm:mt-6 inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl bg-white border border-surface-border shadow-card-subtle">
            <div className="flex text-amber-500">
              {[...Array(ratingStars)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500" />
              ))}
            </div>
            <span className="text-xs sm:text-sm font-bold text-ink-primary">{ratingScore}</span>
            <span className="text-surface-border">•</span>
            <span className="text-[11px] sm:text-xs text-ink-secondary font-medium">{socialProofText}</span>
          </div>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-ink-muted mb-3 px-1">
          <span className="font-medium">Guest Reviews ({items.length})</span>
          <span className="flex items-center gap-1 text-amberGrill-600 font-semibold text-[11px]">
            <span>Swipe for more</span>
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>

        {/* Testimonials Carousel on mobile, 2-column grid on desktop */}
        <div className="flex md:grid md:grid-cols-2 gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar scroll-smooth">
          {items.map((item) => (
            <article
              key={item.id}
              className="w-[270px] sm:w-[285px] md:w-auto shrink-0 snap-start card-interactive p-4 sm:p-6 lg:p-7 flex flex-col justify-between relative shadow-card-subtle bg-white rounded-2xl border border-surface-border"
            >
              <Quote className="absolute top-4 right-4 sm:top-6 sm:right-6 w-5 h-5 sm:w-6 sm:h-6 text-amberGrill-500/10 pointer-events-none" />

              <div>
                {/* Star Rating */}
                <div className="flex items-center space-x-1 text-amber-500 mb-2.5 sm:mb-3.5" aria-label={`${item.rating} out of 5 stars`}>
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-amber-500" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm lg:text-base text-ink-secondary leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>

                {/* Favorite Item Pill */}
                {item.favoriteItem && (
                  <div className="mt-2.5 sm:mt-3.5 inline-flex items-center space-x-1.5 px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md bg-surface-alt border border-surface-border text-[11px] sm:text-xs">
                    <span className="text-ink-secondary">{favoriteItemLabel}</span>
                    <span className="text-amberGrill-600 font-semibold truncate max-w-[170px] sm:max-w-none">{item.favoriteItem}</span>
                  </div>
                )}
              </div>

              {/* Author Row */}
              <div className="mt-4 sm:mt-6 pt-3.5 sm:pt-4 border-t border-surface-border flex items-center space-x-2.5 sm:space-x-3">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-surface-border bg-surface-alt shrink-0">
                  <Image
                    src={item.avatar}
                    alt={item.author}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center space-x-1 sm:space-x-1.5">
                    <h4 className="text-xs sm:text-sm font-bold text-ink-primary truncate">{item.author}</h4>
                    {item.verifiedOrder && (
                      <span title="Verified Customer" className="flex items-center">
                        <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600 shrink-0" />
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] sm:text-xs text-ink-muted truncate">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Template Showcase Notice */}
        <p className="mt-8 text-center text-xs text-ink-muted">
          Note: Customer reviews and ratings displayed above are illustrative sample showcases for this website template.
        </p>
      </div>
    </section>
  );
}
