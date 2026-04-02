import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { Footer } from "@/components/contact";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Not Found" };
  return {
    title: `${post.meta.title} — Reed Webster`,
    description: post.meta.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <article className="mx-auto max-w-3xl px-6 pb-24 pt-32">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to writing
        </Link>

        <header className="mt-8">
          <p className="text-sm text-muted-foreground">
            {new Date(post.meta.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
          <h1 className="mt-3 font-heading text-4xl tracking-tight text-foreground sm:text-5xl">
            {post.meta.title}
          </h1>
          <div className="mt-4 flex flex-wrap gap-2">
            {post.meta.tags.map((tag: string) => (
              <span
                key={tag}
                className="inline-flex items-center rounded-full bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-neutral mt-10 max-w-none dark:prose-invert prose-headings:font-heading prose-headings:tracking-tight prose-a:text-primary prose-a:no-underline hover:prose-a:underline">
          <MDXRemote source={post.content} />
        </div>
      </article>
      <Footer />
    </>
  );
}
