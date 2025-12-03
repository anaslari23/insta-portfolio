"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, FileText, FolderGit2, User2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Home', icon: Home },
  { href: '/resume', label: 'Resume', icon: FileText },
  { href: '/projects', label: 'Projects', icon: FolderGit2 },
  { href: '/about', label: 'About', icon: User2 },
  { href: '/contact', label: 'Contact', icon: Send },
];

export function BottomNavMobile() {
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-xl md:hidden">
      <div className="mx-auto flex max-w-2xl items-center justify-between px-3 py-2">
        {links.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href;

          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'flex flex-1 flex-col items-center gap-0.5 text-[11px] text-slate-400',
                active && 'text-white'
              )}
              aria-label={link.label}
            >
              <span
                className={cn(
                  'flex h-8 w-8 items-center justify-center rounded-full transition-colors',
                  active ? 'bg-slate-800' : 'bg-transparent'
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
