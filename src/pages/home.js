import FeaturedBanner from "../componenets/home/FeaturedBanner";
import Footer from "../componenets/home/footer";
import MarqueeStrip from '../componenets/home/MarqueeStrip';
import EventHighlight from "../componenets/home/eventHighlight";

function Home() {
    return (
        <>
          <EventHighlight/>
          <FeaturedBanner/>
          <Footer />
          <MarqueeStrip/>

        </>
    )
}

export default Home;