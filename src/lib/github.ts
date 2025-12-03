export interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
}

const GITHUB_USER = 'anaslari23';

export async function fetchPinnedRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=updated&per_page=6`, {
      headers: {
        Accept: 'application/vnd.github+json',
      },
      // Revalidate in Next 14 app router when used in server components
      next: { revalidate: 3600 },
    } as any);

    if (!res.ok) {
      console.error('GitHub API error', await res.text());
      return [];
    }

    const data: Repo[] = await res.json();
    return data;
  } catch (err) {
    console.error('Failed to fetch GitHub repos', err);
    return [];
  }
}
