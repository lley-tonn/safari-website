"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

type Experience = {
  name: string;
  duration: string;
  category: string;
  description: string;
  image: string;
};

const experiences: Experience[] = [
  {
    name: "Gorilla & Chimp Trekking",
    duration: "4 Days",
    category: "Primate Tracking",
    description:
      "A focused itinerary taking you deep into the impenetrable forest to meet the majestic mountain gorillas.",
    image: "/experience1.jpg",
  },
  {
    name: "Savanna Wildlife Safari",
    duration: "5 Days",
    category: "Game Drives",
    description:
      "Experience the Big Five across Uganda's most spectacular national parks with expert guides.",
    image: "/experience2.jpg",
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="bg-olive py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <AnimatedSection className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-widest text-chocolate">
              Curated Experiences
            </p>
            <h2 className="font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
              Guided Safari Packages
            </h2>
            <p className="max-w-lg text-base italic text-espresso/60">
              Don&apos;t want to drive? Let our expert local guides take you to the hidden gems
              and premier wildlife spots across the country.
            </p>
          </div>
          <Link
            href="/packages"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-sand-soft/80 px-6 py-3 text-sm font-medium text-espresso transition-all duration-200 hover:bg-sand-soft hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
          >
            Customize Itinerary
            <span>&rarr;</span>
          </Link>
        </AnimatedSection>

        {/* Experience cards */}
        <div className="grid gap-8 sm:grid-cols-2">
          {experiences.map((experience, index) => (
            <AnimatedSection key={index} delay={index * 150}>
              <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                {/* Background image */}
                <Image
                  src={experience.image}
                  alt={experience.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:translate-y-[-4px]">
                  {/* Duration and category */}
                  <div className="mb-2 flex items-center gap-2 text-sm text-white/80">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                    <span>{experience.duration}</span>
                    <span className="text-white/50">•</span>
                    <span>{experience.category}</span>
                  </div>

                  {/* Title */}
                  <h3 className="mb-1 text-xl font-semibold text-olive-soft sm:text-2xl transition-colors duration-300 group-hover:text-olive">
                    {experience.name}
                  </h3>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/70">
                    {experience.description}
                  </p>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
