"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "@/components/ui/animated-section";

type PackageCategory = "all" | "primates" | "wildlife" | "adventure" | "luxury";

interface SafariPackage {
  name: string;
  duration: string;
  category: PackageCategory;
  country: string;
  description: string;
  highlights: string[];
  price: number;
  image: string;
  featured?: boolean;
}

const packages: SafariPackage[] = [
  {
    name: "Gorilla & Chimp Trekking",
    duration: "4 Days",
    category: "primates",
    country: "Uganda",
    description:
      "A focused itinerary taking you deep into the impenetrable forest to meet the majestic mountain gorillas and playful chimpanzees.",
    highlights: [
      "Bwindi Impenetrable Forest",
      "Gorilla permit included",
      "Chimp tracking in Kibale",
      "Forest walks",
    ],
    price: 2800,
    image: "/experience1.jpg",
    featured: true,
  },
  {
    name: "Savanna Wildlife Safari",
    duration: "5 Days",
    category: "wildlife",
    country: "Uganda",
    description:
      "Experience the Big Five across Uganda's most spectacular national parks with expert guides.",
    highlights: [
      "Queen Elizabeth NP",
      "Murchison Falls NP",
      "Tree-climbing lions",
      "Boat safari",
    ],
    price: 1950,
    image: "/experience2.jpg",
    featured: true,
  },
  {
    name: "Ultimate Uganda Explorer",
    duration: "10 Days",
    category: "adventure",
    country: "Uganda",
    description:
      "The complete Uganda experience combining gorillas, wildlife, and stunning landscapes in one epic journey.",
    highlights: [
      "Gorilla trekking",
      "Big Five game drives",
      "Murchison Falls",
      "Lake Bunyonyi",
    ],
    price: 5200,
    image: "/hero-bg.jpg",
  },
  {
    name: "Masai Mara Migration Safari",
    duration: "6 Days",
    category: "wildlife",
    country: "Kenya",
    description:
      "Witness the great wildebeest migration and experience the iconic Masai Mara ecosystem.",
    highlights: [
      "Great Migration viewing",
      "Big Five encounters",
      "Masai village visit",
      "Hot air balloon option",
    ],
    price: 3400,
    image: "/gallery/scott-carroll-favQn8WgRyk-unsplash.jpg",
  },
  {
    name: "Serengeti & Ngorongoro",
    duration: "7 Days",
    category: "wildlife",
    country: "Tanzania",
    description:
      "Explore the endless plains of the Serengeti and descend into the world-famous Ngorongoro Crater.",
    highlights: [
      "Serengeti National Park",
      "Ngorongoro Crater",
      "Lake Manyara",
      "Luxury tented camps",
    ],
    price: 4100,
    image: "/gallery/lee-bernd-WphpOsnJ96U-unsplash.jpg",
  },
  {
    name: "Rwanda Gorilla Express",
    duration: "3 Days",
    category: "primates",
    country: "Rwanda",
    description:
      "A short but unforgettable encounter with mountain gorillas in Rwanda's Volcanoes National Park.",
    highlights: [
      "Volcanoes National Park",
      "Gorilla permit included",
      "Kigali city tour",
      "Genocide memorial",
    ],
    price: 2200,
    image: "/gallery/david-clode-nyvR6wbU1ho-unsplash.jpg",
  },
  {
    name: "Golden Monkey & Gorilla Trek",
    duration: "5 Days",
    category: "primates",
    country: "Rwanda",
    description:
      "Track both mountain gorillas and the rare golden monkeys in the misty volcanoes of Rwanda.",
    highlights: [
      "Gorilla trekking",
      "Golden monkey tracking",
      "Dian Fossey tomb hike",
      "Twin lakes visit",
    ],
    price: 3600,
    image: "/experience1.jpg",
  },
  {
    name: "Luxury Kenya & Tanzania",
    duration: "12 Days",
    category: "luxury",
    country: "Kenya & Tanzania",
    description:
      "The ultimate East African luxury safari combining the best of Kenya and Tanzania with premium lodges.",
    highlights: [
      "Masai Mara",
      "Serengeti",
      "Ngorongoro",
      "5-star lodges",
    ],
    price: 8500,
    image: "/hero-bg.jpg",
  },
  {
    name: "Amboseli & Tsavo Safari",
    duration: "5 Days",
    category: "wildlife",
    country: "Kenya",
    description:
      "Experience elephants against the backdrop of Kilimanjaro and explore the vast Tsavo wilderness.",
    highlights: [
      "Amboseli National Park",
      "Tsavo East & West",
      "Kilimanjaro views",
      "Red elephants of Tsavo",
    ],
    price: 2100,
    image: "/gallery/lee-bernd-WphpOsnJ96U-unsplash.jpg",
  },
  {
    name: "Uganda Rafting & Wildlife",
    duration: "6 Days",
    category: "adventure",
    country: "Uganda",
    description:
      "Combine thrilling white-water rafting on the Nile with classic wildlife safaris.",
    highlights: [
      "Nile white-water rafting",
      "Murchison Falls NP",
      "Jinja adventures",
      "Boat to falls base",
    ],
    price: 2400,
    image: "/experience2.jpg",
  },
  {
    name: "Zanzibar Beach & Safari",
    duration: "8 Days",
    category: "luxury",
    country: "Tanzania",
    description:
      "Perfect combination of Tanzania's wildlife and the pristine beaches of Zanzibar.",
    highlights: [
      "Serengeti game drives",
      "Zanzibar beaches",
      "Stone Town tour",
      "Spice plantation visit",
    ],
    price: 4800,
    image: "/hero-bg.jpg",
  },
  {
    name: "Mt. Rwenzori Hiking Safari",
    duration: "9 Days",
    category: "adventure",
    country: "Uganda",
    description:
      "Trek the legendary Mountains of the Moon combined with lowland gorilla and wildlife experiences.",
    highlights: [
      "Rwenzori summit attempt",
      "Unique alpine flora",
      "Queen Elizabeth NP",
      "Community visits",
    ],
    price: 3900,
    image: "/experience1.jpg",
  },
];

const categories: { value: PackageCategory; label: string }[] = [
  { value: "all", label: "All Safaris" },
  { value: "primates", label: "Primate Tracking" },
  { value: "wildlife", label: "Wildlife Safaris" },
  { value: "adventure", label: "Adventure" },
  { value: "luxury", label: "Luxury" },
];

export function PackagesPageContent() {
  const [activeCategory, setActiveCategory] = useState<PackageCategory>("all");

  const filteredPackages =
    activeCategory === "all"
      ? packages
      : packages.filter((p) => p.category === activeCategory);

  const featuredPackages = packages.filter((p) => p.featured);
  const regularPackages = filteredPackages.filter((p) => !p.featured);

  return (
    <>
      {/* Hero header */}
      <section className="bg-espresso py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-olive">
              Safari Packages
            </p>
            <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-sand sm:text-5xl">
              Guided Safari Experiences
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-sand/70">
              Don&apos;t want to drive? Let our expert local guides take you to
              the hidden gems and premier wildlife spots across East Africa.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Featured packages */}
      {activeCategory === "all" && (
        <section className="bg-olive py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <AnimatedSection className="mb-12">
              <p className="text-sm font-semibold uppercase tracking-widest text-chocolate">
                Most Popular
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-espresso">
                Featured Experiences
              </h2>
            </AnimatedSection>

            <div className="grid gap-8 sm:grid-cols-2">
              {featuredPackages.map((pkg, index) => (
                <AnimatedSection key={pkg.name} delay={index * 150}>
                  <article className="group relative aspect-[4/3] overflow-hidden rounded-2xl cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />

                    <div className="absolute left-4 top-4">
                      <span className="rounded-full bg-chocolate px-3 py-1 text-xs font-semibold text-white">
                        Featured
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 group-hover:translate-y-[-4px]">
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
                        <span>{pkg.duration}</span>
                        <span className="text-white/50">•</span>
                        <span>{pkg.country}</span>
                      </div>

                      <h3 className="mb-1 text-xl font-semibold text-olive-soft sm:text-2xl transition-colors duration-300 group-hover:text-olive">
                        {pkg.name}
                      </h3>

                      <p className="text-sm leading-relaxed text-white/70">
                        {pkg.description}
                      </p>

                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-lg font-bold text-white">
                          From ${pkg.price.toLocaleString()}
                        </span>
                        <span className="rounded-full bg-white/20 px-3 py-1 text-xs text-white">
                          per person
                        </span>
                      </div>
                    </div>
                  </article>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All packages section */}
      <section className="bg-sand py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <AnimatedSection className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                    activeCategory === category.value
                      ? "bg-olive text-white"
                      : "bg-espresso/5 text-espresso hover:bg-espresso/10"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Package cards grid */}
          <AnimatedSection delay={200}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {(activeCategory === "all" ? regularPackages : filteredPackages).map(
                (pkg, index) => (
                  <article
                    key={pkg.name}
                    className="group overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <Image
                        src={pkg.image}
                        alt={pkg.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                        <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-espresso">
                          {pkg.country}
                        </span>
                        <span className="rounded-full bg-espresso/80 px-3 py-1 text-xs font-medium text-white">
                          {pkg.duration}
                        </span>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <span className="rounded-full bg-olive/10 px-2 py-1 text-xs font-medium capitalize text-olive">
                          {pkg.category === "primates"
                            ? "Primate Tracking"
                            : pkg.category === "wildlife"
                              ? "Wildlife"
                              : pkg.category === "adventure"
                                ? "Adventure"
                                : "Luxury"}
                        </span>
                      </div>

                      <h3 className="font-heading text-lg font-bold text-espresso transition-colors group-hover:text-olive">
                        {pkg.name}
                      </h3>

                      <p className="mt-2 line-clamp-2 text-sm text-espresso/60">
                        {pkg.description}
                      </p>

                      {/* Highlights */}
                      <div className="mt-4 flex flex-wrap gap-2">
                        {pkg.highlights.slice(0, 2).map((highlight) => (
                          <span
                            key={highlight}
                            className="flex items-center gap-1 text-xs text-espresso/60"
                          >
                            <svg
                              className="h-3 w-3 text-olive"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {highlight}
                          </span>
                        ))}
                      </div>

                      <div className="mt-5 flex items-center justify-between border-t border-espresso/10 pt-4">
                        <div>
                          <span className="text-lg font-bold text-chocolate">
                            ${pkg.price.toLocaleString()}
                          </span>
                          <span className="text-xs text-espresso/50">
                            {" "}
                            /person
                          </span>
                        </div>
                        <button className="rounded-full bg-olive px-4 py-2 text-xs font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-olive-soft hover:shadow-md">
                          View Details
                        </button>
                      </div>
                    </div>
                  </article>
                )
              )}
            </div>
          </AnimatedSection>

          {/* Custom itinerary CTA */}
          <AnimatedSection delay={400} className="mt-20">
            <div className="rounded-3xl bg-espresso p-8 text-center sm:p-12">
              <h2 className="font-heading text-2xl font-bold text-sand sm:text-3xl">
                Can&apos;t find what you&apos;re looking for?
              </h2>
              <p className="mx-auto mt-3 max-w-xl text-sand/70">
                We specialize in custom safari itineraries. Tell us your dream
                adventure and we&apos;ll design the perfect trip just for you.
              </p>
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-olive px-8 py-3 font-medium text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-olive-soft hover:shadow-lg"
              >
                Request Custom Itinerary
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </Link>
            </div>
          </AnimatedSection>

          {/* What's included */}
          <AnimatedSection delay={500} className="mt-20">
            <div className="rounded-3xl border border-espresso/10 bg-card p-8 sm:p-10">
              <h2 className="text-center font-heading text-2xl font-bold text-espresso">
                What&apos;s Included in Every Package
              </h2>
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  {
                    title: "Expert Local Guides",
                    desc: "Knowledgeable guides who know every trail",
                  },
                  {
                    title: "Park Entry Fees",
                    desc: "All national park fees covered",
                  },
                  {
                    title: "Quality Accommodation",
                    desc: "Handpicked lodges and camps",
                  },
                  {
                    title: "Airport Transfers",
                    desc: "Pickup and drop-off included",
                  },
                ].map((item) => (
                  <div key={item.title} className="text-center">
                    <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-olive/10">
                      <svg
                        className="h-6 w-6 text-olive"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="font-semibold text-espresso">{item.title}</h3>
                    <p className="mt-1 text-sm text-espresso/60">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
