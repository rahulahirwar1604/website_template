'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ShoppingBag, Phone } from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import type {
  NavbarContent,
  BusinessIdentity,
  BusinessAddress,
  BusinessContact,
  BusinessOpeningHours,
} from '@/data/business.types';
import { createWhatsAppUrl, getWhatsAppOrderMessage } from '@/lib/utils';
import BrandLogo from './BrandLogo';

export interface NavbarProps {
  navbar?: NavbarContent;
  identity?: BusinessIdentity;
  address?: BusinessAddress;
  contact?: BusinessContact;
  openingHours?: BusinessOpeningHours;
  whatsappNumber?: string;
}

export default function Navbar({
  navbar = businessConfig.navbar,
  identity = businessConfig.identity,
  contact = businessConfig.contact,
  whatsappNumber = businessConfig.whatsapp.number,
}: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      return () => window.removeEventListener('keydown', handleKeyDown);
    }
  }, [isOpen]);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const whatsappOrderUrl = createWhatsAppUrl(
    whatsappNumber,
    getWhatsAppOrderMessage()
  );

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amberGrill-500 focus:text-white focus:rounded-xl focus:font-semibold focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Primary Sticky Header (Clean light surface with subtle bottom border) */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-surface-border shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand Logo */}
            <BrandLogo size="md" identity={identity} variant="light" />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Primary Navigation">
              {navbar.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-xl text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${
                      isActive
                        ? 'text-amberGrill-600 bg-amber-50 font-bold border border-amber-200/60 shadow-xs'
                        : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-subtle font-medium'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Action Buttons */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/menu"
                className="btn-secondary px-4 py-2.5 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
              >
                {navbar.menuCtaText}
              </Link>
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2.5 text-xs font-bold space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{navbar.orderCtaText}</span>
              </a>
            </div>

            {/* Mobile Controls (Minimum 44x44px touch targets) */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl bg-amber-50 border border-amber-200/80 text-amberGrill-600 hover:bg-amber-100 flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
              >
                <ShoppingBag className="w-5 h-5" />
              </a>
              <button
                ref={triggerRef}
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-11 h-11 min-w-[44px] min-h-[44px] rounded-xl text-ink-primary bg-white border border-surface-border hover:bg-surface-subtle flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden bg-white border-b border-surface-border px-4 pt-3 pb-6 shadow-card-elevated"
          >
            <nav className="flex flex-col space-y-1.5" aria-label="Mobile Navigation">
              {navbar.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${
                      isActive
                        ? 'text-amberGrill-600 bg-amber-50 font-bold border border-amber-200/60'
                        : 'text-ink-secondary hover:text-ink-primary hover:bg-surface-subtle'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-surface-border flex flex-col space-y-2.5">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center space-x-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{navbar.mobileOrderCtaText}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="btn-secondary w-full py-2.5 text-xs font-semibold flex items-center justify-center space-x-2 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
              >
                <Phone className="w-3.5 h-3.5 text-amberGrill-600" />
                <span>{navbar.callCtaPrefix} {contact.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
