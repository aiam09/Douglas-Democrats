import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Candidates } from './pages/Candidates';
import { Voting } from './pages/Voting';
import { Events } from './pages/Events';
import { News } from './pages/News';
import { Volunteer } from './pages/Volunteer';
import { Contact } from './pages/Contact';
import { Merch } from './pages/Merch';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-white font-sans text-slate-900">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/candidates" element={<Candidates />} />
            <Route path="/voting" element={<Voting />} />
            <Route path="/events" element={<Events />} />
            <Route path="/news" element={<News />} />
            <Route path="/volunteer" element={<Volunteer />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/merch" element={<Merch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;