import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamHeroImage from '../../assets/images/team-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

function TeamHeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mediaRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const media = mediaRef.current;
    const image = imageRef.current;
    if (!container || !media || !image) return;

    const mediaFloat = 40;

    let mm = gsap.matchMedia();

    // GSAP scroll and floating effects only on desktop (768px+)
    mm.add('(min-width: 768px)', () => {
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

      tl.to(image, {
        width: '100vw',
        height: '100vh',
        maxWidth: 'none',
        maxHeight: 'none',
        borderRadius: '0px',
        duration: 3,
        ease: 'power2.inOut',
      });

      tl.to(
        [textLeftRef.current, textRightRef.current, subtitleRef.current],
        {
          opacity: 0,
          y: -20,
          duration: 1,
        },
        '<'
      );

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

      container.addEventListener('mousemove', onMove);
      container.addEventListener('mouseleave', onLeave);

      return () => {
        container.removeEventListener('mousemove', onMove);
        container.removeEventListener('mouseleave', onLeave);
      };
    });

    return () => {
      mm.revert();
    };
  }, []);

  return (
    <section
      id="hero-section"
      ref={containerRef}
      className="relative w-full bg-black overflow-hidden flex flex-col items-center pt-20 pb-6 md:h-screen md:p-0 md:justify-center"
    >
      {/* Top text on mobile / Left text on desktop */}
      <div
        ref={textLeftRef}
        className="w-full px-5 text-left mb-5  md:mb-0 md:px-0 md:absolute md:left-10 md:top-1/3 md:w-auto transition-opacity z-10 pointer-events-none"
      >
        <h1 className="font-heading text-[#FC6840] font-[500] text-[56px] sm:text-6xl md:text-7xl leading-[0.95] uppercase m-0">
          The People
        </h1>
      </div>

      {/* Full width edge-to-edge image on mobile (not rounded) / Centered expanding card on desktop */}
      <div
        ref={imageRef}
        className="w-full my-2 md:my-0 md:absolute md:z-0 md:w-[450px] md:h-[280px] overflow-hidden rounded-none md:rounded-md shadow-2xl bg-black"
      >
        <div className="relative w-full aspect-[16/10] md:aspect-auto md:w-full md:h-full">
          <img
            ref={mediaRef}
            src={teamHeroImage}
            alt="Alcheringa Team"
            className="w-full h-full object-cover block will-change-transform"
          />
          <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />
        </div>
      </div>

      {/* Bottom text on mobile / Right text and subtitle on desktop */}
      <div className="w-full px-5 flex flex-col items-end md:px-0 md:contents z-10 pointer-events-none">
        <div
          ref={textRightRef}
          className="w-full text-right mt-3 md:mt-0 md:absolute md:right-10 md:bottom-1/3 md:w-auto transition-opacity"
        >
          <h2 className="font-heading font-[500] text-[#F8C93D] text-[44px] sm:text-4xl md:text-5xl leading-[1] uppercase m-0">
            Behind The
            <br />
            Experience
          </h2>
        </div>

        <div
          ref={subtitleRef}
          className="w-full text-center mt-4 md:mt-0 md:absolute md:top-[calc(50%+180px)] md:px-6 transition-opacity"
        >
          <p className="font-body text-[#A3A3A3] text-sm md:text-base font-medium max-w-[340px] sm:max-w-none mx-auto">
            Meet the people whose passion, creativity, and
            <br className="hidden sm:inline" />
            teamwork bring Alcheringa to life.
          </p>
        </div>
      </div>
    </section>
  );
}

export default TeamHeroSection;
