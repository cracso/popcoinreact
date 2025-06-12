import React from 'react';

const ComicSection = () => (
  <section className="doc-section" id="comic" style={{marginTop:'2.5em',marginBottom:'2.5em'}}>
    <h2 style={{textAlign:'center',fontSize:'2em',fontWeight:700,marginBottom:'1.2em'}}>The Adventures of Sentry</h2>
    <div style={{width:'100%',maxWidth:'700px',height:'220px',background:'#eaf2fa',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:'18px',boxShadow:'0 4px 24px #0001',margin:'0 auto 1.2em auto'}}>
      <span style={{opacity:0.7,textAlign:'center',fontSize:'1em',color:'#4a6c8a'}}>
        [Comic Strip Placeholder]<br/>
        Most recent 3-panel comic strip goes here.<br/>
        (See AI prompt in project notes)
      </span>
    </div>
    <div style={{textAlign:'center',marginBottom:'0.5em'}}>
      <span style={{fontSize:'1.08em',color:'#555'}}>"Catch the latest weekly comic from Sentry's world. New adventures every Tuesday!"</span>
    </div>
    <div style={{textAlign:'center'}}>
      <a href="#" className="btn btn-primary" style={{fontSize:'1.1em',padding:'0.7em 2.2em'}}>Read All Comics</a>
    </div>
  </section>
);

export default ComicSection;
