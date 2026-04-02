import { getAllPosts } from "@/lib/posts";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function WritingPreview() {
  const posts = getAllPosts().slice(0, 3);

  return (
    <section id="writing" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-heading text-3xl tracking-tight text-foreground sm:text-4xl">
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

        {posts.length === 0 ? (
          <p className="mt-12 text-sm text-muted-foreground">Posts coming soon.</p>
        ) : (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group h-full rounded-[24px] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-primary hover:shadow-[0_12px_32px_-8px_hsl(var(--shadow-color)/0.12)]">
                  <p className="text-xs text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <h3 className="mt-2 font-heading text-lg text-card-foreground">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <Link
          href="/blog"
          className="mt-6 inline-flex items-center gap-1 text-sm font-medium text-primary transition-opacity hover:opacity-80 sm:hidden"
        >
          View all posts
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}
