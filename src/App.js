import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import all your page components
import Home from './pages/home';
import Competitions from './pages/competitions';
import Events from './pages/events';
import Kartavya from './pages/kartavya';
import MUN from './pages/mun';
import CAProgram from './pages/ca';
import Team from './pages/team';

function App() {
  return (
    <Router>
      <div className="App w-full min-h-screen bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/events" element={<Events />} />
          <Route path="/kartavya" element={<Kartavya />} />
          <Route path="/mun" element={<MUN />} />
          <Route path="/ca-program" element={<CAProgram />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;