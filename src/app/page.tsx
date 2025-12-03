import type { Metadata } from 'next';
import { HomeClient } from '@/components/home-client';

export const metadata: Metadata = {
  title: 'Home | Anas Lari',
};

export default function HomePage() {
  return <HomeClient />;
}
