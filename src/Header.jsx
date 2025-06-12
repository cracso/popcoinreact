import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import popCoinLogo from './assets/$pop-coin.png';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="main-nav">
        <h2 className="logo-title">
          <img src={popCoinLogo} alt="PoP Coin Logo" />
        </h2>
        <button className="nav-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(m => !m)}>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
          <span className="hamburger"></span>
        </button>
        <div className={`internal-links${menuOpen ? ' open' : ''}`}>
          <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Home</NavLink>
          <NavLink to="/manifesto" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>Manifesto</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''} onClick={() => setMenuOpen(false)}>About</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
