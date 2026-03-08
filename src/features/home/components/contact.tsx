"use client";

import { AnimatedSection } from "@/components/ui/animated-section";

export function ContactSection() {
  return (
    <section id="contact" className="bg-sand py-20 sm:py-28 lg:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="overflow-hidden rounded-3xl border border-espresso/10 shadow-xl transition-shadow duration-500 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Form side */}
              <div className="bg-card p-8 sm:p-10">
                <h2 className="font-heading text-3xl font-bold text-espresso">
                  Get in Touch
                </h2>
                <p className="mt-2 text-base text-espresso/60">
                  Ready to book or have questions? Send us a message.
                </p>

                <form className="mt-8 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-espresso">
                        Name
                      </label>
                      <input
                        type="text"
                        className="h-12 w-full rounded-xl border border-espresso/10 bg-sand/50 px-4 text-sm text-espresso outline-none transition-all duration-200 focus:border-olive focus:ring-2 focus:ring-olive/20 focus:translate-y-[-1px]"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-espresso">
                        Email
                      </label>
                      <input
                        type="email"
                        className="h-12 w-full rounded-xl border border-espresso/10 bg-sand/50 px-4 text-sm text-espresso outline-none transition-all duration-200 focus:border-olive focus:ring-2 focus:ring-olive/20 focus:translate-y-[-1px]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-espresso">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select className="h-12 w-full appearance-none rounded-xl border border-espresso/10 bg-sand/50 px-4 pr-10 text-sm text-espresso outline-none transition-all duration-200 focus:border-olive focus:ring-2 focus:ring-olive/20">
                        <option>Self-Drive Rental quote</option>
                        <option>Guided Safari</option>
                        <option>Equipment Rental</option>
                        <option>Other</option>
                      </select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-espresso/50"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m19 9-7 7-7-7"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-espresso">
                      Message
                    </label>
                    <textarea
                      rows={4}
                      className="w-full resize-none rounded-xl border border-espresso/10 bg-sand/50 px-4 py-3 text-sm text-espresso outline-none transition-all duration-200 focus:border-olive focus:ring-2 focus:ring-olive/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="rounded-full bg-chocolate px-8 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-espresso hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              {/* Contact info side */}
              <div className="bg-olive p-8 sm:p-10">
                <h2 className="font-heading text-2xl font-bold text-white sm:text-3xl">
                  Contact Information
                </h2>

                <div className="mt-8 space-y-6">
                  {/* Office Location */}
                  <div className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
                    <div className="shrink-0 text-chocolate transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 3.69 2.923l.136.09.049.03Zm.46-13.852a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Office Location</p>
                      <p className="mt-0.5 text-white/80">
                        Plot 123, Safari Road, Kampala, Uganda
                      </p>
                    </div>
                  </div>

                  {/* Phone / WhatsApp */}
                  <div className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
                    <div className="shrink-0 text-chocolate transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Phone / WhatsApp</p>
                      <p className="mt-0.5 text-white/80">+256 123 456 7889</p>
                    </div>
                  </div>

                  {/* Email Address */}
                  <div className="group flex items-start gap-4 transition-transform duration-300 hover:translate-x-2">
                    <div className="shrink-0 text-chocolate transition-transform duration-300 group-hover:scale-110">
                      <svg
                        className="h-7 w-7"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-white">Email Address</p>
                      <p className="mt-0.5 text-white/80">
                        info@gamedriveeastafrica.com
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map placeholder */}
                <div className="mt-8 flex aspect-[2/1] items-center justify-center rounded-2xl border border-white/20 bg-olive-soft/50 text-white/60 transition-all duration-300 hover:border-white/40 hover:bg-olive-soft/70">
                  Interactive Map area
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
