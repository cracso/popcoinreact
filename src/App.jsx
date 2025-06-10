import React, { useState } from 'react';
import './App.css';
import popCoinLogo from './assets/logo-balance.png';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroBanner from './HeroBanner';
import HowItWorks from './HowItWorks';
import TrustSection from './TrustSection';
import LitepaperSection from './LitepaperSection';
import AboutSection from './AboutSection';
import Footer from './Footer';

function App() {
  const [section, setSection] = useState('home');

  return (
    <Router>
      <div className="App">
        <Header section={section} setSection={setSection} />
        <main>
          <Routes>
            <Route path="/" element={<AboutSection />} />
            <Route path="/litepaper" element={<LitepaperSection />} />
            <Route path="/trust" element={<TrustSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
