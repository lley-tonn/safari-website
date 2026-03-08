"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import { siteConfig } from "@/lib/config/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if scrolled past 80% of viewport height (hero section)
      setIsScrolled(window.scrollY > window.innerHeight * 0.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-espresso/95 backdrop-blur-md shadow-lg"
          : "navbar-glass"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-heading text-xl font-black tracking-tight text-sand">
            {siteConfig.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-8 text-sm font-medium text-sand md:flex items-center">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative transition-colors hover:text-white after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
            >
              {item.label}
            </Link>
          ))}
          <Button size="sm" className="bg-olive hover:bg-olive-soft text-white font-semibold px-5">
            Book Now
          </Button>
        </nav>

        {/* Mobile hamburger button */}
        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-lg text-sand transition-colors hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="border-t border-white/10 bg-espresso/95 backdrop-blur-lg px-4 py-4 space-y-1">
          {siteConfig.nav.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-4 py-3 text-base font-medium text-sand transition-all duration-200 hover:bg-white/10 hover:translate-x-1"
              onClick={() => setIsMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-3 px-4">
            <Button
              size="lg"
              className="w-full bg-olive hover:bg-olive-soft text-white font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
