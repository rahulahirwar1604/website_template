'use client';

import React from 'react';
import Image from 'next/image';
import { Star, Flame, Leaf, ShoppingBag } from 'lucide-react';
import { MenuItem } from '@/data/menu';
import { businessConfig } from '@/data/business.config';
import { formatPrice, createWhatsAppUrl, getWhatsAppOrderMessage } from '@/lib/utils';

export interface MenuCardProps {
  item: MenuItem;
  whatsappNumber?: string;
}

export default function MenuCard({
  item,
  whatsappNumber = businessConfig.whatsapp.number,
}: MenuCardProps) {
  const whatsappUrl = createWhatsAppUrl(
    whatsappNumber,
    getWhatsAppOrderMessage({
      productName: item.name,
      price: item.price,
    })
  );

  return (
    <article className="group relative flex flex-row-reverse sm:flex-col card-interactive bg-white overflow-hidden rounded-2xl border border-surface-border p-3.5 sm:p-0 gap-3 sm:gap-0 justify-between items-stretch">
      {/* Food Imagery (Right thumbnail on mobile, full-width top header on desktop) */}
      <div className="relative w-[104px] h-[104px] sm:w-full sm:h-auto sm:aspect-[4/3] shrink-0 overflow-hidden rounded-xl sm:rounded-none bg-surface-alt self-center sm:self-auto">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 104px, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
          loading="lazy"
        />

        {/* Desktop Badges Overlay (Preserved for desktop presentation) */}
        <div className="hidden sm:flex absolute top-3 left-3 right-3 items-start justify-between gap-1.5 pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {item.isChefSpecial && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-amber-600 text-white shadow-xs">
                Chef Pick
              </span>
            )}
            {item.isPopular && !item.isChefSpecial && (
              <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-bold bg-amberGrill-600 text-white shadow-xs">
                Best Seller
              </span>
            )}
            {item.isSpicy && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-red-700 text-white shadow-xs">
                <Flame className="w-3 h-3" />
                <span>Spicy</span>
              </span>
            )}
            {item.isVegetarian && (
              <span className="inline-flex items-center space-x-1 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-700 text-white shadow-xs">
                <Leaf className="w-3 h-3" />
                <span>Plant-Based</span>
              </span>
            )}
          </div>

          {item.calories && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-black/70 text-white border border-white/20 backdrop-blur-xs shadow-xs">
              {item.calories} kcal
            </span>
          )}
        </div>
      </div>

      {/* Card Content & Hierarchy (Left column on mobile, bottom body on desktop) */}
      <div className="p-0 sm:p-5 flex-1 flex flex-col justify-between min-w-0">
        <div>
          {/* Mobile Dietary & Star Rating Row */}
          <div className="flex sm:hidden items-center justify-between gap-1.5 mb-1.5 text-xs">
            {/* Prioritized Dietary or Specialty Badge */}
            <div className="flex items-center gap-1.5 flex-nowrap min-w-0">
              {item.isVegetarian && (
                <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300/60 shrink-0">
                  <Leaf className="w-2.5 h-2.5 text-emerald-600 shrink-0" />
                  <span>Veg</span>
                </span>
              )}
              {item.isSpicy && (
                <span className="inline-flex items-center space-x-1 px-1.5 py-0.5 rounded text-[10px] font-bold bg-red-50 text-red-800 border border-red-300/60 shrink-0">
                  <Flame className="w-2.5 h-2.5 text-red-600 shrink-0" />
                  <span>Spicy</span>
                </span>
              )}
              {item.isChefSpecial && !item.isVegetarian && !item.isSpicy && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/60 shrink-0">
                  Chef Pick
                </span>
              )}
              {item.isPopular && !item.isChefSpecial && !item.isVegetarian && !item.isSpicy && (
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300/60 shrink-0">
                  Best Seller
                </span>
              )}
            </div>

            {/* Compact Star Rating (Clearly labeled sample rating) */}
            {(businessConfig.menuPage?.showSampleRatings ?? true) && (
              <div
                className="flex items-center space-x-1 shrink-0 font-medium"
                aria-label={`Sample rating ${item.rating.toFixed(1)} out of 5 stars (illustrative demonstration)`}
                title="Sample rating (illustrative demonstration)"
              >
                <Star className="w-3 h-3 fill-amber-500 text-amber-500 shrink-0" />
                <span className="font-bold text-ink-primary text-xs">{item.rating.toFixed(1)}</span>
                <span className="text-ink-muted text-[10px] font-semibold">
                  ({businessConfig.menuPage?.sampleRatingsLabel || 'Sample'})
                </span>
              </div>
            )}
          </div>

          {/* Desktop Category & Star Rating */}
          <div className="hidden sm:flex items-center justify-between text-xs mb-2">
            <span className="font-bold text-amberGrill-600 uppercase tracking-wider text-[11px]">
              {item.category}
            </span>
            {(businessConfig.menuPage?.showSampleRatings ?? true) && (
              <div
                className="flex items-center space-x-1 font-medium"
                aria-label={`Sample rating ${item.rating.toFixed(1)} out of 5 stars (illustrative demonstration)`}
              >
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                <span className="font-bold text-ink-primary text-xs">{item.rating.toFixed(1)}</span>
                <span className="text-ink-muted text-[11px] font-semibold">
                  ({businessConfig.menuPage?.sampleRatingsLabel || 'Sample'})
                </span>
              </div>
            )}
          </div>

          {/* Dish Name */}
          <h3 className="text-sm sm:text-lg font-bold text-ink-primary group-hover:text-amberGrill-600 transition-colors line-clamp-2 leading-snug">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-ink-secondary line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Desktop Ingredients Chips (hidden on mobile to keep card compact) */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="hidden sm:flex mt-3 flex-wrap gap-1.5">
              {item.ingredients.slice(0, 3).map((ing, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-surface-alt text-ink-secondary border border-surface-border font-medium"
                >
                  {ing}
                </span>
              ))}
              {item.ingredients.length > 3 && (
                <span className="text-[11px] px-1.5 py-0.5 text-ink-secondary font-medium">
                  +{item.ingredients.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & CTA Button */}
        <div className="mt-2.5 sm:mt-5 pt-2 sm:pt-4 border-t border-surface-border flex items-center justify-between gap-2 sm:gap-3">
          <div className="flex flex-col min-w-0 shrink">
            <span className="hidden sm:block text-[10px] text-ink-secondary font-bold uppercase tracking-wider">
              Price
            </span>
            <div className="flex items-baseline flex-nowrap gap-x-1.5">
              <span className="text-base sm:text-xl font-extrabold text-ink-primary whitespace-nowrap">
                {formatPrice(item.price)}
              </span>
              {item.originalPrice && (
                <span className="text-[11px] sm:text-xs text-ink-muted line-through whitespace-nowrap">
                  {formatPrice(item.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${item.name} for ${formatPrice(item.price)} on WhatsApp`}
            className="btn-primary shrink-0 py-2 sm:py-2.5 px-3.5 sm:px-4 text-xs font-bold space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl min-h-[44px] flex items-center justify-center shadow-xs touch-manipulation"
          >
            <ShoppingBag className="w-3.5 h-3.5 shrink-0" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </article>
  );
}
