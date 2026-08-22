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
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const media = mediaRef.current;
    if (!container || !image || !media) return;

    const mediaFloat = 40;

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
      const isMobile = window.innerWidth < 768;
      const startW = isMobile ? Math.min(window.innerWidth * 0.88, 330) : START_W;
      const startH = isMobile ? Math.round(startW * 0.625) : START_H;
      const startTop = isMobile ? '58%' : START_TOP;
      const startYPercent = isMobile ? -50 : 0;

      // Keep events layout: centered lower image (no left/xPercent swap on expand)
      gsap.set(image, {
        top: startTop,
        left: '50%',
        xPercent: -50,
        yPercent: startYPercent,
        width: startW,
        height: startH,
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

      // Same expand feel as Team / Kartavya, from this lower position
      tl.to(image, {
        top: 0,
        left: '50%',
        xPercent: -50,
        yPercent: 0,
        width: '100vw',
        height: '100vh',
        maxWidth: 'none',
        maxHeight: 'none',
        borderRadius: 0,
        duration: 3,
        ease: 'power2.inOut',
      });

      // Text fades out as the image takes over
      tl.to(
        [textLeftRef.current, textRightRef.current, subtitleRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 1,
        },
        '<'
      );
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
      <div
        ref={imageRef}
        className="absolute z-0 overflow-hidden rounded-md shadow-2xl bg-black"
        style={{ width: START_W, height: START_H }}
      >
        <img
          ref={mediaRef}
          src={heroConcert}
          alt="Alcheringa Stage"
          className="absolute left-0 top-0 w-full h-full object-cover block will-change-transform"
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pointer-events-none">
        <div
          ref={textLeftRef}
          className="absolute top-[100px] sm:top-24 md:top-[90px] left-1/2 -translate-x-1/2 text-center w-full px-4"
        >
          <h1 className="font-heading text-[#FC6840] font-[500] text-6xl sm:text-7xl md:text-[96px] leading-[0.95] uppercase m-0">
            ONE FESTIVAL
          </h1>
        </div>

        <div
          ref={textRightRef}
          className="absolute top-[180px] sm:top-[165px] md:top-[200px] left-1/2 -translate-x-1/2 text-center w-full px-4"
        >
          <h2 className="font-heading text-[#F8C93D] text-5xl sm:text-6xl md:text-[80px] font-[500] leading-[0.95] uppercase m-0">
            ENDLESS MEMORIES
          </h2>
        </div>

        <p
          ref={subtitleRef}
          className="absolute top-[250px] sm:top-[235px] md:top-[320px] left-1/2 -translate-x-1/2 max-w-[340px] sm:max-w-[420px] text-center text-white font-body text-[15px] sm:text-base md:text-[20px] font-[400] m-0 px-4"
        >
          From electrifying performances to immersive experiences, discover
          everything that makes Alcheringa unforgettable.
        </p>
      </div>
    </section>
  );
}

export default HeroEvents;
