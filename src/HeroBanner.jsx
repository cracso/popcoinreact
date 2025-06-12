import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';

const HeroBanner = () => {
  const aboutRef = useRef(null);

  const handleScrollToAbout = e => {
    e.preventDefault();
    const aboutSection = document.getElementById('about-sentry');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-banner">
      <div className="hero-content">
        <div className="hero-img">
          {/* PLACEHOLDER: Sentry Sloth in armchair, smiling and waving, with tea */}
          <div style={{width:'100%',height:'320px',background:'#eaf2fa',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'32px',boxShadow:'0 12px 40px #0002',fontSize:'1.2em',color:'#4a6c8a',textAlign:'center',padding:'2em'}}>
            <span style={{opacity:0.7}}>
              [Hero Image Placeholder]<br/>
              Sentry Sloth in a comfy armchair, smiling, waving, holding a mug of tea.<br/>
              (See AI prompt in project notes)
            </span>
          </div>
        </div>
        <div className="hero-text">
          <h1 style={{fontSize:'2.7em',fontWeight:800,marginBottom:'0.2em',textAlign:'center'}}>Slow Down. Smile More.</h1>
          <h2 style={{fontSize:'1.3em',fontWeight:500,marginBottom:'1.2em',textAlign:'center'}}>Welcome to the cozy corner of the internet, home to your new favorite sloth.</h2>
          <div className="cta-buttons" style={{justifyContent:'center'}}>
            <a href="#about-sentry" className="btn btn-primary" onClick={handleScrollToAbout}>Meet Sentry the Sloth</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
