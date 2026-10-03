'use client';

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
}: LocationProps = {}) {
  const whatsappUrl = createWhatsAppUrl(
    whatsappNumber,
    getWhatsAppOrderMessage({
      customMessage:
        location.inquiryMessage ||
        'I have a question regarding table reservation and takeout.',
    })
  );

  return (
    <section id="location-section" className="section-spacing bg-[#101216] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="badge-kicker mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>{location.sectionKicker}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {location.sectionTitle}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            {location.sectionSubtitle}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Address, Hours, Amenities */}
          <div className="lg:col-span-6 space-y-6">
            {/* Address Card */}
            <div className="card-base p-6 sm:p-8">
              <div className="flex items-start space-x-4">
                <div className="w-11 h-11 rounded-xl bg-amberGrill-500/10 border border-amberGrill-500/20 flex items-center justify-center shrink-0 text-amberGrill-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">{location.flagshipCardTitle}</h3>
                  <p className="mt-1 text-sm text-zinc-300">
                    {address.fullAddress}
                  </p>
                  <p className="text-xs text-zinc-400 mt-1">
                    {address.landmarkHint}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-3">
                    <a
                      href={address.googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary py-2.5 px-4 text-xs font-bold space-x-1.5"
                    >
                      <Navigation className="w-3.5 h-3.5" />
                      <span>Get Directions</span>
                    </a>
                    <a
                      href={`tel:${contact.phone}`}
                      className="btn-secondary py-2.5 px-4 text-xs font-semibold space-x-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-amberGrill-500" />
                      <span>{location.callButtonText || 'Call Us'}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Operating Hours Card */}
            <div className="card-base p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-surface-ground border border-white/10 flex items-center justify-center text-amberGrill-500">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">{location.hoursCardTitle}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400" />
                    <span className="text-xs font-semibold text-emerald-400">
                      {location.openStatusText || 'Open Today'}
                    </span>
                  </div>
                </div>
              </div>

              <div className="divide-y divide-white/[0.06]">
                {openingHours.schedule.map((h, i) => (
                  <div key={i} className="py-2.5 flex items-center justify-between text-sm">
                    <span className="text-zinc-300 font-medium">{h.days}</span>
                    <span className="text-zinc-400 font-semibold">{h.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Amenities Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {location.amenities.map((item, idx) => {
                const IconComponent = AMENITY_ICON_MAP[item.icon] || MapPin;
                return (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-surface-card border border-white/10 flex flex-col items-center text-center"
                  >
                    <IconComponent className="w-4 h-4 text-amberGrill-500 mb-1" />
                    <span className="text-xs font-medium text-zinc-300">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Architectural Map Visual Panel */}
          <div className="lg:col-span-6">
            <div className="card-base p-4 sm:p-6 overflow-hidden">
              <div className="relative w-full h-[360px] sm:h-[420px] rounded-xl overflow-hidden bg-[#0c0d0f] border border-white/10 flex flex-col items-center justify-center text-center p-6">
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
                  <div className="w-12 h-12 rounded-full bg-amberGrill-500 flex items-center justify-center text-white shadow-md">
                    <MapPin className="w-6 h-6" />
                  </div>

                  <div className="mt-5 max-w-sm card-base p-4 shadow-lg">
                    <h4 className="font-bold text-white text-base">{location.mapPinTitle}</h4>
                    <p className="text-xs text-zinc-400 mt-1">
                      {address.street}, {address.city}, {address.state}
                    </p>
                    <div className="mt-3.5 flex items-center justify-center space-x-2">
                      <a
                        href={address.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary py-1.5 px-3 text-xs font-bold"
                      >
                        Open Maps
                      </a>
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary py-1.5 px-3 text-xs font-semibold"
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
