import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import kartavyaHeroImage from '../../assets/images/kartavya-hero.jpg';

gsap.registerPlugin(ScrollTrigger);

function KartavyaHeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const mediaRef = useRef(null);
  const textRef = useRef(null);

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
      const isMobile = window.innerWidth < 768;
      if (isMobile) {
        gsap.set(imageRef.current, {
          top: '64%',
          left: '50%',
          right: 'auto',
          xPercent: -50,
          yPercent: -50,
        });
      } else {
        gsap.set(imageRef.current, {
          top: '50%',
          right: '80px',
          left: 'auto',
          xPercent: 0,
          yPercent: -50,
        });
      }
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

      if (isMobile) {
        tl.to(imageRef.current, {
          width: '100vw',
          height: '100vh',
          maxWidth: 'none',
          maxHeight: 'none',
          top: '0%',
          left: '0%',
          xPercent: 0,
          yPercent: 0,
          borderRadius: '0px',
          duration: 3,
          ease: 'power2.inOut',
        });
      } else {
        tl.to(imageRef.current, {
          width: '100%',
          height: '100%',
          maxWidth: 'none',
          maxHeight: 'none',
          right: '0px',
          top: '0%',
          yPercent: 0,
          borderRadius: '0px',
          duration: 3,
          ease: 'power2.inOut',
        });
      }

      tl.to(
        textRef.current,
        {
          opacity: 0,
          x: -40,
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
        ref={textRef}
        className="absolute z-10 w-full h-full max-w-7xl mx-auto px-6 sm:px-8 md:px-[80px] flex flex-col justify-start pt-24 sm:pt-28 md:pt-0 md:justify-center pointer-events-none left-0 right-0"
      >
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="font-heading text-[#FC6840] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] uppercase m-0">
            Where Purpose
          </h1>
          <h1 className="font-heading text-[#F8C93D] text-5xl sm:text-6xl md:text-7xl lg:text-[80px] leading-[0.95] uppercase m-0 mb-3 md:mb-8">
            Meets Action
          </h1>
          <p className="font-body text-[#A3A3A3] text-base sm:text-lg md:text-xl font-medium max-w-sm sm:max-w-md">
            Explore how Alcheringa turns its spirit of celebration into action
            for the community.
          </p>
        </div>
      </div>

      <div
        ref={imageRef}
        className="absolute z-0 w-[90%] sm:w-[80%] md:w-[45%] aspect-video bg-[#111111] overflow-hidden rounded-md shadow-2xl"
      >
        <img
          ref={mediaRef}
          src={kartavyaHeroImage}
          alt="Kartavya Initiative"
          className="absolute inset-0 w-full h-full object-cover block will-change-transform"
        />
        <div className="absolute inset-0 bg-black/30 pointer-events-none mix-blend-multiply" />
      </div>
    </section>
  );
}

export default KartavyaHeroSection;
