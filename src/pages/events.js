import Navbar from '../components/Navbar';
import Footer from '../components/home/footer';
import MarqueeStrip from '../components/home/MarqueeStrip';
import HeroEvents from '../components/events/heroEvents';
import AboutEvents from '../components/events/aboutEvents';
import AllEvents from '../components/events/allEvents';

function Events() {
  return (
        <div className="w-full min-h-screen bg-black overflow-x-hidden">
          <Navbar />
          <main>
            <HeroEvents />
            <AboutEvents />
            <AllEvents />
          </main>
          <Footer />
          <MarqueeStrip />
        </div>
    );
}

export default Events;