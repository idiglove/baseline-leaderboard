// src\components\RepoInput.jsx
import { useState } from 'react';

const RepoInput = ({ onAnalyze, isLoading }) => {
  const [repoUrl, setRepoUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (repoUrl.trim() && !isLoading) {
      onAnalyze(repoUrl.trim());
    }
  };

  const handleExampleClick = () => {
    setRepoUrl('https://github.com/idiglove/baseline-upgrade-cli');
  };

  return (
    <div className="repo-input-container">
      <div className="repo-input-glass">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="url"
              value={repoUrl}
              onChange={(e) => setRepoUrl(e.target.value)}
              placeholder="https://github.com/username/repository"
              className="repo-input"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!repoUrl.trim() || isLoading}
              className="analyze-btn"
            >
              {isLoading ? '🔄 Analyzing...' : '🚀 Analyze Repository'}
            </button>
          </div>
          
          <div style={{ textAlign: 'center', marginBottom: '25px' }}>
            <button
              type="button"
              onClick={handleExampleClick}
              disabled={isLoading}
              className="example-btn"
            >
              Try with example repository
            </button>
          </div>
        </form>

        <div className="features-grid">
          <div className="feature-card">
            <h3>🎯 Smart Scoring</h3>
            <p>0 = Perfect, Negative scores show improvement areas</p>
          </div>
          <div className="feature-card">
            <h3>🏆 Achievement Badges</h3>
            <p>Earn badges for your modernization progress</p>
          </div>
          <div className="feature-card">
            <h3>📊 Live Leaderboard</h3>
            <p>Compete with developers worldwide</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RepoInput;