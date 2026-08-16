// Example for competitions.js
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/home/footer';

function Competitions() {
  return (
    <div className="w-full min-h-screen bg-black overflow-x-hidden text-white pt-32 px-10">
      <Navbar />
      <h1 className="font-heading text-6xl text-[#FC6840]">Competitions Page</h1>
      {/* Content will go here later */}
      <Footer />
    </div>
  );
}

export default Competitions;