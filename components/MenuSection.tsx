'use client';

import React, { useState, useMemo } from 'react';
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
    <section id="menu-section" className="section-spacing bg-[#0c0d0f] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <span className="badge-kicker mb-3">
            <UtensilsCrossed className="w-3.5 h-3.5" />
            <span>{kicker || (featuredOnly ? "Chef's Signatures" : "Complete Menu")}</span>
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h2>

          <p className="mt-3 text-base sm:text-lg text-zinc-400">
            {subtitle}
          </p>
        </div>

        {/* Filter & Search Bar */}
        {!featuredOnly && (
          <div className="mb-10 space-y-4">
            {/* Search and Dietary Badges Row */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Search Box */}
              <div className="relative w-full md:max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-400" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-surface-card border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amberGrill-500 transition-colors"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Dietary Filter Buttons */}
              <div className="flex items-center space-x-2 self-start md:self-auto">
                <button
                  type="button"
                  onClick={() => setOnlyVegetarian(!onlyVegetarian)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                    onlyVegetarian
                      ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                      : 'bg-surface-card text-zinc-300 border-white/10 hover:border-white/20'
                  }`}
                  aria-pressed={onlyVegetarian}
                >
                  <Leaf className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Vegetarian Only</span>
                </button>

                <button
                  type="button"
                  onClick={() => setOnlySpicy(!onlySpicy)}
                  className={`inline-flex items-center space-x-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border transition-colors ${
                    onlySpicy
                      ? 'bg-red-500/20 text-red-300 border-red-500/40'
                      : 'bg-surface-card text-zinc-300 border-white/10 hover:border-white/20'
                  }`}
                  aria-pressed={onlySpicy}
                >
                  <Flame className="w-3.5 h-3.5 text-red-400" />
                  <span>Spicy Only</span>
                </button>
              </div>
            </div>

            {/* Category Navigation Pills */}
            <div className="flex items-center overflow-x-auto pb-2 scrollbar-none gap-2">
              <button
                type="button"
                onClick={() => setSelectedCategory('All')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                  selectedCategory === 'All'
                    ? 'btn-primary py-2 px-4 shadow-none'
                    : 'bg-surface-card text-zinc-300 hover:text-white border border-white/10'
                }`}
              >
                All Items ({items.length})
              </button>

              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'btn-primary py-2 px-4 shadow-none'
                      : 'bg-surface-card text-zinc-300 hover:text-white border border-white/10'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Menu Cards Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <MenuCard key={item.id} item={item} whatsappNumber={whatsappNumber} />
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="py-16 text-center card-base p-8 max-w-md mx-auto">
            <UtensilsCrossed className="w-10 h-10 text-zinc-600 mx-auto mb-3" />
            <h3 className="text-lg font-bold text-white">No items found</h3>
            <p className="mt-1 text-sm text-zinc-400">
              Try adjusting your search or clearing active dietary filters.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setOnlyVegetarian(false);
                setOnlySpicy(false);
              }}
              className="mt-4 btn-secondary py-2 px-4 text-xs font-semibold"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Home Page Featured Footer CTA */}
        {featuredOnly && (
          <div className="mt-14 text-center">
            <Link
              href="/menu"
              className="btn-primary px-8 py-3.5 text-base font-bold space-x-2"
            >
              <span>View Complete Menu ({items.length} Handcrafted Items)</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
