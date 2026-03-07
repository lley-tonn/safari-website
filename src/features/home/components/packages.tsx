import { Button } from "@/components/ui/button";

type Package = {
  name: string;
  subtitle: string;
};

const packages: Package[] = [
  {
    name: "Gorilla & Chimpanzee Tracking",
    subtitle: "Uganda's premier primate experience",
  },
  {
    name: "Gorilla & Chimpanzee Tracking",
    subtitle: "Rwanda adventure edition",
  },
];

export function PackagesSection() {
  return (
    <section id="packages" className="bg-olive py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
          <div className="space-y-3">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-amber-200">
              Curated Experiences
            </p>
            <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Guided Safari Packages
            </h2>
            <p className="max-w-xl text-sm leading-6 text-white/70">
              Don't want to drive? Let our expert local guides take you to the hidden gems
              and premier wildlife spots across the country.
            </p>
          </div>
          <Button
            variant="secondary"
            size="md"
            className="bg-amber-100 text-espresso hover:bg-amber-200"
          >
            Customize Itinerary
            <span className="ml-2">→</span>
          </Button>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {packages.map((pkg, index) => (
            <article
              key={index}
              className="group relative aspect-[16/10] overflow-hidden rounded-[20px]"
            >
              {/* Image placeholder with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-chocolate via-espresso to-olive-soft" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="relative flex h-full flex-col justify-end p-6">
                <h3 className="text-lg font-semibold text-white sm:text-xl">
                  {pkg.name}
                </h3>
                <p className="text-sm text-white/70 mt-1">
                  {pkg.subtitle}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

