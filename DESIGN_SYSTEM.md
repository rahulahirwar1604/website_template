# Bun & Bite Visual Design System 🎨

A cohesive, production-grade design system crafted for **Bun & Bite**, balancing a warm, appetizing food-focused identity with a premium, modern bistro grill atmosphere.

---

## 1. Brand Identity & Color Tokens

The color palette is derived from the warmth of cast-iron searing, caramelized crusts, and freshly baked potato brioche. It purposefully avoids childish primary colors and gratuitous neon gradients.

| Token | Hex / Value | Semantic Role |
| :--- | :--- | :--- |
| `surface-ground` | `#0c0d0f` | Main canvas background (deep cast-iron charcoal) |
| `surface-card` | `#14161a` | Card & container surface |
| `surface-hover` | `#1a1d22` | Card hover state & elevated elements |
| `surface-border` | `#232730` | Structural dividers & prominent borders |
| `border-subtle` | `rgba(255, 255, 255, 0.08)` | Standard card and component outline |
| `amberGrill-500` | `#d56a29` | **Primary Brand Color** (artisan caramelized grill amber) |
| `amberGrill-600` | `#be5318` | Primary button hover state |
| `amberGrill-700` | `#9e3f14` | Primary button active state |
| `cream-50` | `#faf8f5` | High-contrast body & heading text |
| `emerald-500` | `#10b981` | WhatsApp direct ordering & dietary vegetarian badges |
| `red-500` | `#ef4444` | Spicy dietary indicators & deal callouts |

---

## 2. Typography Scale & Hierarchy

Consistent font sizes, weights, and line heights establish an immediate visual hierarchy across every device:

| Role | Class / Spec | Usage |
| :--- | :--- | :--- |
| **Kicker Badge** | `text-xs font-semibold uppercase tracking-wider text-amberGrill-400` | Section category context & badges |
| **Display / Hero** | `text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08]` | Primary hero headlines |
| **Section Heading** | `text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white` | Page & section titles |
| **Card Heading** | `text-lg font-bold text-white leading-tight` | Menu dishes & testimonial names |
| **Lead Paragraph** | `text-base sm:text-lg text-zinc-300 leading-relaxed font-normal` | Hero and section introductions |
| **Body Text** | `text-sm text-zinc-300 leading-relaxed` | Descriptions, ingredients, review copy |
| **Meta / Caption** | `text-xs text-zinc-400 font-medium` | Hours, ratings, tags, timestamps |

---

## 3. Button System

All buttons are built to meet WCAG touch-target accessibility standards ($\ge 44\text{px}$) with tactile micro-interactions:

### Primary Action (`.btn-primary`)
- **Background**: Solid `#d56a29` (`amberGrill-500`)
- **Hover**: `#be5318` (`amberGrill-600`)
- **Active**: `#9e3f14` (`amberGrill-700`) + `translateY(1px)`
- **Shadow**: `0 2px 8px rgba(213, 106, 41, 0.25)`
- **Radius**: `rounded-xl` (12px)
- **Usage**: "Order Now", "Explore Menu", "Send Message"

### Secondary Action (`.btn-secondary`)
- **Background**: `#1a1d22` with `border border-white/10`
- **Hover**: `#232730` with `border-white/15`
- **Active**: `translateY(1px)`
- **Radius**: `rounded-xl` (12px)
- **Usage**: "Browse Full Menu", "Call Restaurant", secondary filters

### Outline Action (`.btn-outline`)
- **Background**: Transparent with `border border-white/15`
- **Hover**: `rgba(255, 255, 255, 0.05)`
- **Radius**: `rounded-xl` (12px)

---

## 4. Card & Elevation System

Consistent border radius and realistic, soft shadows replace neon glow effects:

- **Border Radius**:
  - Cards: `rounded-2xl` (16px)
  - Interactive controls / Buttons: `rounded-xl` (12px)
  - Badges & Pills: `rounded` / `rounded-md` / `rounded-full`
- **Shadows**:
  - Default: `0 4px 16px -2px rgba(0, 0, 0, 0.35)`
  - Elevated: `0 8px 24px -4px rgba(0, 0, 0, 0.45)`
- **Card Interactive Hover**:
  - `transform: translateY(-2px)`
  - Border transitions from `border-white/[0.08]` to `border-amberGrill-500/35`
  - Background subtly lifts to `#171a1f`

---

## 5. Food Imagery Standards

- **Aspect Ratio**: Standardized `aspect-[4/3]` for menu items and `aspect-[16/10]` for combo deals.
- **Hover Micro-interaction**: Restrained `scale-[1.03] transition-transform duration-300 ease-out`.
- **Framing**: Clean dark base background (`#0c0d0f`) with subtle bottom gradient overlays ensuring readable price tags and dish titles.

---

## 6. Motion & Animation Principles

- **No Distracting Loops**: Removed bouncing flame icons and infinite ping halos.
- **Micro-transitions**: Restrained `duration-150` for button states and `duration-300` for card hover states.
- **Accessibility**: Standard `scroll-behavior: smooth` with full support for `prefers-reduced-motion`.

---

## 7. Mobile UX & Responsiveness

- Minimum touch targets of 44×44px on all action triggers.
- Mobile drawer navigation with clear active route indicators.
- Horizontal scrollable pill filter bar for categories on mobile without clipping.
- Persistent WhatsApp Floating Action Button (FAB) anchored safely at `bottom-6 right-6` with dismissible helper tooltip.

---

## 8. How to Safely Change the Color Theme

The website's theme is defined across two files that work in harmony: `tailwind.config.js` and `app/globals.css`.

### Step 1: Update Tailwind Color Tokens (`tailwind.config.js`)
Locate `theme.extend.colors`:
- **Canvas & Card Surfaces**: Change `surface.ground` (`#0c0d0f`), `surface.card` (`#14161a`), and `surface.hover` (`#1a1d22`) to your client's background tone (e.g. warm charcoal, navy night, or olive dark).
- **Primary Accent Palette**: Replace the `amberGrill` palette values (`50` through `950`). Set your primary brand color at index `500` (e.g. change `#d56a29` to a custom crimson, emerald, or golden amber). Set `600` for hover and `700` for active states.

### Step 2: Synchronize CSS Variables & Component Classes (`app/globals.css`)
To keep utility classes and reusable component styles consistent:
- **`:root` Variables**:
  - Update `--bg-ground` and `--bg-card` to match your Tailwind surface values.
  - Update `--border-focus` to match your new primary accent color.
- **Button System (`@layer components`)**:
  - Update `.btn-primary` `background-color` and `box-shadow` to your new primary color.
  - Update `.btn-primary:hover` and `.btn-primary:active` to your darker shade variants.
- **Card Interactive Hover**:
  - Update `.card-interactive:hover` `border-color` to reflect your new accent color with appropriate alpha transparency.

### Step 3: Verify the Theme
Run the typecheck and build to confirm zero style collisions:
```bash
npm run lint
npm run build
```
