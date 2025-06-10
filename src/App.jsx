import React, { useState } from 'react';
import './App.css';
import popCoinLogo from './assets/logo-balance.png';
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
    <div className="App">
      <Header section={section} setSection={setSection} />
      <main>
        {section === 'home' && (
          <section className="doc-section" id="home">
            <HeroBanner setSection={setSection} />
            <HowItWorks />
            <TrustSection />
          </section>
        )}
        {section === 'litepaper' && <LitepaperSection />}
        {section === 'about' && <AboutSection setSection={setSection} />}
      </main>
      <Footer />
    </div>
  );
}

export default App;
