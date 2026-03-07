import { Button } from "@/components/ui/button";

export function AboutSection() {
  return (
    <section id="about" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[28px] bg-gradient-to-br from-olive via-olive-soft to-chocolate shadow-xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(245,236,227,0.4),transparent_60%)]" />
            <div className="absolute inset-0 flex items-center justify-center text-sand/60 text-sm">
              Lion image placeholder
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-olive">
                About Game-Drive Africa
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
                We Make Your African Road Trip Dreams a Reality.
              </h2>
            </div>

            <div className="space-y-4 text-sm leading-6 text-foreground/75">
              <p>
                We are passionate about travel and dedicated to providing you
                with the best self-drive experiences. Whether you are navigating
                the rugged terrains of national parks or cruising coastal roads,
                our reliable, fully-equipped 4x4 vehicles are your perfect
                companion.
              </p>
              <p>
                Beyond just car rental, we offer complete safari planning,
                camping gear rental, and 24/7 on-road support to ensure your
                journey is safe, comfortable, and unforgettable.
              </p>
            </div>

            <Button size="lg">
              Learn More About Us
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
