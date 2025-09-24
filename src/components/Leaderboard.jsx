//src\components\Leaderboard.jsx
const Leaderboard = ({ leaderboard, currentRepo }) => {
  const getRankIcon = (index) => {
    if (index === 0) return '🥇';
    if (index === 1) return '🥈';
    if (index === 2) return '🥉';
    return `#${index + 1}`;
  };

  const getScoreColor = (score) => {
    if (score >= 0) return '#43e97b';
    if (score >= -5) return '#51cf66';
    if (score >= -15) return '#fcc419';
    if (score >= -30) return '#ff922b';
    if (score >= -50) return '#ff6b6b';
    return '#fa5252';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="leaderboard-container">
      <div className="leaderboard-header">
        <h2>
          🏆 Global Leaderboard
          <span className="live-badge animate-pulse">LIVE</span>
        </h2>
        <p>Top performing repositories ranked by Baseline score</p>
      </div>

      <div className="leaderboard-card glass">
        <div className="leaderboard-table-container">
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Repository</th>
                <th>Date</th>
                <th>Score</th>
                <th>Suggestions</th>
                <th>Badges</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map((entry, index) => (
                <tr 
                  key={entry.id} 
                  className={currentRepo && entry.repo_url === currentRepo.repoUrl ? 'current-repo highlight-row' : ''}
                >
                  <td className="rank-cell">
                    <span className="rank-icon">{getRankIcon(index)}</span>
                  </td>
                  <td className="repo-cell">
                    <div className="repo-info">
                      <a 
                        href={entry.repo_url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        title={entry.repo_name}
                        className="repo-link"
                      >
                        {entry.repo_name}
                      </a>
                    </div>
                  </td>
                  <td className="date-cell">
                    {formatDate(entry.analyzed_at)}
                  </td>
                  <td className="score-cell">
                    <span 
                      className="leaderboard-score-value"
                      style={{ color: getScoreColor(entry.score) }}
                    >
                      {entry.score}
                    </span>
                  </td>
                  <td className="suggestions-cell">
                    <span className="suggestions-count">{entry.suggestions_count}</span>
                  </td>
                  <td className="badges-cell">
                    <div className="badges-display">
                      <span className="badges-count">{entry.badges_earned}</span>
                      {entry.badges_earned > 0 && (
                        <span className="badges-icon">🏅</span>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          
          {leaderboard.length === 0 && (
            <div className="empty-leaderboard">
              <div className="empty-icon">📊</div>
              <h3>No entries yet</h3>
              <p>Be the first to analyze a repository!</p>
            </div>
          )}
        </div>
        
        <div className="leaderboard-footer">
          <span className="leaderboard-stats">
            Showing top {leaderboard.length} repositories • Updated in real-time
          </span>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;