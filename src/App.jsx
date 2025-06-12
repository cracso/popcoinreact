import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './Header';
import HeroBanner from './HeroBanner';
import HowItWorks from './HowItWorks';
import TrustSection from './TrustSection';
import ManifestoSection from './ManifestoSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroBanner />
                <HowItWorks />
                <TrustSection />
              </>
            } />
            <Route path="/manifesto" element={<ManifestoSection />} />
            <Route path="/trust" element={<TrustSection />} />
            <Route path="/about" element={<AboutSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
