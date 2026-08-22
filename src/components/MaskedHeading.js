import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * MD Nichrome heading with a masked line-by-line reveal on scroll.
 * Plays once when the heading enters a new section in the viewport.
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

    const playReveal = () => {
      gsap.to(texts, {
        yPercent: 0,
        duration,
        stagger,
        ease: 'power3.out',
        overwrite: true,
      });
    };

    const ctx = gsap.context(() => {
      gsap.set(texts, { yPercent: 110 });

      ScrollTrigger.create({
        trigger: heading,
        start: 'top 70%',
        once: true,
        onEnter: playReveal,
      });
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
