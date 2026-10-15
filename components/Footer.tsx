import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin } from 'lucide-react';
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
  return (
    <footer className="bg-[#0c0d0f] border-t border-white/[0.08] text-zinc-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-[calc(6rem+env(safe-area-inset-bottom,0px))] sm:pb-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* Col 1: Brand Identity & Social Links (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <BrandLogo size="sm" identity={identity} variant="dark" />

            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              {shortDescription}
            </p>

            {/* Configured Social Profiles */}
            <div className="pt-2 flex items-center space-x-2.5">
              {socials.map((s) => (
                <a
                  key={s.platform}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Follow ${identity.name} on ${s.platform}`}
                  className="w-11 h-11 sm:w-9 sm:h-9 rounded-xl bg-charcoal-900 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-amberGrill-500/50 hover:bg-charcoal-800 transition-colors text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
                >
                  {s.platform[0]}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {navbar.navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/menu#deals"
                  className="text-amberGrill-400 hover:text-amberGrill-300 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded"
                >
                  Special Offers
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Kitchen Hours (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              {footer.hoursTitle}
            </h4>
            <div className="space-y-2.5 text-xs sm:text-sm">
              {openingHours.schedule.map((h, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-zinc-200 font-medium">{h.days}</span>
                  <span className="text-zinc-400">{h.hours}</span>
                </div>
              ))}
            </div>
            <p className="pt-1 text-xs text-zinc-400 leading-relaxed">
              {footer.hoursNotice}
            </p>
          </div>

          {/* Col 4: Grill Location & Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3.5">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact & Location
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={address.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Search fictional demo address on Google Maps"
                title="Fictional Demo Address • Search on Google Maps"
                className="flex items-start space-x-2.5 text-zinc-300 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded"
              >
                <MapPin className="w-4 h-4 text-amberGrill-500 shrink-0 mt-0.5 group-hover:text-amberGrill-400 transition-colors" />
                <span className="leading-relaxed">{address.fullAddress}</span>
              </a>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center space-x-2.5 text-zinc-300 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded"
              >
                <Phone className="w-4 h-4 text-amberGrill-500 shrink-0 group-hover:text-amberGrill-400 transition-colors" />
                <span>{contact.displayPhone}</span>
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex items-center space-x-2.5 text-zinc-300 hover:text-white transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded"
              >
                <Mail className="w-4 h-4 text-amberGrill-500 shrink-0 group-hover:text-amberGrill-400 transition-colors" />
                <span>{contact.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-400 gap-4">
          <div>
            <p suppressHydrationWarning>
              &copy; {new Date().getFullYear()} {identity.legalName}. All rights reserved.
            </p>
            <p className="text-[11px] text-zinc-400 mt-1">
              Website Template Demo • Prepared for Webravex IT Solutions • Configurable in data/business.config.ts
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            <Link
              href="/about"
              className="py-1.5 sm:py-0 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded min-h-[44px] sm:min-h-0 flex items-center"
            >
              {footer.standardsLinkLabel}
            </Link>
            <Link
              href="/contact"
              className="py-1.5 sm:py-0 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded min-h-[44px] sm:min-h-0 flex items-center"
            >
              {footer.privacyLinkLabel}
            </Link>
            <a
              href="#main-content"
              className="py-1.5 sm:py-0 text-amberGrill-400 hover:text-amberGrill-300 font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded min-h-[44px] sm:min-h-0 flex items-center"
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
