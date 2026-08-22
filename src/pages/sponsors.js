import React from 'react';
import Navbar from '../components/Navbar';
import SponsorsList from '../components/sponsors/sponsorlist';
import TitleSponsors from '../components/sponsors/titlesponsors';
import Footer from '../components/home/footer';
import MarqueeStrip from '../components/home/MarqueeStrip';

function SponsorsPage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <TitleSponsors />
        <SponsorsList />
      </main>
      <Footer />
      <MarqueeStrip />
    </div>
  );
}

export default SponsorsPage;