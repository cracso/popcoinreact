import React from 'react';
import FadeInSection from './FadeInSection';

const Hero = () => (
    <section className="hero-section">
        <FadeInSection>
            <div className="hero-grid">
                <div className="hero-content">
                    <h1 className="hero-title">
                        The Sentry Sanctuary
                        <span className="hero-title-highlight">An Artist's Collection & <br /> A Shared Mission.</span>
                    </h1>
                    <div className="hero-actions" style={{ marginTop: '2.5rem' }}>
                        <a href="#art" className="btn-primary">
                            View the Collection
                        </a>
                        <a href="#mission" className="btn-secondary">
                            Learn About Our Mission
                        </a>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default Hero;
