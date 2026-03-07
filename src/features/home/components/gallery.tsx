const galleryItems = [
  { label: "Lions at golden hour" },
  { label: "Zebras on the plains" },
  { label: "Elephants at waterhole" },
  { label: "Safari sunset" },
  { label: "Leopard in tree" },
];

const socialLinks = [
  { icon: "f", label: "Facebook" },
  { icon: "📷", label: "Instagram" },
  { icon: "X", label: "Twitter" },
  { icon: "🎵", label: "TikTok" },
  { icon: "▶", label: "YouTube" },
];

export function GallerySection() {
  return (
    <section id="gallery" className="bg-sand py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-3 mb-10">
          <p className="text-xs font-medium uppercase tracking-[0.25em] text-olive">
            Moments
          </p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Life on the Road
          </h2>
        </div>

        {/* Gallery grid */}
        <div className="grid gap-4 grid-cols-2 md:grid-cols-5">
          {/* Large image on left */}
          <div className="col-span-2 row-span-2 relative aspect-square md:aspect-auto overflow-hidden rounded-[16px] bg-gradient-to-br from-olive-soft via-chocolate to-espresso">
            <div className="absolute inset-0 flex items-center justify-center text-white/30 text-xs">
              Wildlife image
            </div>
          </div>
          {/* Smaller images */}
          {galleryItems.slice(1).map((item, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-[16px] bg-gradient-to-br from-sand-soft via-olive-soft/30 to-chocolate/20"
            >
              <div className="absolute inset-0 flex items-center justify-center text-foreground/30 text-xs">
                {item.label}
              </div>
            </div>
          ))}
        </div>

        {/* Share section */}
        <div className="mt-10 text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            Share Your Journey
          </h3>
          <p className="text-sm text-foreground/70 mb-4">
            Tag us in your safari pics for a chance to be featured
          </p>
          <div className="flex justify-center gap-3">
            {socialLinks.map((link) => (
              <button
                key={link.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-olive text-white text-sm hover:bg-olive-soft transition-colors"
                aria-label={link.label}
              >
                {link.icon}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

