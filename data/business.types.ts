/**
 * Business Configuration Schema & Type Definitions
 * 
 * Defines the contract and structural types for the restaurant freelance template.
 * Keep all interfaces here so that `business.config.ts` remains pure configuration data.
 */

export interface BusinessIdentity {
  name: string;
  legalName: string;
  brandNamePart1: string;
  brandNameHighlight: string;
  brandNamePart2: string;
  brandSubtitle: string;
  logo: string;
  altText: string;
  foundedYear: number;
}

export interface BusinessContact {
  phone: string;
  displayPhone: string;
  email: string;
  callHoursHint: string;
  emailResponseHint: string;
}

export interface BusinessWhatsApp {
  number: string;
  displayNumber: string;
  fabTooltip: string;
  fabDefaultMessage?: string;
  fabAriaLabel?: string;
  dismissTooltipAriaLabel?: string;
  containerAriaLabel?: string;
  chatHighlightBadge: string;
  chatHighlightDesc: string;
}

export interface BusinessAddress {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  fullAddress: string;
  landmarkHint: string;
  googleMapsUrl: string;
  topBarBadge: string;
}

export interface OpeningHourItem {
  days: string;
  hours: string;
  isClosed?: boolean;
}

export interface BusinessOpeningHours {
  todayStatus: string;
  schedule: OpeningHourItem[];
}

export interface SocialLink {
  platform: string;
  url: string;
  handle: string;
}

export interface HeroFeaturePill {
  label: string;
  icon: 'Award' | 'Clock' | 'ShieldCheck' | 'Flame' | 'Sparkles' | 'Star' | string;
}

export interface HeroContent {
  kicker: string;
  headlinePart1: string;
  headlineHighlight: string;
  headlinePart2: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink?: string;
  showcase: {
    cornerBadge: string;
    recipeCategory: string;
    title: string;
    ratingText: string;
    ratingStars?: number;
    price: string;
    image: string;
    imageAlt: string;
    features: HeroFeaturePill[];
  };
}

export interface AmenityItem {
  icon: 'Utensils' | 'Wifi' | 'CreditCard' | 'Dog' | 'Car' | 'Coffee' | 'Clock' | 'Sparkles' | 'ShieldCheck' | string;
  label: string;
}

export interface LocationContent {
  sectionKicker: string;
  sectionTitle: string;
  sectionSubtitle: string;
  flagshipCardTitle: string;
  hoursCardTitle: string;
  mapPinTitle: string;
  callButtonText?: string;
  openStatusText?: string;
  inquiryMessage?: string;
  amenities: AmenityItem[];
}

export interface NavLinkItem {
  label: string;
  href: string;
}

export interface NavbarContent {
  statusBadge: string;
  menuCtaText: string;
  orderCtaText: string;
  mobileOrderCtaText: string;
  callCtaPrefix: string;
  navLinks: NavLinkItem[];
}

export interface FooterContent {
  hoursTitle: string;
  hoursNotice: string;
  newsletterTitle: string;
  newsletterSubtitle: string;
  newsletterSuccessText: string;
  newsletterDisclaimer: string;
  standardsLinkLabel: string;
  privacyLinkLabel: string;
}

export interface PromotionalOffer {
  id: string;
  title: string;
  code: string;
  discountBadge: string;
  description: string;
  validUntil: string;
  image: string;
  imageAlt?: string;
  ctaText: string;
  ctaIcon?: string;
  customWhatsAppMessage?: string;
}

export interface OffersContent {
  kicker: string;
  kickerIcon?: string;
  title: string;
  subtitle: string;
  whatsappMessageTemplate?: string;
  items: PromotionalOffer[];
}

export interface AboutQualityPillar {
  icon: string;
  title: string;
  description: string;
}

export interface AboutMetric {
  value: string;
  label: string;
}

export interface AboutContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  headline: string;
  intro: string;
  storySectionTitle: string;
  fullStory: string[];
  coreTenets: string[];
  foundersQuote: {
    badge: string;
    quote: string;
    author: string;
    image: string;
    imageAlt: string;
  };
  metrics: AboutMetric[];
  pillarsTitle: string;
  pillarsSubtitle: string;
  pillars: AboutQualityPillar[];
  ctaText?: string;
  ctaLink?: string;
}

export interface ContactFormLabels {
  nameLabel: string;
  namePlaceholder: string;
  emailLabel: string;
  emailPlaceholder: string;
  phoneLabel: string;
  phonePlaceholder: string;
  inquiryTypeLabel: string;
  messageLabel: string;
  messagePlaceholder: string;
  submitButtonText: string;
}

export interface ContactSuccessMessage {
  title: string;
  descriptionTemplate: string;
  resetButtonText: string;
}

export interface ContactContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  title: string;
  subtitle: string;
  directChannelsTitle: string;
  directChannelsSubtitle: string;
  phoneCardLabel: string;
  emailCardLabel: string;
  addressCardLabel: string;
  whatsappCtaText: string;
  whatsappInquiryMessage: string;
  inquiryTypes: string[];
  formTitle: string;
  formSubtitle: string;
  formLabels: ContactFormLabels;
  successMessage: ContactSuccessMessage;
}

export interface SeoSchemaOpeningHours {
  dayOfWeek: string[];
  opens: string;
  closes: string;
}

export interface SeoConfig {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
  siteUrl: string;
  author: string;
  cuisineTypes: string[];
  priceRange: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  openGraph: {
    title: string;
    description: string;
    image: string;
    imageAlt: string;
  };
  schema: {
    type: string;
    openingHours: SeoSchemaOpeningHours[];
  };
}

export interface RestaurantFeature {
  icon: string;
  iconColor?: string;
  title: string;
  description: string;
}

export interface HomeCtaContent {
  kicker: string;
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink?: string;
  whatsappMessage?: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

export interface FeaturedMenuContent {
  kicker?: string;
  title: string;
  subtitle: string;
  viewAllText?: string;
}

export interface MenuDietaryLegendItem {
  icon: string;
  label: string;
  colorClass?: string;
}

export interface MenuPageContent {
  metaTitle: string;
  metaDescription: string;
  kicker: string;
  kickerIcon?: string;
  headline: string;
  description: string;
  dietaryLegend: MenuDietaryLegendItem[];
  sectionTitle: string;
  sectionSubtitle: string;
  searchPlaceholder?: string;
}

export interface TestimonialsContent {
  kicker: string;
  kickerIcon?: string;
  title: string;
  subtitle: string;
  ratingScore: string;
  ratingStars?: number;
  socialProofText: string;
  favoriteItemLabel: string;
}

export interface BusinessConfig {
  identity: BusinessIdentity;
  businessType: string;
  tagline: string;
  shortDescription: string;
  contact: BusinessContact;
  whatsapp: BusinessWhatsApp;
  address: BusinessAddress;
  city: string;
  openingHours: BusinessOpeningHours;
  socials: SocialLink[];
  stats: { value: string; label: string }[];
  features: RestaurantFeature[];
  hero: HeroContent;
  featuredMenu: FeaturedMenuContent;
  location: LocationContent;
  offers: OffersContent;
  testimonials: TestimonialsContent;
  about: AboutContent;
  contactPage: ContactContent;
  menuPage: MenuPageContent;
  homeCta: HomeCtaContent;
  seo: SeoConfig;
  navbar: NavbarContent;
  footer: FooterContent;
}


