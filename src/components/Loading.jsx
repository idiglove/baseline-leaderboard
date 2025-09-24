//src\components\Leaderboard.jsx
const Loading = ({ message = "Analyzing repository..." }) => {
  return (
    <div className="loading-container">
      <div className="loading-spinner"></div>
      <div className="loading-dots">
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
        <div className="loading-dot"></div>
      </div>
      <div className="loading-text">
        <h3>{message}</h3>
        <p>Scanning codebase for modernization opportunities...</p>
      </div>
    </div>
  );
};

export default Loading;