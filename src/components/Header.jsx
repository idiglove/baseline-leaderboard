// src\components\Header.jsx
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <h1>🚀 Baseline Upgrade Dashboard</h1>
        <p>
          Analyze your GitHub repository for modernization opportunities using Baseline data. 
          Get your score, earn badges, and see how you rank on the global leaderboard!
        </p>
        <div className="feature-tags">
          <span className="feature-tag">🎯 Negative Scoring System</span>
          <span className="feature-tag">🏆 Live Leaderboard</span>
          <span className="feature-tag">📊 Real-time Analysis</span>
          <span className="feature-tag">✨ Beautiful Animations</span>
        </div>
      </div>
    </header>
  );
};

export default Header;