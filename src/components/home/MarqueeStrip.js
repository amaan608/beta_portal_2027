function MarqueeStrip() {
  const texts = Array.from({ length: 8 }, () => `ALCHERINGA 2027   `);

  return (
    <div className="bg-black w-full overflow-hidden py-4">
      <div className="flex w-max animate-marquee">
        {texts.map((t, i) => (
          <span
            key={`a-${i}`}
            className="font-heading text-white uppercase mx-8 shrink-0 select-none"
            style={{ fontSize: '128px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0%' }}
          >
            {t}
          </span>
        ))}
        {texts.map((t, i) => (
          <span
            key={`b-${i}`}
            className="font-heading text-white uppercase mx-8 shrink-0 select-none"
            style={{ fontSize: '128px', fontWeight: 700, lineHeight: '100%', letterSpacing: '0%' }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;