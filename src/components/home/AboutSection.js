import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import MaskedHeading from '../MaskedHeading';
import ticketBg from '../../assets/images/ticket-bg.svg';

gsap.registerPlugin(ScrollTrigger);

function AboutSection() {
  const sectionRef = useRef(null);

  const stats = [
    { label: 'Footfall', target: 150000, suffix: '+' },
    { label: 'Events', target: 100, suffix: '+' },
    { label: 'Competitions', target: 48, suffix: '+' },
  ];

  useEffect(() => {
    let ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.stat-counter');

      counters.forEach((counter) => {
        const targetVal = parseInt(counter.getAttribute('data-target'), 10);

        ScrollTrigger.create({
          trigger: sectionRef.current,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            gsap.fromTo(
              counter,
              { innerText: 0 },
              {
                innerText: targetVal,
                duration: 2.5,
                ease: 'power3.out',
                snap: { innerText: 1 },
                onUpdate: function () {
                  counter.innerText = Math.ceil(
                    this.targets()[0].innerText
                  ).toLocaleString('en-IN');
                },
              }
            );
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about-section"
      ref={sectionRef}
      className="relative w-full bg-black text-white py-32 px-6 flex flex-col items-center z-20"
    >
      <div className="text-center max-w-3xl mb-24">
        <div
          className="mb-10 flex justify-center"
          style={{ textShadow: '0px 0px 20px rgba(252, 104, 64, 0.4)' }}
        >
          <MaskedHeading
            lines={['ABOUT', 'ALCHERINGA']}
            className="font-heading text-[#FC6840] text-[44px] md:text-[96px] uppercase leading-none text-center"
          />
        </div>

        <p className="font-body text-[#A3A3A3] text-lg md:text-xl leading-relaxed mb-6 font-medium">
          Alcheringa is the largest cultural fest in Northeast India, and one of
          the biggest in the country — three days of music, art, dance, and
          madness that brings together thousands of students from across India.
        </p>
        <p className="font-body text-[#A3A3A3] text-lg md:text-xl leading-relaxed font-medium">
          From electrifying concerts to nail-biting competitions, it&apos;s where
          talent meets chaos meets unforgettable memories.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6 md:gap-10">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="w-[220px] h-[120px] flex flex-col items-center justify-center relative"
          >
            <img
              src={ticketBg}
              alt="ticket background"
              className="absolute inset-0 w-full h-full object-contain pointer-events-none"
            />

            <div className="relative z-10 flex flex-col items-center text-black pt-2">
              <span className="font-body text-[16px] font-medium text-black mb-1">
                {stat.label}
              </span>

              <span className="font-heading text-3xl md:text-4xl font-bold text-black flex items-center">
                <span className="stat-counter" data-target={stat.target}>
                  0
                </span>
                {stat.suffix}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AboutSection;
