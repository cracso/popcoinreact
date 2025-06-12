import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UnderConstruction from './UnderConstruction';

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <Routes>
            <Route path="/*" element={<UnderConstruction />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
