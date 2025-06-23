import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import ArtistIntro from './components/ArtistIntro';
import ArtAndEthos from './components/ArtAndEthos';
import Mission from './components/Mission';
import Journey from './components/Journey';
import CollectorExperience from './components/CollectorExperience';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.backgroundColor = '#FDFBF8';
    document.body.style.color = '#44403c';
    document.documentElement.classList.add('scroll-smooth');
  }, []);

  return (
    <>
      <Header />
      <main>
        <Hero />
        <ArtistIntro />
        <ArtAndEthos />
        <Mission />
        <Journey />
        <CollectorExperience />
      </main>
      <Footer />
    </>
  );
}
