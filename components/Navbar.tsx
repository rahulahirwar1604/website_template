'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Clock, Phone, ShoppingBag } from 'lucide-react';
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
  address = businessConfig.address,
  contact = businessConfig.contact,
  openingHours = businessConfig.openingHours,
  whatsappNumber = businessConfig.whatsapp.number,
}: NavbarProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const whatsappOrderUrl = createWhatsAppUrl(
    whatsappNumber,
    getWhatsAppOrderMessage()
  );

  return (
    <>
      {/* Skip to Content for Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-amberGrill-500 focus:text-white focus:rounded-lg focus:font-semibold focus:shadow-md"
      >
        Skip to main content
      </a>

      {/* Top Utility Bar (Subtle, Clean Restaurant Status) */}
      <div className="bg-[#0f1114] border-b border-white/[0.06] py-2 px-4 text-xs text-zinc-400">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2.5">
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mr-1.5" />
              {navbar.statusBadge}
            </span>
            <span className="hidden sm:inline text-zinc-400">
              {address.topBarBadge}
            </span>
          </div>

          <div className="flex items-center space-x-5">
            <div className="hidden md:flex items-center text-zinc-400">
              <Clock className="w-3.5 h-3.5 mr-1.5 text-zinc-400" />
              <span>{openingHours.todayStatus}</span>
            </div>
            <a
              href={`tel:${contact.phone}`}
              className="flex items-center text-zinc-300 hover:text-amberGrill-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 mr-1.5 text-amberGrill-500" />
              <span className="font-semibold">{contact.displayPhone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Primary Sticky Header */}
      <header className="sticky top-0 z-40 bg-[#0c0d0f]/90 backdrop-blur-md border-b border-white/[0.08]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Brand Logo */}
            <BrandLogo size="md" identity={identity} />

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center space-x-1" aria-label="Primary Navigation">
              {navbar.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-white/[0.06] font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
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
                className="btn-secondary px-4 py-2.5 text-xs font-semibold"
              >
                {navbar.menuCtaText}
              </Link>
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary px-4 py-2.5 text-xs font-bold space-x-2"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>{navbar.orderCtaText}</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="flex md:hidden items-center space-x-2">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Order on WhatsApp"
                className="p-2.5 rounded-lg bg-surface-card border border-white/10 text-amberGrill-400"
              >
                <ShoppingBag className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg text-zinc-300 hover:text-white bg-surface-card border border-white/10"
                aria-expanded={isOpen}
                aria-controls="mobile-navigation"
                aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="md:hidden bg-[#101216] border-b border-white/10 px-4 pt-3 pb-6"
          >
            <nav className="flex flex-col space-y-1">
              {navbar.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-white bg-white/[0.08] font-semibold'
                        : 'text-zinc-300 hover:text-white hover:bg-white/[0.04]'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <div className="mt-4 pt-4 border-t border-white/10 flex flex-col space-y-2">
              <a
                href={whatsappOrderUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="btn-primary w-full py-3 text-sm font-bold flex items-center justify-center space-x-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>{navbar.mobileOrderCtaText}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="btn-secondary w-full py-2.5 text-xs font-semibold flex items-center justify-center space-x-2"
              >
                <Phone className="w-3.5 h-3.5 text-amberGrill-400" />
                <span>{navbar.callCtaPrefix} {contact.displayPhone}</span>
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
