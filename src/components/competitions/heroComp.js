import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroConcert from '../../assets/images/herocomp.jpeg';

gsap.registerPlugin(ScrollTrigger);

function HeroComp() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mediaRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    if (!container || !media) return;

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
      gsap.set(media, { scale: 1.15 });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=200%',
          scrub: 1,
          pin: true,
        },
      });

      // Same expand as Team / Kartavya — grows from current centered position
      tl.to(imageRef.current, {
        width: '100vw',
        height: '100vh',
        maxWidth: 'none',
        maxHeight: 'none',
        borderRadius: '0px',
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
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      <div
        ref={imageRef}
        className="absolute z-0 w-[320px] sm:w-[360px] md:w-[400px] h-[200px] sm:h-[225px] md:h-[250px] overflow-hidden shadow-2xl bg-black"
      >
        <img
          ref={mediaRef}
          src={heroConcert}
          alt="Alcheringa Stage"
          className="absolute left-0 top-0 w-full h-full object-cover block will-change-transform"
        />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col justify-center pointer-events-none">
        <div
          ref={textLeftRef}
          className="absolute left-5 sm:left-10 md:left-[127px] top-[17%] sm:top-[20%] md:top-[240px]"
        >
          <h1 className="font-heading text-[#FC6840] font-[500] text-[64px] sm:text-7xl md:text-[96px] leading-[0.95] uppercase m-0">
            FROM
            <br />
            PASSION
          </h1>
        </div>

        <div
          ref={textRightRef}
          className="absolute right-5 sm:right-10 md:right-auto md:left-[1062px] top-[65%] sm:top-[30%] md:top-[357px] text-right"
        >
          <h2 className="font-heading text-[#F8C93D] text-[54px] sm:text-6xl md:text-[80px] font-[500] leading-[0.95] uppercase m-0">
            TO
            <br />
            GLORY
          </h2>
        </div>

        <p
          ref={subtitleRef}
          className="absolute bottom-20 sm:bottom-14 md:bottom-auto md:top-[500px] left-1/2 -translate-x-1/2 md:translate-x-0 md:left-[430px] w-full max-w-[340px] sm:max-w-[420px] text-center text-white font-body text-sm sm:text-base md:text-[20px] font-[400] m-0 px-4"
        >
          Step into the arena, challenge your limits, and compete for glory at
          Alcheringa.
        </p>
      </div>
    </section>
  );
}

export default HeroComp;
