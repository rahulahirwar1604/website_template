import type { MetadataRoute } from 'next';
import { businessConfig } from '@/data/business.config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = businessConfig.seo.siteUrl.replace(/\/+$/, '');

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
