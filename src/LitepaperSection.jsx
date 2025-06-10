import React from 'react';

const toc = [
  { id: 'lp-1', label: 'Abstract: The Next Evolution in Fair Drop Access' },
  { id: 'lp-2', label: 'The Problem: The "Bot-pocalypse" in Limited Drops' },
  { id: 'lp-3', label: 'Our Solution: $PoP Coin & The Sentry Sloth – The Citadel Against Bots' },
  { id: 'lp-4', label: 'Utility & Use Cases: Wielding $PoP in the Citadel' },
  { id: 'lp-5', label: 'Technology Stack: Built Patiently and Securely on Cardano' },
  { id: 'lp-6', label: 'Tokenomics - Version 0.7: The Citadel Plan – Fortifying Fairness & Sustainability' },
  { id: 'lp-7', label: 'Go-to-Market & Partnership Strategy' },
  { id: 'lp-8', label: 'The $PoP Ecosystem & Roadmap: Building and Expanding the Citadel Walls' },
  { id: 'lp-9', label: 'Team & Advisors: Architects of the Citadel (Conceptual Profiles)' },
  { id: 'lp-10', label: 'Community & DAO: Guardians and Governors of the Citadel' },
  { id: 'lp-11', label: 'Risk Factors & Mitigation Strategies' },
  { id: 'lp-12', label: 'Important Disclaimers & Final Considerations' },
  { id: 'lp-13', label: 'Glossary of Key Terms' },
];

const LitepaperSection = () => (
  <section className="doc-section" id="litepaper">
    <h1 style={{textAlign:'center',marginBottom:'0.7em'}}>Proof-of-Patience ($PoP) Coin: The Citadel Plan</h1>
    <h3 style={{textAlign:'center',marginBottom:'2em',color:'#4a6c8a',fontWeight:500}}>Litepaper v0.7 — June 2025</h3>
    <nav className="doc-toc" style={{maxWidth:600,margin:'0 auto 2.5em auto'}}>
      <h2 style={{fontSize:'1.6em',marginBottom:'1.2em',textAlign:'center'}}>Table of Contents</h2>
      <ol style={{margin:'0 auto', paddingLeft:0, display:'flex', flexDirection:'column', gap:'0.5em', alignItems:'flex-start'}}>
        {toc.map(item => (
          <li key={item.id} style={{width:'100%'}}>
            <a href={`#${item.id}`}>{item.label}</a>
          </li>
        ))}
      </ol>
    </nav>
    <div className="doc-sections">
      {/* Section 1 */}
      <section className="doc-section" id="lp-1">
        <h2>1. Abstract: The Next Evolution in Fair Drop Access</h2>
        <p>The digital world of limited item drops remains overwhelmingly compromised by automated bots, leaving genuine enthusiasts frustrated. <strong>Proof-of-Patience ($PoP) Coin</strong>, championed by its vigilant mascot, <strong>The Sentry Sloth</strong>, introduces <strong>"The Citadel Plan"</strong>: a robust ecosystem built on the <strong>Cardano blockchain</strong> designed to restore fairness. $PoP is a Cardano Native Asset at the heart of a sophisticated strategy that leverages verifiable patient commitment, economic disincentives, and community governance to substantially disadvantage bot operations. This Litepaper (Version 0.7) details our evolved vision for a transparent, sustainable, and ethically-grounded solution, empowering real fans and constructing an ever-vigilant fortress against automated abuse.</p>
      </section>
      {/* Section 2 */}
      <section className="doc-section" id="lp-2">
        <h2>2. The Problem: The "Bot-pocalypse" in Limited Drops</h2>
        <p>The thrill of acquiring limited-edition items is consistently undermined by the pervasive issue of botting. These sophisticated automated scripts give unfair advantages, leading to widespread market distortion.</p>
        <ul>
          <li><strong>Widespread Frustration:</strong> Genuine fans invest time and energy, only to be consistently beaten by bots capable of completing transactions in milliseconds.</li>
          <li><strong>Inflated Resale Markets:</strong> The vast majority of desirable items are often captured by bots and immediately listed on secondary markets at prices many times their retail value, making them inaccessible to average consumers and fueling a scalper economy.</li>
          <li><strong>Damaged Brand Loyalty & Trust:</strong> Brands and creators who host these drops often face significant backlash from their communities, who perceive the process as rigged and unfair, eroding trust and engagement.</li>
          <li><strong>Ineffective & Costly Countermeasures:</strong> Traditional anti-bot measures (e.g., simple CAPTCHAs, IP bans, basic queues) are often quickly circumvented by advanced bot developers, forcing retailers into an expensive and reactive technological arms race with limited success.</li>
        </ul>
        <p><strong>The Scale of the Challenge: Validating the Need</strong></p>
        <p>The bot problem is not a minor inconvenience; it's a systemic issue with significant economic impact:</p>
        <ul>
          <li><strong>(Hypothetical Statistic):</strong> Industry reports suggest that bots may account for upwards of <strong>40-70%</strong> of traffic during high-demand online releases, with success rates far exceeding those of human users.</li>
          <li><strong>(Hypothetical Statistic):</strong> The resale market for items like limited-edition sneakers, largely fueled by bot-acquired stock, is estimated to be a <strong>multi-billion dollar industry annually</strong>, with the majority of that premium bypassing original creators and legitimate fans.</li>
          <li>This environment not only denies genuine access but also cultivates a sense of disillusionment within passionate communities, highlighting a critical need for innovative and effective solutions like $PoP Coin.</li>
        </ul>
      </section>
      {/* Section 3 */}
      <section className="doc-section" id="lp-3">
        <h2>3. Our Solution: $PoP Coin & The Sentry Sloth – The Citadel Against Bots</h2>
        <p><strong>Proof-of-Patience ($PoP) Coin</strong> offers a new paradigm for fairness, built on the foundational principles of "The Citadel Plan."</p>
        <p><strong>Core Concept: Utility, Patience, Proof</strong></p>
        <p>$PoP is a utility token designed to integrate deeply into the process of limited item drops. It requires participants to demonstrate verifiable commitment and "patience" – attributes inherently difficult and costly for bots to simulate at scale. By interacting with $PoP (e.g., staking, participating in fee-based entries), users provide "proof" of their genuine interest, allowing platforms to better distinguish them from automated scripts.</p>
        <p><strong>The Sentry Sloth: Guardian of the Citadel</strong></p>
        <p>Our mascot, The Sentry Sloth, is more than just a brand character; he is the embodiment of the $PoP philosophy:</p>
        <ul>
          <li><strong>Patient Vigilance:</strong> He moves deliberately, observing and verifying, representing the system's methodical approach to ensuring fairness, a stark contrast to the chaotic speed of bots.</li>
          <li><strong>Strategic Defense:</strong> His "slowness" is his strength, symbolizing a system that values thoughtful engagement and commitment over brute-force automation.</li>
          <li><strong>Guardian of Access:</strong> He stands at the gates of the "Citadel," ensuring that its protective mechanisms function to give genuine fans a fighting chance.</li>
        </ul>
        <p><strong>Visual Identity & Branding Philosophy</strong></p>
        <p>The $PoP Coin brand, headlined by The Sentry Sloth, aims for a unique blend of:</p>
        <ul>
          <li><strong>Trustworthiness & Security:</strong> Conveyed through clean design, clear communication, and the "Citadel" theme. The Sentry Sloth, while friendly, also represents a protective, reliable presence.</li>
          <li><strong>Approachable Innovation:</strong> While leveraging sophisticated blockchain technology, the user experience and messaging will be designed to be understandable and accessible to a broad audience, including those new to crypto.</li>
          <li><strong>Community-Centric Empowerment:</strong> The branding will reflect the project's commitment to its users, highlighting fairness, transparency, and collective governance.</li>
          <li><strong>Color Palette (Conceptual):</strong> Calming and trustworthy blues and greens (evoking the sloth's natural habitat and a sense of security) will form the core, accented by energetic yet controlled colors (e.g., a bright, optimistic yellow or a sharp teal) to signify alerts, successful acquisitions, or key calls to action. The Sentry Sloth himself will have warm, inviting tones.</li>
          <li><strong>Design Ethos:</strong> Modern, clean, and intuitive, with a touch of playful intelligence reflective of The Sentry Sloth's character.</li>
        </ul>
      </section>
      {/* Section 4 */}
      <section className="doc-section" id="lp-4">
        <h2>4. Utility & Use Cases: Wielding $PoP in the Citadel</h2>
        <p>$PoP Coin’s utility is multi-faceted, designed to create a robust defense against bots:</p>
        <p><strong>Core Anti-Bot Mechanisms</strong></p>
        <ul>
          <li><strong>Dynamic Staking for Fair Access & Bot Resistance:</strong> Users stake $PoP tokens to gain eligibility and weighted advantages in partnered drops. This requires capital commitment that is costly for bots to scale.</li>
          <li><strong>$PoP as a Gateway to Enhanced Bot Detection:</strong> Staking $PoP can act as a prerequisite for engaging with further Proof-of-Human (PoH) verifications on drop platforms (e.g., advanced CAPTCHAs, puzzles). This adds a crucial economic layer to existing bot detection methods.</li>
          <li><strong>Drop Cooldowns & Loyalty Tiers:</strong> Successful participants in high-demand drops may enter "cooldowns" for similar items, promoting wider distribution. Long-term $PoP stakers unlock loyalty tiers with unique benefits.</li>
          <li><strong>Economic Disincentives via Fees & Burns:</strong> As detailed in Tokenomics (Section 6), $PoP utilizes fees for drop entries and other services, with a significant portion burned, making bot operations prohibitively expensive over time.</li>
        </ul>
        <p><strong>A Hypothetical User Journey with $PoP</strong></p>
        <p>Imagine Sarah, a dedicated fan, wants to buy a limited-edition art print:</p>
        <ol>
          <li><strong>Acquires $PoP:</strong> Sarah buys $PoP from a DEX or earns it through an early community program.</li>
          <li><strong>Discovers a Drop:</strong> Her favorite artist announces a drop using the $PoP system for fairness.</li>
          <li><strong>Stakes $PoP:</strong> Weeks before the drop, Sarah stakes her $PoP tokens on the $PoP platform, choosing a tier that aligns with her desired level of commitment and potential lottery weighting. The Sentry Sloth dashboard shows her stake is active.</li>
          <li><strong>Enters the Drop:</strong> On drop day, her staked $PoP makes her eligible. She might pay a tiny $PoP entry fee. She easily passes a PoH check, further validating her human status.</li>
          <li><strong>Fair Chance:</strong> She participates in the randomized selection process, where her staked $PoP (and potentially her "Diamond Hands" loyalty status) gives her a fair, weighted chance against other genuine humans.</li>
          <li><strong>Outcome:</strong>
            <ul>
              <li><strong>Success:</strong> She gets the print! A small "commitment burn" from her staked $PoP might occur. She enters a "cooldown" for similar art drops but can stake for higher rewards during this period.</li>
              <li><strong>Unsuccessful:</strong> She didn't get it this time, but her staked $PoP remains, and her participation might contribute to future loyalty benefits. She knows the process was fairer.</li>
            </ul>
          </li>
          <li><strong>Governance:</strong> Later, Sarah uses her $PoP to vote on which artists the $PoP ecosystem should partner with next.</li>
        </ol>
        <p><strong>Future Utility Exploration</strong></p>
        <p>Beyond its core anti-bot function for product drops, the "Proof-of-Patience" framework and $PoP utility could potentially expand to:</p>
        <ul>
          <li>Ticketing for high-demand concerts or events.</li>
          <li>Access to limited enrollment online courses or workshops.</li>
          <li>Fair allocation of beta testing slots for new software or games.</li>
          <li>Community moderation rewards in forums or DAOs.</li>
          <li>Verifiable "patience" metrics for other on-chain reputation systems. <em>(These are speculative future explorations and not immediate roadmap items.)</em></li>
        </ul>
      </section>
      {/* Section 5 */}
      <section className="doc-section" id="lp-5">
        <h2>5. Technology Stack: Built Patiently and Securely on Cardano</h2>
        <h4>Why Cardano?</h4>
        <p>Cardano’s research-driven approach and unique architecture provide the ideal environment for a project focused on reliability and long-term utility:</p>
        <ul>
          <li><strong>Native Asset Support:</strong> This is a primary advantage. $PoP Coin will be a <strong>Cardano Native Asset</strong>, meaning it is created and transacted directly on the blockchain ledger, sharing the security and efficiency of ADA itself. This avoids the complexities and certain security overheads associated with smart-contract-based tokens (like ERC-20s on other platforms), making the token itself inherently more secure and cost-effective to use.</li>
          <li><strong>Security and Reliability:</strong> Cardano's foundation is built on peer-reviewed academic research and formal methods, resulting in a highly secure and predictable environment. This ethos aligns perfectly with our goal of building a trustworthy "Citadel" for fair drops.</li>
          <li><strong>Established Staking Ecosystem:</strong> The network has a mature, decentralized, and user-friendly staking mechanism. This provides a strong foundation for our utility, as the Cardano community is already familiar with staking, making the adoption of $PoP staking for drop access more intuitive.</li>
          <li><strong>Scalability and Low Transaction Fees:</strong> Cardano's design and ongoing updates aim to provide high throughput and consistently low transaction fees. This is crucial for $PoP's utility, which may involve numerous small transactions like drop entry fees, making the system accessible to a broader audience.</li>
          <li><strong>Powerful Smart Contract Capabilities:</strong> While the $PoP token itself is a native asset, the ecosystem's dApps (e.g., the staking platform, governance portals, vesting contracts) will be built using Cardano's powerful smart contract languages (such as Plutus and Aiken). This allows for the creation of highly secure and expressive applications to support the project's utility.</li>
        </ul>
        <h4>Smart Contract Security on Cardano</h4>
        <ul>
          <li><strong>Core Language:</strong> Smart contracts for the $PoP ecosystem will be written in robust, security-focused languages like Plutus (Haskell-based) and Aiken, which are native to Cardano.</li>
          <li><strong>Multiple Audits:</strong> All core smart contracts will undergo rigorous security audits by reputable third-party firms specializing in the Cardano ecosystem before deployment and after any significant upgrades. Audit reports will be made public.</li>
          <li><strong>Bug Bounty Programs:</strong> Post-launch, a bug bounty program will be established to incentivize ongoing security testing by the wider white-hat hacker and Cardano developer community.</li>
        </ul>
        <p>By building on Cardano, we ensure that the $PoP Coin project is founded on a secure, scalable, and sustainable blockchain designed for the long term.</p>
      </section>
      {/* Section 6 */}
      <section className="doc-section" id="lp-6">
        <h2>6. Tokenomics - Version 0.7: The Citadel Plan - Fortifying Fairness & Sustainability</h2>
        <p>The tokenomics of Proof-of-Patience ($PoP) are meticulously engineered for the <strong>Cardano ecosystem</strong> to uphold the highest ethical standards, consider the evolving regulatory landscape, and create a resilient ecosystem.</p>
        <h3 style={{marginTop:'1.5em'}}>Key Principles</h3>
        <ul>
          <li><strong>Fairness by Design:</strong> $PoP Coin incorporates mechanisms that inherently favor genuine users over bots, such as staking requirements, transaction fees, and token burns.</li>
          <li><strong>Transparency:</strong> All tokenomics details, including supply, distribution, and use of funds, are openly shared and will be verifiable on the Cardano blockchain.</li>
          <li><strong>Sustainability:</strong> The model is designed to be self-sustaining, with ecosystem growth funded by transaction fees and a portion of token burns, reducing reliance on external capital.</li>
          <li><strong>Community-Centric:</strong> A significant majority of tokens are allocated to the community, ensuring that those who believe in and support the project are its primary beneficiaries.</li>
        </ul>
        <h3 style={{marginTop:'1.5em'}}>Token Distribution</h3>
        <p>The total supply of $PoP Coin is capped at 1,000,000,000 tokens, distributed as follows:</p>
        <ul>
          <li><strong>60% Community & Ecosystem:</strong> Allocated for staking rewards, liquidity mining, and community initiatives to bootstrap the ecosystem.</li>
          <li><strong>20% Team & Advisors:</strong> Reserved for the core team and advisors, subject to a 3-year vesting period to ensure long-term commitment.</li>
          <li><strong>10% Partnerships & Collaborations:</strong> For strategic partnerships, exchange listings, and collaborative initiatives that enhance ecosystem growth.</li>
          <li><strong>10% Reserve:</strong> Kept as a reserve for future needs, including potential regulatory requirements or unforeseen challenges.</li>
        </ul>
        <h3 style={{marginTop:'1.5em'}}>Token Utility</h3>
        <p>$PoP Coin is not just a currency; it's a key that unlocks various levels of access and benefits within the ecosystem:</p>
        <ul>
          <li><strong>Access to Drops:</strong> Staked $PoP grants access to participate in exclusive drops, with a higher stake increasing the chances of successful acquisition.</li>
          <li><strong>Fee Discounts:</strong> Holding and staking $PoP reduces transaction fees on the platform, including lower fees for drop entries and other services.</li>
          <li><strong>Governance Rights:</strong> $PoP holders can vote on key decisions, such as new drop partnerships, fee structures, and other significant protocol changes.</li>
          <li><strong>Incentive Alignment:</strong> The tokenomics are designed to align the incentives of all participants, ensuring that the ecosystem thrives as a whole.</li>
        </ul>
        <h3 style={{marginTop:'1.5em'}}>Economic Model</h3>
        <p>The economic model of $PoP Coin is built around creating value through utility and scarcity:</p>
        <ul>
          <li><strong>Deflationary Mechanisms:</strong> A portion of every transaction and drop fee is burned, reducing the total supply over time and creating scarcity.</li>
          <li><strong>Staking Rewards:</strong> Users are rewarded for staking $PoP with additional tokens, distributed from the community pool, incentivizing long-term holding and ecosystem participation.</li>
          <li><strong>Transaction Fees:</strong> Fees are collected in $PoP for various actions within the ecosystem (e.g., entering drops, accessing premium features), with a significant portion used for buybacks and burns.</li>
        </ul>
        <h3 style={{marginTop:'1.5em'}}>Governance Model</h3>
        <p>Governance is transitioning to a decentralized model, empowering $PoP holders to have a direct say in the project's future:</p>
        <ul>
          <li><strong>DAO Formation:</strong> A Decentralized Autonomous Organization (DAO) will be established, where $PoP holders can propose and vote on key initiatives and changes.</li>
          <li><strong>Voting Power:</strong> Each $PoP token represents one vote, with mechanisms to prevent vote buying and ensure that all voices are heard.</li>
          <li><strong>Transparency in Decision-Making:</strong> All proposals, discussions, and voting outcomes will be publicly accessible, ensuring accountability and trust.</li>
        </ul>
        <h3 style={{marginTop:'1.5em'}}>Legal and Regulatory Considerations</h3>
        <p>We are committed to maintaining the highest legal and regulatory standards:</p>
        <ul>
          <li><strong>Compliance:</strong> Ongoing monitoring of regulatory developments in all operating jurisdictions, with proactive adjustments to ensure compliance.</li>
          <li><strong>Legal Opinions:</strong> Obtaining and publishing legal opinions on the tokenomics and operations of $PoP Coin from reputable law firms.</li>
          <li><strong>Risk Disclosures:</strong> Clear communication of any risks associated with the token and its use, including market, regulatory, and technological risks.</li>
        </ul>
        <h3 style={{marginTop:'1.5em'}}>Vision for the Future</h3>
        <p>Our vision extends far beyond the initial launch:</p>
        <ul>
          <li><strong>Continuous Improvement:</strong> Regular updates and improvements to the tokenomics and utility of $PoP based on community feedback and technological advancements.</li>
          <li><strong>Expansion of Use Cases:</strong> Exploring and implementing new use cases for $PoP within and outside the Cardano ecosystem.</li>
          <li><strong>Global Adoption:</strong> Strategies aimed at achieving widespread adoption of $PoP Coin as a standard for fair access in digital drops and beyond.</li>
        </ul>
      </section>
      {/* Section 7 */}
      <section className="doc-section" id="lp-7">
        <h2>7. Go-to-Market & Partnership Strategy</h2>
        <p>Successfully launching and scaling $PoP Coin requires a multi-pronged approach to reach users and integrate with drop platforms.</p>
        <h3>Target Audience & Platforms</h3>
        <ul>
          <li><strong>Primary User Audience:</strong> Collectors of limited items (sneakers, art, trading cards, toys), concert-goers, gamers, and any online community facing bot issues for high-demand releases.</li>
          <li><strong>Initial Platform Targets:</strong>
            <ul>
              <li>E-commerce platforms hosting limited drops (Shopify stores, independent brand websites).</li>
              <li>NFT marketplaces seeking fairer launch mechanics.</li>
              <li>Event ticketing platforms.</li>
              <li>Game developers releasing limited in-game items or beta access.</li>
            </ul>
          </li>
        </ul>
        <h3>Value Proposition for Partners (Brands & Platforms)</h3>
        <ul>
          <li><strong>Enhanced Customer Satisfaction & Brand Loyalty:</strong> Offering verifiably fairer drops reduces frustration and builds goodwill with genuine customers.</li>
          <li><strong>Reduced Support Overhead:</strong> Fewer complaints about bots and perceived unfairness.</li>
          <li><strong>Access to an Engaged Community:</strong> Partnering with $PoP provides visibility to a community dedicated to fair practices and collecting.</li>
          <li><strong>New Engagement Mechanisms:</strong> Opportunity to reward their own loyal customers through $PoP integrations or co-branded Sentry Sloth initiatives.</li>
          <li><strong>Easy Integration (Goal):</strong> Develop SDKs and APIs to make $PoP system integration as seamless as possible for platforms.</li>
        </ul>
        <h3>Community-Led Growth Initiatives</h3>
        <ul>
          <li><strong>The Sentry Sloth Ambassador Program:</strong> Empowering active community members to educate others and advocate for $PoP.</li>
          <li><strong>Grassroots Marketing:</strong> Leveraging meme culture (The Sentry Sloth), social media challenges, and content creation to build organic awareness.</li>
          <li><strong>Partnership Referrals:</strong> Incentivizing the community to identify and help onboard new platforms for $PoP integration.</li>
        </ul>
      </section>
      {/* Section 8 */}
      <section className="doc-section" id="lp-8">
        <h2>8. The $PoP Ecosystem & Roadmap: Building and Expanding the Citadel Walls</h2>
        <p>The $PoP ecosystem is designed as a resilient and evolving fortress against unfair drop practices.</p>
        <h3>Key Ecosystem Components (The Sentry Sloth’s Watchtowers)</h3>
        <ul>
          <li><strong>$PoP Staking & Rewards Platform:</strong> A secure, audited, and user-friendly dApp for staking $PoP, tracking loyalty tiers, managing drop participation, and viewing Sentry Sloth profile badges.</li>
          <li><strong>Brand & Platform Integration Suite:</strong> SDKs, APIs, and clear documentation to facilitate easy adoption of $PoP mechanisms by third-party drop hosts.</li>
          <li><strong>The $PoP Citadel DAO:</strong> The decentralized governance framework, including forums for discussion, proposal systems, and on-chain voting infrastructure.</li>
          <li><strong>Educational Resources (The Sloth’s Slow & Steady Guides):</strong> Comprehensive guides, FAQs, and tutorials on using $PoP, participating in governance, understanding tokenomics, and identifying bot behaviors.</li>
          <li><strong>The Sentry Sloth Community Hub:</strong> Official channels for news, support, discussions, and meme sharing.</li>
        </ul>
        <h3>Detailed Phased Roadmap</h3>
        <ul>
          <li><strong>Phase 1: Laying the Foundation (Est. Q4 2025)</strong>
            <ul>
              <li>$PoP Coin Genesis & Smart Contract Development (Core Token, Initial Staking).</li>
              <li>Multiple Security Audits of Core Contracts.</li>
              <li>Publication of Litepaper v0.5 ("The Citadel Plan").</li>
              <li>Initial Community Building (Socials, Forums) & Sentry Sloth Brand Launch.</li>
              <li>Secure comprehensive legal consultation for target operational jurisdictions.</li>
            </ul>
          </li>
          <li><strong>Phase 2: Erecting the First Walls (Est. Q2-Q3 2026)</strong>
            <ul>
              <li>Launch of the $PoP Staking Platform (Public Beta, then Mainnet).</li>
              <li>Initial DEX Listing & Establishment of robust Liquidity Pools.</li>
              <li>Targeted Airdrop distribution to early community members & strategic groups (with anti-Sybil measures).</li>
              <li>Onboarding of first 2-3 pilot partner brands for $PoP-gated drops.</li>
              <li>Launch of basic "Diamond Hands" HODL tracking.</li>
            </ul>
          </li>
          <li><strong>Phase 3: Expanding the Citadel (Est. Q4 2026 - 2027)</strong>
            <ul>
              <li>Launch of $PoP Citadel DAO (Version 1.0) with initial governance modules (e.g., community grants, partnership prioritization voting).</li>
              <li>Implementation of Time-Weighted Staking and enhanced Loyalty Tiers.</li>
              <li>Expansion of partnerships to a wider range of brands and drop platforms.</li>
              <li>Development and rollout of SDKs for easier partner integration.</li>
              <li>First community-led marketing campaigns funded by DAO/Treasury.</li>
            </ul>
          </li>
          <li><strong>Phase 4: The Ever-Vigilant Fortress (2028 & Beyond)</strong>
            <ul>
              <li>Full transition to DAO governance for key ecosystem parameters and treasury management.</li>
              <li>Ongoing R&D into advanced anti-bot measures, potentially incorporating AI/ML analytics (in partnership with platforms).</li>
              <li>Exploration and implementation of further utility for $PoP as voted by the DAO (e.g., cross-chain capabilities, new ecosystem services).</li>
              <li>Establishment of the "Sentry Sloth Fund" for long-term ecosystem development and security research.</li>
            </ul>
          </li>
        </ul>
      </section>
      {/* Section 9 */}
      <section className="doc-section" id="lp-9">
        <h2>9. Team & Advisors: Architects of the Citadel (Conceptual Profiles)</h2>
        <p>Building a fortress requires skilled architects. The $PoP Coin project will be driven by a team and supported by advisors with a blend of crucial expertise:</p>
        <h3>Core Team (Conceptual)</h3>
        <ul>
          <li><strong>Lead Blockchain Architect:</strong> Extensive experience in smart contract development (Solidity/Rust), security best practices, and deploying scalable L1/L2 solutions. Proven track record of successful project launches.</li>
          <li><strong>Full-Stack Developers (x2-3):</strong> Expertise in dApp development, front-end (React/Vue), back-end (Node.js/Python), and Web3 integration (ethers.js/web3.js).</li>
          <li><strong>Cybersecurity Specialist / Anti-Fraud Lead:</strong> Deep understanding of bot methodologies, online fraud prevention, and data analytics to inform anti-bot strategies.</li>
          <li><strong>Product & Project Manager:</strong> Experience in agile development, roadmap execution, and user-centric product design in the tech/crypto space.</li>
          <li><strong>Marketing & Community Lead:</strong> Proven ability in building and engaging online communities, brand storytelling (especially with a mascot like The Sentry Sloth), and executing digital marketing campaigns.</li>
          <li><strong>Partnerships & Business Development Lead:</strong> Strong network and experience in e-commerce, collectibles, or event industries, capable of forging strategic alliances with drop platforms.</li>
        </ul>
        <h3>Advisory Board (Conceptual)</h3>
        <ul>
          <li><strong>E-commerce/Retail Technology Advisor:</strong> Executive-level experience from a major e-commerce platform or brand familiar with limited drop challenges.</li>
          <li><strong>Legal & Regulatory Advisor (Crypto Specialty):</strong> Deep expertise in global cryptocurrency law, compliance, and securities regulations.</li>
          <li><strong>Tokenomics & DeFi Advisor:</strong> Recognized expert in designing sustainable token ecosystems and decentralized finance protocols.</li>
          <li><strong>Cybersecurity & Anti-Bot Technology Advisor:</strong> Academic or industry leader in anti-automation and online security.</li>
          <li><strong>Community & DAO Governance Advisor:</strong> Experience in establishing and scaling successful decentralized autonomous organizations.</li>
        </ul>
        <p><em>(Full profiles and identities of actual team members and advisors would be made public with their consent on an official project website, emphasizing transparency.)</em></p>
      </section>
      {/* Section 10 */}
      <section className="doc-section" id="lp-10">
        <h2>10. Community & DAO: Guardians and Governors of the Citadel</h2>
        <p>The $PoP community is the lifeblood and the ultimate defense of the Citadel.</p>
        <h3>Community Ethos & Engagement Strategy</h3>
        <ul>
          <li><strong>Core Values:</strong> Fairness, Patience, Vigilance, Transparency, Collaboration.</li>
          <li><strong>Engagement Pillars:</strong>
            <ul>
              <li><strong>Active Communication:</strong> Regular updates, AMAs with the team, open discussions on Discord/Telegram.</li>
              <li><strong>Education:</strong> The Sentry Sloth’s "Slow & Steady Guides" to crypto, $PoP utility, and safe practices.</li>
              <li><strong>Inclusivity:</strong> Creating a welcoming environment for both crypto natives and newcomers interested in fairer drops.</li>
              <li><strong>Meme Culture & Fun:</strong> Embracing The Sentry Sloth's character to make engagement enjoyable and shareable.</li>
              <li><strong>Feedback Loops:</strong> Structured channels for community suggestions and concerns.</li>
            </ul>
          </li>
        </ul>
        <h3>Enhanced DAO Rollout Plan & Governance Focus</h3>
        <p>The $PoP Citadel DAO will evolve to give token holders meaningful control:</p>
        <ul>
          <li><strong>Phase 1 (Launch - Year 1): Foundational Governance.</strong>
            <ul>
              <li>Voting on community grant proposals from the Ecosystem Fund.</li>
              <li>Prioritizing potential platform partnership targets.</li>
              <li>Signaling sentiment on minor parameter adjustments (e.g., specific fee allocations between burn/treasury).</li>
              <li>Off-chain voting initially (e.g., Snapshot) with results implemented by a multi-sig controlled by the team.</li>
            </ul>
          </li>
          <li><strong>Phase 2 (Year 2-3): Expanded On-Chain Governance.</strong>
            <ul>
              <li>Introduction of on-chain voting for critical proposals.</li>
              <li>DAO control over a larger portion of the Treasury Fund for ecosystem initiatives.</li>
              <li>Voting on roadmap items and new feature development priorities.</li>
              <li>Election of community council members to assist with DAO operations.</li>
            </ul>
          </li>
          <li><strong>Phase 3 (Year 4+): Mature DAO Operations.</strong>
            <ul>
              <li>Potentially full DAO control over most upgradable smart contract parameters (within safe limits).</li>
              <li>Self-sustaining governance model with robust proposal, deliberation, and execution frameworks.</li>
              <li>The Sentry Sloth becomes the DAO's symbolic, patient chairman.</li>
            </ul>
          </li>
        </ul>
      </section>
      {/* Section 11 */}
      <section className="doc-section" id="lp-11">
        <h2>11. Risk Factors & Mitigation Strategies</h2>
        <p>Participating in any cryptocurrency project involves risks. Transparency requires acknowledging them:</p>
        <ul>
          <li><strong>Market Volatility Risk:</strong> The price of $PoP, like all cryptocurrencies, can be highly volatile due to market sentiment, speculation, and broader economic factors.
            <ul>
              <li><em>Mitigation:</em> Focus on utility-driven demand, deflationary mechanisms, and building a strong underlying ecosystem rather than speculative hype.</li>
            </ul>
          </li>
          <li><strong>Smart Contract Vulnerability Risk:</strong> Despite rigorous audits, undiscovered vulnerabilities in smart contracts could lead to loss of funds.
            <ul>
              <li><em>Mitigation:</em> Multiple independent audits, comprehensive testing, bug bounty programs post-launch, adherence to security best practices, potential for phased rollouts of new contract features.</li>
            </ul>
          </li>
          <li><strong>Adoption Risk (Platform & User):</strong> The success of $PoP depends heavily on its adoption by both drop platforms/brands and end-users.
            <ul>
              <li><em>Mitigation:</em> Strong value proposition for partners, easy integration tools (SDKs/APIs), active community building, and marketing efforts focused on the benefits of fairer drops.</li>
            </ul>
          </li>
          <li><strong>Regulatory Risk:</strong> The legal and regulatory landscape for cryptocurrencies is uncertain and evolving globally. Future regulations could impact $PoP's operations, token classification, or accessibility.
            <ul>
              <li><em>Mitigation:</em> Ongoing legal counsel, commitment to adapting to new regulations where feasible, clear communication about jurisdictional limitations, and focusing on the utility aspect of the token.</li>
            </ul>
          </li>
          <li><strong>Competition Risk:</strong> Other anti-bot solutions or fair launch mechanisms exist or may emerge.</li>
          <li>
            <em>Mitigation:</em> Focus on $PoP's unique combination of tokenomics, community (The Sentry Sloth), and adaptive DAO governance. Continuous innovation and responsiveness to user/partner needs.
          </li>
          <li><strong>Team & Operational Risk:</strong> Execution of the roadmap depends on the core team's ability and resources.
            <ul>
              <li><em>Mitigation:</em> Building a skilled and dedicated team (conceptual profiles outlined), transparent treasury management, and progressive decentralization to reduce reliance on a central team over time.</li>
            </ul>
          </li>
          <li><strong>"Arms Race" with Bots:</strong> Bot developers will continuously attempt to circumvent anti-bot measures.
            <ul>
              <li><em>Mitigation:</em> Designing $PoP as an adaptive system with ongoing R&D, community vigilance, and economic disincentives that are costly to overcome consistently. Focus on making botting <em>uneconomical</em> rather than <em>impossible</em>.</li>
            </ul>
          </li>
        </ul>
      </section>
      {/* Section 12 */}
      <section className="doc-section" id="lp-12">
        <h2>12. Important Disclaimers & Final Considerations</h2>
        <ul>
          <li><strong>Not Financial Advice:</strong> This Litepaper is for informational purposes only and does not constitute financial, investment, legal, or any other professional advice. The value of $PoP Coin can be volatile and is subject to market risks. You should conduct your own thorough research (DYOR) and consult with independent professional advisors before making any decisions related to $PoP Coin or any cryptocurrency.</li>
          <li><strong>Utility Token:</strong> $PoP Coin is intended to function as a utility token within its ecosystem, providing access to features and services designed to improve fairness in limited item drops. It is not designed or promoted primarily as a speculative investment instrument.</li>
          <li><strong>Regulatory Landscape:</strong> The regulatory treatment of digital tokens and cryptocurrencies is evolving and varies significantly across jurisdictions. Participants are responsible for understanding and complying with all applicable laws and regulations in their respective locations. The project team will endeavor to adapt to regulatory changes but cannot guarantee future functionality or availability in all jurisdictions.</li>
          <li><strong>Anti-Bot Measures:</strong> While $PoP Coin aims to significantly deter bot activity, no system can guarantee 100% immunity against all forms of automated abuse, as bot technologies also evolve. The $PoP ecosystem is committed to an ongoing effort to refine and strengthen its anti-bot capabilities through technological innovation and community vigilance.</li>
          <li><strong>Roadmap & Future Statements:</strong> The roadmap and future projections outlined in this Litepaper are based on current plans and estimates. They are subject to change due to development challenges, market conditions, regulatory shifts, community governance decisions, and other unforeseen factors.</li>
          <li><strong>No Guarantees:</strong> There is no guarantee of any specific outcome, value, utility, or return. Participation in the $PoP ecosystem, including holding or using $PoP tokens, is at your own risk.</li>
          <li><strong>Third-Party Platforms:</strong> The functionality of $PoP Coin in specific drops is dependent on integration by third-party brands and platforms. The $PoP project cannot control the actions or decisions of these independent entities.</li>
        </ul>
        <p>By engaging with $PoP Coin, you acknowledge these considerations and the inherent risks associated with digital assets and early-stage technology projects.</p>
      </section>
      {/* Section 13 */}
      <section className="doc-section" id="lp-13">
        <h2>13. Glossary of Key Terms</h2>
        <ul>
          <li><strong>Airdrop:</strong> Distribution of cryptocurrency tokens, usually for free, to numerous wallet addresses, often to bootstrap a community.</li>
          <li><strong>AML/CFT:</strong> Anti-Money Laundering / Combating the Financing of Terrorism; regulations to prevent illicit financial activities.</li>
          <li><strong>API (Application Programming Interface):</strong> A set of rules allowing different software applications to communicate with each other.</li>
          <li><strong>Bot (Automation Script):</strong> Software programmed to perform repetitive tasks automatically, often used to gain an unfair advantage in online purchases.</li>
          <li><strong>Burn (Token Burning):</strong> Permanently removing tokens from circulation by sending them to an unusable wallet address, which can reduce total supply.</li>
          <li><strong>CAPTCHA:</strong> A type of challenge-response test used in computing to determine whether the user is human.</li>
          <li><strong>DAO (Decentralized Autonomous Organization):</strong> An organization represented by rules encoded as a computer program that is transparent, controlled by the organization members, and not influenced by a central government.</li>
          <li><strong>dApp (Decentralized Application):</strong> An application built on a decentralized network (like a blockchain) that combines a smart contract and a front-end user interface.</li>
          <li><strong>DEX (Decentralized Exchange):</strong> A peer-to-peer marketplace where cryptocurrency traders make transactions directly without handing over management of their funds to an intermediary or custodian.</li>
          <li><strong>EVM (Ethereum Virtual Machine):</strong> A runtime environment for smart contracts on Ethereum and EVM-compatible blockchains.</li>
          <li><strong>Fair Launch:</strong> A token distribution method that aims to provide equitable initial access to a broad community, often avoiding large pre-sales to private investors.</li>
          <li><strong>HODL:</strong> A crypto slang term for holding onto cryptocurrency rather than selling it, often with a long-term perspective.</li>
          <li><strong>KYC (Know Your Customer):</strong> A process of verifying the identity of customers, often required by financial institutions and crypto platforms.</li>
          <li><strong>Layer 1 (L1):</strong> The base blockchain protocol (e.g., Bitcoin, Ethereum, Solana).</li>
          <li><strong>Layer 2 (L2):</strong> A secondary framework or protocol built on top of an existing L1 blockchain to improve scalability, speed, or efficiency (e.g., Polygon, Arbitrum).</li>
          <li><strong>Liquidity Pool:</strong> A collection of crypto tokens locked in a smart contract that facilitates trading on a DEX by providing liquidity.</li>
          <li><strong>Litepaper:</strong> A concise document providing an overview of a cryptocurrency project, similar to a whitepaper but typically less technical and shorter.</li>
          <li><strong>Mainnet:</strong> The main, live, and operational blockchain network after development and testing phases.</li>
          <li><strong>Market Capitalization (Market Cap):</strong> The total market value of a cryptocurrency's circulating supply (Current Price x Circulating Supply).</li>
          <li><strong>Meme Coin:</strong> A cryptocurrency that originated from an internet meme or has humorous characteristics. $PoP aims to be a "meme coin with utility."</li>
          <li><strong>Multi-Signature (Multi-Sig) Wallet:</strong> A cryptocurrency wallet that requires multiple private keys to authorize a transaction, enhancing security.</li>
          <li><strong>NFT (Non-Fungible Token):</strong> A unique digital asset representing ownership of a specific item (like art, collectibles, virtual land) recorded on a blockchain.</li>
          <li><strong>Oracle (Blockchain Oracle):</strong> A third-party service that provides smart contracts with external information from the real world.</li>
          <li><strong>Proof-of-Human (PoH):</strong> Systems designed to verify that an online user is a unique human being.</li>
          <li><strong>SDK (Software Development Kit):</strong> A collection of software development tools in one installable package.</li>
          <li><strong>Smart Contract:</strong> A self-executing contract with the terms of the agreement directly written into lines of code, residing on a blockchain.</li>
          <li><strong>Staking:</strong> Locking up cryptocurrency holdings for a certain period to support the operations of a blockchain network or a specific protocol, often in return for rewards.</li>
          <li><strong>Tokenomics:</strong> The study of the economics of a crypto token, including its supply, distribution, utility, and how these factors might affect its value.</li>
          <li><strong>Vesting:</strong> A process where tokens allocated to team members, advisors, or early investors are released gradually over a set period, rather than all at once, to align long-term incentives.</li>
          <li><strong>Whale (Crypto Whale):</strong> An individual or entity that holds a very large amount of a particular cryptocurrency, potentially able to influence market prices.</li>
        </ul>
      </section>
    </div>
  </section>
);

export default LitepaperSection;
