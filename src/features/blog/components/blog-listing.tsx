"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";
import { blogPosts, getFeaturedPost } from "@/lib/data/blog-posts";

export function BlogListing() {
  const featuredPost = getFeaturedPost();
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Hero header */}
      <section className="bg-espresso py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-olive">
              Blog
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-sand sm:text-5xl">
              Safari Stories & Travel Tips
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand/70">
              Expert advice, destination guides, and inspiring stories from the
              African wilderness.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Blog posts */}
      <section className="bg-sand py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          {featuredPost && (
            <AnimatedSection className="mb-16">
              <Link
                href={`/blog/${featuredPost.slug}`}
                className="group block overflow-hidden rounded-3xl border border-espresso/10 bg-card shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div className="grid lg:grid-cols-2">
                  <div className="relative aspect-[4/3] lg:aspect-auto">
                    <Image
                      src={featuredPost.coverImage}
                      alt={featuredPost.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-olive px-3 py-1 text-xs font-semibold text-white">
                        Featured
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8 lg:p-10">
                    <div className="flex items-center gap-3">
                      <span className="rounded-full bg-olive/10 px-3 py-1 text-xs font-medium text-olive">
                        {featuredPost.category}
                      </span>
                      <span className="text-sm text-espresso/50">
                        {featuredPost.readingTime}
                      </span>
                    </div>
                    <h2 className="mt-4 font-heading text-2xl font-bold text-espresso transition-colors group-hover:text-olive sm:text-3xl">
                      {featuredPost.title}
                    </h2>
                    <p className="mt-3 text-espresso/70">
                      {featuredPost.excerpt}
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="relative h-10 w-10 overflow-hidden rounded-full">
                        <Image
                          src={featuredPost.author.avatar}
                          alt={featuredPost.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-espresso">
                          {featuredPost.author.name}
                        </p>
                        <p className="text-xs text-espresso/50">
                          {new Date(featuredPost.publishedAt).toLocaleDateString(
                            "en-US",
                            {
                              month: "long",
                              day: "numeric",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          )}

          {/* Regular posts grid */}
          <AnimatedSection delay={200}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {regularPosts.map((post, index) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group overflow-hidden rounded-2xl border border-espresso/10 bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-espresso">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 text-xs text-espresso/50">
                      <span>{post.readingTime}</span>
                      <span>•</span>
                      <span>
                        {new Date(post.publishedAt).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <h3 className="mt-2 font-heading text-lg font-bold text-espresso transition-colors group-hover:text-olive">
                      {post.title}
                    </h3>
                    <p className="mt-2 line-clamp-2 text-sm text-espresso/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="relative h-8 w-8 overflow-hidden rounded-full">
                        <Image
                          src={post.author.avatar}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <span className="text-sm text-espresso/70">
                        {post.author.name}
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
