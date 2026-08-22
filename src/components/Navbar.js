import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import alcherLogo from '../assets/images/alcher-logo.svg'; 

gsap.registerPlugin(ScrollTrigger);

function Navbar() {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === '/';

  const baseNavLinks = [
    { name: 'Competitions', path: '/competitions' },
    { name: 'Events', path: '/events' },
    { name: 'Kartavya', path: '/kartavya' },
    { name: 'MUN', path: '/mun' },
    { name: 'CA Program', path: '/ca-program' },
    { name: 'Team', path: '/team' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  // Include 'Home' link whenever user is on a different page
  const navLinks = isHomePage 
    ? baseNavLinks 
    : [{ name: 'Home', path: '/' }, ...baseNavLinks];

  // GSAP Scroll Hide/Show Logic
  useEffect(() => {
    let ctx = gsap.context(() => {
      // Look for the main content section across any page
      const targetSection = document.querySelector('#about-section') || 
                            document.querySelector('#team-section') || 
                            document.querySelector('#kartavya-section') ||
                            document.querySelector('#sponsors-section') ||
                            document.querySelector('#competitions-section');

      if (targetSection) {
        ScrollTrigger.create({
          trigger: targetSection, 
          start: 'top 15%', 
          onEnter: () => {
            gsap.to(navRef.current, { y: -100, opacity: 0, duration: 0.3, ease: 'power2.inOut' });
          },
          onLeaveBack: () => {
            gsap.to(navRef.current, { y: 0, opacity: 1, duration: 0.3, ease: 'power2.out' });
          }
        });
      }
    });

    return () => ctx.revert(); 
  }, [location.pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  return (
    <>
      <nav 
        ref={navRef} 
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between md:justify-start px-8 md:px-[60px] lg:px-[80px] py-8 bg-transparent text-white md:gap-[50px] lg:gap-[80px] xl:gap-[100px]"
      >
        <Link 
          to="/" 
          onClick={() => setIsOpen(false)}
          className="flex items-center cursor-pointer shrink-0 z-50"
        >
          <img 
            src={alcherLogo} 
            alt="Alcheringa Logo" 
            className="h-10 md:h-12 w-auto object-contain" 
          />
        </Link>

        <div className="hidden md:flex items-center gap-6 lg:gap-8 xl:gap-[45px]">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={idx} 
                to={link.path} 
                className={`font-body text-[16px] lg:text-[17px] font-[500] transition-colors whitespace-nowrap ${
                  isActive ? 'text-[#FC6840]' : 'hover:text-[#FC6840]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        <button 
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 focus:outline-none z-50 relative"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      <div 
        className={`fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, idx) => {
            const isActive = location.pathname === link.path;
            return (
              <Link 
                key={idx} 
                to={link.path} 
                onClick={() => setIsOpen(false)} 
                className={`font-heading text-3xl transition-colors uppercase tracking-widest ${
                  isActive ? 'text-[#FC6840]' : 'text-white hover:text-[#FC6840]'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Navbar;