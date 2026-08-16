import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Competitions from './pages/competitions';
import Events from './pages/events';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/competitions" element={<Competitions />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;