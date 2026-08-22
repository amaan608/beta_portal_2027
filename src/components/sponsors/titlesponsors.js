import React from 'react';

function TitleSponsors() {
  return (
    <section 
      id="hero-section"
        className="relative flex w-full h-screen min-h-[100vh] items-center justify-center bg-black"
    >
      {/* Centered Large SPONSORS Title */}
      <div className="flex flex-col items-center justify-center ">
        <h1 className="font-heading text-[#FC6840] text-6xl sm:text-7xl md:text-8xl lg:text-[110px] font-[500] uppercase text-center m-0">
          SPONSORS
        </h1>
      </div>
    </section>
  );
}

export default TitleSponsors;
