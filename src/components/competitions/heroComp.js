import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroConcert from '../../assets/images/herocomp.jpeg';

gsap.registerPlugin(ScrollTrigger);

function HeroComp() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mediaRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    const media = mediaRef.current;
    if (!container || !image || !media) return;

    // Floating parallax strength (px)
    const frameFloat = 28;
    const mediaFloat = 40;

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      gsap.to(image, {
        x: x * frameFloat * 2,
        y: y * frameFloat * 2,
        duration: 1.1,
        ease: 'power3.out',
        overwrite: 'auto',
      });

      // Inner photo drifts a bit more for depth
      gsap.to(media, {
        x: x * mediaFloat * 2,
        y: y * mediaFloat * 2,
        duration: 1.25,
        ease: 'power3.out',
        overwrite: 'auto',
      });
    };

    const onLeave = () => {
      gsap.to(image, {
        x: 0,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        overwrite: 'auto',
      });
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

      tl.to(image, {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px',
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
      className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center"
    >
      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-10 flex flex-col justify-center pointer-events-none">
        <div className="absolute left-[127px] top-[240px]">
          <h1 className="font-heading text-[#FC6840] font-[500] text-[96px] leading-tight uppercase m-0">
            FROM
            <br />
            PASSION
          </h1>
        </div>

        <div className="absolute left-[1062px] top-[357px] text-right">
          <h2 className="font-heading text-[#F8C93D] text-[80px] font-[500] leading-tight uppercase m-0">
            TO
            <br />
            GLORY
          </h2>
        </div>
        <p className="absolute top-[500px] left-[430px] max-w-[420px] text-center text-white font-body text-[20px] font-[400] m-0">
          Step into the arena, challenge your limits, and compete for glory at
          Alcheringa.
        </p>
      </div>

      <div
        ref={imageRef}
        className="absolute z-20 w-[400px] h-[250px] overflow-hidden rounded-md shadow-2xl bg-black will-change-transform"
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

export default HeroComp;
