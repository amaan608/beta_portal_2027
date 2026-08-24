import React from 'react';
import MaskedHeading from '../MaskedHeading'; 
import Safher from '../../assets/images/comp-events/safher.png';
import Udaan from '../../assets/images/comp-events/udaan.png';
import Prithvi from '../../assets/images/comp-events/prithvi.png';
import Expo from '../../assets/images/comp-events/expo.png';
import Nes from '../../assets/images/comp-events/nes.png';
import Sanraksham from '../../assets/images/comp-events/sanrakshan.jpeg';
import Mansakti from '../../assets/images/comp-events/mansakti.jpeg';
import Aikyam from '../../assets/images/comp-events/aikyam.jpeg';


const kartavyaEventsData = [
  {
    title: "SAFHER",
    description: "SafHer is an Alcheringa campaign focused on women's safety, empowerment, and upliftment, encouraging women to speak up, challenge injustice, and live confidently and freely.",
    image: Safher
  },
  {
    title: "UDAAN",
    description: "Udaan, formerly known as \"Bachpan,\" is a student-led initiative that empowers underprivileged children through education, creative workshops, and motivational activities, helping them discover their potential and pursue their dreams.",
    image: Udaan
  },
  {
    title: "PRITHVI",
    description: "Project Prithvi is a climate awareness initiative that encourages individual responsibility and sustainable lifestyles through engaging activities and environmental education.",
    image: Prithvi
  },
  {
    title: "NORTH-EAST EXPO",
    description: "North-East Expo celebrates the rich cultural diversity of North-East India through performances, regional art, and traditional handicrafts.",
    image: Expo
  },
  {
    title: "NORTH-EAST SOCIAL SUMMIT",
    description: "North-East Social Summit is a platform for innovation and problem-solving, bringing people together to address the socio-political and cultural issues of North-East India.",
    image: Nes
  },
  {
    title: "SANRAKHAN",
    description: "Sanrakhan is a dual-purpose campaign promoting AIDS awareness and substance abuse prevention through educational workshops, safe practices, and stigma reduction.",
    image: Sanraksham
  },
  {
    title: "MANSHAKTI",
    description: "Manshakti is a mental health and wellness campaign that supported people during the pandemic while appreciating and encouraging frontline healthcare workers through messages of solidarity.",
    image: Mansakti
  },
  {
    title: "AIKYAM",
    description: "AIKYAM is an initiative promoting unity and peace through thought-provoking discussions, performances, and fundraisers that address communal disharmony.",
    image: Aikyam
  }
];

function KartavyaEvents() {
  return (
    <section id="kartavya-section" className="w-full bg-black text-white px-8 md:px-[80px] pb-32 border-t border-[#1E3A8A]">
      <div className="max-w-7xl mx-auto pt-24 flex flex-col gap-32">
        
        {/* About Section */}
        <div id="about-section" className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="md:w-1/3">
            <MaskedHeading
              lines={['ABOUT KARTAVYA']}
              className="font-heading text-[38px] md:text-[64px] font-[500] uppercase text-white leading-none"
            />
          </div>
          <div className="md:w-1/2">
            <p className="font-body text-[#A3A3A3] text-sm md:text-base leading-relaxed">
              Alcheringa has many competitions spread across various genres. They take place during the three days with the prize distribution on the last day. People all over the country participate in these competitions to win exciting prizes and goodies and to witness one of India's biggest cultural festival.
            </p>
          </div>
        </div>

        {/* Events List */}
        <div>
          <MaskedHeading
              lines={['OUR EVENTS']}
              className="font-heading text-[36px] md:text-[60px] font-[500] uppercase text-white"
            />

          {/* Increased to gap-32 (128px) for massive space between separate events */}
          <div className="flex flex-col gap-32">
            {kartavyaEventsData.map((event, index) => (
              <div key={index} className="flex flex-col w-full">
                
                {/* Event Image - Increased mb-6 to mb-16 (64px) for perfect spacing above text */}
                <div className="w-full aspect-[16/9] md:aspect-[21/9] bg-[#111111] mb-12 md:mb-16 overflow-hidden rounded-md">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Event Text Split Layout */}
                <div className="flex flex-col md:flex-row justify-between items-start gap-4 md:gap-10">
                  <h3 className="font-heading text-2xl md:text-3xl uppercase text-white tracking-wide md:w-1/3 shrink-0">
                    {event.title}
                  </h3>
                  
                  {/* 3-4 Line Wrapper */}
                  <p className="font-body text-[#A3A3A3] text-[15px] md:text-[17px] leading-relaxed md:w-2/3 max-w-[700px]">
                    {event.description}
                  </p>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default KartavyaEvents;