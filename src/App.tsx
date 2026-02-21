import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Experiences from './pages/Experiences';
import Projects from './pages/Projects';
import Musings from './pages/Musings';
import Resume from './pages/Resume';
import WIP from './pages/WIP';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiences" element={<Experiences />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/musings" element={<Musings />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/wip" element={<WIP />} />
        {/* Placeholder for other routes */}
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
