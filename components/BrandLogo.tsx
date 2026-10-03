import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { businessConfig } from '@/data/business.config';
import type { BusinessIdentity } from '@/data/business.types';

export interface BrandLogoProps {
  identity?: BusinessIdentity;
  size?: 'sm' | 'md';
  className?: string;
}

export default function BrandLogo({
  identity = businessConfig.identity,
  size = 'md',
  className = '',
}: BrandLogoProps) {
  const isSmall = size === 'sm';
  const imgDimension = isSmall ? 30 : 34;
  const containerSize = isSmall ? 'w-9 h-9' : 'w-10 h-10';

  return (
    <Link
      href="/"
      className={`inline-flex items-center space-x-3 group ${className}`}
      aria-label={`${identity.name} Homepage`}
    >
      <div
        className={`relative ${containerSize} rounded-xl bg-surface-card border border-white/10 p-1 flex items-center justify-center overflow-hidden shrink-0`}
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
        <span className="text-xl font-bold tracking-tight text-white group-hover:text-cream-100 transition-colors">
          {identity.brandNamePart1}{' '}
          <span className="text-amberGrill-500 font-extrabold">
            {identity.brandNameHighlight}
          </span>{' '}
          {identity.brandNamePart2}
        </span>
        <span className="text-[10px] uppercase font-semibold tracking-widest text-zinc-400">
          {identity.brandSubtitle}
        </span>
      </div>
    </Link>
  );
}
