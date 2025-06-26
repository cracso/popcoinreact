import React from 'react';
import FadeInSection from './FadeInSection';

const Journey = () => {
    const journeyPhases = [
        { phase: "Phase 1", principle: "The Genesis Collection", description: "My initial focus is singular: creating and releasing the first wave of Sentry the Sloth NFTs. Each one will be meticulously crafted and released as it's completed, allowing the collection to grow at a natural, un-rushed pace." },
        { phase: "Phase 2", principle: "Cultivating The Sanctuary", description: "As the first collectors join, my priority will be building our community space. This will be a private, cozy corner of the internet for holders to share ideas, appreciate the art, and get to know the artist directly." },
        { phase: "Phase 3", principle: "Deepening Our Impact", description: "The future of The Sentry Sanctuary will be shaped by its earliest supporters. We will collectively decide on the best ways to grow our charitable impact, explore potential collaborations, and determine what comes next for the world of Sentry." },
    ];

    // Define an array of image icons (one for each phase)
    const journeyIcons = [
        <img src={require('../assets/Icon- (1).png')} alt="Phase 1 Icon" className="journey-icon" key="icon1" />,
        <img src={require('../assets/Icon- (3).png')} alt="Phase 2 Icon" className="journey-icon" key="icon2" />,
        <img src={require('../assets/Icon- (2).png')} alt="Phase 3 Icon" className="journey-icon" key="icon3" />
    ];

    // Helper to detect mobile (simple window width check)
    const [isMobile, setIsMobile] = React.useState(false);
    React.useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 700);
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="journey" className="section">
            <FadeInSection>
                 <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">The Journey Ahead — A Living Roadmap</h2>
                        <p className="section-subtitle">Since this project is a personal endeavor, the future is an open book that we will write together. There is no rigid, multi-year schedule. Instead, we have a set of guiding principles for how the collection will grow organically.</p>
                    </div>
                    {isMobile ? (
                        <div className="journey-cards-wrapper">
                            {journeyPhases.map((item, index) => (
                                <div className="journey-card" key={index}>
                                    <div className="journey-card-icon">{journeyIcons[index]}</div>
                                    <div className="journey-card-content">
                                        <div className="journey-card-phase">{item.phase}</div>
                                        <div className="journey-card-principle">{item.principle}</div>
                                        <div className="journey-card-description">{item.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="journey-table-wrapper">
                            <table className="journey-table">
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Phase</th>
                                        <th>Guiding Principle</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {journeyPhases.map((item, index) => (
                                        <tr key={index}>
                                            <td style={{textAlign: 'center'}}>
                                                {journeyIcons[index]}
                                            </td>
                                            <td className="journey-phase">{item.phase}</td>
                                            <td className="journey-principle">{item.principle}</td>
                                            <td>{item.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            </FadeInSection>
        </section>
    );
};

export default Journey;
