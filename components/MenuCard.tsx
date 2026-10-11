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
    <article className="group relative flex flex-col card-interactive overflow-hidden">
      {/* Large Appetizing Food Imagery */}
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-[#0c0d0f]">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14161a] via-transparent to-transparent opacity-50 group-hover:opacity-60 transition-opacity" />

        {/* Refined Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-1.5 pointer-events-none">
          <div className="flex flex-wrap gap-1.5">
            {item.isChefSpecial && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amber-500 text-zinc-950">
                Chef Pick
              </span>
            )}
            {item.isPopular && !item.isChefSpecial && (
              <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-semibold bg-amberGrill-500 text-white">
                Best Seller
              </span>
            )}
            {item.isSpicy && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-red-600/90 text-white">
                <Flame className="w-3 h-3" />
                <span>Spicy</span>
              </span>
            )}
            {item.isVegetarian && (
              <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded text-[11px] font-semibold bg-emerald-600/90 text-white">
                <Leaf className="w-3 h-3" />
                <span>Plant-Based</span>
              </span>
            )}
          </div>

          {item.calories && (
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-[#0c0d0f]/80 text-zinc-300 border border-white/10 backdrop-blur-sm">
              {item.calories} kcal
            </span>
          )}
        </div>
      </div>

      {/* Card Content & Hierarchy */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Star Rating */}
          <div className="flex items-center justify-between text-xs text-zinc-400 mb-1.5">
            <span className="font-semibold text-amberGrill-400 uppercase tracking-wider text-[11px]">
              {item.category}
            </span>
            <div className="flex items-center space-x-1 text-amber-400 font-medium" aria-label={`Rated ${item.rating} out of 5 stars`}>
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-semibold">{item.rating.toFixed(1)}</span>
              <span className="text-zinc-500 text-[11px]">({item.reviewsCount})</span>
            </div>
          </div>

          {/* Dish Name */}
          <h3 className="text-lg font-bold text-white group-hover:text-amberGrill-400 transition-colors line-clamp-1">
            {item.name}
          </h3>

          {/* Description */}
          <p className="mt-2 text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed">
            {item.description}
          </p>

          {/* Ingredients */}
          {item.ingredients && item.ingredients.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-1">
              {item.ingredients.slice(0, 3).map((ing, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2 py-0.5 rounded bg-white/[0.04] text-zinc-400 border border-white/[0.04]"
                >
                  {ing}
                </span>
              ))}
              {item.ingredients.length > 3 && (
                <span className="text-[11px] px-1.5 py-0.5 text-zinc-500">
                  +{item.ingredients.length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Pricing & CTA Button */}
        <div className="mt-5 pt-4 border-t border-white/[0.08] flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[11px] text-zinc-400 font-medium uppercase tracking-wider">Price</span>
            <div className="flex items-baseline space-x-1.5">
              <span className="text-xl font-bold text-white">
                {formatPrice(item.price)}
              </span>
              {item.originalPrice && (
                <span className="text-xs text-zinc-500 line-through">
                  {formatPrice(item.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Order ${item.name} on WhatsApp`}
            className="btn-primary py-2 px-3.5 text-xs font-bold space-x-1.5"
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            <span>Order</span>
          </a>
        </div>
      </div>
    </article>
  );
}
