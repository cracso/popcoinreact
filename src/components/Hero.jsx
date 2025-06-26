import React from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => (
    <section className="hero-section">
        <FadeInSection>
            <div className="hero-grid">
                <div className="hero-content">
                    <h1 className="hero-title">
                        Patience is Power.
                        <span className="hero-title-highlight">Pop is proof.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Welcome to the Citadel—a fair launch ecosystem guarded by The Sentry Sloth, designed to give real fans the advantage.
                    </p>
                    <div className="hero-actions">
                        <a href="#art" className="btn-primary">
                            View the Collection
                        </a>
                        <a href="#mission" className="btn-secondary">
                            Learn About Our Mission
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-card">
                        <img src={require('../assets/upscale-full-body-sloth.png')} 
                             alt="Sentry the Sloth." 
                             className="hero-image"/>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default Hero;
