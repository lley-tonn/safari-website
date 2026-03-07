const features = [
  { icon: "💰", label: "Rentable Prices" },
  { icon: "🏕️", label: "Camping Tours" },
  { icon: "👤", label: "Private a Guide" },
  { icon: "🗺️", label: "DIY Packages" },
];

export function HeroSection() {
  return (
    <section className="relative min-h-[85vh] overflow-hidden">
      {/* Background gradient to simulate lion image */}
      <div className="absolute inset-0 bg-gradient-to-br from-olive-soft via-chocolate to-espresso" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(139,119,42,0.4),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(86,107,71,0.5),transparent_60%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

      {/* Content */}
      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="max-w-2xl space-y-6">
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Wildlife
            <br />
            <span className="text-amber-200">Nature Tours</span>
          </h1>
          <p className="max-w-xl text-base leading-7 text-white/80 sm:text-lg">
            Premium self-drive 4x4 rentals and tailored safari experiences
            across East Africa. Combining reliability with local expertise for
            the ultimate adventure.
          </p>
        </div>
      </div>

      {/* Feature badges at bottom */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent pb-6 pt-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-3">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm"
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

