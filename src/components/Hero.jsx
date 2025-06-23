import React from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => (
    <section className="hero-section">
        <FadeInSection>
            <div className="hero-grid">
                <div className="hero-content">
                    <h1 className="hero-title">
                        A Living Collection.
                        <span className="hero-title-highlight">A Shared Purpose.</span>
                    </h1>
                    <p className="hero-subtitle">
                        Welcome to The Sentry Sanctuary—a "slow art" movement celebrating patience, craftsmanship, and a genuine connection between artist and collector.
                    </p>
                    <div className="hero-actions">
                        <a href="#" className="btn-primary">
                            Explore the Collection
                        </a>
                        <a href="#mission" className="btn-secondary">
                            Our Mission
                        </a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-card">
                        <img src={require('../assets/upscale-full-body-sloth.png')} 
                             alt="A Sentry Sloth NFT full body illustration." 
                             className="hero-image"/>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default Hero;
