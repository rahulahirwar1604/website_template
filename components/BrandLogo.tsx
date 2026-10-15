import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '@/data/business.config';
import type { BusinessIdentity } from '@/data/business.types';

export interface BrandLogoProps {
  identity?: BusinessIdentity;
  size?: 'sm' | 'md';
  variant?: 'light' | 'dark';
  className?: string;
}

export default function BrandLogo({
  identity = businessConfig.identity,
  size = 'md',
  variant = 'light',
  className = '',
}: BrandLogoProps) {
  const isSmall = size === 'sm';
  const isDark = variant === 'dark';
  const imgDimension = isSmall ? 28 : 32;
  const containerSize = isSmall ? 'w-9 h-9' : 'w-9 h-9 md:w-10 md:h-10';

  const containerStyles = isDark
    ? 'bg-charcoal-900 border border-white/10'
    : 'bg-surface-subtle border border-surface-border shadow-xs';

  const titleStyles = isDark
    ? 'text-white group-hover:text-amberGrill-300'
    : 'text-ink-primary group-hover:text-amberGrill-600';

  const subtitleStyles = isDark
    ? 'text-zinc-400'
    : 'text-ink-secondary';

  return (
    <Link
      href="/"
      className={`inline-flex items-center space-x-2.5 sm:space-x-3 group rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${className}`}
      aria-label={`${identity.name} Homepage`}
    >
      <div
        className={`relative ${containerSize} rounded-xl ${containerStyles} p-1 flex items-center justify-center overflow-hidden shrink-0 transition-colors`}
      >
        <Image
          src={identity.logo}
          alt={identity.altText}
          width={imgDimension}
          height={imgDimension}
          className="object-contain"
          priority={!isSmall}
        />
      </div>
      <div className="flex flex-col">
        <span className={`text-lg md:text-xl font-black tracking-tight ${titleStyles} transition-colors leading-tight`}>
          {identity.brandNamePart1}{' '}
          <span className="text-amberGrill-500 font-extrabold">
            {identity.brandNameHighlight}
          </span>{' '}
          {identity.brandNamePart2}
        </span>
        <span className={`text-[9px] md:text-[10px] uppercase font-bold tracking-widest ${subtitleStyles} transition-colors mt-0.5`}>
          {identity.brandSubtitle}
        </span>
      </div>
    </Link>
  );
}
