import React from 'react';
import './App.css';
import popHero from './assets/under-c.png';

function UnderConstruction() {
  return (
    <div className="under-construction-container">
      <img src={popHero} alt="The Sentry Sloth - Under Construction" className="under-construction-image" />
      <h1>We're Building Something Cozy!</h1>
      <p>Because great work takes patience. We build carefully, so it's built to last.</p>
    </div>
  );
}

export default UnderConstruction;
