import React from 'react';
import cardanoC from './assets/icon-cardano.png';
import coinLock from './assets/coin-lock.png';
import communityGovernance from './assets/icon-governance.png';
import openBook from './assets/open-book.png';

const TrustSection = () => (
  <section className="trust-section">
    <h2>The Citadel is Built on a Strong Foundation</h2>
    <div className="trust-grid">
      <div className="feature-card">
        <div className="icon-container">
          <img src={cardanoC} alt="Cardano C logo" />
        </div>
        <h3>Securely on Cardano</h3>
        <p>Built as a Native Asset on the peer-reviewed and reliable Cardano blockchain for maximum security and efficiency.</p>
      </div>
      <div className="feature-card">
        <div className="icon-container">
          <img src={coinLock} alt="Coin with lock icon" />
        </div>
        <h3>Fixed & Fair Supply</h3>
        <p>With a fixed total supply and deflationary token burns, $PoP is designed for long-term sustainability. No hidden minting.</p>
      </div>
      <div className="feature-card">
        <div className="icon-container">
          <img src={communityGovernance} alt="Community governance icon" />
        </div>
        <h3>Community Governed</h3>
        <p>Our goal is to become a fully decentralized project where $PoP holders—our Citadel Guardians—guide the future.</p>
      </div>
      <div className="feature-card">
        <div className="icon-container">
          <img src={openBook} alt="Open book/document icon" />
        </div>
        <h3>Radical Transparency</h3>
        <p>Every detail of our plan, from tokenomics to our roadmap, is detailed in our public Litepaper. No secrets.</p>
      </div>
    </div>
  </section>
);

export default TrustSection;
