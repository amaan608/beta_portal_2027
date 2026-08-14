import bannerImg from '../../assets/images/featured-banner.png';

function FeaturedBanner() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background image */}
      <img
        src={bannerImg}
        alt="Alcheringa live event"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient fade — dark at top and bottom, clear in the middle */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80" />

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col items-center justify-between py-10 text-center px-4">
        <p className="font-heading text-[#FC6840] font-bold tracking-wide text-[32px] top-[60px] absolute">
          THE WAIT ENDS HERE.
        </p>

        <div className="font-heading text-[#F8C93D] flex flex-col items-center bottom-[20px] absolute">
          <p className=" text-[32px] font-[500]">
            WELCOME TO 31ST EDITION OF
          </p>
          <p className=" text-[60px] font-[500] uppercase">
            Alcheringa
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedBanner;