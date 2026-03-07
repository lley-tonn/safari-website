import { GallerySection } from "@/features/home/components/gallery";
import { TestimonialsSection } from "@/features/home/components/testimonials";

export default function AboutPage() {
  return (
    <>
      <section className="bg-sand py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-olive">
                About the studio
              </p>
              <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built by travellers who never really left the gravel roads.
              </h1>
              <p className="text-sm leading-6 text-foreground/75">
                Safari Website is a small, hands-on road trip studio. We design
                routes we would gladly drive ourselves, balancing wildness with
                safety, big sightings with quiet, coffee-fuelled mornings.
              </p>
              <p className="text-sm leading-6 text-foreground/75">
                Instead of handing you a generic brochure, we listen, sketch
                three or four route ideas, then refine them with you until
                distances, seasons, vehicles and budgets align. Along the way
                we handle permits, tricky bookings and the little details that
                make off-grid days feel calm.
              </p>
            </div>
            <div className="space-y-4 rounded-[24px] bg-card p-5 shadow-lg shadow-black/5 ring-1 ring-black/5">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-olive">
                How we work
              </p>
              <ul className="space-y-3 text-sm leading-6 text-foreground/80">
                <li>
                  <span className="font-semibold">Slow, thoughtful planning.</span>{" "}
                  We prefer fewer trips done well over high-volume, rushed
                  itineraries.
                </li>
                <li>
                  <span className="font-semibold">Transparent advice.</span> If a
                  park, season or route is not right for your expectations, we
                  will say so.
                </li>
                <li>
                  <span className="font-semibold">Local relationships.</span> We
                  work with on-the-ground guides, mechanics and camp owners
                  across Southern and East Africa.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <GallerySection />
      <TestimonialsSection />
    </>
  );
}

