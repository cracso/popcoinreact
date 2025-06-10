import React, { useState } from 'react';
import popCoinLogo from './assets/$pop-coin.png';

const Header = ({ section, setSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (target) => {
    setSection(target);
    setMenuOpen(false);
  };

  return (
    <header>
      <nav className="main-nav">
        <h2 className="logo-title">
          <img src={popCoinLogo} alt="PoP Coin Logo" />
          POP-COIN
        </h2>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(m => !m)}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <div className={`internal-links${menuOpen ? ' open' : ''}`}>
          <a href="#" className={section === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</a>
          <a href="#" className={section === 'litepaper' ? 'active' : ''} onClick={() => handleNavClick('litepaper')}>Litepaper</a>
          <a href="#" className={section === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
