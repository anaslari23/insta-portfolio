import type { Metadata } from 'next';
import { ResumePost } from '@/components/resume-post';

export const metadata: Metadata = {
  title: 'Resume | Anas Lari',
};

export default function ResumePage() {
  return (
    <div className="mx-auto max-w-3xl py-4">
      <ResumePost />
    </div>
  );
}
