"use client";

import Image from "next/image";
import { AnimatedSection } from "@/components/ui/animated-section";

const values = [
  {
    title: "Authenticity",
    description:
      "We design routes we would drive ourselves, balancing wildness with safety, big sightings with quiet mornings.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
        />
      </svg>
    ),
  },
  {
    title: "Safety First",
    description:
      "Every vehicle is meticulously maintained. We provide 24/7 support and comprehensive insurance coverage.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
        />
      </svg>
    ),
  },
  {
    title: "Local Expertise",
    description:
      "Our team has deep roots in East Africa. We know the roads, the seasons, and the hidden gems others miss.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
  },
  {
    title: "Sustainable Travel",
    description:
      "We partner with conservation-focused lodges and support local communities in every destination we serve.",
    icon: (
      <svg
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Happy Travelers" },
  { value: "50+", label: "Safari Routes" },
  { value: "4", label: "Countries Covered" },
];

const team = [
  {
    name: "James Okello",
    role: "Founder & Lead Guide",
    bio: "Born in Kampala, James has spent 15 years exploring every corner of East Africa. His passion for wildlife and road trips inspired Game Drive.",
    image: "/about-img.jpg",
  },
  {
    name: "Sarah Namuli",
    role: "Operations Manager",
    bio: "Sarah ensures every vehicle is road-ready and every client has seamless support. She's the backbone of our daily operations.",
    image: "/about-img.jpg",
  },
  {
    name: "David Mugisha",
    role: "Head Mechanic",
    bio: "With 20 years of experience, David keeps our fleet in perfect condition. He knows Toyota Land Cruisers inside and out.",
    image: "/about-img.jpg",
  },
];

export function AboutPageContent() {
  return (
    <>
      {/* Hero section */}
      <section className="relative bg-espresso py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection>
              <p className="text-sm font-semibold uppercase tracking-widest text-olive">
                About Us
              </p>
              <h1 className="mt-2 font-heading text-4xl font-bold tracking-tight text-sand sm:text-5xl">
                Built by travelers who never left the gravel roads
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-sand/70">
                Game Drive is a small, hands-on road trip studio based in
                Kampala, Uganda. We design routes we would gladly drive
                ourselves, balancing wildness with safety, big sightings with
                quiet, coffee-fuelled mornings.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-sand/70">
                Instead of handing you a generic brochure, we listen, sketch
                three or four route ideas, then refine them with you until
                distances, seasons, vehicles and budgets align.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={200}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                <Image
                  src="/about-img.jpg"
                  alt="Safari landscape"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-espresso/40 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats section */}
      <section className="bg-olive py-12">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <AnimatedSection
                key={stat.label}
                delay={index * 100}
                className="text-center"
              >
                <p className="font-heading text-4xl font-bold text-white sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/70">{stat.label}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story section */}
      <section className="bg-sand py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <AnimatedSection className="order-2 lg:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <Image
                      src="/experience1.jpg"
                      alt="Safari experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/vehicle1.jpg"
                      alt="Safari vehicle"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="mt-8 space-y-4">
                  <div className="relative aspect-square overflow-hidden rounded-2xl">
                    <Image
                      src="/gallery/lee-bernd-WphpOsnJ96U-unsplash.jpg"
                      alt="Wildlife"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                    <Image
                      src="/experience2.jpg"
                      alt="Safari landscape"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={200} className="order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-widest text-olive">
                Our Story
              </p>
              <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
                From a single Land Cruiser to East Africa&apos;s trusted safari
                partner
              </h2>
              <div className="mt-6 space-y-4 text-espresso/70">
                <p>
                  It started in 2014 with one Toyota Land Cruiser and a dream.
                  James Okello, a wildlife guide who grew tired of watching
                  tourists rushed through parks, decided there had to be a
                  better way.
                </p>
                <p>
                  He bought that first vehicle, mapped out routes that took the
                  scenic detours, and started offering self-drive rentals to
                  travelers who wanted freedom over fixed itineraries.
                </p>
                <p>
                  Word spread. Today, Game Drive operates a fleet of
                  safari-ready vehicles across Uganda, Kenya, Tanzania, and
                  Rwanda. But our philosophy remains the same: thoughtful
                  planning, reliable vehicles, and the freedom to explore at
                  your own pace.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values section */}
      <section className="bg-card py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-olive">
              Our Values
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
              What drives everything we do
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 100}>
                <div className="rounded-2xl border border-espresso/10 bg-sand p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-olive/10 text-olive">
                    {value.icon}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-espresso">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm text-espresso/60">
                    {value.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team section */}
      <section className="bg-sand py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-olive">
              Meet The Team
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
              The people behind your adventure
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-espresso/60">
              A passionate team of travelers, mechanics, and local experts
              dedicated to making your safari unforgettable.
            </p>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <AnimatedSection key={member.name} delay={index * 150}>
                <div className="group overflow-hidden rounded-2xl bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-espresso/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="font-heading text-xl font-bold text-white">
                        {member.name}
                      </h3>
                      <p className="text-sm text-white/80">{member.role}</p>
                    </div>
                  </div>
                  <div className="p-5">
                    <p className="text-sm text-espresso/70">{member.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* How we work section */}
      <section className="bg-espresso py-20 sm:py-28 lg:py-32">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-olive">
              How We Work
            </p>
            <h2 className="mt-2 font-heading text-3xl font-bold tracking-tight text-sand sm:text-4xl">
              Your journey, simplified
            </h2>
          </AnimatedSection>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Tell Us Your Vision",
                description:
                  "Share your travel dates, interests, and budget. We'll listen and start crafting ideas.",
              },
              {
                step: "02",
                title: "We Design Your Route",
                description:
                  "We'll present 2-3 route options, handle permits, and match you with the perfect vehicle.",
              },
              {
                step: "03",
                title: "Hit the Road",
                description:
                  "Pick up your vehicle, receive a thorough briefing, and start your adventure with 24/7 support.",
              },
            ].map((item, index) => (
              <AnimatedSection key={item.step} delay={index * 150}>
                <div className="relative rounded-2xl border border-sand/10 bg-chocolate/20 p-8">
                  <span className="font-heading text-5xl font-bold text-olive/30">
                    {item.step}
                  </span>
                  <h3 className="mt-4 font-heading text-xl font-bold text-sand">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sand/70">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
