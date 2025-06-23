import React from 'react';
import FadeInSection from './FadeInSection';

const Mission = () => {
    const missionPillars = [
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" /></svg>,
            title: "Direct Land Preservation",
            text: "Funding the purchase of pristine rainforest to place into legally protected reserves, directly preventing deforestation."
        },
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>,
            title: "Habitat Restoration",
            text: "Supporting initiatives that plant native tree species in degraded areas to rebuild the forest canopy for wildlife."
        },
        { 
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-lg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
            title: "Supporting Indigenous Guardians",
            text: "Partnering with local indigenous communities who are the most effective protectors of their ancestral lands."
        },
    ];
    return (
        <section id="mission" className="section-warm">
            <FadeInSection>
                <div className="section-container text-center">
                     <h2 className="section-title">More Than Art: A Mission for Preservation</h2>
                     <p className="section-subtitle">Our mission is targeted at one of the most biodiverse places on Earth: the <span className="highlight">Amazon</span>. A portion of all proceeds funds our real-world mission.</p>
                     <div className="mission-pillars">
                        {missionPillars.map((pillar, index) => (
                             <div key={index} className="mission-card">
                                <div className="mission-icon">{pillar.icon}</div>
                                <h4 className="mission-title">{pillar.title}</h4>
                                <p className="mission-text">{pillar.text}</p>
                            </div>
                        ))}
                     </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Mission;
