import React from 'react';
import slothMid from './assets/sloth-mid.png';

const AboutSentry = () => (
  <section className="doc-section" id="about-sentry" style={{marginTop:'2.5em',marginBottom:'2.5em'}}>
    <div style={{display:'flex',flexWrap:'wrap',alignItems:'center',justifyContent:'center',gap:'2.5em',maxWidth:900,margin:'0 auto'}}>
      <div style={{flex:'0 0 180px',display:'flex',justifyContent:'center',alignItems:'center'}}>
        {/* PLACEHOLDER: Circular portrait of Sentry winking */}
        <div style={{width:180,height:180,borderRadius:'50%',background:'#eaf2fa',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 4px 24px #0001',overflow:'hidden'}}>
          <span style={{opacity:0.7,textAlign:'center',fontSize:'1em',color:'#4a6c8a',padding:'1em'}}>
            [Portrait Placeholder]<br/>
            Sentry Sloth winking, circular crop.<br/>
            (See AI prompt in project notes)
          </span>
        </div>
      </div>
      <div style={{flex:'1 1 320px',minWidth:220}}>
        <h2 style={{fontSize:'2em',fontWeight:700,marginBottom:'0.5em'}}>He's a connoisseur of cozy.</h2>
        <p style={{fontSize:'1.15em',lineHeight:1.7}}>
          "Meet Sentry. He's a champion of calm, a master of naps, and a firm believer that the best things in life should never be rushed. In a world that's always in a hurry, Sentry is here to share his adventures and remind us all to enjoy the little moments, find the fun in taking it slow, and always make time for a good cup of tea."
        </p>
      </div>
    </div>
  </section>
);

export default AboutSentry;
