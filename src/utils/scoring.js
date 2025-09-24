// src\utils\scoring.js
export class ScoringSystem {
  constructor(config = {}) {
    this.config = {
      baselineApprovalThreshold: -5,
      pointsPerSuggestion: {
        error: -3,
        warn: -2,
        info: -1,
      },
      baselineStatusMultipliers: {
        high: 1.0,    
        low: 0.7,
        limited: 0.4,
        'not supported': 0.1,
      },
      categoryMultipliers: {
        javascript: 1.0,
        css: 0.9,
        html: 0.8,
        performance: 1.2,
      },
      ...config,
    };
  }

  calculateScore(suggestions) {
    let totalScore = 0;

    const suggestionsByCategory = {
      javascript: 0,
      css: 0,
      html: 0,
      performance: 0,
    };

    const suggestionsBySeverity = {
      error: 0,
      warn: 0,
      info: 0,
    };

    const suggestionsByBaselineStatus = {
      high: 0,
      low: 0,
      limited: 0,
      'not supported': 0,
    };

    suggestions.forEach(suggestion => {
      const basePoints = this.config.pointsPerSuggestion[suggestion.severity];
      const baselineMultiplier = this.config.baselineStatusMultipliers[suggestion.baselineStatus];
      const categoryMultiplier = this.config.categoryMultipliers[suggestion.category];

      const penalty = basePoints * baselineMultiplier * categoryMultiplier;
      totalScore += penalty;

      suggestionsByCategory[suggestion.category]++;
      suggestionsBySeverity[suggestion.severity]++;
      suggestionsByBaselineStatus[suggestion.baselineStatus]++;
    });
    
    totalScore = Math.round(totalScore * 100) / 100;

    return {
      totalScore,
      baselineApproved: totalScore >= this.config.baselineApprovalThreshold,
      suggestionsCount: suggestions.length,
      suggestionsByCategory,
      suggestionsBySeverity,
      suggestionsByBaselineStatus,
    };
  }

  getScoreInterpretation(score) {
    if (score >= 0) return 'Perfect - Baseline Approved! 🎉';
    if (score >= -5) return 'Excellent - Baseline Approved! ✨';
    if (score >= -15) return 'Good - Minor improvements needed 👍';
    if (score >= -30) return 'Fair - Moderate modernization required ⚠️';
    if (score >= -50) return 'Needs Work - Significant modernization required 🚧';
    return 'Critical - Major modernization required 🔴';
  }

  getLeaderboardRank(score) {
    if (score >= 0) return 'Baseline Champion 🏆';
    if (score >= -5) return 'Modernization Master 🥇';
    if (score >= -15) return 'Web Standards Expert 🥈';
    if (score >= -30) return 'Progressive Developer 🥉';
    if (score >= -50) return 'Modern Web Explorer 🔍';
    return 'Legacy Code Adventurer ⚔️';
  }

  getScoreColor(score) {
    if (score >= 0) return '#43e97b';
    if (score >= -5) return '#51cf66';
    if (score >= -15) return '#fcc419';
    if (score >= -30) return '#ff922b';
    if (score >= -50) return '#ff6b6b';
    return '#fa5252';
  }

  getScoreBreakdown(suggestions) {
    const breakdown = [];
    
    suggestions.forEach(suggestion => {
      const basePoints = this.config.pointsPerSuggestion[suggestion.severity];
      const baselineMultiplier = this.config.baselineStatusMultipliers[suggestion.baselineStatus];
      const categoryMultiplier = this.config.categoryMultipliers[suggestion.category];
      const penalty = basePoints * baselineMultiplier * categoryMultiplier;
      
      breakdown.push({
        description: suggestion.description,
        severity: suggestion.severity,
        category: suggestion.category,
        baselineStatus: suggestion.baselineStatus,
        penalty: Math.round(penalty * 100) / 100,
        basePoints,
        multipliers: {
          baseline: baselineMultiplier,
          category: categoryMultiplier
        }
      });
    });
    
    return breakdown;
  }
}

export const defaultScoringSystem = new ScoringSystem();