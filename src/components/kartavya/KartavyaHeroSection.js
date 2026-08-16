import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import kartavyaHeroImage from '../../assets/images/kartavya-hero.jpg'; 

gsap.registerPlugin(ScrollTrigger);

function KartavyaHeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set the initial vertical centering for the right-side image
      gsap.set(imageRef.current, { yPercent: -50, top: '50%' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: '+=200%', 
          scrub: 1,
          pin: true,
        }
      });

      // Expand the side image to fill 100% of the screen container
      tl.to(imageRef.current, {
        width: '100%',
        height: '100%',
        right: '0px',
        top: '0%',
        yPercent: 0,
        borderRadius: '0px', 
        duration: 3, 
        ease: 'power2.inOut',
      });

      // Fade out and slightly shift the text on the left
      tl.to(textRef.current, {
        opacity: 0,
        x: -40,
        duration: 1
      }, "<"); 

    }); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      
      {/* Typography - Left Side */}
      <div 
        ref={textRef} 
        className="absolute z-10 w-full h-full max-w-7xl mx-auto px-8 md:px-[80px] flex flex-col justify-center pointer-events-none left-0 right-0"
      >
        <div className="w-full md:w-1/2 flex flex-col">
          <h1 className="font-heading text-[#FC6840] text-5xl md:text-7xl lg:text-[80px] leading-none uppercase m-0">
            Where Purpose
          </h1>
          <h1 className="font-heading text-[#F8C93D] text-5xl md:text-7xl lg:text-[80px] leading-none uppercase m-0 mb-8">
            Meets Action
          </h1>
          <p className="font-body text-[#A3A3A3] text-lg md:text-xl font-medium max-w-md">
            Explore how Alcheringa turns its spirit of celebration into action for the community.
          </p>
        </div>
      </div>

      {/* Image - Right Side (Expands on scroll) */}
      <div 
        ref={imageRef} 
        className="absolute z-0 right-8 md:right-[80px] w-[90%] md:w-[45%] aspect-video bg-[#111111] overflow-hidden rounded-md shadow-2xl"
      >
        <img 
          src={kartavyaHeroImage} 
          alt="Kartavya Initiative" 
          className="absolute inset-0 w-full h-full object-cover block"
        />
        {/* Dark overlay ensures text visibility if the image expands behind it before the text fully fades */}
        <div className="absolute inset-0 bg-black/30 pointer-events-none mix-blend-multiply" />
      </div>

    </section>
  );
}

export default KartavyaHeroSection;