import React from "react";

/**
 * CRA runs on webpack, so we use require.context instead of Vite's
 * import.meta.glob to auto-load every logo in the sponsors folder.
 *
 * IMPORTANT: the first argument is relative to WHERE THIS FILE LIVES.
 * If SponsorsPage.js sits directly in src/, "./assets/image/sponsors" is correct.
 * If it's in src/pages/, use "../assets/image/sponsors" (one "../" per nested folder).
 */
const sponsorContext = require.context(
  "../../assets/images/sponsers",
  false,
  /\.(png|jpe?g|svg|webp)$/i
);

const sponsors = sponsorContext
  .keys()
  .sort()
  .map((key) => ({
    src: sponsorContext(key),
    name: key.replace("./", "").split(".")[0],
  }));  

export default function SponsorsPage() {
  return (
    <section id="sponsors-section" className="min-h-screen bg-black px-4 py-20 sm:px-8">
      {/* Title */}

      {/* Section label with divider, like the reference */}
      <div className="mx-auto mb-8 flex max-w-3xl items-center gap-4">
        <span className="text-white font-heading text-[48px] font-[500] tracking-wide">
          PREVIOUS MAJOR SPONSORS
        </span>
      </div>

      {/* Logo grid */}
      {sponsors.length === 0 ? (
        <p className="text-center text-white/50">
          No sponsor images found. Check the folder path passed to require.context above.
        </p>
      ) : (
        <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className=" shadow-sm transition-transform duration-200 hover:scale-105"
            >
              <img
                src={sponsor.src}
                alt={sponsor.name}
                className="max-h-16 max-w-[80%] object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </section>
  );
}