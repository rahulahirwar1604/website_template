'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2, Phone, Mail, MapPin } from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import type {
  FooterContent,
  NavbarContent,
  BusinessIdentity,
  BusinessAddress,
  BusinessContact,
  BusinessOpeningHours,
  SocialLink,
} from '@/data/business.types';
import BrandLogo from './BrandLogo';

export interface FooterProps {
  footer?: FooterContent;
  navbar?: NavbarContent;
  identity?: BusinessIdentity;
  address?: BusinessAddress;
  contact?: BusinessContact;
  openingHours?: BusinessOpeningHours;
  socials?: SocialLink[];
  shortDescription?: string;
}

export default function Footer({
  footer = businessConfig.footer,
  navbar = businessConfig.navbar,
  identity = businessConfig.identity,
  address = businessConfig.address,
  contact = businessConfig.contact,
  openingHours = businessConfig.openingHours,
  socials = businessConfig.socials,
  shortDescription = businessConfig.shortDescription,
}: FooterProps = {}) {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0a0b0d] border-t border-white/[0.08] text-zinc-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand & Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="sm" identity={identity} />

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {shortDescription}
            </p>

            <div className="space-y-2.5 text-xs text-zinc-300 pt-2">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amberGrill-500 shrink-0" />
                <span>{address.fullAddress}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-amberGrill-500 shrink-0" />
                <span>{contact.displayPhone}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amberGrill-500 shrink-0" />
                <span>{contact.email}</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {navbar.navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/menu#deals" className="hover:text-white transition-colors text-amberGrill-400">
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{footer.hoursTitle}</h4>
            <div className="space-y-2 text-xs sm:text-sm">
              {openingHours.schedule.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-zinc-200 font-medium">{h.days}</span>
                  <span className="text-zinc-400">{h.hours}</span>
                </div>
              ))}
            </div>
            <p className="pt-1 text-xs text-zinc-400">
              {footer.hoursNotice}
            </p>
          </div>

          {/* Col 4: Newsletter / Updates (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">{footer.newsletterTitle}</h4>
            <p className="text-xs text-zinc-400">
              {footer.newsletterSubtitle}
            </p>

            {subscribed ? (
              <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>{footer.newsletterSuccessText}</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-surface-card border border-white/10 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-amberGrill-500 transition-colors"
                  />
                  <button
                    type="submit"
                    aria-label="Subscribe to newsletter"
                    className="absolute right-1 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-amberGrill-500 hover:bg-amberGrill-600 text-white transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </div>
                <span className="text-[11px] text-zinc-400">{footer.newsletterDisclaimer}</span>
              </form>
            )}

            {/* Socials */}
            <div className="pt-2 flex items-center space-x-2">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow on ${s.platform}`}
                  className="w-8 h-8 rounded-lg bg-surface-card border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-colors text-xs font-bold"
                >
                  {s.platform[0]}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <p suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {identity.legalName}. All rights reserved.
          </p>

          <div className="flex items-center space-x-5">
            <Link href="/about" className="hover:text-white transition-colors">
              {footer.standardsLinkLabel}
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              {footer.privacyLinkLabel}
            </Link>
            <a
              href="#main-content"
              className="text-amberGrill-400 hover:text-amberGrill-300 font-medium"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
