import React from 'react';

const CommunitySection = () => (
  <section className="doc-section" id="community" style={{marginTop:'2.5em',marginBottom:'2.5em',background:'#eaf2fa',borderRadius:'18px',padding:'2.5em 0'}}>
    <h2 style={{textAlign:'center',fontSize:'2em',fontWeight:700,marginBottom:'0.5em'}}>Join The Slowcial Club</h2>
    <h3 style={{textAlign:'center',fontWeight:400,marginBottom:'1.5em',color:'#4a6c8a',fontSize:'1.2em'}}>Follow Sentry's daily adventures and connect with other fans who appreciate the slower side of life.</h3>
    <div style={{display:'flex',justifyContent:'center',gap:'2.5em',marginBottom:'1.2em'}}>
      {/* Social Media Icon Placeholders */}
      <a href="#" style={{display:'flex',flexDirection:'column',alignItems:'center',textDecoration:'none'}}>
        <div style={{width:64,height:64,borderRadius:'50%',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px #0001',fontSize:'2.2em',color:'#E4405F'}}>
          IG
        </div>
        <span style={{marginTop:'0.5em',color:'#222',fontWeight:500,fontSize:'1em'}}>Instagram</span>
      </a>
      <a href="#" style={{display:'flex',flexDirection:'column',alignItems:'center',textDecoration:'none'}}>
        <div style={{width:64,height:64,borderRadius:'50%',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px #0001',fontSize:'2.2em',color:'#1DA1F2'}}>
          X
        </div>
        <span style={{marginTop:'0.5em',color:'#222',fontWeight:500,fontSize:'1em'}}>Twitter/X</span>
      </a>
      <a href="#" style={{display:'flex',flexDirection:'column',alignItems:'center',textDecoration:'none'}}>
        <div style={{width:64,height:64,borderRadius:'50%',background:'#fff',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 2px 8px #0001',fontSize:'2.2em',color:'#5865F2'}}>
          <span style={{fontWeight:700}}>D</span>
        </div>
        <span style={{marginTop:'0.5em',color:'#222',fontWeight:500,fontSize:'1em'}}>Discord</span>
      </a>
    </div>
  </section>
);

export default CommunitySection;
