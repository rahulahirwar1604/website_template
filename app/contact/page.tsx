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
    <div className="pt-2 pb-20">
      {/* Header Banner */}
      <section className="py-12 md:py-16 bg-[#101216] border-b border-white/[0.06]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-kicker mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{contact.kicker}</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {contact.title}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            {contact.subtitle}
          </p>
        </div>
      </section>

      {/* Main Form & Info Section */}
      <section className="section-spacing">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Contact Details Card (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="card-base p-6 sm:p-8 space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-white">{contact.directChannelsTitle}</h2>
                  <p className="mt-1 text-sm text-zinc-400">
                    {contact.directChannelsSubtitle}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-ground border border-white/10 flex items-center justify-center text-amberGrill-500 shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold uppercase">{contact.phoneCardLabel}</p>
                      <a
                        href={`tel:${businessConfig.contact.phone}`}
                        className="text-base font-bold text-white hover:text-amberGrill-400 transition-colors"
                      >
                        {businessConfig.contact.displayPhone}
                      </a>
                      <p className="text-xs text-zinc-400">{businessConfig.contact.callHoursHint}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-ground border border-white/10 flex items-center justify-center text-amberGrill-500 shrink-0">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold uppercase">{contact.emailCardLabel}</p>
                      <a
                        href={`mailto:${businessConfig.contact.email}`}
                        className="text-base font-bold text-white hover:text-amberGrill-400 transition-colors"
                      >
                        {businessConfig.contact.email}
                      </a>
                      <p className="text-xs text-zinc-400">{businessConfig.contact.emailResponseHint}</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 text-sm">
                    <div className="w-10 h-10 rounded-xl bg-surface-ground border border-white/10 flex items-center justify-center text-amberGrill-500 shrink-0">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 font-semibold uppercase">{contact.addressCardLabel}</p>
                      <p className="text-sm font-semibold text-white">
                        {businessConfig.address.fullAddress}
                      </p>
                    </div>
                  </div>
                </div>

                {/* WhatsApp Direct Highlight Box */}
                <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                  <h4 className="text-sm font-bold text-emerald-400 flex items-center">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 mr-2" />
                    {businessConfig.whatsapp.chatHighlightBadge}
                  </h4>
                  <p className="text-xs text-zinc-300 mt-1">
                    {businessConfig.whatsapp.chatHighlightDesc}
                  </p>
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors"
                  >
                    <span>{contact.whatsappCtaText}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column (7 cols) */}
            <div className="lg:col-span-7">
              <div className="card-base p-6 sm:p-8">
                <h2 className="text-2xl font-bold text-white mb-2">{contact.formTitle}</h2>
                <p className="text-sm text-zinc-400 mb-6">
                  {contact.formSubtitle}
                </p>

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mx-auto">
                      <CheckCircle2 className="w-7 h-7" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{contact.successMessage.title}</h3>
                    <p className="text-zinc-300 text-sm max-w-md mx-auto">
                      {successDescription}
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-secondary py-2.5 px-5 text-xs font-semibold"
                    >
                      {contact.successMessage.resetButtonText}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                          {contact.formLabels.nameLabel}
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder={contact.formLabels.namePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-amberGrill-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                          {contact.formLabels.emailLabel}
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder={contact.formLabels.emailPlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-amberGrill-500 transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                          {contact.formLabels.phoneLabel}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder={contact.formLabels.phonePlaceholder}
                          className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-amberGrill-500 transition-colors"
                        />
                      </div>

                      <div>
                        <label htmlFor="inquiryType" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                          {contact.formLabels.inquiryTypeLabel}
                        </label>
                        <select
                          id="inquiryType"
                          value={formData.inquiryType}
                          onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                          className="w-full px-4 py-3 rounded-xl bg-[#14161a] border border-white/10 text-white text-sm focus:outline-none focus:border-amberGrill-500 transition-colors"
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
                      <label htmlFor="message" className="block text-xs font-semibold text-zinc-300 uppercase mb-1.5">
                        {contact.formLabels.messageLabel}
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={contact.formLabels.messagePlaceholder}
                        className="w-full px-4 py-3 rounded-xl bg-surface-card border border-white/10 text-white text-sm focus:outline-none focus:border-amberGrill-500 transition-colors"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-primary w-full py-3.5 text-base font-bold space-x-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>{contact.formLabels.submitButtonText}</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Location and Map section */}
      <Location />
    </div>
  );
}

