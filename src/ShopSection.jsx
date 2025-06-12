import React from 'react';

const ShopSection = () => (
  <section className="doc-section" id="genesis-collection" style={{marginTop:'2.5em',marginBottom:'2.5em'}}>
    <h2 style={{textAlign:'center',fontSize:'2em',fontWeight:700,marginBottom:'1.2em'}}>Own a Piece of the Citadel.</h2>
    <div style={{display:'flex',flexWrap:'wrap',gap:'2em',justifyContent:'center',marginBottom:'2em'}}>
      {/* NFT Example 1 */}
      <div style={{flex:'1 1 220px',maxWidth:280,background:'#f8fafc',borderRadius:'18px',boxShadow:'0 2px 12px #0001',padding:'1.2em',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:120,height:120,background:'#eaf2fa',borderRadius:'18px',marginBottom:'1em',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{opacity:0.7,textAlign:'center',fontSize:'0.95em',color:'#4a6c8a'}}>[Classic Sentry NFT]</span>
        </div>
        <h3 style={{fontWeight:600,fontSize:'1.1em',marginBottom:'0.5em'}}>Classic Sentry</h3>
        <span style={{fontSize:'0.98em',color:'#888'}}>Signature hat & glasses</span>
      </div>
      {/* NFT Example 2 */}
      <div style={{flex:'1 1 220px',maxWidth:280,background:'#f8fafc',borderRadius:'18px',boxShadow:'0 2px 12px #0001',padding:'1.2em',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:120,height:120,background:'#eaf2fa',borderRadius:'18px',marginBottom:'1em',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{opacity:0.7,textAlign:'center',fontSize:'0.95em',color:'#4a6c8a'}}>[Rare Trait NFT]</span>
        </div>
        <h3 style={{fontWeight:600,fontSize:'1.1em',marginBottom:'0.5em'}}>Rare Sentry</h3>
        <span style={{fontSize:'0.98em',color:'#888'}}>Golden fur or unique background</span>
      </div>
      {/* NFT Example 3 */}
      <div style={{flex:'1 1 220px',maxWidth:280,background:'#f8fafc',borderRadius:'18px',boxShadow:'0 2px 12px #0001',padding:'1.2em',display:'flex',flexDirection:'column',alignItems:'center'}}>
        <div style={{width:120,height:120,background:'#eaf2fa',borderRadius:'18px',marginBottom:'1em',display:'flex',alignItems:'center',justifyContent:'center'}}>
          <span style={{opacity:0.7,textAlign:'center',fontSize:'0.95em',color:'#4a6c8a'}}>[Fun Accessory NFT]</span>
        </div>
        <h3 style={{fontWeight:600,fontSize:'1.1em',marginBottom:'0.5em'}}>Creative Sentry</h3>
        <span style={{fontSize:'0.98em',color:'#888'}}>Party hat, monocle, or more</span>
      </div>
    </div>
    <div style={{maxWidth:700,margin:'0 auto 1.5em auto',textAlign:'center'}}>
      <p style={{fontSize:'1.13em',lineHeight:1.7}}>
        The Genesis Collection is your official entry into Sentry's world. Each of the 5,555 sloths is a unique, one-of-a-kind digital collectible that acts as your key to our community and all future adventures.
      </p>
    </div>
    <div style={{textAlign:'center'}}>
      <a href="/manifesto" className="btn btn-primary" style={{fontSize:'1.1em',padding:'0.7em 2.2em'}}>Learn About the Launch</a>
    </div>
  </section>
);

export default ShopSection;
