"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

interface StoryRingProps {
  size?: number;
  src: string;
  alt: string;
}

export function StoryRing({ size = 96, src, alt }: StoryRingProps) {
  return (
    <motion.div
      className="relative inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-[#fdf497] via-[#fd5949] via-40% via-[#d6249f] to-[#285AEB] p-[3px] shadow-xl shadow-slate-950/60"
      style={{ width: size, height: size }}
      animate={{
        scale: [1, 1.03, 1],
      }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
    >
      <div className="flex h-full w-full items-center justify-center rounded-full bg-slate-950">
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
    </motion.div>
  );
}
