import React from 'react';
import FadeInSection from './FadeInSection';

const ArtAndEthos = () => (
    <section id="art" className="section">
        <FadeInSection>
            <div className="section-container">
                <h2 className="section-title" style={{ marginBottom: '2.2rem' }}>
                    The Art, Philosophy & Mission
                </h2>
                <div className="art-ethos-grid" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3.5rem', justifyContent: 'center' }}>
                    <div style={{ flex: '1 1 480px', minWidth: 260, maxWidth: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', order: 1 }}>
                        <img 
                            src={require('../assets/Sloth_in-the-amazon.png')} 
                            alt="Sloth in the Amazon" 
                            className="art-ethos-img art-ethos-img-featured"
                            style={{ width: '100%', maxWidth: 520, borderRadius: '1.5rem', boxShadow: '0 8px 40px #0002', objectFit: 'cover', height: 'auto' }}
                        />
                    </div>
                    <div style={{ flex: '1 1 420px', minWidth: 280, maxWidth: 540, order: 2 }}>
                        <h4 className="section-subtitle" style={{ fontWeight: 700, marginTop: 0 }}>The Character: Sentry the Sloth</h4>
                        <p className="section-subtitle" style={{ marginBottom: '1.2rem' }}>
                            Sentry is more than a PFP; he's a reminder to slow down, be present, and find joy in the simple things. The art style is intentionally clean, friendly, and approachable, with a warm color palette meant to feel like a comfortable hug. Because each sloth is generated and curated one at a time, every single one is a true 1-of-1, with its own unique expression, clothing, and quirks.
                        </p>
                        <h4 className="section-subtitle" style={{ fontWeight: 700, marginTop: '1.2rem' }}>The Philosophy: "Slow Down and Hang Out"</h4>
                        <p className="section-subtitle" style={{ marginBottom: '2.2rem' }}>
                            The core identity of The Sentry Sanctuary is built around mindfulness and relaxation. This is a "slow-growth" collection, where the focus is on the quality of the art and the strength of the community, not on hype or rapid expansion.
                        </p>
                        <h3 className="section-title" style={{ marginTop: '2.5rem' }}>Our Shared Mission — Rainforest Preservation</h3>
                        <p className="section-subtitle" style={{ marginBottom: '0.8rem' }}>
                            A foundational goal of this project is to create a positive impact beyond the digital world... As a holder, you are not just a collector; <strong>you are a patron of this mission.</strong>
                        </p>
                        <p className="section-subtitle">
                            We are committed to supporting real-world conservation efforts, starting with rainforest preservation in Ecuador. A portion of proceeds from this collection will go directly to organizations working to protect sloth habitats and biodiversity. By joining us, you help make a tangible difference for the creatures and ecosystems that inspired this art.
                        </p>
                    </div>
                </div>
            </div>
        </FadeInSection>
    </section>
);

export default ArtAndEthos;
