import React from 'react';
import step1 from './assets/step1-coin-shield.png';
import step2 from './assets/icon-governance.png';
import step3 from './assets/step3-bot-crack.png.png';

const HowItWorks = () => (
  <section className="how-it-works">
    <h2>The Sentry Sloth's 3 Patient Steps to Fairness</h2>
    <div className="steps-grid">
      <div className="step-card">
        <div className="icon-container">
          <img src={step1} alt="Coin with shield icon" />
        </div>
        <h3>Prove Your Patience</h3>
        <p>By staking $PoP Coin, you signal your genuine commitment. It's a simple action for a human, but a costly and complex hurdle for bot farms to overcome at scale.</p>
      </div>
      <div className="step-card">
        <div className="icon-container">
          <img src={step2} alt="Lottery ticket or key icon" />
        </div>
        <h3>Get a Fair Chance</h3>
        <p>Your stake gives you a fair, weighted chance in limited drops. This isn't about paying to win; it's about leveling the playing field so real passion is rewarded.</p>
      </div>
      <div className="step-card">
        <div className="icon-container">
          <img src={step3} alt="Bot cracking icon" />
        </div>
        <h3>Make Bots Obsolete</h3>
        <p>Our system is designed with fees and token burns that make large-scale botting economically unprofitable over time. We're patiently squeezing them out of the picture.</p>
      </div>
    </div>
  </section>
);

export default HowItWorks;
