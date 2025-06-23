import React from 'react';
import FadeInSection from './FadeInSection';

const CollectorExperience = () => {
    const valueProps = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" /></svg>,
            title: "1-of-1 Piece of Art",
            text: "Acquire a unique piece from the ground floor of an emerging artist's collection."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>,
            title: "Direct Connection",
            text: "Get a direct line to me, the creator. Suggest ideas and be a true patron of the arts."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-2a6 6 0 00-12 0v2" /></svg>,
            title: "Foundational Role",
            text: "As a genesis holder, you are part of the foundation with priority for future art."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" className="icon-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.737 16.5h.01M11 16.5h.01M14.263 16.5h.01M10 21v-4a1 1 0 011-1h2a1 1 0 011 1v4M12 3v1m0 16.02V20M4.22 4.22l.707.707M19.07 19.07l.707.707M19.071 4.22l-.707.707M4.929 19.07l-.707.707" /></svg>,
            title: "Guardian of the Mission",
            text: "Your purchase directly contributes to our shared mission of rainforest preservation."
        },
    ];
    return (
        <section id="collector" className="section-warm">
            <FadeInSection>
                <div className="section-container">
                    <div className="text-center mb-16">
                        <h2 className="section-title">The Value of a Sentry</h2>
                        <p className="section-subtitle">The utility is direct, transparent, and built on a foundation of artistry and purpose.</p>
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
