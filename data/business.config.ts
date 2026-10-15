import type { BusinessConfig } from './business.types';

export const businessConfig: BusinessConfig = {
  identity: {
    name: "Bun & Bite",
    legalName: "Bun & Bite LLC",
    brandNamePart1: "BUN",
    brandNameHighlight: "&",
    brandNamePart2: "BITE",
    brandSubtitle: "Artisan Smashes",
    logo: "/logo.png",
    altText: "Bun & Bite emblem",
    foundedYear: 2021,
  },
  businessType: "Artisan Smash Burger Restaurant",
  tagline: "Smashed to Perfection. Crafted with Passion.",
  shortDescription:
    "Gourmet artisan smash burgers, golden hand-cut fries, and thick custardy milkshakes crafted with prime local ingredients.",
  city: "San Francisco",
  contact: {
    phone: "+15552862483",
    displayPhone: "+1 (555) BUN-BITE",
    email: "hello@bunandbite.com",
    callHoursHint: "Sample hours: Mon–Sun from 11:00 AM",
    emailResponseHint: "Demo inbox • Configurable in business.config.ts",
  },
  whatsapp: {
    number: "+15552862483",
    displayNumber: "+1 (555) 286-2483",
    fabTooltip: "Template Demo: Order directly on WhatsApp",
    fabDefaultMessage: "I would like to check today's specials and place an order.",
    fabAriaLabel: "Order or chat on WhatsApp",
    dismissTooltipAriaLabel: "Dismiss order popup",
    containerAriaLabel: "Direct WhatsApp Ordering Support",
    chatHighlightBadge: "Template Ordering Demo",
    chatHighlightDesc: "Sample WhatsApp channel. In production, connect your real restaurant line in data/business.config.ts.",
  },
  orderingPlatforms: {
    zomatoUrl: undefined,
    swiggyUrl: undefined,
  },
  address: {
    street: "742 Evergreen Grill Blvd",
    neighborhood: "Downtown Food Arts District",
    city: "San Francisco",
    state: "CA",
    postalCode: "94103",
    country: "USA",
    fullAddress: "742 Evergreen Grill Blvd, Downtown District, San Francisco, CA 94103 (Fictional Demo Address)",
    landmarkHint: "Fictional Demo Location • Replace with verified storefront address in business.config.ts",
    googleMapsUrl: "https://maps.google.com/?q=742+Evergreen+Grill+Blvd+San+Francisco+CA",
    topBarBadge: "Template Showcase • Artisan Burger Restaurant Demo",
  },
  openingHours: {
    todayStatus: "Today: 11:00 AM – 10:30 PM",
    schedule: [
      { days: "Monday - Thursday", hours: "11:00 AM – 10:30 PM" },
      { days: "Friday - Saturday", hours: "11:00 AM – Midnight" },
      { days: "Sunday", hours: "11:30 AM – 9:30 PM" },
    ],
  },
  socials: [
    { platform: "Instagram", url: "https://instagram.com/bunandbite", handle: "@bunandbite" },
    { platform: "TikTok", url: "https://tiktok.com/@bunandbite", handle: "@bunandbite" },
    { platform: "Facebook", url: "https://facebook.com/bunandbite", handle: "Bun & Bite Gourmet" },
    { platform: "Twitter", url: "https://twitter.com/bunandbite", handle: "@bunandbite" },
  ],
  stats: [
    { value: "450°F", label: "Searing Heat" },
    { value: "4.9★", label: "Sample Rating (Demo)" },
    { value: "100%", label: "Prime Angus Beef" },
    { value: "15 min", label: "Target Pickup Speed" },
  ],
  features: [
    {
      icon: "Flame",
      title: "450° Sizzling Smash",
      description: "Lacy caramelized edges with an ultra-juicy core for the ultimate textural harmony.",
    },
    {
      icon: "Award",
      title: "Daily Brioche Buns",
      description: "Cloud-soft, golden-toasted artisanal potato brioche buns baked fresh every morning.",
    },
    {
      icon: "Sparkles",
      title: "House-Made Secret Sauces",
      description: "Slow-simmered signature truffle mayo, smoky chipotle drizzle, and tangy burger relish.",
    },
    {
      icon: "ShieldCheck",
      iconColor: "text-emerald-400",
      title: "Farm-Fresh Produce",
      description: "Locally sourced organic crisp romaine, heirloom beefsteak tomatoes, and pickles.",
    },
  ],
  hero: {
    kicker: "San Francisco's Signature Smash Grill",
    headlinePart1: "Smashed Thin.",
    headlineHighlight: "Crisped to Gold.",
    headlinePart2: "Juicy to the Last Bite.",
    description:
      "100% Certified Angus chuck seared at 450°F on a seasoned chrome flat-top for that unmistakable crispy lace crust. Served on daily baked, butter-toasted potato brioche buns.",
    primaryCtaText: "Explore Full Menu",
    primaryCtaLink: "/menu",
    secondaryCtaText: "Order via WhatsApp",
    showcase: {
      cornerBadge: "Chef's Signature",
      recipeCategory: "Flagship Recipe",
      title: "The Classic OG Double Smash",
      ratingText: "4.9 (Sample Rating)",
      price: "$12.99",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=85",
      imageAlt: "The Classic OG Double Smash Burger at Bun & Bite",
      features: [
        { label: "100% Angus", icon: "Award" },
        { label: "15m Ready", icon: "Clock" },
        { label: "Fresh Daily", icon: "ShieldCheck" },
      ],
    },
  },
  featuredMenu: {
    kicker: "Chef's Signatures",
    title: "Most Wanted Smashes & Shakes",
    subtitle:
      "The recipes that put us on the map. Sizzled fresh to order on our cast iron flat-top.",
    viewAllText: "View Complete Menu",
  },
  location: {
    sectionKicker: "Visit Our Grill House",
    sectionTitle: "Downtown San Francisco",
    sectionSubtitle:
      "Dine in our modern grill space (illustrative demo location). Replace with your verified storefront address.",
    flagshipCardTitle: "Flagship Location (Demo Showcase)",
    sampleBadgeText: "Sample Address",
    hoursCardTitle: "Grill Hours",
    mapPinTitle: "Bun & Bite (Sample Demo Pin)",
    mapPinSubtext: "Illustrative template pin for layout showcase.",
    mapDirectionsButtonText: "Search Sample Address on Maps",
    callButtonText: "Call Restaurant",
    openStatusText: "Open Today",
    inquiryMessage: "I have a question regarding table reservation and takeout.",
    amenities: [
      { label: "Heated Patio", icon: "Utensils" },
      { label: "Free Wi-Fi", icon: "Wifi" },
      { label: "Apple / Card Pay", icon: "CreditCard" },
      { label: "Dog Friendly", icon: "Dog" },
    ],
  },
  offers: {
    kicker: "Sample Combos & Offers",
    kickerIcon: "Tag",
    title: "Special Smash Offers",
    subtitle:
      "Illustrative combo bundles and promotional coupon codes for template demonstration.",
    whatsappMessageTemplate:
      '[Template Demo Order] I would like to inquire about the "{title}" offer using sample code [{code}].',
    items: [
      {
        id: "deal-combo-duo",
        title: "The Double Smash Feast Combo",
        code: "FEAST20",
        discountBadge: "Save 20%",
        description:
          "Any 2 Signature Smashes + 1 Large Truffle Parmesan Fries + 2 Handcrafted Custard Shakes for an unforgettable dine-in or takeout date.",
        validUntil: "Limited Time Only",
        image:
          "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        imageAlt: "The Double Smash Feast Combo with fries and shakes",
        ctaText: "Order Feast Deal",
        ctaIcon: "ShoppingBag",
      },
      {
        id: "deal-lunch-rush",
        title: "Midday Smash Lunch Rush",
        code: "LUNCH15",
        discountBadge: "15% OFF",
        description:
          "Available Mon–Thu, 11am to 3pm. Get The Classic OG Double Smash with skin-on fries and fountain soda for just $14.99.",
        validUntil: "Weekdays 11am - 3pm",
        image:
          "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Classic double smash burger lunch combo",
        ctaText: "Grab Lunch Special",
        ctaIcon: "ShoppingBag",
      },
      {
        id: "deal-free-shake",
        title: "Sweet Finish Weekend Shake",
        code: "SWEETBITE",
        discountBadge: "FREE SHAKE",
        description:
          "Order any 2 gourmet burgers on Friday through Sunday, and receive a free Salted Caramel or Dark Truffle Custard Shake on us.",
        validUntil: "Fri, Sat & Sun",
        image:
          "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=800&q=80",
        imageAlt: "Artisan custard milkshakes topped with whipped cream",
        ctaText: "Claim Free Shake",
        ctaIcon: "ShoppingBag",
      },
    ],
  },
  testimonials: {
    kicker: "Customer & Critic Praise",
    kickerIcon: "MessageSquare",
    title: "Loved by Burger Fanatics",
    subtitle:
      "Illustrative customer praise and review showcases for this website template.",
    ratingScore: "4.9 / 5.0",
    ratingStars: 5,
    socialProofText: "Sample Rating (Demo Showcase)",
    favoriteItemLabel: "Favorite:",
  },
  about: {
    metaTitle: "Our Story & Craft | Bun & Bite Artisan Burgers",
    metaDescription:
      "Learn how Bun & Bite started from a humble food truck into San Francisco’s most beloved artisan smash burger spot. Read about our beef blend, daily brioche, and philosophy.",
    kicker: "Our Culinary Philosophy",
    headline: "The Craft Behind Every Smash",
    intro:
      "We didn't start Bun & Bite to make another ordinary burger. We started it to build the single most satisfying bite you will ever experience.",
    storySectionTitle: "From a Vintage Food Truck to Downtown Flagship",
    fullStory: [
      "Bun & Bite was born out of a relentless obsession with the perfect burger. In 2021, two culinary school best friends fired up a cast iron flat-top in a food truck with one ironclad rule: never compromise on quality.",
      "Every single patty is ground fresh daily from 100% Certified Angus chuck, brisket, and short-rib cuts. We smash them paper-thin on a scorching 450°F chrome griddle to unlock a deep, caramelized lace crust while locking in sizzling juiciness.",
      "Tucked inside golden, toasted potato brioche buns custom-baked for us every morning, finished with our house-simmered sauces and crisp produce from local farmers — every bite is engineered to be your best burger memory.",
    ],
    coreTenets: [
      "Never frozen beef — ground fresh every single morning",
      "Artisanal potato brioche delivered daily at 6:00 AM",
      "All sauces, relishes, and pickles made in-house from scratch",
    ],
    foundersQuote: {
      badge: "Grill Master Standard",
      quote:
        "If it doesn't have that crackling caramelized lace crust, it doesn't leave the griddle.",
      author: "— Chef Leo & Marco, Co-Founders",
      image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=1000&q=80",
      imageAlt: "Chef smashing burgers at Bun & Bite",
    },
    metrics: [
      { value: "450°F", label: "Griddle Sizzle" },
      { value: "100%", label: "Angus Chuck" },
      { value: "Demo", label: "Template Showcase" },
    ],
    pillarsTitle: "The Four Pillars of Quality",
    pillarsSubtitle:
      "Every detail is engineered so that every bite from first to last is completely dialed in.",
    pillars: [
      {
        icon: "Flame",
        title: "1. The Proprietary Grind",
        description:
          "An 80/20 balance of chuck, brisket, and short-rib cuts providing deep beefiness and natural basting juices.",
      },
      {
        icon: "Wheat",
        title: "2. The Golden Brioche",
        description:
          "Potato brioche that yields gently to your bite without falling apart under savory drippings and melted cheese.",
      },
      {
        icon: "Sparkles",
        title: "3. The 450° Cast Iron Sear",
        description:
          "Maximum Maillard reaction unlocks crispy, caramelized lace edges while keeping the core juicy.",
      },
      {
        icon: "Award",
        title: "4. Scratch-Made Sauces",
        description:
          "House-simmered relish, black truffle aioli, and smoky BBQ recipes perfected over 3 years of testing.",
      },
    ],
    ctaText: "Taste The Difference",
    ctaLink: "/menu",
  },
  contactPage: {
    metaTitle: "Contact & Catering | Bun & Bite San Francisco",
    metaDescription:
      "Get in touch with Bun & Bite. Direct phone, email, WhatsApp, and inquiry form for catering, group table bookings, media, and general questions.",
    kicker: "Direct Kitchen & Catering Desk",
    title: "Contact & Catering",
    subtitle:
      "Need catering for a company smash feast? Have feedback or dietary questions? Reach our team directly.",
    directChannelsTitle: "Direct Channels",
    directChannelsSubtitle:
      "Sample contact points for demonstration. Connect your real phone and email in business.config.ts.",
    phoneCardLabel: "Call Us",
    emailCardLabel: "Email Us",
    addressCardLabel: "Grill Address",
    whatsappCtaText: "Chat on WhatsApp",
    whatsappInquiryMessage:
      "Hello! I would like to inquire about Bun & Bite catering and dining.",
    inquiryTypes: [
      "Catering & Corporate Lunches",
      "Table / Large Group Booking",
      "Food & Experience Feedback",
      "Press & Media Inquiries",
      "Join Our Culinary Team",
    ],
    formTitle: "Send Us a Message",
    formSubtitle:
      "Fill in the details below and a member of our team will follow up promptly.",
    formLabels: {
      nameLabel: "Your Name *",
      namePlaceholder: "e.g. Alex Morgan",
      emailLabel: "Email Address *",
      emailPlaceholder: "alex@example.com",
      phoneLabel: "Phone Number",
      phonePlaceholder: "+1 (555) 000-0000",
      inquiryTypeLabel: "Inquiry Type",
      messageLabel: "Your Message *",
      messagePlaceholder:
        "Tell us what date, party size, or questions you have...",
      submitButtonText: "Send Message",
    },
    successMessage: {
      title: "Demo Submission Complete",
      descriptionTemplate:
        "Thank you, {name}! This form interaction was simulated for demonstration—no email or inquiry regarding {inquiryType} was actually sent. The website owner must configure a real submission service before using this form for a real business.",
      resetButtonText: "Send Another Message",
    },
  },
  menuPage: {
    metaTitle: "Artisan Burger Menu & Craft Shakes | Bun & Bite San Francisco",
    metaDescription:
      "Browse our full lineup of double smash burgers, buttermilk crispy chicken, plant-based burgers, loaded fries, and thick custard shakes. Order online or visit us today.",
    kicker: "Always Made Fresh to Order",
    kickerIcon: "Utensils",
    headline: "The Bun & Bite Menu",
    description:
      "From our signature double smash patties seared at 450°F to hand-spun Madagascar vanilla custard shakes, explore our full culinary lineup below.",
    dietaryLegend: [
      {
        icon: "Sparkles",
        label: "Chef's Choice Recipe",
        colorClass: "text-amber-400",
      },
      {
        icon: "Flame",
        label: "Spicy & Fiery",
        colorClass: "text-red-400",
      },
      {
        icon: "Leaf",
        label: "Plant-Based Option",
        colorClass: "text-emerald-400",
      },
    ],
    sectionTitle: "Explore By Category",
    sectionSubtitle:
      "Filter by culinary category or search for your favorite toppings and sides.",
    searchPlaceholder: "Search burgers, ingredients, sauces...",
    showSampleRatings: true,
    sampleRatingsLabel: "Sample",
  },
  homeCta: {
    kicker: "Direct Ordering",
    title: "Craving a Freshly Smashed Burger?",
    description:
      "Skip the third-party middleman markup. Order directly via WhatsApp or swing by our Downtown grill house for blazing-fast pickup.",
    primaryCtaText: "Order Directly on WhatsApp",
    secondaryCtaText: "Browse Full Menu",
    secondaryCtaLink: "/menu",
  },
  seo: {
    metaTitle: "Bun & Bite | Artisan Smash Burgers & Handcrafted Shakes",
    metaDescription:
      "Bun & Bite serves gourmet 100% Angus smash burgers, crispy chicken, loaded truffle fries, and thick custard milkshakes in San Francisco. Dine-in, pickup, and delivery.",
    keywords: [
      "burger restaurant",
      "smash burger",
      "San Francisco burgers",
      "gourmet burgers",
      "best smash burger",
      "artisan burgers",
      "brioche bun",
      "truffle fries",
      "craft milkshakes",
      "Bun and Bite",
    ],
    siteUrl: "https://bunandbite.com",
    author: "Bun & Bite Culinary Team",
    cuisineTypes: ["American", "Burgers", "Fast Casual", "Gourmet"],
    priceRange: "$$",
    coordinates: {
      latitude: 37.7749,
      longitude: -122.4194,
    },
    openGraph: {
      title: "Bun & Bite | Smashed to Perfection",
      description:
        "Gourmet artisan smash burgers, golden hand-cut fries, and thick custardy milkshakes crafted with prime local ingredients.",
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1200&q=80",
      imageAlt: "Bun & Bite Signature OG Double Smash Burger",
    },
    schema: {
      type: "Restaurant",
      openingHours: [
        {
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
          opens: "11:00",
          closes: "22:30",
        },
        {
          dayOfWeek: ["Friday", "Saturday"],
          opens: "11:00",
          closes: "00:00",
        },
        {
          dayOfWeek: ["Sunday"],
          opens: "11:30",
          closes: "21:30",
        },
      ],
    },
  },
  navbar: {
    statusBadge: "Open Now",
    menuCtaText: "View Menu",
    orderCtaText: "Order Now",
    mobileOrderCtaText: "Order via WhatsApp",
    callCtaPrefix: "Call",
    navLinks: [
      { label: "Home", href: "/" },
      { label: "Menu", href: "/menu" },
      { label: "Our Story", href: "/about" },
      { label: "Location & Contact", href: "/contact" },
    ],
  },
  footer: {
    hoursTitle: "Kitchen Hours",
    hoursNotice: "Orders accepted until 15 minutes before close. (Sample operating hours)",
    newsletterTitle: "Club Updates",
    newsletterSubtitle: "Receive secret menu drops and monthly neighborhood offers.",
    newsletterSuccessText: "Subscribed! Check your inbox for updates.",
    newsletterDisclaimer: "No spam. Only delicious announcements.",
    standardsLinkLabel: "Our Standards",
    privacyLinkLabel: "Privacy & Inquiries",
  },
};
