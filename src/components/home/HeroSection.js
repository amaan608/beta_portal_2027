import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroConcert from '../../assets/images/homeHero.png';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mediaRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

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

      tl.to(imageRef.current, {
        width: '100vw',
        height: '100vh',
        maxWidth: 'none',
        maxHeight: 'none',
        borderRadius: '0px',
        duration: 3,
        ease: 'power2.inOut',
      });

      tl.to(
        [textLeftRef.current, textRightRef.current],
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
        className="absolute z-0 w-[320px] sm:w-[400px] md:w-[400px] h-[200px] sm:h-[225px] md:h-[250px] overflow-hidden rounded-md  bg-black"
      >
        <img
          ref={mediaRef}
          src={heroConcert}
          alt="Alcheringa Stage"
          className="absolute inset-0 w-full h-full object-cover block will-change-transform"
        />
        <div className="absolute " />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-5 sm:px-8 md:px-10 flex flex-col justify-center pointer-events-none">
        <div ref={textLeftRef} className="absolute left-5 sm:left-8 md:left-10 top-[21%] sm:top-[24%] md:top-1/3">
          <h1 className="font-heading text-[#FC6840] text-[58px] sm:text-7xl md:text-[64px] font-[500] leading-[0.95] uppercase m-0">
            The Countdown
            <br />
            Begins
          </h1>
        </div>

        <div ref={textRightRef} className="absolute right-5 sm:right-8 md:right-10 bottom-[21%] sm:bottom-[24%] md:bottom-1/3 text-right">
          <h2 className="font-heading text-[#F8C93D] text-[44px] sm:text-5xl md:text-[40px] font-[500] leading-[1] uppercase m-0">
            This January
            <br />
            Guwahati Gets Loud
          </h2>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
