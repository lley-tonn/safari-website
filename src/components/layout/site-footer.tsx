import Link from "next/link";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso text-sand pt-12 pb-6 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <p className="text-lg font-bold tracking-tight">Game Drive</p>
            <p className="text-[13px] leading-6 text-sand/70">
              Your trusted partner for self-drive car rental and self-catered
              safari experiences across East Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">Quick Links</p>
            <ul className="space-y-2 text-[13px] text-sand/70">
              <li><Link href="/about" className="hover:text-sand">About Us</Link></li>
              <li><Link href="/#vehicles" className="hover:text-sand">Our Fleet</Link></li>
              <li><Link href="/#packages" className="hover:text-sand">Guided Safaris</Link></li>
              <li><Link href="/#gallery" className="hover:text-sand">Travel Blog</Link></li>
              <li><Link href="#" className="hover:text-sand">Terms & Conditions</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">Services</p>
            <ul className="space-y-2 text-[13px] text-sand/70">
              <li>4x4 Self Drive Rental</li>
              <li>Car with Driver</li>
              <li>Camping Gear Rental</li>
              <li>Itinerary Planning</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <p className="text-sm font-semibold">Newsletter</p>
            <p className="text-[13px] text-sand/70">
              Subscribe to get special offers and travel tips.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Your email"
                className="h-10 w-full rounded-lg border border-sand/20 bg-transparent px-3 text-[13px] text-sand placeholder:text-sand/40 outline-none focus:border-amber-300"
              />
              <button className="h-10 w-full rounded-lg bg-amber-500 text-[13px] font-semibold text-espresso hover:bg-amber-400 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-sand/10 pt-6 text-[12px] text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Wanderlust Africa. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-sand">Privacy Policy</Link>
            <Link href="#" className="hover:text-sand">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

