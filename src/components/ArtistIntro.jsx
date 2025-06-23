import React from 'react';
import FadeInSection from './FadeInSection';

const ArtistIntro = () => (
    <section id="intro" className="section-warm">
        <FadeInSection>
             <div className="section-container text-center">
                 <h2 className="section-title">A Message from the Artist</h2>
                 <div className="section-divider"></div>
                 <p className="section-subtitle">
                     Hello and welcome. This is The Sentry Sanctuary. It isn't a company with a complex roadmap; it's my personal art studio, a world I am building one sloth at a time. In an industry that prizes speed, I was inspired to create a "slow art" movement—a project that values patience, craftsmanship, and a genuine connection. Every sloth you see is a unique, 1-of-1 piece of art, meticulously hand-crafted by me.
                 </p>
            </div>
        </FadeInSection>
    </section>
);

export default ArtistIntro;
