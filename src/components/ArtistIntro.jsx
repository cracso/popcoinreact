import React from 'react';
import FadeInSection from './FadeInSection';
import SlothWaving from '../assets/Sloth_waving.png';

const ArtistIntro = () => (
    <section id="intro" className="section-warm">
        <FadeInSection>
             <div className="section-container text-center">
                 <img 
                    src={SlothWaving} 
                    alt="Artist Sloth Waving" 
                    className="artist-intro-img"
                 />
                 <h2 className="section-title">A Introduction from the Artist</h2>
                 <div className="section-divider"></div>
                 <p className="section-subtitle artist-intro-text">
                     This is "The Sentry Sanctuary." It isn't a massive company with a complex roadmap. It's just me, an artist, creating a world one sloth at a time. I was inspired to create something that reflects a different pace—a "slow art" movement in a world that moves too fast.
                 </p>
                 <p className="section-subtitle artist-intro-text">
                     Each sloth in this collection is a uniquely generated and carefully curated 1-of-1 piece of art. I am personally directing the creation of every character using a blend of artistic vision and AI tools, ensuring each one has its own unique personality and story.
                 </p>
                 <p className="section-subtitle artist-intro-text">
                     The plan is simple: create beautiful art, foster a kind community, and make a positive impact along the way. Being from Ecuador, the mission to protect its rainforest—the home of the real-life sloths that inspired this art—is deeply personal to me.
                 </p>
            </div>
        </FadeInSection>
    </section>
);

export default ArtistIntro;
