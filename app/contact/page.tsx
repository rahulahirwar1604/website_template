'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react';
import Location from '@/components/Location';
import { businessConfig } from '@/data/business.config';
import { createWhatsAppUrl, getWhatsAppOrderMessage } from '@/lib/utils';

export default function ContactPage() {
  const contact = businessConfig.contactPage;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    inquiryType: contact.inquiryTypes[0] || 'General Inquiry',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  const whatsappDirectUrl = createWhatsAppUrl(
    businessConfig.whatsapp.number,
    getWhatsAppOrderMessage({
      customMessage: contact.whatsappInquiryMessage,
    })
  );

  const successDescription = contact.successMessage.descriptionTemplate
    .replace('{name}', formData.name)
    .replace('{inquiryType}', formData.inquiryType);

  return (
    <div className="pb-20">
      {/* Header Banner (Warm Restaurant Aesthetic) */}
      <section className="py-8 sm:py-12 md:py-16 bg-surface-alt border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-2.5 sm:mb-3">
            <span className="badge-kicker">
              <MessageSquare className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
              <span>{contact.kicker}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-ink-primary tracking-tight">
            {contact.title}
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
            {contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="py-10 sm:py-16 lg:py-20 bg-surface-ground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
            {/* Contact Details Card (5 cols) */}
            <div className="lg:col-span-5 space-y-4 sm:space-y-6">
              <div className="card-base p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-xl sm:text-2xl font-bold text-ink-primary">{contact.directChannelsTitle}</h2>
                  <p className="mt-1 text-xs sm:text-sm text-ink-secondary">
                    {contact.directChannelsSubtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt border border-surface-border flex items-center justify-center text-amberGrill-600 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-secondary font-semibold uppercase">{contact.phoneCardLabel}</p>
                      <a
                        href={`tel:${businessConfig.contact.phone}`}
                        className="text-base font-bold text-ink-primary hover:text-amberGrill-600 transition-colors"
                      >
                        {businessConfig.contact.displayPhone}
                      </a>
                      <p className="text-xs text-ink-muted">{businessConfig.contact.callHoursHint}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt border border-surface-border flex items-center justify-center text-amberGrill-600 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-ink-secondary font-semibold uppercase">{contact.emailCardLabel}</p>
                      <a
                        href={`mailto:${businessConfig.contact.email}`}
                        className="text-base font-bold text-ink-primary hover:text-amberGrill-600 transition-colors"
                      >
                        {businessConfig.contact.email}
                      </a>
                      <p className="text-xs text-ink-muted">{businessConfig.contact.emailResponseHint}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-alt border border-surface-border flex items-center justify-center text-amberGrill-600 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="flex items-center gap-1.5">
                        <p className="text-xs text-ink-secondary font-semibold uppercase">{contact.addressCardLabel}</p>
                        <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                          Demo
                        </span>
                      </div>
                      <p className="text-sm font-semibold text-ink-primary">
                        {businessConfig.address.fullAddress}
                      </p>
                      <p className="text-xs text-ink-muted mt-0.5">
                        {businessConfig.address.landmarkHint}
                      </p>
                      <a
                        href="#location-section"
                        className="inline-flex items-center text-xs font-semibold text-amberGrill-600 hover:text-amberGrill-700 mt-1"
                      >
                        <span>View map & kitchen hours</span>
                        <span className="ml-1" aria-hidden="true">&darr;</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Highlight Box */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200">
                  <h4 className="text-sm font-bold text-emerald-800 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-600 mr-2" />
                    {businessConfig.whatsapp.chatHighlightBadge}
                  </h4>
                  <p className="text-xs text-emerald-900 mt-1">
                    {businessConfig.whatsapp.chatHighlightDesc}
                  </p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center px-4 py-2.5 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-xs"
                  >
                    <span>{contact.whatsappCtaText}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="card-base p-4 sm:p-6 lg:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-ink-primary mb-1.5 sm:mb-2">{contact.formTitle}</h2>
                <p className="text-xs sm:text-sm text-ink-secondary mb-5 sm:mb-6">
                  {contact.formSubtitle}
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center text-emerald-700 mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-ink-primary">{contact.successMessage.title}</h3>
                    <p className="text-ink-secondary text-sm max-w-md mx-auto">
                      {successDescription}
                    </p>
                    <p className="text-xs text-ink-muted max-w-md mx-auto">
                      Note: This website is a template demonstration. For immediate reservations or catering bookings, please contact us directly via phone or WhatsApp.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary py-2.5 px-5 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
                    >
                      {contact.successMessage.resetButtonText}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-ink-primary uppercase mb-1.5">
                          {contact.formLabels.nameLabel}
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={contact.formLabels.namePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-ink-primary placeholder:text-ink-muted text-base sm:text-sm shadow-xs focus:outline-none focus:border-amberGrill-500 focus:ring-2 focus:ring-amberGrill-500/20 transition-all min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-ink-primary uppercase mb-1.5">
                          {contact.formLabels.emailLabel}
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={contact.formLabels.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-ink-primary placeholder:text-ink-muted text-base sm:text-sm shadow-xs focus:outline-none focus:border-amberGrill-500 focus:ring-2 focus:ring-amberGrill-500/20 transition-all min-h-[44px]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-ink-primary uppercase mb-1.5">
                          {contact.formLabels.phoneLabel}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={contact.formLabels.phonePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-ink-primary placeholder:text-ink-muted text-base sm:text-sm shadow-xs focus:outline-none focus:border-amberGrill-500 focus:ring-2 focus:ring-amberGrill-500/20 transition-all min-h-[44px]"
                        />
                      </div>

                      <div>
                        <label htmlFor="inquiryType" className="block text-xs font-semibold text-ink-primary uppercase mb-1.5">
                          {contact.formLabels.inquiryTypeLabel}
                        </label>
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-ink-primary text-base sm:text-sm shadow-xs focus:outline-none focus:border-amberGrill-500 focus:ring-2 focus:ring-amberGrill-500/20 transition-all min-h-[44px]"
                        >
                          {contact.inquiryTypes.map((type, idx) => (
                            <option key={idx} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-semibold text-ink-primary uppercase mb-1.5">
                        {contact.formLabels.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={contact.formLabels.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-surface-border text-ink-primary placeholder:text-ink-muted text-base sm:text-sm shadow-xs focus:outline-none focus:border-amberGrill-500 focus:ring-2 focus:ring-amberGrill-500/20 transition-all"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3.5 text-base font-bold space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl"
                    >
                      <Send className="w-4 h-4" />
                      <span>{contact.formLabels.submitButtonText}</span>
                    </button>

                    <p className="text-xs text-ink-muted text-center pt-1">
                      Template Demo Note: Form submissions simulate client intake. For real reservations or orders, use WhatsApp or call us directly.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location and Map section (Streamlined layout) */}
      <Location variant="streamlined" />
    </div>
  );
}
