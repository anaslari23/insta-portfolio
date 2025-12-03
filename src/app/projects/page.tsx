import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/projects-grid';
import { fetchPinnedRepos } from '@/lib/github';

export const metadata: Metadata = {
  title: 'Projects | Anas Lari',
};

export default async function ProjectsPage() {
  const repos = await fetchPinnedRepos();

  return (
    <div className="mx-auto max-w-3xl py-4">
      <ProjectsGrid repos={repos} />
    </div>
  );
}
