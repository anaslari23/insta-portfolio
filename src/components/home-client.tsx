"use client";

import { StoryRing } from '@/components/story-ring';
import { SocialLinks } from '@/components/social-links';
import { DownloadCVButton } from '@/components/download-cv-button';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { PostCard } from '@/components/post-card';

const feedVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.45, ease: 'easeOut' },
  }),
};

export function HomeClient() {
  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6">
      <section className="flex flex-col items-center gap-6 border-b border-border pb-6 pt-2 sm:flex-row sm:items-start">
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center">
          <StoryRing
            size={200}
            src="/cv/profile.jpg"
            alt="Profile picture of Anas Lari"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">@anas_lari</h1>
            <p className="mt-1 max-w-md text-sm text-muted-foreground">
              Hi, I&apos;m Anas Lari — Flutter Developer, AI Engineer &amp; Full-Stack Builder.
              I craft intelligent, delightful experiences across mobile, web, and AI.
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Button
                size="sm"
                className="gap-2 rounded-full bg-foreground text-background hover:bg-foreground/90"
                asChild
              >
                <a href="#contact">
                  <Mail className="h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <DownloadCVButton variant="outline" size="sm" />
            </div>
          </div>
        </div>
        <div className="mt-2 w-full sm:mt-0 sm:w-auto">
          <SocialLinks orientation="horizontal" />
        </div>
      </section>

      <motion.div
        className="flex flex-col gap-5 pb-12"
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={feedVariants} custom={0}>
          <PostCard
            label="Profile"
            caption="Building intelligent apps, agents, and experiences with Flutter, Next.js, and modern AI stacks."
            timestamp="Today"
          >
            <p className="text-sm text-muted-foreground">
              I love shipping things end-to-end — from pixel-perfect mobile UIs to production-grade AI agents and cloud backends.
              Most of my work lives on GitHub and Kaggle, where I experiment with deep learning, multimodal models, and tools that feel magical.
            </p>
          </PostCard>
        </motion.div>

        <motion.div variants={feedVariants} custom={1}>
          <PostCard
            label="Tech Stack"
            caption="The tools I reach for when building fast, beautiful experiences."
            timestamp="Recently"
          >
            <div className="flex flex-wrap gap-2 text-xs font-medium text-foreground">
              {[
                'Flutter',
                'Dart',
                'Next.js',
                'React',
                'TypeScript',
                'Node.js',
                'Python',
                'FastAPI',
                'PostgreSQL',
                'TailwindCSS',
                'Framer Motion',
                'LangChain',
                'OpenAI API',
                'Firebase',
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-secondary px-3 py-1 text-[11px] shadow-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </PostCard>
        </motion.div>

        <motion.div variants={feedVariants} custom={2}>
          <PostCard
            label="Currently working on"
            caption="AI-native experiences, multimodal agents, and delightful mobile apps."
            timestamp="Now"
          >
            <ul className="list-disc space-y-1 pl-4 text-sm text-muted-foreground">
              <li>Production-grade AI agents that combine text, vision, and structured tools.</li>
              <li>Beautiful Flutter apps that feel as smooth as native Instagram.</li>
              <li>Developer tools and workflows that make building with AI feel effortless.</li>
            </ul>
          </PostCard>
        </motion.div>
      </motion.div>
    </div>
  );
}
