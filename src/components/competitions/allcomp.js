import MaskedHeading from '../MaskedHeading';
import moduleImg from '../../assets/images/allcomp.png';

const modules = [
  {
    title: 'PRONITES',
    description:
      'Non minim irure eiusmod duis qui cupidatat. Adipisicing esse consectetur sint magna. Dolore deserunt.',
    image: moduleImg,
  },
  {
    title: 'ROCKATHON',
    description:
      'Live band battles and original sets that light up the night. Bring your amp, bring your crowd.',
    image: moduleImg,
  },
  {
    title: 'DANCE',
    description:
      'Solo and group showdowns across styles — from classical to contemporary street cyphers.',
    image: moduleImg,
  },
  {
    title: 'DRAMA',
    description:
      'Stage stories, street plays, and monologues that hold the festival audience spellbound.',
    image: moduleImg,
  },
  {
    title: 'MUSIC',
    description:
      'Vocals, instruments, and ensembles competing for the loudest cheer of Alcheringa.',
    image: moduleImg,
  },
  {
    title: 'FINE ARTS',
    description:
      'Canvases, installations, and live art that turn the campus into an open gallery.',
    image: moduleImg,
  },
  {
    title: 'LITERARY',
    description:
      'Debates, poetry, and wordplay — sharp minds, sharper lines, biggest stage.',
    image: moduleImg,
  },
  {
    title: 'QUIZZING',
    description:
      'Trivia that tests culture, science, and everything in between. Know it all, win it all.',
    image: moduleImg,
  },
  {
    title: 'FASHION',
    description:
      'Runway heat, theme walks, and design that turns every aisle into a spotlight.',
    image: moduleImg,
  },
  {
    title: 'DIGITAL',
    description:
      'Photography, film, and design challenges for creators who shoot, cut, and ship.',
    image: moduleImg,
  },
  {
    title: 'SPORTS',
    description:
      'High-energy contests that push stamina, skill, and squad spirit across the fest.',
    image: moduleImg,
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

        <p
          className="
            font-body text-[14px] leading-[1.4] text-white/60 m-0 mt-2
            max-h-0 opacity-0 overflow-hidden
            transition-[max-height,opacity] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:max-h-[72px] group-hover:opacity-100
          "
        >
          {description}
        </p>
      </div>
    </article>
  );
}

function AllComp() {
  return (
    <section className="bg-black text-white px-[50px] py-[80px]">
      <div className="mb-16">
        <MaskedHeading
          lines={['COMPETITIONS', 'MODULES']}
          className="font-heading font-[500] text-[64px] leading-[1] uppercase"
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

export default AllComp;
