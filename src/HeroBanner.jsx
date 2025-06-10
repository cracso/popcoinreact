import React from 'react';
import { NavLink } from 'react-router-dom';
import popHero from './assets/pop-hero.png';

const HeroBanner = () => (
  <section className="hero-banner">
    <div className="hero-content">
      <div className="hero-img">
        <img src={popHero} alt="Sentry Sloth Hero" />
      </div>
      <div className="hero-text">
        <span className="powered">Powered by Cardano</span>
        <h1>$PoP Coin: Fair Drops for Real Fans</h1>
        <h2>Tired of 'Sold Out in Seconds'?</h2>
        <p className="sub-headline">$PoP Coin uses the power of the Cardano blockchain to give real fans a fair shot. It's time to beat the bots.</p>
        <div className="cta-buttons">
          <NavLink to="/litepaper" className="btn btn-primary">Read the Litepaper</NavLink>
          <a href="https://discord.gg/NXRUFmHBZU" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Join the Community</a>
        </div>
      </div>
    </div>
  </section>
);

export default HeroBanner;
