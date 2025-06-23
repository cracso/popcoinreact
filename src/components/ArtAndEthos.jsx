import React from 'react';
import FadeInSection from './FadeInSection';

const ArtAndEthos = () => (
     <section id="art" className="section">
        <FadeInSection>
            <div className="section-container">
                <div className="art-ethos-grid">
                    <div>
                        <h3 className="section-title">The Character: Sentry the Sloth</h3>
                        <p className="section-subtitle">
                           Sentry is more than a digital avatar; he is an icon of intention. He’s a gentle reminder to slow down, be present, and find beauty in the quiet moments. The name "Sentry" was chosen with purpose—he is a guardian of this slower pace of life and a sentinel for the natural world he represents.
                        </p>
                        <h3 className="section-title mt">The Ethos: The Art of the Pause</h3>
                         <p className="section-subtitle">
                           The core identity of The Sentry Sanctuary is mindfulness. This is a "slow-growth" collection, where the integrity of the art and the strength of the community take precedence over hype or rapid expansion.
                        </p>
                    </div>
                     <div className="art-ethos-images">
                        <img src={require('../assets/Sentry_004.png')} alt="Sentry #001 NFT" className="art-ethos-img"/>
                        <img src={require('../assets/Sentry_001.png')} alt="Sentry #002 NFT" className="art-ethos-img mt"/>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default ArtAndEthos;
