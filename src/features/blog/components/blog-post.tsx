"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { BlogPost, getRelatedPosts } from "@/lib/data/blog-posts";

interface BlogPostContentProps {
  post: BlogPost;
}

export function BlogPostContent({ post }: BlogPostContentProps) {
  const relatedPosts = getRelatedPosts(post.slug, 3);

  return (
    <>
      {/* Back link */}
      <section className="bg-sand pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm font-medium text-espresso/70 transition-colors hover:text-olive"
          >
            <svg
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
            Back to Blog
          </Link>
        </div>
      </section>

      {/* Post header */}
      <article className="bg-sand py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="text-center">
              <div className="flex items-center justify-center gap-3">
                <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-medium text-olive">
                  {post.category}
                </span>
                <span className="text-sm text-espresso/50">
                  {post.readingTime}
                </span>
              </div>
              <h1 className="mt-4 font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-5xl">
                {post.title}
              </h1>
              <p className="mx-auto mt-4 max-w-2xl text-lg text-espresso/70">
                {post.excerpt}
              </p>

              {/* Author info */}
              <div className="mt-8 flex items-center justify-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={post.author.avatar}
                    alt={post.author.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-medium text-espresso">{post.author.name}</p>
                  <p className="text-sm text-espresso/50">
                    {new Date(post.publishedAt).toLocaleDateString("en-US", {
                      month: "long",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>

          {/* Cover image */}
          <AnimatedSection delay={200} className="mt-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-2xl">
              <Image
                src={post.coverImage}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </AnimatedSection>

          {/* Article content */}
          <AnimatedSection delay={300} className="mt-12">
            <div className="prose prose-lg mx-auto max-w-none prose-headings:font-heading prose-headings:text-espresso prose-p:text-espresso/80 prose-strong:text-espresso prose-li:text-espresso/80 prose-a:text-olive prose-a:no-underline hover:prose-a:underline">
              <div
                dangerouslySetInnerHTML={{
                  __html: post.content
                    .replace(/^## /gm, "<h2>")
                    .replace(/^### /gm, "<h3>")
                    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
                    .replace(/^- /gm, "<li>")
                    .replace(/^(\d+)\. /gm, "<li>")
                    .replace(/<li>/g, "</p><li>")
                    .replace(/<\/li>\n<li>/g, "</li><li>")
                    .replace(/<\/li>\n\n/g, "</li></ul><p>")
                    .replace(/<\/li>\n(?=[^<])/g, "</li></ul><p>")
                    .replace(/<\/p><li>/g, "<ul><li>")
                    .replace(/<h2>/g, "</p><h2>")
                    .replace(/<h3>/g, "</p><h3>")
                    .replace(/<\/h2>\n/g, "</h2><p>")
                    .replace(/<\/h3>\n/g, "</h3><p>")
                    .replace(/\n\n/g, "</p><p>")
                    .replace(/^\s*<\/p>/, "")
                    .replace(/<p>\s*<\/p>/g, ""),
                }}
              />
            </div>
          </AnimatedSection>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-card py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection>
              <h2 className="text-center font-heading text-2xl font-bold text-espresso sm:text-3xl">
                Continue Reading
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={200} className="mt-12">
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group overflow-hidden rounded-2xl border border-espresso/10 bg-sand shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={relatedPost.coverImage}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                      <div className="absolute bottom-3 left-3">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-espresso">
                          {relatedPost.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 text-xs text-espresso/50">
                        <span>{relatedPost.readingTime}</span>
                      </div>
                      <h3 className="mt-2 font-heading text-lg font-bold text-espresso transition-colors group-hover:text-olive">
                        {relatedPost.title}
                      </h3>
                    </div>
                  </Link>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>
      )}
    </>
  );
}
