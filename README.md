# Reusable Restaurant Website Template

A clean, modern, and white-label restaurant website template engineered for freelance client projects. Built with **Next.js 16 (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS**.

The template is fully decoupled: site-wide brand presentation, menu products, customer reviews, and UI components are strictly separated. A developer can rebrand and deploy a complete restaurant website in minutes by modifying a single configuration file and catalog dataset without modifying component code.

---

## 📋 Table of Contents

- [1. Project Overview](#1-project-overview)
- [2. Tech Stack](#2-tech-stack)
- [3. Architecture](#3-architecture)
- [4. White-Label Workflow](#4-white-label-workflow)
- [5. What a New Client Usually Requires](#5-what-a-new-client-usually-requires)
- [6. Local Development](#6-local-development)
- [7. Validation](#7-validation)
- [8. Deployment](#8-deployment)
- [9. Contact Form Limitation](#9-contact-form-limitation)
- [10. WhatsApp Ordering](#10-whatsapp-ordering)
- [11. Images and Assets](#11-images-and-assets)
- [12. Client Ownership & Freelance Handoff](#12-client-ownership--freelance-handoff)
- [13. Current Limitations & Future Improvements](#13-current-limitations--future-improvements)
- [14. Project Status](#14-project-status)
- [15. Core Architectural Principle](#15-core-architectural-principle)

---

## 1. Project Overview

This template provides a production-grade digital storefront for restaurants, cafes, diners, and specialty food businesses. It includes:

- **Homepage**: Hero banner with recipe showcase, quality highlights, featured menu dishes, promotional bundles, customer reviews, physical location card, and bottom conversion banner.
- **Menu Page**: Filterable and searchable menu catalog with dietary filter pills (Vegetarian, Spicy), category tabs, and dietary legend indicators.
- **About Page**: Brand story, culinary tenets, founder quote, key statistics, and quality pillars.
- **Contact Page**: Interactive inquiry form, direct contact channels (Phone, Email, WhatsApp, Address), and physical grill map details.
- **Global Elements**: Sticky navigation with opening status badge, accessible mobile navigation drawer, comprehensive footer with newsletter signup, and floating WhatsApp ordering button.

### Key Architectural Separation

```text
data/business.types.ts  → TypeScript contracts and schema definitions
data/business.config.ts → Business-specific presentation and marketing content
data/menu.ts            → Actual menu products, categories, pricing, and ingredients
data/testimonials.ts    → Actual customer and critic review records
lib/utils.ts            → Reusable helper functions (WhatsApp URL generation, price formatting)
components/             → Reusable presentation and UI behavior
app/                    → Next.js routing, metadata, and page composition
```

---

## 2. Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router, React Server Components & Client Components)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Utilities**: `clsx`, `tailwind-merge`
- **Package Manager**: `npm`
- **Deployment Target**: Vercel-compatible static/serverless deployment

---

## 3. Architecture

### Directory Tree

```text
bun-and-bite/
├── app/
│   ├── about/
│   │   └── page.tsx         # About page: story, philosophy, metrics & pillars
│   ├── contact/
│   │   ├── layout.tsx       # Contact metadata wrapper
│   │   └── page.tsx         # Contact page: form, channels & location
│   ├── menu/
│   │   └── page.tsx         # Full menu page with category filters & search
│   ├── globals.css          # Theme variables, base styles & utility classes
│   ├── layout.tsx           # Root layout: Navbar, Footer, WhatsApp FAB & Schema.org JSON-LD
│   └── page.tsx             # Homepage composition
│
├── components/
│   ├── BrandLogo.tsx        # Brand emblem and text logo with responsive sizing
│   ├── Footer.tsx           # Multi-column footer: hours, newsletter, legal & socials
│   ├── Hero.tsx             # High-impact hero section with showcase card & stats
│   ├── Location.tsx         # Physical address, hours, directions link & amenities
│   ├── MenuCard.tsx         # Individual dish card: dietary badges, price & WhatsApp CTA
│   ├── MenuSection.tsx      # Searchable & filterable menu grid with dietary toggles
│   ├── Navbar.tsx           # Sticky navigation, status badge & mobile drawer
│   ├── Offers.tsx           # Promotional combo cards with 1-click coupon copy
│   ├── Testimonials.tsx     # Review grid with social proof banner & favorite dish pills
│   └── WhatsAppButton.tsx   # Floating Action Button with order pulse tooltip
│
├── data/
│   ├── business.config.ts   # Centralized business presentation & content data
│   ├── business.types.ts    # TypeScript interface contracts for businessConfig
│   ├── menu.ts              # Dish catalog, pricing, categories & dietary flags
│   └── testimonials.ts      # Customer review records & reviewer metadata
│
├── lib/
│   └── utils.ts             # cn, formatPrice, createWhatsAppUrl, getWhatsAppOrderUrl
│
├── public/
│   ├── images/              # Local image asset directories
│   │   ├── burgers/         # Local sample dish photography
│   │   ├── offers/          # Local promotional graphics
│   │   └── restaurant/      # Local interior/grill photography
│   └── logo.png             # Default brand mark
│
├── next.config.js           # Next.js configuration & remote image patterns
├── postcss.config.js        # PostCSS Tailwind plugin configuration
├── tailwind.config.js       # Color tokens, typography, shadows & animations
├── tsconfig.json            # TypeScript configuration with @/* path aliases
├── package.json             # Dependencies and build scripts
└── package-lock.json        # Deterministic dependency lockfile
```

### Detailed Layer Responsibilities

#### `data/business.config.ts`
The single source of truth for all business-specific identity and presentation content. Changing values here automatically updates the entire website without touching component code. It configures:
- **`identity`**: Brand name parts, legal name, subtitle, logo path, founding year.
- **`businessType`**, **`tagline`**, **`shortDescription`**, **`city`**.
- **`contact`**: Telephone, formatted display phone, email, call hours hint, email turnaround hint.
- **`whatsapp`**: Ordering phone number, display number, FAB tooltips, aria labels, order highlight badges.
- **`address`**: Street, neighborhood, city, state, postal code, Google Maps URL, full address string.
- **`openingHours`**: Today's status badge, full day-by-day operating schedule.
- **`socials`**: Platform names, profile URLs, handles.
- **`stats`**: Metrics displayed in the Hero section (e.g., volume, ratings, pickup speed).
- **`features`**: 4 quality highlight cards with configurable Lucide icon names and accent colors.
- **`hero`**: Hero kickers, headline parts, description, CTAs, and featured recipe showcase card.
- **`featuredMenu`**: Homepage featured section title, subtitle, and kicker.
- **`location`**: Section headers, card labels, maps title, and amenities list with icon keys.
- **`offers`**: Promotional deal cards, coupon codes, valid dates, and WhatsApp message templates.
- **`testimonials`**: Section headers, 5-star rating summary, verified review count, and favorite item label.
- **`homeCta`**: Homepage bottom conversion banner kicker, title, description, and action buttons.
- **`about`**: Narrative story paragraphs, core tenets checklist, founder quote, metrics, and quality pillars.
- **`contactPage`**: Channel labels, inquiry types, form headings, placeholders, and success messages.
- **`menuPage`**: SEO metadata, banner kicker, headline, intro copy, dietary legend items, and search placeholder.
- **`seo`**: Meta title, description, keywords, OpenGraph settings, and Schema.org `Restaurant` JSON-LD configuration.
- **`navbar`**: Navigation links, open status badge, and call-to-action button labels.
- **`footer`**: Kitchen hours notice, newsletter headlines, and legal link labels.

> **Rule for Developers**: Never hardcode client-specific strings, phone numbers, or addresses inside `components/` or `app/`. Always place them in `data/business.config.ts`.

#### `data/business.types.ts`
Contains strict TypeScript interfaces for all data structures in `business.config.ts`. It acts as the type contract, ensuring compile-time safety and autocompletion across the codebase.

#### `data/menu.ts`
Contains the actual sellable menu catalog:
- `MenuItem`: ID, name, slug, description, price, original price, category, image, rating, reviews count, dietary flags (`isPopular`, `isSpicy`, `isVegetarian`, `isChefSpecial`), calories, and ingredients list.
- `menuCategories`: Array of culinary category names.
- `menuItems`: The complete list of catalog items.

Kept strictly separate from `business.config.ts` so that inventory management does not pollute presentation configuration.

#### `data/testimonials.ts`
Contains individual customer review records:
- `Testimonial`: Reviewer ID, author name, role/source, avatar URL, star rating (1–5), comment quote, `favoriteItem`, and verified customer flag.
- `testimonialsData`: Array of customer reviews.

Section-level headings, subtitles, and rating badges remain in `business.config.ts`, while individual review entries remain in `testimonials.ts`.

#### `lib/utils.ts`
Pure, reusable helper functions:
- `cn(...inputs)`: Combines `clsx` and `tailwind-merge` for conditional class names without style collisions.
- `formatPrice(price, currency)`: Consistent currency formatting (defaults to `$`).
- `createWhatsAppUrl(phone, message)`: Sanitizes phone numbers and constructs standard `https://wa.me/...` deep links.
- `getWhatsAppOrderMessage(options)`: Standardizes order and inquiry messages, automatically embedding the business name.
- `getWhatsAppOrderUrl(options, phone)`: One-step WhatsApp URL generation using the configured business phone.

---

## 4. White-Label Workflow

To customize this template for a new restaurant client, follow these steps:

1. **Duplicate the Repository**: Make a copy of this repository for the new client project.
2. **Update Brand & Content Configuration**: Open `data/business.config.ts` and update:
   - Identity (name, tagline, subtitle)
   - Contact numbers and email
   - WhatsApp number
   - Physical address and Google Maps URL
   - Operating hours schedule
   - Social media links
   - Hero, About, Offers, Location, and CTA copywriting
3. **Update the Menu Catalog**: Open `data/menu.ts` and replace the existing dishes with the client's actual menu items, categories, pricing, descriptions, and ingredient lists.
4. **Update Testimonials**: Open `data/testimonials.ts` and add genuine customer or food critic reviews.
5. **Update Brand Assets**: Replace `public/logo.png` with the client's logo and provide client-owned food imagery.
6. **Review SEO Configuration**: In `data/business.config.ts` (`seo` section), configure the client's meta title, description, domain URL, keywords, and geographic coordinates for Schema.org rich snippets.
7. **Run TypeScript Check**: Run `npx tsc --noEmit` to verify type safety.
8. **Run Production Build**: Run `npm run build` to confirm static route generation.
9. **Test Interactions Locally**: Verify WhatsApp links, menu search, category filtering, mobile drawer, and responsive layouts.
10. **Deploy**: Push to the client's GitHub repository and connect to their hosting platform (e.g., Vercel).

---

## 5. What a New Client Usually Requires

When onboarding a new restaurant client, request the following assets and information:

### Brand
- Business name & legal entity name
- Brand logo (transparent PNG or SVG recommended)
- Tagline and brand subtitle
- Preferred brand accent colors (if customizing `tailwind.config.js`)

### Business Information
- Contact phone number & formatted display version
- Primary business email for inquiries
- WhatsApp phone number (must be capable of receiving messages)
- Physical address, city, state, postal code, and Google Maps pin link
- Operating hours for all 7 days of the week
- Social media profiles (Instagram, Facebook, TikTok, X)

### Website Content
- Hero headline and introductory narrative
- 3–4 culinary quality highlights or value propositions
- Menu categories, dish names, descriptions, prices, and dietary tags
- Special promotional combo deals or coupons (if applicable)
- 3–4 approved customer reviews or critic quotes
- "About Us" story, founding year, and chef/founder quote

### SEO
- Primary target keywords and city/neighborhood focus
- Preferred search engine title and description
- Business coordinates (latitude & longitude) for local map schemas

### Assets
- High-resolution logo mark
- Food photography for flagship menu items
- Restaurant interior/exterior photography for Location and About sections

---

## 6. Local Development

### 1. Prerequisites
- **Node.js**: Version 18.17+ or 20+
- **npm**: Version 9+

### 2. Installation
Clone the repository and install dependencies:

```bash
npm install
```

### 3. Development Server
Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 7. Validation

Before delivering to a client or deploying to production, verify build health:

### TypeScript Validation (`npm run lint` / `npx tsc --noEmit`)
Ensures all configuration fields match schema interfaces without type regressions:

```bash
npm run lint
# or directly:
npx tsc --noEmit
```

> **Note on Linting**: `npm run lint` currently performs TypeScript validation (`tsc --noEmit`). Running `npx tsc --noEmit` runs the same TypeScript check directly. No actual ESLint checks are performed by this script.

### Production Build
Tests Next.js page generation, asset bundling, and static prerendering:

```bash
npm run build
```

Both commands should exit with code `0`.

---

## 8. Deployment

This template is optimized for deployment on [Vercel](https://vercel.com/) or any platform supporting Next.js.

### Recommended Vercel Workflow

1. **Push to GitHub**: Push the configured project to the client's private GitHub repository.
2. **Import into Vercel**:
   - Log into Vercel.
   - Click **Add New Project** and select the client's repository.
3. **Configure Project**:
   - Framework Preset: **Next.js**
   - Root Directory: `./`
   - Build Command: `npm run build`
   - Output Directory: `.next`
4. **Deploy**: Click **Deploy**. Vercel will build and prerender all static routes.
5. **Connect Custom Domain**:
   - Navigate to **Project Settings > Domains**.
   - Add the client's custom domain (e.g., `restaurantname.com`).
   - Configure DNS records (A/CNAME) with the client's domain registrar.
6. **Verify Live Site**: Test SSL certificate generation, domain redirection, and WhatsApp deep-links on mobile devices.

---

## 9. Contact Form Limitation

> [!IMPORTANT]
> The contact form located at `app/contact/page.tsx` is currently a **client-side UI implementation**. It simulates form submission feedback in the browser for user testing, but it does **not** send emails or persist submissions to a database.

For a live client deployment requiring email lead capture:
- Connect the `handleSubmit` handler in `app/contact/page.tsx` to an email delivery service (e.g., [Resend](https://resend.com), [SendGrid](https://sendgrid.com), or [Formspree](https://formspree.io)).
- Alternatively, use a Next.js Server Action / Route Handler to forward submissions to the restaurant's operational inbox.

---

## 10. WhatsApp Ordering

Online ordering is built around **direct WhatsApp deep-linking**, which is the preferred lightweight ordering model for many independent restaurants and international businesses:

- **Centralized Helper**: All WhatsApp URLs are constructed via `lib/utils.ts` (`createWhatsAppUrl` and `getWhatsAppOrderUrl`).
- **Pre-filled Context**:
  - Clicking "Order" on a menu card pre-fills: `"Hello [BusinessName]! I would like to order: '[DishName]' for $[Price]."`
  - Clicking "Claim Offer" on a deal card pre-fills: `"I want to order the '[DealTitle]' offer using coupon code [[CODE]]."`
  - Clicking general ordering buttons pre-fills a standard menu inquiry message.
- **Config-Driven**: Changing the phone number in `businessConfig.whatsapp.number` automatically updates every order link, banner CTA, and floating button across the entire site.

---

## 11. Images and Assets

- **Remote Imagery**: The demonstration dataset currently utilizes high-resolution food and dining photography from [Unsplash](https://unsplash.com). Remote image loading is configured in `next.config.js`:
  ```javascript
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  }
  ```
- **Local Assets**: Local placeholder folders exist in `public/images/` (`burgers/`, `offers/`, `restaurant/`) along with `public/logo.png`.
- **Client Preparation**: For production client deployments, developers can replace Unsplash URLs with client-provided photography hosted locally in `public/` or via a CDN. If adding new remote image domains, update `remotePatterns` in `next.config.js`.

---

## 12. Client Ownership & Freelance Handoff

For long-term maintainability and business security, adhere to this ownership model during freelance handoff:

1. **Client Account Ownership**:
   - The **client** should own their domain registration (Namecheap, GoDaddy, Cloudflare, etc.).
   - The **client** should own their hosting account (Vercel, Netlify, AWS, etc.).
   - The **client** should own the GitHub repository containing their website code.
   - The **client** should own their Google Business Profile and business WhatsApp account.
2. **Freelancer Role**:
   - The freelancer should be granted **Collaborator** or **Admin** access during development.
   - Avoid hosting client websites on personal developer accounts to prevent billing disputes or handoff bottlenecks.
3. **Maintenance Deliverables**:
   - Provide the client with instructions on how to request menu price updates.
   - Document domain renewal dates and hosting tier limits.

---

## 13. Current Limitations & Future Improvements

To keep expectations clear, this template has the following deliberate design boundaries:

- **No Server-Side Form Handling**: As noted in [Section 9](#9-contact-form-limitation), the contact form requires integration with an email service before handling production customer messages.
- **External Image Dependencies**: Demo menu cards and banners rely on external Unsplash URLs.
- **Static Template Scope**: The project intentionally does not include a complex database, user authentication, or a full kitchen display system (KDS). It is engineered as a lightweight, fast, and high-converting marketing site.

---

## 14. Project Status

- **Type Safety**: Passes `npx tsc --noEmit` with **0 errors**.
- **Production Build**: Passes `npm run build` with **0 errors** across all static routes (`/`, `/about`, `/contact`, `/menu`).
- **Code Cleanliness**: Free of obsolete files, dead code, and hardcoded business data in UI components.
- **Architecture**: Production-ready white-label template ready for new client customization.

---

## 15. Core Architectural Principle

> **"Keep business data and configuration strictly separate from reusable UI presentation."**

When building a new client site or adding a new feature, always ask:
1. *Is this data specific to this one business (brand text, phone numbers, dish names, marketing copy)?*  
   → **Put it in `data/business.config.ts` or `data/menu.ts`.**
2. *Is this reusable UI logic (layout, animation, card styling, responsive behavior, filtering logic)?*  
   → **Put it in `components/` or `app/`.**

Adhering to this principle ensures the template remains reusable, easy to maintain, and clean for future client projects.
