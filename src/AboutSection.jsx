import React from 'react';

const AboutSection = ({ setSection }) => (
  <section className="doc-section" id="about">
    <h1>Our Story: Proof-of-Patience ($PoP) Coin</h1>
    {/* PLACEHOLDER: About Page Hero Image (see AI prompt in project notes) */}
    <div style={{width:'100%',maxWidth:'540px',height:'320px',background:'#eaf2fa',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'32px',boxShadow:'0 12px 40px #0002',fontSize:'1.1em',color:'#4a6c8a',textAlign:'center',margin:'1.2em auto'}}>
      <span style={{opacity:0.7}}>
        [About Hero Image Placeholder]<br/>
        Artistic portrait of The Sentry Sloth's face, kind eyes, glasses, soft lighting.<br/>
        (See AI prompt in project notes)
      </span>
    </div>
    <p>
      Born from the frustration of constant bot victories in limited item drops, Proof-of-Patience ($PoP) Coin aims to restore balance. Guided by our mascot, The Sentry Sloth, we are building "The Citadel Plan" on the Cardano network. Our utility token, $PoP, empowers a system that values true fans who are willing to wait, making it harder for bots to succeed.
    </p>
    <p>
      <a href="/manifesto" className="read-more-link">Learn more about our vision in the Manifesto.</a>
    </p>
  </section>
);

export default AboutSection;
