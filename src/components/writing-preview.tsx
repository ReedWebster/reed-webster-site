import Link from "next/link";
import { ArrowRight, PenLine } from "lucide-react";

export function WritingPreview() {
  return (
    <section id="writing" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-primary">
              Blog
            </p>
            <h2 className="mt-2 font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
              Writing
            </h2>
            <p className="mt-3 text-muted-foreground">Thoughts on AI, strategy, and building.</p>
          </div>
          <Link
            href="/blog"
            className="hidden items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:inline-flex"
          >
            View all
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 flex flex-col items-center rounded-[24px] border border-border/60 bg-card px-6 py-16 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <PenLine className="h-5 w-5 text-primary" />
          </div>
          <h3 className="mt-4 font-heading text-xl text-foreground">Coming Soon</h3>
          <p className="mt-2 max-w-sm text-sm text-muted-foreground">
            I&apos;m working on articles about AI, strategy, and entrepreneurship. Check back soon.
          </p>
        </div>
      </div>
    </section>
  );
}
