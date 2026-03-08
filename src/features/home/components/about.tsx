"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

export function AboutSection() {
  return (
    <section id="about" className="bg-sand py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Experience badge */}
        <AnimatedSection className="mb-12 flex justify-center">
          <div className="inline-flex items-center gap-2 text-sm font-medium text-espresso">
            <span className="text-amber-500">&#9733;</span>
            <span>10+ Years Of Experience</span>
          </div>
        </AnimatedSection>

        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          {/* Image with decorative circle */}
          <AnimatedSection className="relative">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
              <Image
                src="/about-img.jpg"
                alt="Colorful bird in nature"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            {/* Decorative circle */}
            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-sand-soft/30 sm:h-40 sm:w-40" />
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection delay={200} className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm font-medium uppercase tracking-widest text-olive">
                About Game-Drive Africa
              </p>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl lg:text-[2.75rem] lg:leading-tight">
                We Make Your African Road Trip Dreams a Reality.
              </h2>
            </div>

            <div className="space-y-4 text-base leading-relaxed text-espresso/70">
              <p>
                We are passionate about travel and dedicated to providing you
                with the best self-drive experience. Whether you&apos;re navigating
                the rugged terrains of national parks or cruising coastal roads,
                our reliable, fully-equipped 4x4 vehicles are your perfect
                companion.
              </p>
              <p>
                Beyond just car rentals, we offer complete safari planning,
                camping gear rental, and 24/7 on-road support to ensure your
                journey is safe, comfortable, and unforgettable.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full bg-sand-soft px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:bg-chocolate hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
              >
                Learn More About Us
                <span>&rarr;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
