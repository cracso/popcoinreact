import React from 'react';
import useOnScreen from './useOnScreen';

const FadeInSection = ({ children }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className={`fade-in-section${isVisible ? ' visible' : ''}`}>
            {children}
        </div>
    );
};

export default FadeInSection;
