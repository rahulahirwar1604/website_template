'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import { getWhatsAppOrderUrl } from '@/lib/utils';

export interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
  tooltipText?: string;
  ariaLabel?: string;
  showTooltipByDefault?: boolean;
}

export default function WhatsAppButton({
  phoneNumber,
  message,
  tooltipText,
  ariaLabel,
  showTooltipByDefault = true,
}: WhatsAppButtonProps = {}) {
  const [showTooltip, setShowTooltip] = useState(showTooltipByDefault);
  const whatsappConfig = businessConfig.whatsapp;

  const phone = phoneNumber || whatsappConfig.number;
  const customMessage =
    message ||
    whatsappConfig.fabDefaultMessage ||
    "I would like to check today's specials and place an order.";
  const tooltip = tooltipText || whatsappConfig.fabTooltip;
  const buttonAriaLabel = ariaLabel || whatsappConfig.fabAriaLabel || 'Order or chat on WhatsApp';
  const dismissAriaLabel = whatsappConfig.dismissTooltipAriaLabel || 'Dismiss order popup';
  const containerAriaLabel =
    whatsappConfig.containerAriaLabel || 'Direct WhatsApp Ordering Support';

  const whatsappUrl = getWhatsAppOrderUrl({ customMessage }, phone);

  return (
    <aside
      aria-label={containerAriaLabel}
      className="fixed bottom-6 right-6 z-50 flex items-center space-x-3 select-none"
    >
      {/* Restrained Tooltip (No aggressive bounce) */}
      {showTooltip && tooltip && (
        <div className="hidden sm:flex items-center space-x-2 py-2 px-3.5 rounded-xl bg-[#14161a] border border-white/10 text-white text-xs font-medium shadow-card-elevated">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>{tooltip}</span>
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              setShowTooltip(false);
            }}
            aria-label={dismissAriaLabel}
            className="text-zinc-400 hover:text-white ml-1 p-0.5"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Main WhatsApp FAB Button (Clean, accessible, subtle elevation) */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={buttonAriaLabel}
        className="p-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white shadow-card-elevated transition-colors duration-150 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-[#0c0d0f]"
      >
        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </aside>
  );
}

