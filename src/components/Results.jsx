import { defaultScoringSystem } from '../utils/scoring.js';
import { defaultBadgeSystem } from '../utils/badges.js';

const Results = ({ repoData }) => {
  if (!repoData) return null;

  const { repoUrl, repoName, scoreResult, earnedBadges, suggestions, repoStats } = repoData;
  const scoreColor = defaultScoringSystem.getScoreColor(scoreResult.totalScore);

  const generateReadmeContent = () => {
    const badgesMarkdown = defaultBadgeSystem.generateBadgesMarkdown(earnedBadges);
    
    let content = `# ${repoName}

${badgesMarkdown}

## 📊 Baseline Score: ${scoreResult.totalScore}

${scoreResult.baselineApproved ? '✅ **Baseline Approved**' : '⚠️ **Not Baseline Approved**'}

### 🎯 Score Details:
- **Total Suggestions**: ${scoreResult.suggestionsCount}
- **JavaScript**: ${scoreResult.suggestionsByCategory.javascript}
- **CSS**: ${scoreResult.suggestionsByCategory.css}
- **HTML**: ${scoreResult.suggestionsByCategory.html}
- **Performance**: ${scoreResult.suggestionsByCategory.performance}

### 📈 Baseline Status:
- **Stable Features**: ${scoreResult.suggestionsByBaselineStatus.high}
- **Newly Available**: ${scoreResult.suggestionsByBaselineStatus.low}
- **Limited Support**: ${scoreResult.suggestionsByBaselineStatus.limited}
- **Not Supported**: ${scoreResult.suggestionsByBaselineStatus['not supported']}

### 🏆 Rank: ${defaultScoringSystem.getLeaderboardRank(scoreResult.totalScore)}
${defaultScoringSystem.getScoreInterpretation(scoreResult.totalScore)}

---

*Analyzed with [Baseline Upgrade Dashboard](${window.location.origin})*`;

    return content;
  };

  const handleDownload = () => {
    const content = generateReadmeContent();
    const blob = new Blob([content], { type: 'text/markdown' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'README.md';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="results-container">
      {/* Repository Header - First Row */}
      <div className="repo-header glass animate-fade-in-up">
        <div className="repo-header-content">
          <div className="repo-info">
            <h2>{repoName}</h2>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
              {repoUrl}
            </a>
          </div>
          <button onClick={handleDownload} className="download-btn animate-glow">
            <span>📥</span>
            <span>Download README</span>
          </button>
        </div>
      </div>

      {/* Score Cards and Statistics - Second Row */}
      <div className="score-stats-grid">
        <div className="score-card glass animate-slide-in-left">
          <div className="score-value" style={{ color: scoreColor }}>
            {scoreResult.totalScore}
          </div>
          <div className="score-interpretation">
            {defaultScoringSystem.getScoreInterpretation(scoreResult.totalScore)}
          </div>
          <div className="score-rank">
            {defaultScoringSystem.getLeaderboardRank(scoreResult.totalScore)}
          </div>
          <div className={`approval-badge ${scoreResult.baselineApproved ? 'approved' : 'not-approved'}`}>
            {scoreResult.baselineApproved ? '✅ Baseline Approved' : '❌ Not Approved'}
          </div>
        </div>

        <div className="stats-grid-container glass animate-slide-in-right">
          <h3>📊 Repository Statistics</h3>
          <div className="stats-grid-inner">
            <div className="stat-item">
              <div className="stat-number">{scoreResult.suggestionsCount}</div>
              <div className="stat-label">Total Suggestions</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#4facfe' }}>
                {scoreResult.suggestionsByCategory.javascript}
              </div>
              <div className="stat-label">JavaScript</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#fa709a' }}>
                {scoreResult.suggestionsByCategory.css}
              </div>
              <div className="stat-label">CSS</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" style={{ color: '#43e97b' }}>
                {scoreResult.suggestionsByCategory.performance}
              </div>
              <div className="stat-label">Performance</div>
            </div>
          </div>
        </div>
      </div>

      {/* Badges and Suggestions - Third Row */}
      <div className="badges-suggestions-grid">
        <div className="badges-card glass animate-slide-in-left">
          <h3>🏆 Earned Badges ({earnedBadges.length})</h3>
          <div className="badges-grid">
            {earnedBadges.map((badge) => (
              <div key={badge.id} className="badge-item animate-float">
                <img src={badge.svgUrl} alt={badge.name} />
                <span className="badge-name">{badge.name}</span>
                <p>{badge.description}</p>
              </div>
            ))}
            {earnedBadges.length === 0 && (
              <div className="no-badges">
                <div className="no-badges-icon">🏅</div>
                <p>No badges earned yet. Keep improving your code!</p>
              </div>
            )}
          </div>
        </div>

        {/* Suggestions Card */}
        <div className="suggestions-card glass animate-slide-in-right">
          <h3>💡 Modernization Suggestions ({suggestions.length})</h3>
          <div className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <div key={index} className="suggestion-item">
                <div className="suggestion-header">
                  <span className="suggestion-file">{suggestion.file}</span>
                  <span className="suggestion-line">Line {suggestion.line}</span>
                </div>
                <div className="suggestion-code">
                  <span className="old-code">{suggestion.oldCode}</span>
                  <span className="arrow">→</span>
                  <span className="new-code">{suggestion.newCode}</span>
                </div>
                <div className="suggestion-desc">{suggestion.description}</div>
                <div className="suggestion-meta">
                  <span className={`severity severity-${suggestion.severity}`}>
                    {suggestion.severity}
                  </span>
                  <span className="category">{suggestion.category}</span>
                  <span className="baseline-status">{suggestion.baselineStatus}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;