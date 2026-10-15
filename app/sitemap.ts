import type { MetadataRoute } from 'next';
import { businessConfig } from '@/data/business.config';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = businessConfig.seo.siteUrl.replace(/\/+$/, '');

  return [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/menu`,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ];
}
