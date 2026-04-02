import { getAllPosts } from "@/lib/posts";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Writing</h1>
        <p className="mt-2 text-muted-foreground">
          Thoughts on AI, strategy, and building.
        </p>

        {posts.length === 0 ? (
          <p className="mt-10 text-sm text-muted-foreground">Posts coming soon.</p>
        ) : (
          <div className="mt-10 flex flex-col gap-6">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="transition-colors hover:border-primary/30">
                  <CardHeader>
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
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <CardTitle className="mt-1 text-lg">{post.title}</CardTitle>
                    <CardDescription className="mt-1">{post.excerpt}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
