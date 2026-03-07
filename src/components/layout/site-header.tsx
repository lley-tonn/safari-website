import Link from "next/link";

import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-glass">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight text-espresso">
            {siteConfig.name}
          </span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium text-espresso/80 sm:flex items-center">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-espresso"
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm" className="bg-olive hover:bg-olive-soft text-white font-semibold">
            Book Now
          </Button>
        </nav>
      </div>
    </header>
  );
}

