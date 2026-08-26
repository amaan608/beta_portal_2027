import React from 'react';
import MaskedHeading from '../MaskedHeading';
import memberPlaceholder from '../../assets/images/member-placeholder.jpg';

const teamData = [
  
  {
    department: "Public Relations and Branding",
    members: [
      { name: "Mayank Sahu", position: "Public Relations Head", phone: "+91 8827412678", email: "mayank@alcheringa.co.in", image: "Mayank.JPG" },
      { name: "Shubham Kumar", position: "Public Relations Head", phone: "+91 7209688170", email: "shubham@alcheringa.co.in", image: "Shubham.JPG" },
      { name: "Rajat Jain", position: "Media and Outreach Head", phone: "+91 772709933", email: "rajat@alcheringa.co.in", image: "Rajat.jpeg" }
    ]
  },
  {
    department: "Corporate Relations and Marketing",
    members: [
      { name: "Shahdat", position: "Corporate Relations and Marketing Head", phone: "+91 8822886099", email: "shahdat@alcheringa.co.in", image: "Shahdat.JPG" },
      { name: "Anurag Solanki", position: "Corporate Relations and Marketing Head", phone: "+91 6266796402", email: "anurag@alcheringa.co.in", image: "Anurag.JPG" },
      { name: "Debopriya Das", position: "Corporate Relations and Marketing Head", phone: "+91 8585861289", email: "debopriyadas@alcheringa.co.in", image: "Debopriya.JPG" },
      { name: "Vansh Yadav", position: "Corporate Relations and Marketing Head", phone: "+91 7206120179", email: "vansh@alcheringa.co.in", image: "Vansh.jpeg" }
       ]
  },
  {
    department: "Events",
    members: [
      { name: "Manas Dhote", position: "Pronites Coordinator", phone: "+91 7470343605", email: "manas@alcheringa.co.in", image: "Manas.JPG" },
      { name: "Soumik Roy", position: "Campaigns Head", phone: "+91 7318866005", email: "soumik@alcheringa.co.in", image: "Soumik.JPG" },
      { name: "Vedhansh Sisodiya", position: "Event Management Head", phone: "+91 9340989957", email: "vedhansh@alcheringa.co.in", image: "Vedhansh.JPG" }
    ]
  },
  {
    department: "Team Creatives",
    members: [
      { name: "Karan Dhokariya", position: "Web Design Head", phone: "+91 9284210932", email: "karan@alcheringa.co.in", image: "Karan.JPG" },
      { name: "Haridev", position: "Creatives Head", phone: "+91 9342887341", email: "haridev@alcheringa.co.in", image: "Haridev.JPG" },
      { name: "Raina Agrawal", position: "Digital Media Head", phone: "+91 8269522500", email: "raina@alcheringa.co.in", image: "Raina.JPG" }
    ]
  },
  {
    department: "Web and App Operations",
    members: [
      { name: "Amaan Farooq", position: "Web Operations Head", phone: "+91 8493944242", email: "amaan@alcheringa.co.in", image: "Amaan.JPG" },
      { name: "Raunak Khetan", position: "Web Operations Head", phone: "+91 9931315284", email: "raunak@alcheringa.co.in", image: "Raunak.JPG" },
      { name: "Kaustubh Goel", position: "AppOps Head", phone: "+91 9627677722", email: "kaustubh@alcheringa.co.in", image: "Kaustubh.JPG" }
    ]
  },
  {
    department: "MUN",
    members: [
      { name: "Rishav", position: "Secretary General", phone: "+91 7023315765", email: "rishav@alcheringa.co.in", image: "Rishav.JPG" },
      { name: "Ananya", position: "Director General IITGMUN", phone: "+91 9121066648", email: "ananya@alcheringa.co.in", image: "Ananya.JPG" }
    ]
  },
  {
    department: "OVERALL COORDINATORS",
    members: [
      { name: "Vivek Saini", position: "Convenor", phone: "+91 9368226899", email: "vivekk@alcheringa.co.in", image: "Vivek.JPG" },
      { name: "Anshul Tanwar", position: "Finance Head", phone: "+91 7015354736", email: "anshul@alcheringa.co.in", image: "Anshul.JPG" }
    ]
  }
];

function TeamList() {
  return (
    <section id="team-section" className="w-full bg-black text-white px-8 md:px-[80px] pb-32 border-t border-[#1E3A8A]">
      <div className="max-w-7xl mx-auto pt-24">
        
        <div id="about-section" className="mb-20">
          <MaskedHeading
            lines={['OUR TEAM']}
            className="font-heading text-[38px] md:text-[64px] font-[500] uppercase text-white"
          />
        </div>

        <div className="flex flex-col gap-24">
          {teamData.map((dept, index) => (
            <div key={index} className="flex flex-col">
              <h3 className="font-heading text-2xl uppercase mb-10 text-white tracking-wide">
                {dept.department}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-16">
                {dept.members.map((member, idx) => (
                  <div key={idx} className="flex flex-col">
                    <div className="relative w-full aspect-[3/4] bg-[#111111] mb-4 overflow-hidden rounded-md">
                      <img 
                        src={member.image ? `/team-photos/${member.image}` : memberPlaceholder} 
                        alt={member.name} 
                        onError={(e) => { e.target.src = memberPlaceholder }}
                        className="absolute inset-0 w-full h-full object-cover block" 
                      />
                    </div>
                    <h4 className="font-body text-lg font-bold text-white leading-snug">{member.name}</h4>
                    <p className="font-body text-sm font-medium text-[#A3A3A3] mb-2">{member.position}</p>
                    
                    {/* Clickable Phone Number */}
                    {member.phone && member.phone !== "Phone" ? (
                      <a href={`tel:+91${member.phone.replace(/\D/g, '').slice(-10)}`} className="font-body text-xs font-medium text-[#A3A3A3] hover:text-[#FC6840] transition-colors block mb-1">
                        {member.phone}
                      </a>
                    ) : (
                      <p className="font-body text-xs font-medium text-[#A3A3A3] mb-1">{member.phone}</p>
                    )}

                    {/* Clickable Email */}
                    {member.email && member.email !== "Mail" ? (
                      <a href={`mailto:${member.email}`} className="font-body text-xs font-medium text-[#A3A3A3] hover:text-[#FC6840] transition-colors block">
                        {member.email}
                      </a>
                    ) : (
                      <p className="font-body text-xs font-medium text-[#A3A3A3]">{member.email}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default TeamList;