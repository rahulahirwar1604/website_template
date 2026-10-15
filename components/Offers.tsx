'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Tag,
  Copy,
  Check,
  ShoppingBag,
  Clock,
  Percent,
  Flame,
  Sparkles,
  Gift,
  Award,
  Zap,
} from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import type { OffersContent } from '@/data/business.types';
import { createWhatsAppUrl, getWhatsAppOrderMessage } from '@/lib/utils';

export interface OffersProps {
  content?: OffersContent;
  whatsappNumber?: string;
}

const OFFERS_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Tag,
  ShoppingBag,
  Clock,
  Percent,
  Flame,
  Sparkles,
  Gift,
  Award,
  Zap,
};

export default function Offers({
  content = businessConfig.offers,
  whatsappNumber = businessConfig.whatsapp.number,
}: OffersProps = {}) {
  const offers = content;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(code).catch(() => {});
    }
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const KickerIcon = (offers.kickerIcon && OFFERS_ICON_MAP[offers.kickerIcon]) || Tag;

  return (
    <section id="offers-section" className="py-10 sm:py-16 md:py-20 bg-surface-alt border-y border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-6 sm:mb-12">
          <span className="badge-kicker mb-2.5 sm:mb-3">
            <KickerIcon className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
            <span>{offers.kicker}</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
            {offers.title}
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base lg:text-lg text-ink-secondary max-w-2xl">
            {offers.subtitle}
          </p>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="flex md:hidden items-center justify-between text-xs text-ink-muted mb-3 px-1">
          <span className="font-medium">Special Deals ({offers.items.length})</span>
          <span className="flex items-center gap-1 text-amberGrill-600 font-semibold text-[11px]">
            <span>Swipe for more</span>
            <span aria-hidden="true">&rarr;</span>
          </span>
        </div>

        {/* Offers Carousel on mobile, 3-column grid on desktop */}
        <div className="flex md:grid md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8 overflow-x-auto md:overflow-visible pb-4 md:pb-0 pt-1 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 snap-x snap-mandatory no-scrollbar scroll-smooth">
          {offers.items.map((offer) => {
            const isCopied = copiedCode === offer.code;
            const offerMessage =
              offer.customWhatsAppMessage ||
              (offers.whatsappMessageTemplate
                ? offers.whatsappMessageTemplate
                    .replace('{title}', offer.title)
                    .replace('{code}', offer.code)
                : `I want to order the "${offer.title}" offer using coupon code [${offer.code}].`);

            const whatsappDealUrl = createWhatsAppUrl(
              whatsappNumber,
              getWhatsAppOrderMessage({
                customMessage: offerMessage,
              })
            );

            const CtaIcon = (offer.ctaIcon && OFFERS_ICON_MAP[offer.ctaIcon]) || ShoppingBag;

            return (
              <div
                key={offer.id}
                className="w-[270px] sm:w-[285px] md:w-auto shrink-0 snap-start group relative flex flex-col card-interactive bg-white rounded-2xl border border-surface-border overflow-hidden"
              >
                {/* Offer Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-ground">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt || offer.title}
                    fill
                    sizes="(max-width: 768px) 285px, 33vw"
                    className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3">
                    <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-md text-[10px] sm:text-xs font-bold bg-amberGrill-600 text-white shadow-xs">
                      {offer.discountBadge} (Demo)
                    </span>
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-3.5 sm:p-5 flex-1 flex flex-col justify-between space-y-3 sm:space-y-4">
                  <div>
                    <h3 className="text-sm sm:text-base lg:text-lg font-bold text-ink-primary group-hover:text-amberGrill-600 transition-colors leading-snug line-clamp-1 sm:line-clamp-none">
                      {offer.title}
                    </h3>
                    <p className="mt-1 sm:mt-1.5 text-xs text-ink-secondary leading-relaxed line-clamp-2">
                      {offer.description}
                    </p>
                  </div>

                  <div className="space-y-2.5 sm:space-y-3 pt-1 sm:pt-2">
                    {/* Validity Info */}
                    <div className="flex items-center text-[11px] sm:text-xs text-ink-secondary font-medium">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-amberGrill-600 shrink-0" />
                      <span>{offer.validUntil}</span>
                    </div>

                    {/* Promo Code & Copy Action */}
                    <div className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="flex-1 min-w-0 py-2 px-2.5 rounded-xl bg-surface-ground border border-dashed border-amber-300 text-center">
                        <span className="font-mono text-[11px] sm:text-xs font-bold tracking-wider text-amberGrill-700 truncate block">
                          DEMO: {offer.code}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(offer.code)}
                        className="p-2 sm:p-2.5 rounded-xl bg-white border border-surface-border hover:border-amberGrill-500 hover:bg-amber-50 text-ink-secondary hover:text-ink-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 min-h-[40px] min-w-[40px] sm:min-h-[44px] sm:min-w-[44px] flex items-center justify-center shrink-0"
                        aria-label={`Copy sample coupon code ${offer.code}`}
                        title={isCopied ? "Copied code!" : "Copy code"}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-600" />
                        ) : (
                          <Copy className="w-4 h-4" />
                        )}
                      </button>
                    </div>

                    {/* WhatsApp Claim CTA */}
                    <a
                      href={whatsappDealUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary w-full py-2.5 sm:py-3 text-xs sm:text-sm font-bold space-x-1.5 min-h-[42px] sm:min-h-[44px] flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
                    >
                      <CtaIcon className="w-3.5 h-3.5" />
                      <span>{offer.ctaText} (Demo)</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Template Demo Notice */}
        <p className="mt-8 text-center text-xs text-ink-muted">
          Note: Promotional offers, discounts, and coupon codes above are template demonstration examples. Real promotions can be configured in business.config.ts.
        </p>
      </div>
    </section>
  );
}
