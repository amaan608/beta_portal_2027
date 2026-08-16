import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroConcert from '../../assets/images/heroevents.jpeg';

gsap.registerPlugin(ScrollTrigger);

const START_W = 400;
const START_H = 250;
const START_TOP = 420;

function HeroEvents() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const media = mediaRef.current;
    if (!container || !image || !media) return;

    const mediaFloat = 40;

    // Float only the photo inside — keeps the frame expand path clean
    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(media, {
        x: x * mediaFloat * 2,
        y: y * mediaFloat * 2,
        duration: 1.25,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(media, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    let ctx = gsap.context(() => {
      // Anchor at the image center so scale grows outward from that spot
      gsap.set(image, {
        top: START_TOP + START_H / 2,
        left: '50%',
        xPercent: -50,
        yPercent: -50,
        width: START_W,
        height: START_H,
        scale: 1,
        borderRadius: 6,
        transformOrigin: '50% 50%',
      });
      gsap.set(media, { scale: 1.15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });

      // Scale up from the same center — no left/xPercent swap (avoids left→right jump)
      tl.to(image, {
        top: () => window.innerHeight / 2,
        scale: () =>
          Math.max(window.innerWidth / START_W, window.innerHeight / START_H),
        borderRadius: 0,
        duration: 3,
        ease: 'power2.inOut',
      });
    });

    container.addEventListener('mousemove', onMove);
    container.addEventListener('mouseleave', onLeave);

    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
      ctx.revert();
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative w-full h-screen bg-black overflow-hidden"
    >
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-10 pointer-events-none">
        <div className="absolute top-[90px] left-1/2 -translate-x-1/2 text-center">
          <h1 className="font-heading text-[#FC6840] font-[500] text-[96px] leading-tight uppercase m-0 whitespace-nowrap">
            ONE FESTIVAL
          </h1>
        </div>

        <div className="absolute top-[200px] left-1/2 -translate-x-1/2 text-center">
          <h2 className="font-heading text-[#F8C93D] text-[80px] font-[500] leading-tight uppercase m-0 whitespace-nowrap">
            ENDLESS MEMORIES
          </h2>
        </div>

        <p className="absolute top-[320px] left-1/2 -translate-x-1/2 max-w-[420px] text-center text-white font-body text-[20px] font-[400] m-0">
          From electrifying performances to immersive experiences, discover
          everything that makes Alcheringa unforgettable.
        </p>
      </div>

      <div
        ref={imageRef}
        className="absolute z-20 overflow-hidden shadow-2xl bg-black will-change-transform"
        style={{ width: START_W, height: START_H }}
      >
        <img
          ref={mediaRef}
          src={heroConcert}
          alt="Alcheringa Stage"
          className="absolute left-0 top-0 w-full h-full object-cover block will-change-transform"
        />
      </div>
    </section>
  );
}

export default HeroEvents;
