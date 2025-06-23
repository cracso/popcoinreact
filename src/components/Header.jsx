import React, { useState, useEffect } from 'react';
import '../App.css'; // Corrected import path

const Header = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);
    const [isScrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            if (isMenuOpen) setMenuOpen(false); // Close mobile menu on scroll
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isMenuOpen]);

    const navLinks = [
        { href: '#art', text: 'The Art' },
        { href: '#mission', text: 'Our Mission' },
        { href: '#journey', text: 'The Journey' },
        { href: '#collector', text: 'Collectors' },
    ];
    
    return (
        <header className={isScrolled ? 'shadow-md' : ''}>
            <div className="header-container">
                <a href="#" className="header-title">
                    The Sentry <span>Sanctuary</span>
                </a>
                <nav className="nav-links">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} className="nav-link">{link.text}</a>
                    ))}
                </nav>
                <div>
                    <a href="#" className="join-btn">Join Us</a>
                    <button
                        onClick={() => setMenuOpen(!isMenuOpen)}
                        className="menu-toggle"
                        aria-label="Toggle navigation menu"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
                        </svg>
                    </button>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <nav className="mobile-menu open">
                    {navLinks.map(link => (
                        <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.text}</a>
                    ))}
                    <a href="#" className="join-btn" style={{ margin: '1rem auto 0', display: 'block', maxWidth: 200 }}>Join Us</a>
                </nav>
            )}
        </header>
    );
};

export default Header;
