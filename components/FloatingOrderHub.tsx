'use client';

import React, { useState, useRef, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import {
  ShoppingBag,
  MessageCircle,
  UtensilsCrossed,
  ExternalLink,
  X,
} from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import { getWhatsAppOrderUrl, isValidPartnerUrl } from '@/lib/utils';

export interface FloatingOrderHubProps {
  phoneNumber?: string;
  message?: string;
  triggerLabel?: string;
  ariaLabel?: string;
}

export default function FloatingOrderHub({
  phoneNumber,
  message,
  triggerLabel = 'Order Online',
  ariaLabel,
}: FloatingOrderHubProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const hubRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  // Close ordering panel automatically on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Handle outside clicks and keyboard Escape dismissal
  useEffect(() => {
    if (!isOpen) return;

    function handlePointerDown(event: PointerEvent) {
      // Ignore right-clicks or secondary mouse buttons
      if (event.button !== 0) return;

      const target = event.target as Node | null;
      if (!target) return;

      // If the target element was unmounted or detached from DOM during a React re-render, ignore
      if (!document.body.contains(target)) return;

      // Check if click occurred inside the hub aside container or composed path
      const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
      const isInside =
        (hubRef.current && path.includes(hubRef.current)) ||
        (hubRef.current && hubRef.current.contains(target));

      if (!isInside) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    }

    // Delay attaching document listener by a frame so the opening click cycle completes cleanly
    const timer = setTimeout(() => {
      document.addEventListener('pointerdown', handlePointerDown);
    }, 0);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('pointerdown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  // Business configuration and ordering endpoints
  const whatsappConfig = businessConfig.whatsapp;
  const phone = phoneNumber || whatsappConfig.number;
  const customMessage =
    message ||
    whatsappConfig.fabDefaultMessage ||
    "I would like to check today's specials and place an order.";
  const whatsappUrl = getWhatsAppOrderUrl({ customMessage }, phone);

  const zomatoUrl = businessConfig.orderingPlatforms?.zomatoUrl;
  const isZomatoActive = isValidPartnerUrl(zomatoUrl, 'zomato');

  const swiggyUrl = businessConfig.orderingPlatforms?.swiggyUrl;
  const isSwiggyActive = isValidPartnerUrl(swiggyUrl, 'swiggy');

  const buttonAriaLabel =
    ariaLabel ||
    (isOpen ? 'Close ordering options' : 'Open ordering options');

  return (
    <aside
      ref={hubRef}
      aria-label="Online ordering hub"
      className="fixed bottom-[calc(1.25rem+env(safe-area-inset-bottom,0px))] right-[calc(1rem+env(safe-area-inset-right,0px))] sm:bottom-6 sm:right-6 z-50 pointer-events-auto"
    >
      <div className="relative">
        {/* Expanded Hub Popover Panel */}
        <div
          ref={panelRef}
          id="floating-order-panel"
          role="dialog"
          aria-label="Online ordering options"
          aria-hidden={!isOpen}
          className={`absolute bottom-full right-0 mb-3 w-[290px] sm:w-[320px] max-w-[calc(100vw-2rem)] bg-surface-card border border-surface-border rounded-2xl shadow-card-elevated p-3.5 sm:p-4 text-ink-primary transition-all duration-200 ease-out origin-bottom-right motion-reduce:transition-none ${
            isOpen
              ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto visible'
              : 'opacity-0 translate-y-2 scale-95 pointer-events-none invisible'
          }`}
        >
          {/* Panel Header */}
          <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-surface-border">
            <div>
              <h2 className="text-sm font-bold text-ink-primary">Order Online</h2>
              <p className="text-[11px] text-ink-muted">
                Choose your preferred platform
              </p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              tabIndex={isOpen ? 0 : -1}
              aria-label="Close ordering options"
              className="w-11 h-11 min-w-[44px] min-h-[44px] flex items-center justify-center p-2 text-ink-muted hover:text-ink-primary rounded-lg hover:bg-surface-alt transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 cursor-pointer"
            >
              <X className="w-4 h-4 pointer-events-none" aria-hidden="true" />
            </button>
          </div>

          {/* Ordering Channel List */}
          <div className="space-y-2">
            {/* WhatsApp Direct Ordering Option */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={isOpen ? 0 : -1}
              onClick={() => setIsOpen(false)}
              className="group flex items-center justify-between p-2.5 rounded-xl border border-emerald-200/60 bg-emerald-50/50 hover:bg-emerald-50 hover:border-emerald-300 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 cursor-pointer"
            >
              <div className="flex items-center space-x-3 min-w-0">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageCircle className="w-5 h-5 fill-current" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold text-ink-primary flex items-center gap-1.5">
                    <span>Order on WhatsApp</span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                      Demo
                    </span>
                  </div>
                  <p className="text-[11px] text-ink-secondary truncate">
                    Sample ordering link (+1 555 demo line)
                  </p>
                </div>
              </div>
              <ExternalLink
                className="w-4 h-4 text-emerald-600 shrink-0 ml-2 opacity-70 group-hover:opacity-100 transition-opacity"
                aria-hidden="true"
              />
            </a>

            {/* Zomato Ordering Option */}
            {isZomatoActive ? (
              <a
                href={zomatoUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-2.5 rounded-xl border border-[#cb202d]/20 bg-[#cb202d]/5 hover:bg-[#cb202d]/10 hover:border-[#cb202d]/35 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#cb202d] cursor-pointer"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#cb202d] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink-primary">Zomato</div>
                    <p className="text-[11px] text-ink-secondary truncate">
                      Restaurant listing
                    </p>
                  </div>
                </div>
                <ExternalLink
                  className="w-4 h-4 text-[#cb202d] shrink-0 ml-2 opacity-70 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <div
                aria-disabled="true"
                className="flex items-center justify-between p-2.5 rounded-xl border border-surface-border bg-surface-alt/70 select-none cursor-not-allowed"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-charcoal-200 text-charcoal-600 flex items-center justify-center shrink-0">
                    <UtensilsCrossed className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink-secondary">Zomato</div>
                    <p className="text-[11px] text-ink-muted truncate">
                      Listing not linked
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-ink-secondary border border-surface-border shrink-0 ml-2 shadow-xs">
                  Coming soon
                </span>
              </div>
            )}

            {/* Swiggy Ordering Option */}
            {isSwiggyActive ? (
              <a
                href={swiggyUrl}
                target="_blank"
                rel="noopener noreferrer"
                tabIndex={isOpen ? 0 : -1}
                onClick={() => setIsOpen(false)}
                className="group flex items-center justify-between p-2.5 rounded-xl border border-[#fc8019]/20 bg-[#fc8019]/5 hover:bg-[#fc8019]/10 hover:border-[#fc8019]/35 transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#fc8019] cursor-pointer"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-[#fc8019] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink-primary">Swiggy</div>
                    <p className="text-[11px] text-ink-secondary truncate">
                      Restaurant listing
                    </p>
                  </div>
                </div>
                <ExternalLink
                  className="w-4 h-4 text-[#fc8019] shrink-0 ml-2 opacity-70 group-hover:opacity-100 transition-opacity"
                  aria-hidden="true"
                />
              </a>
            ) : (
              <div
                aria-disabled="true"
                className="flex items-center justify-between p-2.5 rounded-xl border border-surface-border bg-surface-alt/70 select-none cursor-not-allowed"
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-charcoal-200 text-charcoal-600 flex items-center justify-center shrink-0">
                    <ShoppingBag className="w-5 h-5" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-bold text-ink-secondary">Swiggy</div>
                    <p className="text-[11px] text-ink-muted truncate">
                      Listing not linked
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white text-ink-secondary border border-surface-border shrink-0 ml-2 shadow-xs">
                  Coming soon
                </span>
              </div>
            )}
          </div>

          {/* Template Demo Notice */}
          <p className="mt-3 pt-2.5 border-t border-surface-border text-[10px] text-ink-muted text-center leading-tight">
            Template Demo: Orders route to a sample line (+1 555). Update in business.config.ts.
          </p>
        </div>

        {/* Primary Floating Action Trigger Button */}
        <button
          ref={triggerRef}
          id="floating-order-trigger"
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsOpen((prev) => !prev);
            }
          }}
          aria-expanded={isOpen}
          aria-haspopup="dialog"
          aria-controls="floating-order-panel"
          aria-label={buttonAriaLabel}
          className="group flex items-center justify-center w-12 h-12 sm:w-auto sm:h-12 p-3 sm:py-3 sm:px-4 rounded-full bg-amberGrill-600 hover:bg-amberGrill-700 active:bg-amberGrill-800 text-white shadow-card-elevated hover:shadow-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 focus-visible:ring-offset-2 focus-visible:ring-offset-surface-ground min-w-[48px] min-h-[48px] cursor-pointer touch-manipulation select-none"
        >
          {isOpen ? (
            <X className="w-5 h-5 shrink-0 pointer-events-none" aria-hidden="true" />
          ) : (
            <ShoppingBag className="w-5 h-5 shrink-0 pointer-events-none" aria-hidden="true" />
          )}
          <span className="hidden sm:inline-block ml-2 text-xs font-bold tracking-wide whitespace-nowrap pointer-events-none">
            {isOpen ? 'Close' : triggerLabel}
          </span>
        </button>
      </div>
    </aside>
  );
}
