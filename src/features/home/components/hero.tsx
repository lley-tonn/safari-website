import Image from "next/image";

const features = [
  { icon: "💰", label: "Rentable Prices" },
  { icon: "🏕️", label: "Camping Tours" },
  { icon: "👤", label: "Private a Guide" },
  { icon: "🗺️", label: "DIY Packages" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden pt-14">
      {/* Background image */}
      <Image
        src="/hero-bg.jpg"
        alt="African wildlife safari"
        fill
        priority
        className="object-cover"
      />
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[calc(85vh-56px)] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Wildlife
            <br />
            <span className="text-amber-200">Nature Tours</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-white/90 sm:text-lg">
            Premium self-drive 4x4 rentals and tailored safari experiences
            across East Africa. Combining reliability with local expertise for
            the ultimate adventure.
          </p>
        </div>
      </div>

      {/* Feature badges at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pb-6 pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm text-white backdrop-blur-sm"
                >
                  <span>{feature.icon}</span>
                  <span>{feature.label}</span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 rounded-full bg-olive px-4 py-2 text-sm font-medium text-white">
              <span className="text-amber-300">★</span>
              <span>10+ Years Of Experience</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

