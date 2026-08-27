import { useState, useEffect } from 'react';
import arrowLeft from '../../assets/images/arrow-left.png'
import arrowRight from '../../assets/images/arrow-right.png'
import MaskedHeading from '../MaskedHeading';

const highlights = [
  require('../../assets/images/homeCou1.png'),
  require('../../assets/images/homeCou2.png'),
  require('../../assets/images/homeCou3.png'),
  require('../../assets/images/homeCou4.png'),
  require('../../assets/images/homeCou5.png'),
];

function EventHighlights() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const goPrev = () => {
    setActiveIndex((prev) => (prev === 0 ? highlights.length - 1 : prev - 1));
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev === highlights.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-black text-white py-16 px-6 md:px-[50px] flex flex-col md:flex-row gap-10 md:gap-32">
      {/* Left: text + arrows, fixed */}
      <div className="max-w-3xl mb-8 md:mb-24">
        <div
          className="mb-10"
          style={{ textShadow: '0px 0px 0px #FFF' }}
        >
          <MaskedHeading
            lines={['EVENT', 'HIGHLIGHTS']}
            className="font-heading text-white text-[44px] md:text-[96px] uppercase leading-none "
          />
        </div>
        
        <p className="font-body text-[20px] text-white mt-7">
          Have a glimpse of our spotlight events
        </p>

        <div className="flex gap-3 mt-10 md:mt-20">
          <button
            onClick={goPrev}
            className="w-[100px] h-[50px] flex items-center justify-center bg-[#1F1F1F] hover:bg-[#2f2f2f] transition"
            aria-label="Previous"
          >
            <img src={arrowLeft} alt="Previous" className="object-contain" />
          </button>
          <button
            onClick={goNext}
            className="w-[100px] h-[50px] flex items-center justify-center bg-[#1F1F1F] hover:bg-[#2f2f2f] transition"
            aria-label="Next"
          >
            <img src={arrowRight} alt="Next" className="object-contain" />
          </button>
        </div>
      </div>

      {/* Right: featured + peek carousel */}
      <div className="flex-1 relative overflow-hidden py-16 w-full min-h-[500px] md:min-h-[600px]">
        <div
          className="absolute top-1/2 left-1/2 flex items-center gap-6 transition-transform duration-500 ease-out"
          style={{ 
            transform: `translate(calc(-${isMobile ? 110 : 150}px - ${activeIndex * (isMobile ? 244 : 324)}px), -50%)` 
          }}
        >
          {highlights.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Event highlight ${i + 1}`}
              className="shrink-0 w-[220px] md:w-[300px] h-auto transition-all duration-500 ease-out origin-center"
              style={{
                opacity: i === activeIndex ? 1 : 0.35,
                filter: i === activeIndex ? 'blur(0px)' : 'blur(2px)',
                transform: i === activeIndex ? 'scale(1.15)' : 'scale(0.9)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default EventHighlights;