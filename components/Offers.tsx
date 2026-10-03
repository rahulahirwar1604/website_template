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

export default function Offers({ content = businessConfig.offers }: OffersProps = {}) {
  const offers = content;
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    setTimeout(() => {
      setCopiedCode(null);
    }, 2500);
  };

  const KickerIcon = (offers.kickerIcon && OFFERS_ICON_MAP[offers.kickerIcon]) || Tag;

  return (
    <section id="offers-section" className="section-spacing bg-[#101216] border-y border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="badge-kicker mb-3">
            <KickerIcon className="w-3.5 h-3.5" />
            <span>{offers.kicker}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {offers.title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            {offers.subtitle}
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
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
              businessConfig.whatsapp.number,
              getWhatsAppOrderMessage({
                customMessage: offerMessage,
              })
            );

            const CtaIcon = (offer.ctaIcon && OFFERS_ICON_MAP[offer.ctaIcon]) || ShoppingBag;

            return (
              <div
                key={offer.id}
                className="group relative flex flex-col card-interactive overflow-hidden"
              >
                {/* Offer Image */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#0c0d0f]">
                  <Image
                    src={offer.image}
                    alt={offer.imageAlt || offer.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14161a] via-transparent to-transparent opacity-60" />

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-bold bg-amberGrill-500 text-white shadow-sm">
                      {offer.discountBadge}
                    </span>
                  </div>
                </div>

                {/* Offer Details */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-amberGrill-400 transition-colors">
                      {offer.title}
                    </h3>
                    <p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                      {offer.description}
                    </p>
                  </div>

                  <div className="space-y-4 pt-2">
                    {/* Validity Info */}
                    <div className="flex items-center text-xs text-zinc-400">
                      <Clock className="w-3.5 h-3.5 mr-1.5 text-zinc-400" />
                      <span>{offer.validUntil}</span>
                    </div>

                    {/* Promo Code & Copy Action */}
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 py-2 px-3 rounded-lg bg-surface-ground border border-dashed border-white/20 text-center">
                        <span className="font-mono text-sm font-bold tracking-widest text-amberGrill-400">
                          {offer.code}
                        </span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(offer.code)}
                        className="p-2.5 rounded-lg bg-surface-ground border border-white/10 hover:border-amberGrill-500/50 text-zinc-300 hover:text-white transition-colors"
                        aria-label={`Copy coupon code ${offer.code}`}
                      >
                        {isCopied ? (
                          <Check className="w-4 h-4 text-emerald-400" />
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
                      className="btn-primary w-full py-2.5 text-xs font-bold space-x-1.5"
                    >
                      <CtaIcon className="w-3.5 h-3.5" />
                      <span>{offer.ctaText}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

