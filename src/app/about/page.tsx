import type { Metadata } from 'next';
import { PostCard } from '@/components/post-card';

export const metadata: Metadata = {
  title: 'About | Anas Lari',
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 py-4">
      <PostCard
        label="About"
        caption="Engineer obsessed with AI-native experiences, clean UX, and shipping fast."
        timestamp="Story"
      >
        <p className="text-sm text-foreground">
          I&apos;m Anas Lari, an AI Engineer and full-stack developer based in Kolkata, India. I love building
          AI-native products that feel as smooth and intuitive as the best consumer apps — from multimodal
          healthcare agents to face-verified assistants and delightful mobile experiences.
        </p>
        <p className="mt-2 text-sm text-foreground">
          My background spans Transformer models, computer vision, reinforcement learning, and production-ready
          backends in FastAPI and Node.js. I enjoy owning things end-to-end: design, UX, systems, and deployment.
        </p>
      </PostCard>

      <PostCard
        label="Work Experience"
        caption="A quick snapshot of roles I&apos;ve taken on."
        timestamp="Journey"
      >
        <ol className="space-y-4 border-l border-border pl-4 text-sm text-foreground">
          <li className="relative">
            <span className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-insta-gradient" />
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">2025 · Kolkata</p>
            <p className="font-medium text-foreground">CTO &amp; Freelance Developer — Elevate Brand 360</p>
            <p className="text-[13px] text-muted-foreground">
              Leading technical strategy, building web and mobile products, and shipping AI-powered experiences
              for brands.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">2024 · Howrah</p>
            <p className="font-medium text-foreground">Intern &amp; Freelance App Developer — Markcos Agency</p>
            <p className="text-[13px] text-muted-foreground">
              Built client-facing apps, optimized UX, and integrated backend services in tight delivery cycles.
            </p>
          </li>
        </ol>
      </PostCard>

      <PostCard
        label="Education"
        caption="Where I picked up my fundamentals and AI/ML focus."
        timestamp="Path"
      >
        <ol className="space-y-4 border-l border-border pl-4 text-sm text-foreground">
          <li className="relative">
            <span className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">2024 → Present · Kolkata</p>
            <p className="font-medium text-foreground">B.Tech – Computer Science Engineering (AI &amp; ML)</p>
            <p className="text-[13px] text-muted-foreground">
              Bengal Institute of Technology, Kolkata · Exploring deep learning, multimodal models, and
              real-world AI systems while building side projects.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">2021 – 2024 · Aligarh</p>
            <p className="font-medium text-foreground">Diploma – Computer Science &amp; Engineering</p>
            <p className="text-[13px] text-muted-foreground">
              Aligarh Muslim University, Aligarh · Built strong CS fundamentals, shipped early projects, and
              discovered a love for AI + product.
            </p>
          </li>
          <li className="relative">
            <span className="absolute -left-2.5 mt-1 h-2.5 w-2.5 rounded-full bg-slate-500" />
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">2007 – 2021 · Howrah</p>
            <p className="font-medium text-foreground">High School — St. Helen&apos;s School</p>
            <p className="text-[13px] text-muted-foreground">
              St. Helen&apos;s School, Howrah · Laid the foundation for problem-solving, communication, and curiosity
              that later shaped my engineering path.
            </p>
          </li>
        </ol>
      </PostCard>

      <PostCard
        label="Interests"
        caption="What I do when I&apos;m not debugging."
        timestamp="Now"
      >
        <div className="flex flex-wrap gap-2 text-[12px] text-foreground">
          <span className="rounded-full bg-card px-3 py-1 border border-border">AI Agents &amp; Automation</span>
          <span className="rounded-full bg-card px-3 py-1 border border-border">Flutter UI experiments</span>
          <span className="rounded-full bg-card px-3 py-1 border border-border">Gaming &amp; sim racing</span>
          <span className="rounded-full bg-card px-3 py-1 border border-border">Music &amp; sound design</span>
          <span className="rounded-full bg-card px-3 py-1 border border-border">System design &amp; tooling</span>
        </div>
      </PostCard>
    </div>
  );
}
