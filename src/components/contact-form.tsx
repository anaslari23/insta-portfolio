"use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '@/components/ui/button';
import { Send, Check, Copy } from 'lucide-react';

const contactSchema = z.object({
  name: z.string().min(2, 'Name is too short'),
  email: z.string().email('Invalid email'),
  message: z.string().min(10, 'Message is too short'),
});

type ContactValues = z.infer<typeof contactSchema>;

const EMAIL = 'anaslari4work@gmail.com';

export function ContactForm() {
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactValues) => {
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });
      setSubmitted(true);
      reset();
    } catch (err) {
      console.error(err);
    }
  };

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full rounded-2xl border border-border bg-card px-3 py-2 text-sm text-foreground outline-none ring-offset-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Your name"
            {...register('name')}
          />
          {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="w-full rounded-2xl border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none ring-offset-slate-950 focus-visible:border-slate-500 focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
            placeholder="you@example.com"
            {...register('email')}
          />
          {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-xs font-medium text-foreground" htmlFor="message">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            className="w-full resize-none rounded-2xl border border-border bg-card px-3 py-2 text-sm text-foreground outline-none ring-offset-background focus-visible:border-ring focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            placeholder="Tell me about your project, idea, or question."
            {...register('message')}
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <div className="flex items-center justify-between gap-3 pt-1">
          <Button
            type="submit"
            size="sm"
            className="gap-1 rounded-full px-4"
            disabled={isSubmitting}
          >
            {submitted ? (
              <>
                <Check className="h-4 w-4" /> Sent
              </>
            ) : (
              <>
                <Send className="h-4 w-4" /> Send Message
              </>
            )}
          </Button>

          <Button
            type="button"
            variant="outline"
            size="sm"
            className="gap-1 rounded-full border-slate-700/80 bg-slate-900/60 px-3 text-xs"
            onClick={copyEmail}
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5" /> Copied
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" /> {EMAIL}
              </>
            )}
          </Button>
        </div>
      </form>

      <p className="text-xs text-muted-foreground">
        This form uses a lightweight serverless endpoint. You can also reach out directly at{' '}
        <button
          type="button"
          onClick={copyEmail}
          className="underline decoration-muted-foreground decoration-dotted underline-offset-4 hover:text-foreground"
        >
          {EMAIL}
        </button>
        .
      </p>
    </div>
  );
}
