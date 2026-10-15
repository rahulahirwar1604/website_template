'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertCircle, RotateCcw, Home } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-surface-ground">
      <div className="max-w-md w-full text-center">
        <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-amber-100 border border-amber-300 text-amberGrill-600 mb-6 mx-auto">
          <AlertCircle className="w-7 h-7" />
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-ink-primary tracking-tight">
          Something went wrong
        </h1>

        <p className="mt-3 text-sm sm:text-base text-ink-secondary leading-relaxed">
          We encountered an unexpected issue while loading this page. Please try again or head back to our home kitchen.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => reset()}
            className="btn-primary w-full sm:w-auto space-x-2"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>
          <Link
            href="/"
            className="btn-secondary w-full sm:w-auto space-x-2"
          >
            <Home className="w-4 h-4 text-amberGrill-600" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
