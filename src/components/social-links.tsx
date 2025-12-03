import { Github, Linkedin, Instagram, Bot } from 'lucide-react';
import Link from 'next/link';

interface SocialLinksProps {
  orientation?: 'horizontal' | 'vertical';
}

const links = [
  {
    href: 'https://github.com/anaslari23',
    label: 'GitHub',
    icon: Github,
  },
  {
    href: 'https://www.linkedin.com/in/anas-lari',
    label: 'LinkedIn',
    icon: Linkedin,
  },
  {
    href: 'https://www.kaggle.com/anaslari',
    label: 'Kaggle',
    icon: Bot,
  },
  {
    href: 'https://instagram.com/',
    label: 'Instagram',
    icon: Instagram,
  },
];

export function SocialLinks({ orientation = 'horizontal' }: SocialLinksProps) {
  return (
    <div
      className={
        orientation === 'horizontal'
          ? 'flex flex-wrap items-center justify-center gap-2 sm:justify-end'
          : 'flex flex-col gap-2'
      }
    >
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/70 px-3 py-1 text-xs text-slate-200 shadow-sm shadow-slate-950/40 transition hover:border-slate-500 hover:bg-slate-800"
            aria-label={link.label}
          >
            <Icon className="h-3.5 w-3.5" />
            <span>{link.label}</span>
          </Link>
        );
      })}
    </div>
  );
}
