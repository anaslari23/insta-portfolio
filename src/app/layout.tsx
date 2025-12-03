import type { Metadata } from 'next';
import './globals.css';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import { NavBar } from '@/components/nav-bar';
import { BottomNavMobile } from '@/components/bottom-nav-mobile';
import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Anas Lari | Instagram Portfolio',
  description: 'Instagram-inspired portfolio of Anas Lari — Flutter Developer, AI Engineer & Full-Stack Builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, 'min-h-screen bg-background text-foreground')}> 
        <ThemeProvider>
          <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors">
            <NavBar />
            <main className="container relative flex-1 pb-20 pt-20 md:pb-8">
              {children}
            </main>
            <BottomNavMobile />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
