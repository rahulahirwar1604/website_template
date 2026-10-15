import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { businessConfig } from '@/data/business.config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number, currency: string = '$'): string {
  return `${currency}${price.toFixed(2)}`;
}

export interface WhatsAppOrderOptions {
  productName?: string;
  price?: number | string;
  quantity?: number;
  customMessage?: string;
}

/**
 * Standard utility to construct a full `https://wa.me/...` URL with URL encoding.
 */
export function createWhatsAppUrl(phone: string, message: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Reusable helper to generate standardized WhatsApp messages.
 * Automatically injects the business name from `business.config.ts`.
 *
 * Supports:
 * - General menu ordering: getWhatsAppOrderMessage()
 * - Specific item ordering: getWhatsAppOrderMessage({ productName: 'The Classic OG Double Smash', price: 12.99, quantity: 2 })
 * - Inquiries & offers: getWhatsAppOrderMessage({ customMessage: 'I want to claim the combo offer.' })
 */
export function getWhatsAppOrderMessage(options: WhatsAppOrderOptions = {}): string {
  const businessName = businessConfig.identity.name;
  const { productName, price, quantity, customMessage } = options;

  if (customMessage) {
    const trimmed = customMessage.trim();
    if (/^(hi|hello|hey)\b/i.test(trimmed)) {
      return trimmed;
    }
    return `Hello ${businessName}! ${trimmed}`;
  }

  if (productName) {
    const qtyPrefix = quantity && quantity > 1 ? `${quantity}x ` : '';
    const formattedPrice =
      price !== undefined
        ? ` for ${typeof price === 'number' ? formatPrice(price) : price}`
        : '';
    return `Hello ${businessName}! I would like to order: ${qtyPrefix}"${productName}"${formattedPrice}.`;
  }

  return `Hello ${businessName}! I would like to place an order from your menu.`;
}

/**
 * Helper to build a complete WhatsApp URL in one step using the configured business phone.
 */
export function getWhatsAppOrderUrl(
  options: WhatsAppOrderOptions = {},
  phone: string = businessConfig.whatsapp.number
): string {
  const message = getWhatsAppOrderMessage(options);
  return createWhatsAppUrl(phone, message);
}

/**
 * Safely validates whether a given URL string is an absolute, secure HTTPS URL
 * and not a generic root homepage or unsafe protocol.
 */
export function isValidHttpsUrl(url?: string | null): boolean {
  if (!url || typeof url !== 'string') return false;
  const trimmed = url.trim();
  if (!trimmed) return false;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== 'https:' || !parsed.hostname) {
      return false;
    }
    const cleanPath = parsed.pathname.replace(/\/+$/, '');
    if (!cleanPath) {
      return false;
    }
    return true;
  } catch {
    return false;
  }
}

/**
 * Validates a third-party partner listing URL (e.g. Zomato, Swiggy) to ensure
 * it is a valid HTTPS restaurant listing and not a generic root domain or malformed URL.
 */
export function isValidPartnerUrl(
  url?: string | null,
  expectedDomainSnippet?: string
): boolean {
  if (!isValidHttpsUrl(url)) return false;
  if (expectedDomainSnippet) {
    try {
      const parsed = new URL(url!.trim());
      if (!parsed.hostname.toLowerCase().includes(expectedDomainSnippet.toLowerCase())) {
        return false;
      }
    } catch {
      return false;
    }
  }
  return true;
}
