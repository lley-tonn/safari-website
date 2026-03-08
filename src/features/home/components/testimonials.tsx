"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

type Testimonial = {
  name: string;
  location: string;
  rating: number;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sarah & Tom",
    location: "United Kingdom",
    rating: 5,
    quote:
      "The Hilux with rooftop tents was in perfect condition. We spent 14 days driving around and didn't have a single issue. The team's briefing before departure was invaluable.",
  },
  {
    name: "Markus L.",
    location: "Germany",
    rating: 5,
    quote:
      "Excellent communication via WhatsApp from the very first inquiry. They helped us tweak our itinerary and the Land Cruiser TX was super comfortable for our family of four.",
  },
  {
    name: "Jessica W.",
    location: "Australia",
    rating: 4,
    quote:
      "We opted for a 7-day guided safari. Our guide, David, had hawk-eyes for wildlife. The lodges booked for us were stunning. A truly stress-free and magical experience.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          className={`h-5 w-5 transition-colors duration-300 ${star <= rating ? "text-amber-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function UserIcon() {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-espresso/20 transition-colors duration-300 group-hover:border-olive group-hover:bg-olive/10">
      <svg
        className="h-5 w-5 text-espresso/40 transition-colors duration-300 group-hover:text-olive"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
        />
      </svg>
    </div>
  );
}

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-sand py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Outer container with border */}
        <AnimatedSection className="rounded-3xl border border-espresso/10 bg-sand-soft/30 px-6 py-12 sm:px-10 sm:py-14">
          {/* Header */}
          <h2 className="mb-12 text-center font-heading text-3xl font-bold tracking-tight text-espresso sm:text-4xl">
            What Our Explorers Say
          </h2>

          {/* Testimonial cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, index) => (
              <AnimatedSection key={index} delay={index * 150}>
                <article className="group flex flex-col rounded-2xl bg-card p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Star rating */}
                  <div className="mb-4">
                    <StarRating rating={t.rating} />
                  </div>

                  {/* Quote */}
                  <p className="mb-6 flex-1 text-sm italic leading-relaxed text-espresso/70">
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <UserIcon />
                    <div>
                      <p className="text-sm font-semibold text-espresso transition-colors duration-300 group-hover:text-olive">
                        {t.name}
                      </p>
                      <p className="text-xs text-espresso/60">{t.location}</p>
                    </div>
                  </div>
                </article>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
