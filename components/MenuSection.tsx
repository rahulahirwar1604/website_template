'use client';

import React, { useState, useMemo, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, Flame, Leaf, ArrowRight, UtensilsCrossed } from 'lucide-react';
import MenuCard from './MenuCard';
import {
  menuItems as defaultMenuItems,
  menuCategories as defaultMenuCategories,
  MenuItem,
  MenuCategory,
} from '@/data/menu';
import { businessConfig } from '@/data/business.config';

export interface MenuSectionProps {
  featuredOnly?: boolean;
  title?: string;
  subtitle?: string;
  kicker?: string;
  searchPlaceholder?: string;
  items?: MenuItem[];
  categories?: MenuCategory[];
  whatsappNumber?: string;
}

export default function MenuSection({
  featuredOnly = false,
  title = "Our Handcrafted Menu",
  subtitle = "Crafted fresh to order with premium ingredients and bold flavors.",
  kicker,
  searchPlaceholder = "Search dishes, ingredients, flavors...",
  items = defaultMenuItems,
  categories = defaultMenuCategories,
  whatsappNumber = businessConfig.whatsapp.number,
}: MenuSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlyVegetarian, setOnlyVegetarian] = useState(false);
  const [onlySpicy, setOnlySpicy] = useState(false);

  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  const checkTabsScroll = () => {
    if (tabsScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = tabsScrollRef.current;
      setCanScrollLeft(scrollLeft > 6);
      setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 6);
    }
  };

  useEffect(() => {
    checkTabsScroll();
    window.addEventListener('resize', checkTabsScroll);
    return () => window.removeEventListener('resize', checkTabsScroll);
  }, []);

  // Handle category selection with horizontal centering and vertical scroll management
  const handleCategoryClick = (cat: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    setSelectedCategory(cat);

    // Smoothly center the clicked category pill horizontally in the scroller
    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }

    // When switched on mobile, ensure resulting content is not hidden behind the sticky navbar and sticky category bar
    if (cardsContainerRef.current) {
      const rect = cardsContainerRef.current.getBoundingClientRect();
      // Combined height of sticky navbar (64px mobile / 80px desktop) + sticky category bar (~56px) = ~120px-136px
      if (rect.top < 140) {
        const prefersReducedMotion =
          typeof window !== 'undefined' &&
          window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        cardsContainerRef.current.scrollIntoView({
          behavior: prefersReducedMotion ? 'auto' : 'smooth',
          block: 'start',
        });
      }
    }
  };

  // Compute filtered items
  const filteredItems = useMemo(() => {
    let list = featuredOnly
      ? items.filter((i) => i.isPopular || i.isChefSpecial)
      : items;

    if (!featuredOnly && selectedCategory !== 'All') {
      list = list.filter((i) => i.category === selectedCategory);
    }

    if (onlyVegetarian) {
      list = list.filter((i) => i.isVegetarian);
    }

    if (onlySpicy) {
      list = list.filter((i) => i.isSpicy);
    }

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      list = list.filter(
        (i) =>
          i.name.toLowerCase().includes(q) ||
          i.description.toLowerCase().includes(q) ||
          i.ingredients?.some((ing) => ing.toLowerCase().includes(q))
      );
    }

    return list;
  }, [featuredOnly, items, selectedCategory, onlyVegetarian, onlySpicy, searchQuery]);

  return (
    <section id="menu-section" className="section-spacing bg-surface-ground relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8 sm:mb-10 lg:mb-12">
          <span className="badge-kicker mb-2.5 sm:mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>{kicker || (featuredOnly ? "Chef's Signatures" : "Complete Menu")}</span>
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-ink-primary tracking-tight">
            {title}
          </h2>

          <p className="mt-2.5 sm:mt-3 text-sm sm:text-base lg:text-lg text-ink-secondary max-w-2xl">
            {subtitle}
          </p>
        </div>

        {/* Search and Dietary Badges Row (Normal Flow) */}
        {!featuredOnly && (
          <div className="mb-6 sm:mb-8">
            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 sm:gap-4">
              {/* Search Box with Accessible Label */}
              <div className="relative w-full md:max-w-md">
                <label htmlFor="menu-search-input" className="sr-only">
                  Search menu items
                </label>
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-muted pointer-events-none" />
                <input
                  id="menu-search-input"
                  name="menuSearch"
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-12 py-2.5 rounded-xl bg-white border border-surface-border text-ink-primary placeholder:text-ink-muted text-base sm:text-sm shadow-xs focus:outline-none focus:border-amberGrill-500 focus:ring-2 focus:ring-amberGrill-500/20 transition-all min-h-[44px]"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs font-semibold text-ink-secondary hover:text-ink-primary px-2 py-1 rounded-md hover:bg-surface-subtle transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500"
                    aria-label="Clear search input"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Dietary Filter Buttons: Flex-wrap prevents overflow on narrow screens */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <button
                  type="button"
                  onClick={() => setOnlyVegetarian(!onlyVegetarian)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${
                    onlyVegetarian
                      ? 'bg-emerald-50 text-emerald-900 border-emerald-400 shadow-xs font-bold'
                      : 'bg-white text-ink-secondary border-surface-border hover:bg-surface-subtle hover:text-ink-primary shadow-xs'
                  }`}
                  aria-pressed={onlyVegetarian}
                >
                  <Leaf className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Vegetarian Only</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOnlySpicy(!onlySpicy)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold border transition-colors min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${
                    onlySpicy
                      ? 'bg-red-50 text-red-900 border-red-400 shadow-xs font-bold'
                      : 'bg-white text-ink-secondary border-surface-border hover:bg-surface-subtle hover:text-ink-primary shadow-xs'
                  }`}
                  aria-pressed={onlySpicy}
                >
                  <Flame className="w-3.5 h-3.5 text-red-600" />
                  <span>Spicy Only</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Sticky Category Navigation Bar (sticks at top-16 directly below 64px mobile Navbar, static on desktop) */}
        {!featuredOnly && (
          <nav
            aria-label="Menu categories navigation"
            className="sticky top-16 z-30 -mx-4 px-4 sm:-mx-6 sm:px-6 md:mx-0 md:px-0 md:static md:top-auto md:z-auto bg-surface-ground md:bg-transparent py-2 sm:py-2.5 md:py-0 mb-5 sm:mb-6 md:mb-10 border-b border-surface-border md:border-b-0 shadow-xs md:shadow-none transition-colors"
          >
            <div className="relative">
              <div
                ref={tabsScrollRef}
                onScroll={checkTabsScroll}
                className="flex items-center overflow-x-auto no-scrollbar gap-2 py-0.5"
                role="tablist"
                aria-label="Menu Categories"
              >
                <button
                  type="button"
                  onClick={(e) => handleCategoryClick('All', e)}
                  className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors min-h-[44px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${
                    selectedCategory === 'All'
                      ? 'bg-amberGrill-600 text-white font-bold border border-amberGrill-700 shadow-xs'
                      : 'bg-white text-ink-secondary hover:text-ink-primary hover:bg-surface-subtle border border-surface-border shadow-xs'
                  }`}
                  role="tab"
                  aria-selected={selectedCategory === 'All'}
                >
                  All Items ({items.length})
                </button>

                {categories.map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={(e) => handleCategoryClick(cat, e)}
                    className={`px-3.5 sm:px-4 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors min-h-[44px] shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 ${
                      selectedCategory === cat
                        ? 'bg-amberGrill-600 text-white font-bold border border-amberGrill-700 shadow-xs'
                        : 'bg-white text-ink-secondary hover:text-ink-primary hover:bg-surface-subtle border border-surface-border shadow-xs'
                    }`}
                    role="tab"
                    aria-selected={selectedCategory === cat}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Visual edge fade hints indicating scrollable content */}
              <div
                className={`pointer-events-none absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-surface-ground to-transparent md:hidden transition-opacity duration-200 ${
                  canScrollLeft ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              />
              <div
                className={`pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-surface-ground to-transparent md:hidden transition-opacity duration-200 ${
                  canScrollRight ? 'opacity-100' : 'opacity-0'
                }`}
                aria-hidden="true"
              />
            </div>
          </nav>
        )}

        {/* Menu Cards Grid with scroll margin to prevent sticky header occlusion */}
        <div
          ref={cardsContainerRef}
          className="scroll-mt-36 md:scroll-mt-28"
        >
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 lg:gap-8">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} whatsappNumber={whatsappNumber} />
              ))}
            </div>
          ) : (
            /* Empty Search State */
            <div className="py-16 text-center card-base p-8 max-w-md mx-auto bg-white border border-surface-border rounded-2xl shadow-card-subtle">
              <UtensilsCrossed className="w-10 h-10 text-ink-muted mx-auto mb-3" />
              <h3 className="text-lg font-bold text-ink-primary">No items found</h3>
              <p className="mt-1 text-sm text-ink-secondary">
                Try adjusting your search or clearing active dietary filters.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                  setOnlyVegetarian(false);
                  setOnlySpicy(false);
                }}
                className="mt-4 btn-secondary py-2.5 px-5 text-xs font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 min-h-[44px]"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Home Page Featured Footer CTA */}
        {featuredOnly && (
          <div className="mt-12 sm:mt-14 text-center">
            <Link
              href="/menu"
              className="btn-primary inline-flex items-center justify-center px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold space-x-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amberGrill-500 rounded-xl shadow-btn-subtle text-center max-w-full"
            >
              <span>View Complete Menu ({items.length} Handcrafted Items)</span>
              <ArrowRight className="w-4 h-4 shrink-0" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
