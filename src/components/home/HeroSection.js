import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import heroConcert from '../../assets/images/frame-145.jpg';

gsap.registerPlugin(ScrollTrigger);

function HeroSection() {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const textLeftRef = useRef(null);
  const textRightRef = useRef(null);

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

      // Directly expand the central image (Navbar animation removed completely)
      tl.to(imageRef.current, {
        width: '100vw',
        height: '100vh',
        borderRadius: '0px', 
        duration: 3, 
        ease: 'power2.inOut',
      });

    }); 

    return () => ctx.revert(); 
  }, []);

  return (
    <section id="hero-section" ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      
      <div 
        ref={imageRef} 
        className="absolute z-0 w-[400px] h-[250px] overflow-hidden rounded-md shadow-2xl bg-black"
      >
        <img 
          src={heroConcert} 
          alt="Alcheringa Stage" 
          className="absolute inset-0 w-full h-full object-cover block"
        />
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply pointer-events-none" />
      </div>

      <div className="relative z-10 w-full h-full max-w-7xl mx-auto px-10 flex flex-col justify-center pointer-events-none">
        
        <div ref={textLeftRef} className="absolute left-10 top-1/3">
          <h1 className="font-heading text-[#FC6840] text-5xl md:text-7xl leading-tight uppercase m-0">
            The Countdown<br />Begins
          </h1>
        </div>

        <div ref={textRightRef} className="absolute right-10 bottom-1/3 text-right">
          <h2 className="font-heading text-[#F8C93D] text-2xl md:text-4xl leading-tight uppercase m-0">
            This January<br />Guwahati Gets Loud
          </h2>
        </div>
        
      </div>
    </section>
  );
}

export default HeroSection;