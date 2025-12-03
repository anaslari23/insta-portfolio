"use client";

import { useState } from 'react';
import { FileDown, Loader2 } from 'lucide-react';
import { Button, ButtonProps } from '@/components/ui/button';

export function DownloadCVButton(props: ButtonProps) {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      const res = await fetch('/api/cv');
      if (!res.ok) throw new Error('Failed to generate CV');
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Anas-Lari-CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error(err);
      window.location.href = '/cv/Anas-Lari-CV.pdf';
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      {...props}
      onClick={handleClick}
      disabled={loading || props.disabled}
      className={props.className}
    >
      {loading ? (
        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      ) : (
        <FileDown className="mr-2 h-4 w-4" />
      )}
      Download CV
    </Button>
  );
}
