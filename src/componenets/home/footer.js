import alcherLogo from '../../assets/images/alcher-logo.png'
import facebookIcon from '../../assets/images/facebook.svg';
import twitterIcon from '../../assets/images/twitter-x.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import youtubeIcon from '../../assets/images/youtube.svg';
import mailIcon from '../../assets/images/envelope.svg';
import phoneIcon from '../../assets/images/telephone.svg';

const quickLinks = [
  { label: 'Competitions', href: '#' },
  { label: 'Events', href: '#' },
  { label: 'Kartavya', href: '#' },
  { label: 'MUN', href: '#' },
  { label: 'Campus Ambassador', href: '#' },
  { label: 'Team', href: '#' },
];

const contacts = [
  {
    name: 'Mayank Sahu',
    role: 'PR Head',
    phone: '+91 8827412678',
    email: 'mayank@alcheringa.in',
  },
  {
    name: 'Shubham Kumar',
    role: 'PR Head',
    phone: '+91 72096 88170',
    email: 'shubham@alcheringa.in',
  },
];

const socials = [
  { icon: facebookIcon, href: '#', alt: 'Facebook' },
  { icon: twitterIcon, href: '#', alt: 'Twitter' },
  { icon: instagramIcon, href: '#', alt: 'Instagram' },
  { icon: youtubeIcon, href: '#', alt: 'YouTube' },
];

function Footer() {
  return (
    <footer className="bg-black w-full relative py-[60px] px-[50px] font-body text-white">
      <div className="flex flex-wrap justify-between gap-12">

        {/* Left: logo + business contact + socials + credits */}
        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-3">
            <img src={alcherLogo} alt="Alcheringa Logo" className="h-[70px] w-auto" />
            <div className="flex flex-col items-start justify-center">
              <p className="text-[15px] font-bold">IIT Guwahati's</p>
              <p className="text-[34px] font-bold leading-[38px]">Alcheringa</p>
              <p className="text-[15px] font-bold ml-[130px]">2026</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-[16px] text-gray-300">For business related queries</p>
            <a href="mailto:alcheringa@iitg.ac.in" className="flex items-center gap-2 font-semibold">
              <img src={mailIcon} alt="" className="w-4 h-4 bg-black "  />
              <p className="text-[16px] font-body font-[500] text-white">alcheringa@iitg.ac.in</p>
            </a>
          </div>

          <div className="flex items-center gap-4">
            {socials.map(({ icon, href, alt }, i) => (
              <a key={i} href={href} target="_blank" rel="noopener noreferrer">
                <img src={icon} alt={alt} className="w-5 h-5" />
              </a>
            ))}
          </div>

          <div className="text-xs text-gray-400 leading-relaxed">
            <p>Designed by Team Creatives.</p>
            <p>Developed by Team Web Operations.</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col gap-4">
          <h4 className="text-[16px] font-body font-[500] text-gray-400">Quick Links</h4>
          <div className="flex flex-col gap-3 text-[16px] font-[500] text-white-300">
            {quickLinks.map(link => (
              <a key={link.label} href={link.href} className="text-sm">
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* For General Queries */}
        <div className="flex flex-col gap-[24px]">
          <h4 className="text-[16px] font-body font-[500] text-gray-400">For General Queries</h4>
          <div className="flex flex-col gap-[24px]">
            {contacts.map((c, i) => (
              <div key={i} className="flex flex-col gap-[4px]">
                <p className="text-[20px] font-body font-[700] text-white-100">{c.name}</p>
                <p className="text-[16px] font-body font-[500] text-white-100">{c.role}</p>
                <a href={`tel:${c.phone}`} className="flex items-center gap-2 text-xs">
                  <img src={phoneIcon} alt="" className="w-3.5 h-3.5" />
                  <p className="text-[16px] font-body font-[500] text-gray-400">{c.phone}</p>
                </a>
                <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-xs">
                  <img src={mailIcon} alt="" className="w-3.5 h-3.5" />
                  <p className="text-[16px] font-body font-[500] text-gray-400">{c.email}</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-10 pt-4" />
    </footer>
  )
}

export default Footer;