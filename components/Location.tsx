import React from 'react';
import {
  MapPin,
  Clock,
  Phone,
  Navigation,
  Wifi,
  CreditCard,
  Dog,
  Utensils,
  Car,
  Coffee,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Accessibility,
} from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import type {
  LocationContent,
  BusinessAddress,
  BusinessContact,
  BusinessOpeningHours,
} from '@/data/business.types';
import { createWhatsAppUrl, getWhatsAppOrderMessage } from '@/lib/utils';

export interface LocationProps {
  location?: LocationContent;
  address?: BusinessAddress;
  contact?: BusinessContact;
  openingHours?: BusinessOpeningHours;
  whatsappNumber?: string;
  variant?: 'default' | 'streamlined';
}

const AMENITY_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Utensils,
  Wifi,
  CreditCard,
  Dog,
  Car,
  Coffee,
  Clock,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Accessibility,
};

export default function Location({
  location = businessConfig.location,
  address = businessConfig.address,
  contact = businessConfig.contact,
  openingHours = businessConfig.openingHours,
  whatsappNumber = businessConfig.whatsapp.number,
  variant = 'default',
}: LocationProps = {}) {
  const whatsappUrl = createWhatsAppUrl(
    whatsappNumber,
    getWhatsAppOrderMessage({
      customMessage:
        location.inquiryMessage ||
        'I have a question regarding table reservation and takeout.',
    })
  );

  const isStreamlined = variant === 'streamlined';

  return (
    <section id="location-section" className="py-10 sm:py-16 md:py-20 bg-surface-alt border-t border-surface-border relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className={`flex flex-col items-center text-center max-w-3xl mx-auto ${isStreamlined ? 'mb-6 sm:mb-10' : 'mb-8 sm:mb-14'}`}>
          <span className="badge-kicker mb-2.5 sm:mb-3">
            <MapPin className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
            <span>{location.sectionKicker}</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
            {location.sectionTitle}
          </h2>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-base lg:text-lg text-ink-secondary max-w-2xl">
            {location.sectionSubtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          {/* Left Column: Address (if not streamlined), Hours, Amenities */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            {/* Address Card (omitted in streamlined mode to eliminate redundancy with contact card & map panel) */}
            {!isStreamlined && (
              <div className="card-base p-4 sm:p-6 lg:p-8">
              <div className="flex items-start space-x-3.5 sm:space-x-4">
                <div className="w-11 h-11 rounded-xl bg-amber-100/70 border border-amber-300 flex items-center justify-center shrink-0 text-amberGrill-600">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2 flex-wrap">
                    <h3 className="text-lg font-bold text-ink-primary">{location.flagshipCardTitle}</h3>
                    {location.sampleBadgeText && (
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-900 border border-amber-300">
                        {location.sampleBadgeText}
                      </span>
                    )}
                  </div>
                  <p className="mt-1 text-sm text-ink-secondary">
                    {address.fullAddress}
                  </p>
                  <p className="text-xs text-ink-muted mt-1">
                    {address.landmarkHint}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2.5 px-4 text-xs font-bold space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
                      aria-label="Search sample address on Google Maps (template demonstration)"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>{location.mapDirectionsButtonText || 'Search Sample Address on Maps'}</span>
                    </a>
                    <a
                      href={`tel:${contact.phone}`}
                      className="btn-secondary py-2.5 px-4 text-xs font-semibold space-x-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
                    >
                      <Phone className="w-3.5 h-3.5 text-amberGrill-600" />
                      <span>{location.callButtonText || 'Call Us'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

            {/* Operating Hours Card */}
            <div className="card-base p-4 sm:p-6 lg:p-8">
              <div className="flex items-center space-x-3 mb-3.5 sm:mb-4">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-surface-ground border border-surface-border flex items-center justify-center text-amberGrill-600 shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-ink-primary">{location.hoursCardTitle}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-600" />
                    <span className="text-xs font-semibold text-emerald-700">
                      {location.openStatusText || 'Open Today'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-surface-border">
                {openingHours.schedule.map((h, i) => (
                  <div key={i} className="py-2 sm:py-2.5 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-ink-primary font-medium">{h.days}</span>
                    <span className="text-ink-secondary font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
              {location.amenities.map((item, idx) => {
                const IconComponent = AMENITY_ICON_MAP[item.icon] || MapPin;
                return (
                  <div
                    key={idx}
                    className="p-2.5 sm:p-3 rounded-xl bg-white border border-surface-border flex flex-col items-center text-center shadow-card-subtle"
                  >
                    <IconComponent className="w-4 h-4 text-amberGrill-600 mb-1" />
                    <span className="text-[11px] sm:text-xs font-semibold text-ink-primary">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Map Visual Panel */}
          <div className="lg:col-span-6">
            <div className="card-base p-3 sm:p-6 overflow-hidden">
              <div className="relative w-full h-[280px] sm:h-[360px] md:h-[420px] rounded-xl overflow-hidden bg-[#0c0d0f] border border-white/10 flex flex-col items-center justify-center text-center p-4 sm:p-6">
                {/* Subtle map pattern */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: `radial-gradient(circle, #d56a29 1px, transparent 1px)`,
                    backgroundSize: '20px 20px',
                  }}
                />

                {/* Map Pin Graphic */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-amberGrill-500 flex items-center justify-center text-white shadow-md">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>

                  <div className="mt-3.5 sm:mt-5 max-w-sm card-base p-3.5 sm:p-4 shadow-lg">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <h4 className="font-bold text-ink-primary text-sm sm:text-base">{location.mapPinTitle}</h4>
                      <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                        Demo
                      </span>
                    </div>
                    <p className="text-xs text-ink-secondary mt-1">
                      {address.street}, {address.city}, {address.state}
                    </p>
                    <p className="text-[11px] text-ink-muted mt-1">
                      {location.mapPinSubtext || 'Illustrative template pin for layout showcase.'}
                    </p>
                    <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
                      <a
                        href={address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-2 px-3 text-xs font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl min-h-[38px] flex items-center justify-center"
                        aria-label="Search sample address on Google Maps"
                      >
                        Search Maps (Demo)
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary py-2 px-3 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl min-h-[38px] flex items-center justify-center"
                      >
                        Ask on WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
