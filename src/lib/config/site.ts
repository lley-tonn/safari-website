export const siteConfig = {
  name: "Game Drive",
  description:
    "Premium self-drive 4x4 rentals and tailored safari experiences across East Africa.",
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Fleet", href: "/vehicles" },
    { label: "Safaris", href: "/packages" },
    { label: "Gallery", href: "/gallery" },
    { label: "Blog", href: "/blog" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;

