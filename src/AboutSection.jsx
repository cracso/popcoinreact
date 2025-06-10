import React from 'react';
import slothMid from './assets/sloth-mid.png';

const AboutSection = ({ setSection }) => (
  <section className="doc-section" id="about">
    <h1>Our Story: Proof-of-Patience ($PoP) Coin</h1>
    <img src={slothMid} alt="Sentry Sloth" className="about-img" />
    <p>
      Born from the frustration of constant bot victories in limited item drops, Proof-of-Patience ($PoP) Coin aims to restore balance. Guided by our mascot, The Sentry Sloth, we are building "The Citadel Plan" on the Cardano network. Our utility token, $PoP, empowers a system that values true fans who are willing to wait, making it harder for bots to succeed.
    </p>
    <p>
      <a href="#litepaper" onClick={e => {e.preventDefault(); setSection('litepaper')}} className="read-more-link">Learn more about our vision in the Litepaper.</a>
    </p>
  </section>
);

export default AboutSection;
