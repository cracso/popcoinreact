import React from 'react';
import FadeInSection from './FadeInSection';

// Import your icons from assets
import Icon1 from '../assets/frame_icon.png';
import Icon2 from '../assets/message_bubble_icon.png';
import Icon3 from '../assets/open_book_icon.png';
import Icon4 from '../assets/heart_leaf_icon.png'; // Example, change as needed

const CollectorExperience = () => {
    const valueProps = [
        {
            icon: <img src={Icon1} alt="1-of-1 Piece of Art" className="value-icon-img" />, // Use your asset icon
            title: "The Art Itself",
            text: "The primary value is the art. You are acquiring a unique, 1-of-1 piece from the ground floor of an emerging artist's collection."
        },
        {
            icon: <img src={Icon2} alt="Direct Connection" className="value-icon-img" />,
            title: "Direct Access to the Artist",
            text: "You will have a direct line to me, the creator. Ask me about my process, suggest ideas for the next sloth, and be a true patron of the art."
        },
        {
            icon: <img src={Icon3} alt="Foundational Role" className="value-icon-img" />,
            title: "A Place in the Story",
            text: "As a genesis holder, you are a part of the foundation. You will have priority consideration for any future art I create within this universe."
        },
        {
            icon: <img src={Icon4} alt="Guardian of the Mission" className="value-icon-img" />,
            title: "Patron of a Cause",
            text: "Your purchase directly contributes to our shared mission of rainforest preservation. You become an active participant in the project's positive real-world impact."
        },
    ];
    return (
        <section id="collector" className="section-warm">
            <FadeInSection>
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">The Collector's Experience</h2>
                        <p className="section-subtitle">The "utility" of holding a Sentry the Sloth NFT is direct, simple, and valuable.</p>
                    </div>
                    <div className="value-cards">
                        {valueProps.map((prop, index) => (
                             <div key={index} className="value-card">
                                <div className="value-card-icon">{prop.icon}</div>
                                <h4 className="value-card-title">{prop.title}</h4>
                                <p className="value-card-text">{prop.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </FadeInSection>
        </section>
    );
};

export default CollectorExperience;
