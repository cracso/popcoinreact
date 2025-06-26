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
            text: "We partner with established organizations to fund the acre-by-acre purchase of threatened rainforest land. This places critical habitats into legally protected reserves, creating a permanent sanctuary for wildlife."
        },
        {
            icon: <img src={MissionIcon2} alt="Habitat Restoration" className="mission-icon-img" />,
            title: "Habitat Restoration",
            text: "Our community treasury will directly fund vetted reforestation projects in Ecuador. Each contribution helps plant native tree species, rebuilding vital wildlife corridors and restoring the forest's vibrant canopy."
        },
        {
            icon: <img src={MissionIcon3} alt="Supporting Indigenous Guardians" className="mission-icon-img" />,
            title: "Supporting Indigenous Guardians",
            text: "We provide direct funding to organizations that empower Indigenous communities. This support helps with legal resources, land-titling, and monitoring equipment, ensuring they can effectively continue their role as the rainforest's primary guardians."
        },
    ];
    return (
        <section id="mission" className="section-warm">
            <FadeInSection>
                <div className="section-container text-center">
                     <h2 className="section-title">More Than Art: A Mission for Preservation</h2>
                     <p className="section-subtitle">Our mission is targeted at one of the most biodiverse places on Earth: the Amazon. A portion of all proceeds funds our real-world mission. By joining us, you help make a tangible difference for the creatures and ecosystems that inspired this art.</p>
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
