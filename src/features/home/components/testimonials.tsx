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
      "The Hilux with rooftop tent was in perfect condition. We spent 14 days driving around and didn't have a single issue. The team's briefing and departure was invaluable.",
  },
  {
    name: "Markus L.",
    location: "Germany",
    rating: 5,
    quote:
      "Excellent communication on WhatsApp from the very first inquiry. The Hilux is handed our itinerary and the Land Cruiser. We were super comfortable on our family trip.",
  },
  {
    name: "Jessica W.",
    location: "Australia",
    rating: 5,
    quote:
      "We opted for a 7-day guided safari. Our guide David had been even quite for wildlife. The lodge breakfast on a new morning. A truly once-in-a-magical experience.",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-sand-soft/40 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            What Our Explorers Say
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <article
              key={index}
              className="flex flex-col rounded-[16px] bg-card p-6 shadow-lg shadow-black/5 ring-1 ring-black/5"
            >
              {/* Star rating */}
              <div className="flex items-center gap-1 text-amber-500 mb-4">
                {"★★★★★".split("").map((star, i) => (
                  <span key={i}>{star}</span>
                ))}
              </div>

              {/* Quote */}
              <p className="text-sm leading-6 text-foreground/80 flex-1 mb-4">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-black/5">
                {/* Avatar placeholder */}
                <div className="h-10 w-10 rounded-full bg-olive/20 flex items-center justify-center text-olive text-xs font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-foreground/60">{t.location}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

