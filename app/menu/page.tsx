import type { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';
import Offers from '@/components/Offers';
import { Flame, Leaf, Sparkles, Utensils } from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: businessConfig.menuPage.metaTitle,
  description: businessConfig.menuPage.metaDescription,
};

const DIETARY_ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  Sparkles,
  Flame,
  Leaf,
  Utensils,
};

export default function MenuPage() {
  const { menuPage } = businessConfig;
  const KickerIcon = DIETARY_ICON_MAP[menuPage.kickerIcon || 'Utensils'] || Utensils;

  return (
    <div className="pt-2 pb-16">
      {/* Menu Header Banner */}
      <section className="py-12 md:py-16 bg-[#101216] border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="badge-kicker mb-3">
            <KickerIcon className="w-3.5 h-3.5" />
            <span>{menuPage.kicker}</span>
          </span>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
            {menuPage.headline}
          </h1>

          <p className="mt-3 text-base sm:text-lg text-zinc-300 max-w-2xl mx-auto">
            {menuPage.description}
          </p>

          {/* Clean Dietary Legend */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs text-zinc-400">
            {menuPage.dietaryLegend.map((item, idx) => {
              const IconComp = DIETARY_ICON_MAP[item.icon] || Sparkles;
              return (
                <div
                  key={item.label || idx}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg bg-surface-card border border-white/10"
                >
                  <IconComp className={cn('w-3.5 h-3.5', item.colorClass || 'text-amber-400')} />
                  <span>{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Interactive Menu with Category Filtering and Search */}
      <MenuSection
        featuredOnly={false}
        title={menuPage.sectionTitle}
        subtitle={menuPage.sectionSubtitle}
        searchPlaceholder={menuPage.searchPlaceholder}
      />

      {/* Special Deals Anchor Section */}
      <div id="deals">
        <Offers />
      </div>
    </div>
  );
}
