import { getAllPosts } from "@/lib/posts";
import { Footer } from "@/components/contact";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Writing — Reed Webster",
  description: "Thoughts on AI, strategy, and building companies.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <h1 className="font-heading text-4xl tracking-tight text-foreground">Writing</h1>
        <p className="mt-3 text-muted-foreground">
          Thoughts on AI, strategy, and building.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-sm text-muted-foreground">Posts coming soon.</p>
        ) : (
          <div className="mt-12 flex flex-col gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <div className="group rounded-[24px] border border-border/60 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-t-2 hover:border-t-primary hover:shadow-[0_12px_32px_-8px_hsl(var(--shadow-color)/0.12)]">
                  <div className="flex items-center gap-3">
                    <p className="text-xs text-muted-foreground">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <div className="flex gap-1.5">
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
                  <h2 className="mt-2 font-heading text-xl text-card-foreground">{post.title}</h2>
                  <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
