import React from 'react';
import FadeInSection from './FadeInSection';

// Import your icons from assets
import MissionIcon1 from '../assets/shield-plant-icon.png';
import MissionIcon2 from '../assets/hands-plant-icon.png';
import MissionIcon3 from '../assets//Solidarity-Sloth-Icon.png';

const Mission = () => {
    const missionPillars = [
        {
            icon: <img src={MissionIcon1} alt="Direct Land Preservation" className="mission-icon-img" />,
            title: "Direct Land Preservation",
            text: "Funding the purchase of pristine rainforest to place into legally protected reserves, directly preventing deforestation."
        },
        {
            icon: <img src={MissionIcon2} alt="Habitat Restoration" className="mission-icon-img" />,
            title: "Habitat Restoration",
            text: "Supporting initiatives that plant native tree species in degraded areas to rebuild the forest canopy for wildlife."
        },
        {
            icon: <img src={MissionIcon3} alt="Supporting Indigenous Guardians" className="mission-icon-img" />,
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
