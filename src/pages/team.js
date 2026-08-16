import React from 'react';
import Navbar from '../components/Navbar';
import TeamHeroSection from '../components/team/TeamHeroSection';
import TeamList from '../components/team/TeamList';
// Assuming these are exported from your home components folder as requested
import Footer from '../components/home/footer';
import MarqueeStrip from '../components/home/MarqueeStrip';

function TeamPage() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden">
      <Navbar />
      <main>
        <TeamHeroSection />
        <TeamList />
      </main>
      <Footer />
      <MarqueeStrip />
    </div>
  );
}

export default TeamPage;