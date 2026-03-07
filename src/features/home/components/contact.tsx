import { Button } from "@/components/ui/button";

export function ContactSection() {
  return (
    <section id="contact" className="bg-olive py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          {/* Form side */}
          <div className="rounded-[20px] bg-sand p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Get in Touch
            </h2>
            <p className="text-sm text-foreground/70 mb-6">
              Ready to book or have questions? Send us a message.
            </p>

            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/70">
                    Name
                  </label>
                  <input
                    type="text"
                    className="h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-foreground outline-none focus:border-olive focus:ring-2 focus:ring-olive/20"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-foreground/70">
                    Email
                  </label>
                  <input
                    type="email"
                    className="h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-foreground outline-none focus:border-olive focus:ring-2 focus:ring-olive/20"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground/70">
                  Inquiry Type
                </label>
                <select className="h-11 w-full rounded-lg border border-black/10 bg-white px-3 text-sm text-foreground outline-none focus:border-olive focus:ring-2 focus:ring-olive/20">
                  <option>Self Drive Rental quote</option>
                  <option>Guided Safari</option>
                  <option>Equipment Rental</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-foreground/70">
                  Inquiry Type
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-black/10 bg-white px-3 py-2 text-sm text-foreground outline-none focus:border-olive focus:ring-2 focus:ring-olive/20"
                />
              </div>

              <Button size="md" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact info side */}
          <div className="rounded-[20px] bg-amber-100 p-6 sm:p-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive text-white text-sm">
                  📍
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Office Location</p>
                  <p className="text-sm text-foreground/70">
                    Plot 123 Safari Road, Kampala, Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive text-white text-sm">
                  📱
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Phone / WhatsApp</p>
                  <p className="text-sm text-foreground/70">+256 123 456 7889</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-olive text-white text-sm">
                  ✉️
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Email Address</p>
                  <p className="text-sm text-foreground/70">info@gamedriveafrica.com</p>
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="mt-6 aspect-video rounded-lg bg-sand-soft flex items-center justify-center text-foreground/40 text-sm">
              Interactive Map area
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

