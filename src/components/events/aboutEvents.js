import MaskedHeading from '../MaskedHeading';

function AboutEvents() {
  return (
    <section
      id="about-section"
      className="bg-black text-white px-[50px] py-[80px] relative min-h-[340px] flex flex-col justify-between"
    >
      <div>
        <MaskedHeading
          lines={['ABOUT', 'EVENTS']}
          className="font-heading font-[500] text-[96px] leading-[1] uppercase"
        />
      </div>

      <div className="self-end max-w-[640px] text-left mt-20">
        <p className="font-body text-[20px] text-white/70">
          Alcheringa has many competitions spread across various genres. They take
          place during the three days with the prize distribution on the last day. People
          all over the country participate in these competitions to win exciting prizes
          and goodies and to witness one of India&apos;s biggest cultural festival.
        </p>
      </div>
    </section>
  );
}

export default AboutEvents;
