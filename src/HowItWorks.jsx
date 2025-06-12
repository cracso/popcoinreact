import React from 'react';
// import step1 from './assets/step1-coin-shield.png';
// import step2 from './assets/icon-governance.png';
// import step3 from './assets/step3-bot-crack.png.png';

const HowItWorks = () => (
  <section className="how-it-works">
    <h2>The Problem: Why Fair Drops Matter</h2>
    <div className="steps-grid">
      <div className="step-card">
        <div className="icon-container">
          {/* PLACEHOLDER: Bot Icon (see AI prompt in project notes) */}
          <div style={{width:80,height:80,background:'#fff',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px #0001',fontSize:'2.2em',color:'#b00',textAlign:'center'}}>
            <span style={{opacity:0.7}}>[Bot Icon]</span>
          </div>
        </div>
        <h3>The Bot</h3>
        <p>Menacing robot head. Modern, minimalist, dark gray with a glowing red eye. (See AI prompt in project notes)</p>
      </div>
      <div className="step-card">
        <div className="icon-container">
          {/* PLACEHOLDER: Fan Icon (see AI prompt in project notes) */}
          <div style={{width:80,height:80,background:'#fff',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px #0001',fontSize:'2.2em',color:'#888',textAlign:'center'}}>
            <span style={{opacity:0.7}}>[Fan Icon]</span>
          </div>
        </div>
        <h3>The Fan</h3>
        <p>Sad human face, cracked phone. Modern, minimalist, muted colors. (See AI prompt in project notes)</p>
      </div>
      <div className="step-card">
        <div className="icon-container">
          {/* PLACEHOLDER: Hero Icon (see AI prompt in project notes) */}
          <div style={{width:80,height:80,background:'#fff',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px #0001',fontSize:'2.2em',color:'#2a6cbb',textAlign:'center'}}>
            <span style={{opacity:0.7}}>[Hero Icon]</span>
          </div>
        </div>
        <h3>The Hero</h3>
        <p>Sentry Sloth's heroic face, confident, friendly browns and blue. (See AI prompt in project notes)</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
