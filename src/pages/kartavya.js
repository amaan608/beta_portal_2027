import React from 'react';
import Navbar from '../components/Navbar';
import KartavyaHeroSection from '../components/kartavya/KartavyaHeroSection';
import KartavyaEvents from '../components/kartavya/KartavyaEvents';
import Footer from '../components/home/footer';
import MarqueeStrip from '../components/home/MarqueeStrip';

function Kartavya() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <KartavyaHeroSection />
        <KartavyaEvents />
      </main>
      <Footer />
      <MarqueeStrip />
    </div>
  );
}

export default Kartavya;