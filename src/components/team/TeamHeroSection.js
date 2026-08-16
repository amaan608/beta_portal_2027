import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import teamHeroImage from '../../assets/images/team-hero.JPG'; 

gsap.registerPlugin(ScrollTrigger);

function TeamHeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', 
          scrub: 1,
          pin: true,
        }
      });

      tl.to(imageRef.current, {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px', 
        duration: 3, 
        ease: 'power2.inOut',
      });

      tl.to([textLeftRef.current, textRightRef.current, subtitleRef.current], {
        opacity: 0,
        y: -20,
        duration: 1
      }, "<"); 

    }); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex flex-col items-center justify-center">
      
      <div 
        ref={imageRef} 
        className="absolute z-0 w-[450px] h-[280px] overflow-hidden rounded-md shadow-2xl bg-black flex flex-col justify-end"
      >
        <img 
          src={teamHeroImage} 
          alt="Alcheringa Team" 
          className="absolute inset-0 w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-10 flex flex-col justify-center pointer-events-none">
        <div ref={textLeftRef} className="absolute left-10 top-1/3 transition-opacity">
          <h1 className="font-heading text-[#FC6840] text-5xl md:text-7xl leading-tight uppercase m-0">
            The People
          </h1>
        </div>

        <div ref={textRightRef} className="absolute right-10 bottom-1/3 text-right transition-opacity">
          <h2 className="font-heading text-[#F8C93D] text-3xl md:text-5xl leading-tight uppercase m-0">
            Behind The<br />Experience
          </h2>
        </div>
      </div>

      {/* Replaced top-[65%] with top-[calc(50%+180px)] for perfect relative spacing */}
      <div ref={subtitleRef} className="absolute top-[calc(50%+180px)] w-full text-center z-10 pointer-events-none px-6 transition-opacity">
        <p className="font-body text-[#A3A3A3] text-sm md:text-base font-medium">
          Meet the people whose passion, creativity, and<br />teamwork bring Alcheringa to life.
        </p>
      </div>
    </section>
  );
}

export default TeamHeroSection;