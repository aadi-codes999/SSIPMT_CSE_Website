import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

/* Runs after every client-side navigation:
   1. Scrolls to the top of the page.
   2. Re-wires the IntersectionObserver so newly-rendered .fade-in
      elements become visible as the user scrolls. */
function RouteChangeHandler() {
  const location = useLocation();

  useEffect(() => {
    // Reset scroll position
    window.scrollTo({ top: 0, behavior: 'instant' });

    // Give React one tick to finish rendering the new page's DOM
    const raf = requestAnimationFrame(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1 }
      );

      // Also make sure already-visible elements above the fold are shown
      const elements = document.querySelectorAll('.fade-in');
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('visible');
        } else {
          // Remove stale 'visible' class so re-entering triggers animation
          el.classList.remove('visible');
          observer.observe(el);
        }
      });

      return () => observer.disconnect();
    });

    return () => cancelAnimationFrame(raf);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <RouteChangeHandler />
      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />}    />
          <Route path="/about"   element={<About />}   />
          <Route path="/events"  element={<Events />}  />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
