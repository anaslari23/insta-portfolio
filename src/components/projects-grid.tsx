import { PostCard } from '@/components/post-card';
import Link from 'next/link';
import type { Repo } from '@/lib/github';

interface ProjectsGridProps {
  repos: Repo[];
}

const highlightProjects = [
  {
    title: 'MM-HIE — Multimodal Healthcare Intelligence Engine',
    description:
      'AI assistant that processes medical PDFs, extracts clinical data via OCR and NER, asks follow-up questions, and surfaces key metrics.',
    tech: ['FastAPI', 'TensorFlow', 'LangChain', 'PostgreSQL', 'OCR'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Face-Verified Personal AI Assistant (Jarvis-Style)',
    description:
      'Local assistant with face-unlock, wake-word detection, speech I/O, system automation, and offline LLM responses.',
    tech: ['Python', 'TensorFlow', 'OpenCV', 'SpeechRecognition'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Kolkata Tour AI',
    description:
      'ML-powered travel recommendation engine generating routes, local insights, and OCR-based place extraction.',
    tech: ['Flask', 'MySQL', 'Recommendation Engine'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: '2D Racing Game + RL Bot',
    description:
      'Custom racing environment with physics, sensors and an RL agent trained to drive autonomously.',
    tech: ['Pygame', 'NumPy', 'Reinforcement Learning'],
    codeUrl: '#',
    liveUrl: '#',
  },
  {
    title: 'Document Forgery Detection Dataset',
    description:
      'OCR-driven dataset and ML pipeline for detecting tampered documents; published on Kaggle.',
    tech: ['OCR', 'Feature Engineering', 'Classification'],
    codeUrl: 'https://www.kaggle.com/anaslari',
    liveUrl: '#',
  },
];

export function ProjectsGrid({ repos }: ProjectsGridProps) {
  return (
    <div className="flex flex-col gap-6">
      {highlightProjects.map((project) => (
        <PostCard
          key={project.title}
          label="Project"
          caption={project.title}
          timestamp="Featured"
        >
          <div className="space-y-3 text-sm text-foreground">
            <p>{project.description}</p>
            <div className="flex flex-wrap gap-2 text-[11px] font-medium text-foreground">
              {project.tech.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-card px-3 py-1 text-[11px] shadow-sm shadow-slate-950/10 border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </PostCard>
      ))}

      {repos.length > 0 && (
        <PostCard
          label="GitHub"
          caption="Latest repositories from github.com/anaslari23"
          timestamp="Auto-fetched"
        >
          <div className="space-y-3">
            {repos.map((repo) => (
              <div
                key={repo.id}
                className="flex items-start justify-between gap-3 rounded-2xl border border-border bg-card px-3 py-2 text-xs"
              >
                <div>
                  <a
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="font-semibold text-foreground hover:underline"
                  >
                    {repo.name}
                  </a>
                  {repo.description && (
                    <p className="mt-0.5 text-[11px] text-muted-foreground">{repo.description}</p>
                  )}
                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {repo.language ?? 'Unknown'} • ⭐ {repo.stargazers_count}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </PostCard>
      )}

      {repos.length === 0 && (
        <PostCard
          label="GitHub"
          caption="Could not load repositories from GitHub."
          timestamp="Offline"
        >
          <p className="text-sm text-foreground">
            GitHub API is currently unavailable or rate-limited. You can still explore my work directly on{' '}
            <a
              href="https://github.com/anaslari23"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-slate-500 decoration-dotted underline-offset-4 hover:text-slate-100"
            >
              github.com/anaslari23
            </a>
            .
          </p>
        </PostCard>
      )}
    </div>
  );
}
