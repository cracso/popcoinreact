import React from 'react';
import FadeInSection from './FadeInSection';

const Journey = () => {
    const journeyPhases = [
        { phase: "Phase 1", principle: "The Genesis Collection", description: "My singular focus is on the art. The first wave will be released at a natural, un-rushed pace, ensuring each piece is crafted with integrity." },
        { phase: "Phase 2", principle: "Cultivating The Sanctuary", description: "As collectors arrive, my priority will be building our private community space—a cozy digital haven for holders to connect directly with me." },
        { phase: "Phase 3", principle: "Deepening Our Impact", description: "Together, we will decide how to best grow The Sanctuary Fund, explore meaningful collaborations, and determine what comes next for the world of Sentry." },
    ];
    return (
        <section id="journey" className="section">
            <FadeInSection>
                 <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">Our Path Forward</h2>
                        <p className="section-subtitle">Our growth is guided by principles, not a rigid schedule. We grow organically, with the community and the art as our focus.</p>
                    </div>
                    <div className="journey-table-wrapper">
                        <table className="journey-table">
                            <thead>
                                <tr>
                                    <th>Phase</th>
                                    <th>Guiding Principle</th>
                                    <th>Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {journeyPhases.map((item, index) => (
                                    <tr key={index}>
                                        <td className="journey-phase">{item.phase}</td>
                                        <td className="journey-principle">{item.principle}</td>
                                        <td>{item.description}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default Journey;
