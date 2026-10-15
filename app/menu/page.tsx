import type { Metadata } from 'next';
import MenuSection from '@/components/MenuSection';
import Offers from '@/components/Offers';
import { Flame, Leaf, Sparkles, Utensils } from 'lucide-react';
import { businessConfig } from '@/data/business.config';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: businessConfig.menuPage.metaTitle,
  description: businessConfig.menuPage.metaDescription,
  alternates: {
    canonical: '/menu',
  },
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
    <div className="pb-16">
      {/* Menu Header Banner (Warm Restaurant Aesthetic) */}
      <section className="py-8 sm:py-12 md:py-16 bg-surface-alt border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center mb-2.5 sm:mb-3">
            <span className="badge-kicker">
              <KickerIcon className="w-3.5 h-3.5 text-amberGrill-600 shrink-0" />
              <span>{menuPage.kicker}</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-ink-primary tracking-tight">
            {menuPage.headline}
          </h1>

          <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-ink-secondary max-w-2xl mx-auto leading-relaxed">
            {menuPage.description}
          </p>

          {/* Clean Dietary Legend */}
          <div className="mt-5 sm:mt-6 flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 text-xs">
            {menuPage.dietaryLegend.map((item, idx) => {
              const IconComp = DIETARY_ICON_MAP[item.icon] || Sparkles;
              const iconColor =
                item.icon === 'Leaf'
                  ? 'text-emerald-600'
                  : item.icon === 'Flame'
                  ? 'text-red-600'
                  : 'text-amberGrill-600';
              return (
                <div
                  key={item.label || idx}
                  className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-white border border-surface-border shadow-card-subtle text-ink-primary font-medium text-xs"
                >
                  <IconComp className={cn('w-3.5 h-3.5', iconColor)} />
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
