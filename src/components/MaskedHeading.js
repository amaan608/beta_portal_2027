import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * MD Nichrome heading with a masked line-by-line reveal on scroll.
 * Plays only when the heading is actually visible — waits out a pinned
 * hero so it does not fire under the full-screen image or on page load.
 */
function MaskedHeading({
  lines = [],
  as: Tag = 'h2',
  className = '',
  lineClassName = '',
  stagger = 0.12,
  duration = 1,
}) {
  const headingRef = useRef(null);

  useEffect(() => {
    const heading = headingRef.current;
    if (!heading) return;

    const texts = gsap.utils.toArray(heading.querySelectorAll('[data-reveal]'));
    if (!texts.length) return;

    let played = false;

    const playReveal = () => {
      if (played) return;
      played = true;
      gsap.to(texts, {
        yPercent: 0,
        duration,
        stagger,
        ease: 'power3.out',
        overwrite: true,
      });
    };

    const isHeroPinActive = () => {
      const hero = document.querySelector('#hero-section');
      if (!hero) return false;
      return ScrollTrigger.getAll().some(
        (st) => st.trigger === hero && st.isActive
      );
    };

    const isHeadingVisible = () => {
      const rect = heading.getBoundingClientRect();
      // Heading must sit in the upper/mid viewport so the user can see it
      return (
        rect.top < window.innerHeight * 0.75 &&
        rect.bottom > window.innerHeight * 0.1
      );
    };

    const tryPlay = () => {
      if (played) return;
      // Wait until the hero pin/scale scroll is finished
      if (isHeroPinActive()) return;
      if (isHeadingVisible()) playReveal();
    };

    const ctx = gsap.context(() => {
      gsap.set(texts, { yPercent: 110 });

      ScrollTrigger.create({
        trigger: heading,
        start: 'top 75%',
        end: 'bottom top',
        onEnter: tryPlay,
        onUpdate: tryPlay,
      });

      // When hero pin ends, retry in case the heading is already on screen
      const hero = document.querySelector('#hero-section');
      if (hero) {
        ScrollTrigger.create({
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          onLeave: tryPlay,
          onUpdate: tryPlay,
        });
      }
    }, heading);

    return () => ctx.revert();
    // Run once on mount — parent re-renders must not reset the mask
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Tag ref={headingRef} className={`m-0 ${className}`}>
      {lines.map((line, i) => (
        <span
          key={`${line}-${i}`}
          data-mask
          className={`block overflow-hidden pb-[0.08em] -mb-[0.08em] ${lineClassName}`}
        >
          <span data-reveal className="block will-change-transform">
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}

export default MaskedHeading;
