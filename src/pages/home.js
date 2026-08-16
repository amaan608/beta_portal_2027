import Navbar from '../components/Navbar';
import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventHighlight from "../components/home/eventHighlight";
import FeaturedBanner from "../components/home/FeaturedBanner";
import MarqueeStrip from '../components/home/MarqueeStrip';
import Footer from "../components/home/footer";

function Home() {
    return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden">
          <Navbar />
          <main>
              <HeroSection />
              <AboutSection />
              <EventHighlight />
              <FeaturedBanner />
          </main>
          <Footer />
          <MarqueeStrip />
        </div>
    );
}

export default Home;