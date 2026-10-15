import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import { UtensilsCrossed, Home, Utensils } from 'lucide-react';
import { businessConfig } from '@/data/business.config';

export const metadata: Metadata = {
  title: `Page Not Found | ${businessConfig.identity.name}`,
  description: 'The requested page could not be found.',
};

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface-ground">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center mb-4">
          <span className="badge-kicker">
            <UtensilsCrossed className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
            <span>404 • Not Found</span>
          </span>
        </div>

        <p className="text-6xl sm:text-7xl font-black text-amberGrill-600 tracking-tight">
          404
        </p>

        <h1 className="mt-4 text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
          We couldn&apos;t find that order
        </h1>

        <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
          It looks like the page you were looking for has moved, been taken off the menu, or doesn&apos;t exist. Let&apos;s get you back to the kitchen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="btn-primary w-full sm:w-auto space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>
          <Link
            href="/menu"
            className="btn-secondary w-full sm:w-auto space-x-2"
          >
            <Utensils className="w-4 h-4 text-amberGrill-600" />
            <span>View Menu</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
