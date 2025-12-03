"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PostCardProps {
  label: string;
  caption: string;
  timestamp: string;
  children: ReactNode;
}

export function PostCard({ label, caption, timestamp, children }: PostCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      className="overflow-hidden rounded-3xl border border-border bg-card shadow-insta-soft"
    >
      <div className="flex items-center justify-between px-4 pt-3 text-xs text-muted-foreground">
        <span className="font-semibold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </span>
        <span>{timestamp}</span>
      </div>
      <div className="px-4 pb-3 text-[13px] text-muted-foreground">{caption}</div>
      <div className="border-t border-border bg-card px-4 pb-4 pt-3 text-sm text-foreground">
        {children}
      </div>
    </motion.article>
  );
}
