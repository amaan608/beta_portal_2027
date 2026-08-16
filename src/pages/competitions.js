import Navbar from '../components/Navbar';
import Footer from '../components/home/footer';
import MarqueeStrip from '../components/home/MarqueeStrip';
import HeroComp from '../components/competitions/heroComp';
import AboutComp from '../components/competitions/aboutComp';
import EventComp from '../components/competitions/eventComp';
import AllComp from '../components/competitions/allcomp';

function Competitions() {
  return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden">
          <Navbar />
          <main>
            <HeroComp />
            <AboutComp />
            <EventComp/>
            <AllComp />
          </main>
          <Footer />
          <MarqueeStrip />
        </div>
    );
}

export default Competitions;