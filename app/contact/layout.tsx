import type { Metadata } from 'next';
import { businessConfig } from '@/data/business.config';

export const metadata: Metadata = {
  title: businessConfig.contactPage.metaTitle,
  description: businessConfig.contactPage.metaDescription,
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
