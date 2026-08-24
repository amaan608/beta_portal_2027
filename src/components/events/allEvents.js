import MaskedHeading from '../MaskedHeading';
import Proshows from '../../assets/images/comp-events/proshows.jpg';
import Pronite from '../../assets/images/comp-events/Pronite.png';
import Creator from '../../assets/images/comp-events/creator-camp.png';
import Flick from '../../assets/images/comp-events/flickeringa.png';
import Critical from '../../assets/images/comp-events/critical-damage.png';

const modules = [
  {
    title: 'PRONITES',
    image: Pronite,
  },
  {
    title: 'PROSHOWS',
    image: Proshows,
  },
  {
    title: "CREATOR'S CAMP",
    image: Creator,
  },
  {
    title: 'CRITICAL DAMAGE',
    image: Critical,
  },
  {
    title: 'FLICKERINGA',
    image: Flick,
  },
 
];

function ModuleCard({ title, description, image }) {
  return (
    <article className="group relative w-[313px] h-[412px] flex flex-col gap-6 overflow-hidden">
      {/* Image: 360 → 293 on hover */}
      <div className="w-[313px] h-[360px] shrink-0 overflow-hidden transition-[height] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-[293px]">
        <img
          src={image}
          alt={title}
          className="block w-full h-full object-cover"
        />
      </div>

      {/* Title + description (description only on hover, stays inside 412px) */}
      <div className="flex min-h-0 flex-1 flex-col overflow-hidden">
        <h3 className="font-heading text-white text-[28px] font-[500] leading-none uppercase m-0 shrink-0">
          {title}
        </h3>
      </div>
    </article>
  );
}

function AllEvents() {
  return (
    <section className="bg-black text-white px-[50px] py-[80px]">
      <div className="mb-16">
        <MaskedHeading
          lines={['OUR EVENTS']}
          className="font-heading font-[500] text-[38px] md:text-[64px] leading-[1] uppercase"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12 justify-items-start">
        {modules.map((mod) => (
          <ModuleCard key={mod.title} {...mod} />
        ))}
      </div>
    </section>
  );
}

export default AllEvents;
