import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Header';
import HeroBanner from './HeroBanner';
import AboutSentry from './AboutSentry';
import GenesisCollectionSection from './GenesisCollectionSection';
import ComicSection from './ComicSection';
import CommunitySection from './CommunitySection';
import Footer from './Footer';

// Custom Hook for observing element visibility (for fade-in animations)
const useOnScreen = (options) => {
    const ref = useRef(null);
    const [isIntersecting, setIntersecting] = useState(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIntersecting(true);
            }
        }, options);
        if (ref.current) {
            observer.observe(ref.current);
        }
        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, [ref, options]);
    return [ref, isIntersecting];
};

// SVG Icons as Components for reusability
const TwitterIcon = () => (
    <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
);
const DiscordIcon = () => (
     <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M20.317 4.1451C20.317 4.1451 22.427 1.5521 20.317 0.9221C20.317 0.9221 16.927 2.2151 14.122 5.3081C14.122 5.3081 11.229 2.4041 8.828 0.8351C8.828 0.8351 5.932 2.0411 7.632 6.5591C7.632 6.5591 5.231 2.4911 2.831 4.5721C2.831 4.5721 5.727 6.4721 5.927 10.4531C5.927 10.4531 3.526 8.3721 0.000 12.3531C0.000 12.3531 3.921 13.5601 5.822 10.5401C5.822 10.5401 6.822 13.4351 10.117 14.3121C10.117 14.3121 8.916 17.5841 11.416 19.3721C11.416 19.3721 11.116 15.2911 15.516 13.5971C15.516 13.5971 13.816 17.5841 18.016 19.1841C18.016 19.1841 16.816 14.9921 21.016 12.9111C21.016 12.9111 24.000 15.4791 24.000 11.3981C23.800 11.3981 20.317 4.1451 20.317 4.1451Z" /></svg>
);

// Animated Section Component
const FadeInSection = ({ children }) => {
    const [ref, isVisible] = useOnScreen({ threshold: 0.1 });
    return (
        <div ref={ref} className={`transition-opacity duration-700 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            {children}
        </div>
    );
};

// Main App Component
export default function App() {
  useEffect(() => {
    document.body.style.fontFamily = "'Inter', sans-serif";
    document.body.style.backgroundColor = '#FDFBF8';
    document.body.style.color = '#44403c';
    document.documentElement.classList.add('scroll-smooth');
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <HeroBanner />
                <AboutSentry />
                <GenesisCollectionSection />
                <ComicSection />
                <CommunitySection />
              </>
            } />
            <Route path="/about" element={<AboutSentry />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
