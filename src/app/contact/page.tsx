import type { Metadata } from 'next';
import { PostCard } from '@/components/post-card';
import { ContactForm } from '@/components/contact-form';
import { SocialLinks } from '@/components/social-links';

export const metadata: Metadata = {
  title: 'Contact | Anas Lari',
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl space-y-5 py-4" id="contact">
      <PostCard
        label="Contact"
        caption="Let&apos;s build something — AI agents, apps, or full products."
        timestamp="Open"
      >
        <ContactForm />
      </PostCard>

      <PostCard
        label="Social"
        caption="You can also reach me on these platforms."
        timestamp="Links"
      >
        <div className="flex flex-col gap-3 text-sm text-slate-200">
          <SocialLinks orientation="horizontal" />
          <p className="text-xs text-slate-400">
            I&apos;m most active on GitHub and LinkedIn. Feel free to drop a message about collaborations,
            internships, or interesting problems to solve.
          </p>
        </div>
      </PostCard>
    </div>
  );
}
