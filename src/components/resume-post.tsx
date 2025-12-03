import { PostCard } from '@/components/post-card';

export function ResumePost() {
  return (
    <PostCard
      label="Resume"
      caption="AI Engineer • Full-Stack Developer • Mobile App Developer • Web Engineer"
      timestamp="Updated"
    >
      <div className="space-y-6 text-sm text-foreground">
        <section className="space-y-3 rounded-2xl border border-border bg-card px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <h2 className="text-lg font-semibold text-slate-50">Anas Lari</h2>
              <p className="text-[13px] text-muted-foreground">
                AI Engineer | Full-Stack Developer | Mobile App Developer | Web Engineer
              </p>
            </div>
            <div className="flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-100">Kolkata, India</span>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-slate-100">
                +91 9163138456
              </span>
            </div>
          </div>
          <p className="text-[13px] text-muted-foreground">
            Kolkata, India · +91 9163138456 ·{' '}
            <a
              href="mailto:anaslari4work@gmail.com"
              className="underline decoration-slate-500 decoration-dotted underline-offset-4 hover:text-slate-100"
            >
              anaslari4work@gmail.com
            </a>
          </p>
          <div className="flex flex-wrap gap-2 text-[12px] text-muted-foreground">
            <a
              href="https://anaslari23.github.io/portfolio/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950/80 px-3 py-1 hover:bg-slate-800"
            >
              Portfolio
            </a>
            <a
              href="https://github.com/anaslari23"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950/80 px-3 py-1 hover:bg-slate-800"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/anas-lari-2626aa247/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-slate-950/80 px-3 py-1 hover:bg-slate-800"
            >
              LinkedIn
            </a>
          </div>
        </section>

        <section className="space-y-2 border-y border-border py-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Professional Summary
          </h3>
          <p>
            Innovative engineer specializing in AI-driven systems, full-stack and mobile development, and
            production-ready ML pipelines. Experienced in leading projects end-to-end: concept → design →
            development → deployment.
          </p>
          <p>
            Strong background in Transformer-based models, computer vision (OCR &amp; face recognition),
            reinforcement learning, and building scalable web &amp; mobile products. Proven leadership
            experience as CTO and freelance developer delivering client-facing solutions with a focus on UX,
            performance, and maintainability.
          </p>
        </section>

        <section className="space-y-3 rounded-2xl border border-border bg-card px-4 py-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Education</h3>
          <div className="space-y-1 border-l border-border pl-3">
            <p className="font-medium text-slate-100">
              B.Tech – Computer Science Engineering (AI &amp; ML)
            </p>
            <p className="text-[13px] text-slate-300">Bengal Institute of Technology, Kolkata · 2024 – Present</p>
          </div>
          <div className="space-y-1 border-l border-slate-700 pl-3">
            <p className="font-medium text-slate-100">
              Diploma – Computer Science &amp; Engineering
            </p>
            <p className="text-[13px] text-slate-300">Aligarh Muslim University, Aligarh · 2021 – 2024</p>
          </div>
          <div className="space-y-1 border-l border-slate-700 pl-3">
            <p className="font-medium text-slate-100">High School</p>
            <p className="text-[13px] text-slate-300">St. Helen&apos;s School, Howrah · 2007 – 2021</p>
          </div>
        </section>

        <section className="space-y-3 rounded-2xl border border-border bg-card px-4 py-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Work Experience</h3>
          <div className="space-y-1">
            <p className="inline-flex items-center gap-2 font-medium text-foreground">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Chief Technology Officer &amp; Freelance Developer — Elevate Brand 360
            </p>
            <p className="text-[13px] text-muted-foreground">Kolkata · 2025</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Led technical strategy and full-cycle development for multiple web and mobile projects.
              </li>
              <li>
                Designed and implemented scalable backend APIs and reusable frontend components.
              </li>
              <li>
                Directed UI/UX improvements and managed cross-functional delivery with marketing and design
                teams.
              </li>
            </ul>
          </div>
          <div className="space-y-1 pt-2">
            <p className="inline-flex items-center gap-2 font-medium text-slate-100">
              <span className="h-2 w-2 rounded-full bg-sky-400" />
              Intern &amp; Freelance App Developer — Markcos Agency
            </p>
            <p className="text-[13px] text-muted-foreground">Howrah · 2024</p>
            <ul className="list-disc space-y-1 pl-4">
              <li>
                Developed mobile and web applications, optimized UX, and integrated backend services.
              </li>
              <li>
                Collaborated with designers and backend engineers to deliver client projects on schedule.
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-3 rounded-2xl border border-border bg-card px-4 py-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Technical Skills</h3>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Programming</p>
              <p className="text-[13px] text-muted-foreground">
                Python, Java, C, C++, Dart, JavaScript, TypeScript, PHP, SQL
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">AI / ML</p>
              <p className="text-[13px] text-muted-foreground">
                Transformers (GPT/BERT), Deep Learning, Computer Vision (OCR, Face Recognition),
                Reinforcement Learning, Model Fine-tuning
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Frontend</p>
              <p className="text-[13px] text-muted-foreground">
                React, Vue, Next.js, HTML5, CSS3, Tailwind, Bootstrap
              </p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Backend</p>
              <p className="text-[13px] text-muted-foreground">FastAPI, Node.js, Express, Laravel, PHP</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Mobile</p>
              <p className="text-[13px] text-muted-foreground">Flutter, Dart, Firebase (Auth, Firestore, Functions)</p>
            </div>
            <div className="space-y-1">
              <p className="font-semibold text-foreground">Databases &amp; DevOps</p>
              <p className="text-[13px] text-muted-foreground">
                PostgreSQL, MySQL, Redis, Docker, GitHub Actions, Linux
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-3 rounded-2xl border border-border bg-card px-4 py-3">
          <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Selected Projects</h3>
          <div className="space-y-1 border-l border-border pl-3">
            <p className="font-medium text-slate-100">MM-HIE — Multimodal Healthcare Intelligence Engine</p>
            <p className="text-[13px] text-slate-300">
              AI assistant that processes medical PDFs, extracts clinical data via OCR and NER, asks
              follow-up questions, and surfaces key metrics.
            </p>
            <p className="text-[12px] text-muted-foreground">Tech: FastAPI, TensorFlow, LangChain, PostgreSQL, OCR</p>
          </div>
          <div className="space-y-1 border-l border-slate-700 pl-3">
            <p className="font-medium text-slate-100">
              Face-Verified Personal AI Assistant (Jarvis-Style)
            </p>
            <p className="text-[13px] text-slate-300">
              Local assistant with face-unlock, wake-word detection, speech I/O, system automation, and
              offline LLM responses.
            </p>
            <p className="text-[12px] text-muted-foreground">Tech: Python, TensorFlow, OpenCV, SpeechRecognition</p>
          </div>
          <div className="space-y-1 border-l border-slate-700 pl-3">
            <p className="font-medium text-slate-100">Kolkata Tour AI</p>
            <p className="text-[13px] text-slate-300">
              ML-powered travel recommendation engine generating routes, local insights, and OCR-based place
              extraction.
            </p>
            <p className="text-[12px] text-muted-foreground">Tech: Flask, MySQL, Recommendation Engine</p>
          </div>
          <div className="space-y-1 border-l border-slate-700 pl-3">
            <p className="font-medium text-slate-100">2D Racing Game + RL Bot</p>
            <p className="text-[13px] text-slate-300">
              Custom racing environment with physics, sensors and an RL agent trained to drive autonomously.
            </p>
            <p className="text-[12px] text-muted-foreground">Tech: Pygame, NumPy, Reinforcement Learning</p>
          </div>
          <div className="space-y-1 border-l border-slate-700 pl-3">
            <p className="font-medium text-slate-100">Document Forgery Detection Dataset</p>
            <p className="text-[13px] text-slate-300">
              OCR-driven dataset and ML pipeline for detecting tampered documents; published on Kaggle.
            </p>
            <p className="text-[12px] text-muted-foreground">Tech: OCR, Feature Engineering, Classification</p>
          </div>
        </section>

        <section className="grid gap-3 rounded-2xl border border-border bg-card px-4 py-3 md:grid-cols-2">
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">Languages</h3>
            <p className="text-[13px] text-muted-foreground">English (Fluent), Hindi (Fluent)</p>
          </div>
          <div className="space-y-1">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
              Strengths &amp; Interests
            </h3>
            <p className="text-[13px] text-muted-foreground">
              Problem-solving · System design · UI/UX thinking · Leadership · Fast learning · AI Agents ·
              Automation · Web UX Design
            </p>
          </div>
        </section>
      </div>
    </PostCard>
  );
}
