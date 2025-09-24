// src/utils/badges.js
export class BadgeSystem {
  constructor() {
    this.badges = this.initializeBadges();
  }

  initializeBadges() {
    return [
      {
        id: 'code-perfectionist',
        name: 'Code Perfectionist',
        description: 'Achieved near-perfect code quality (qualityScore > 90)',
        svgUrl: 'https://img.shields.io/badge/Code-Perfectionist-gold',
        markdown: '[![Code Perfectionist](https://img.shields.io/badge/Code-Perfectionist-gold)]',
        criteria: (stats) => stats.qualityScore > 90
      },
      {
        id: 'modern-master',
        name: 'Modern Master',
        description: 'Uses modern technologies and frameworks extensively',
        svgUrl: 'https://img.shields.io/badge/Tech-Modern_Master-blueviolet',
        markdown: '[![Modern Master](https://img.shields.io/badge/Tech-Modern_Master-blueviolet)]',
        criteria: (stats) => stats.usesModernTech && stats.frameworkUsage >= 2
      },
      {
        id: 'test-champion',
        name: 'Test Champion',
        description: 'Excellent test coverage and testing practices',
        svgUrl: 'https://img.shields.io/badge/Testing-Champion-success',
        markdown: '[![Test Champion](https://img.shields.io/badge/Testing-Champion-success)]',
        criteria: (stats) => stats.hasTests && stats.testCoverage >= 80
      },
      {
        id: 'performance-guru',
        name: 'Performance Guru',
        description: 'Highly optimized code with great performance',
        svgUrl: 'https://img.shields.io/badge/Performance-Guru-orange',
        markdown: '[![Performance Guru](https://img.shields.io/badge/Performance-Guru-orange)]',
        criteria: (stats) => stats.performanceOptimized && stats.bundleSize < 500
      },

      {
        id: 'clean-architect',
        name: 'Clean Architect',
        description: 'Excellent project structure and architecture',
        svgUrl: 'https://img.shields.io/badge/Architecture-Clean-brightgreen',
        markdown: '[![Clean Architect](https://img.shields.io/badge/Architecture-Clean-brightgreen)]',
        criteria: (stats) => stats.hasGoodStructure && stats.hasGoodArchitecture
      },
      {
        id: 'docs-hero',
        name: 'Docs Hero',
        description: 'Great documentation and commenting practices',
        svgUrl: 'https://img.shields.io/badge/Documentation-Hero-9cf',
        markdown: '[![Docs Hero](https://img.shields.io/badge/Documentation-Hero-9cf)]',
        criteria: (stats) => stats.hasGoodDocs && stats.commentRatio >= 0.2
      },
      {
        id: 'seo-expert',
        name: 'SEO Expert',
        description: 'Implements SEO best practices',
        svgUrl: 'https://img.shields.io/badge/SEO-Expert-lightgrey',
        markdown: '[![SEO Expert](https://img.shields.io/badge/SEO-Expert-lightgrey)]',
        criteria: (stats) => stats.hasSEOBestPractices
      },
      {
        id: 'accessibility-advocate',
        name: 'Accessibility Advocate',
        description: 'Focuses on web accessibility',
        svgUrl: 'https://img.shields.io/badge/Accessibility-Advocate-important',
        markdown: '[![Accessibility Advocate](https://img.shields.io/badge/Accessibility-Advocate-important)]',
        criteria: (stats) => stats.hasAccessibility
      },

      {
        id: 'framework-wizard',
        name: 'Framework Wizard',
        description: 'Uses multiple modern frameworks effectively',
        svgUrl: 'https://img.shields.io/badge/Frameworks-Wizard-purple',
        markdown: '[![Framework Wizard](https://img.shields.io/badge/Frameworks-Wizard-purple)]',
        criteria: (stats) => stats.usesFrameworks && stats.frameworkUsage >= 3
      },
      {
        id: 'vanilla-virtuoso',
        name: 'Vanilla Virtuoso',
        description: 'Masters vanilla JavaScript without heavy frameworks',
        svgUrl: 'https://img.shields.io/badge/JavaScript-Vanilla_Virtuoso-yellow',
        markdown: '[![Vanilla Virtuoso](https://img.shields.io/badge/JavaScript-Vanilla_Virtuoso-yellow)]',
        criteria: (stats) => stats.usesVanillaJS && !stats.usesHeavyFrameworks
      },
      {
        id: 'dependency-master',
        name: 'Dependency Master',
        description: 'Well-managed dependencies (not too many, not too few)',
        svgUrl: 'https://img.shields.io/badge/Dependencies-Master-blue',
        markdown: '[![Dependency Master](https://img.shields.io/badge/Dependencies-Master-blue)]',
        criteria: (stats) => stats.dependencyCount >= 5 && stats.dependencyCount <= 30
      },

      {
        id: 'ci-cd-pro',
        name: 'CI/CD Pro',
        description: 'Implements continuous integration and deployment',
        svgUrl: 'https://img.shields.io/badge/CI/CD-Professional-red',
        markdown: '[![CI/CD Pro](https://img.shields.io/badge/CI/CD-Professional-red)]',
        criteria: (stats) => stats.hasCICD
      },
      {
        id: 'git-master',
        name: 'Git Master',
        description: 'Maintains excellent git history and practices',
        svgUrl: 'https://img.shields.io/badge/Git-Master-green',
        markdown: '[![Git Master](https://img.shields.io/badge/Git-Master-green)]',
        criteria: (stats) => stats.hasGoodGitHistory
      },
      {
        id: 'open-source-hero',
        name: 'Open Source Hero',
        description: 'Maintains open source best practices',
        svgUrl: 'https://img.shields.io/badge/Open_Source-Hero-success',
        markdown: '[![Open Source Hero](https://img.shields.io/badge/Open_Source-Hero-success)]',
        criteria: (stats) => stats.isOpenSource
      },

      {
        id: 'console-logger',
        name: 'Console Logger',
        description: 'Loves console.log a bit too much!',
        svgUrl: 'https://img.shields.io/badge/Debugging-Console_Logger-ff69b4',
        markdown: '[![Console Logger](https://img.shields.io/badge/Debugging-Console_Logger-ff69b4)]',
        criteria: (stats) => stats.consoleLogs > 10,
        type: 'roasting'
      },
      {
        id: 'dependency-hoarder',
        name: 'Dependency Hoarder',
        description: 'Maybe using a few too many packages?',
        svgUrl: 'https://img.shields.io/badge/Dependencies-Hoarder-critical',
        markdown: '[![Dependency Hoarder](https://img.shields.io/badge/Dependencies-Hoarder-critical)]',
        criteria: (stats) => stats.dependencyCount > 50,
        type: 'roasting'
      },
      {
        id: 'bundle-bloater',
        name: 'Bundle Bloater',
        description: 'Bundle size could use some dieting!',
        svgUrl: 'https://img.shields.io/badge/Performance-Bundle_Bloater-red',
        markdown: '[![Bundle Bloater](https://img.shields.io/badge/Performance-Bundle_Bloater-red)]',
        criteria: (stats) => stats.bundleSize > 1000,
        type: 'roasting'
      },
      {
        id: 'comment-ghost',
        name: 'Comment Ghost',
        description: 'Comments? What comments?',
        svgUrl: 'https://img.shields.io/badge/Documentation-Ghost-lightgrey',
        markdown: '[![Comment Ghost](https://img.shields.io/badge/Documentation-Ghost-lightgrey)]',
        criteria: (stats) => stats.commentRatio < 0.05,
        type: 'roasting'
      },

      {
        id: 'responsive-rockstar',
        name: 'Responsive Rockstar',
        description: 'Perfect responsive design implementation',
        svgUrl: 'https://img.shields.io/badge/Design-Responsive_Rockstar-pink',
        markdown: '[![Responsive Rockstar](https://img.shields.io/badge/Design-Responsive_Rockstar-pink)]',
        criteria: (stats) => stats.isResponsive
      },
      {
        id: 'complexity-crusher',
        name: 'Complexity Crusher',
        description: 'Manages complexity like a pro',
        svgUrl: 'https://img.shields.io/badge/Code_Quality-Complexity_Crusher-green',
        markdown: '[![Complexity Crusher](https://img.shields.io/badge/Code_Quality-Complexity_Crusher-green)]',
        criteria: (stats) => stats.complexityScore <= 3
      },
      {
        id: 'file-organizer',
        name: 'File Organizer',
        description: 'Well-structured project with optimal file count',
        svgUrl: 'https://img.shields.io/badge/Structure-File_Organizer-blue',
        markdown: '[![File Organizer](https://img.shields.io/badge/Structure-File_Organizer-blue)]',
        criteria: (stats) => stats.fileCount >= 10 && stats.fileCount <= 100
      },
      {
        id: 'package-json-pro',
        name: 'Package.json Pro',
        description: 'Perfect package.json configuration',
        svgUrl: 'https://img.shields.io/badge/Configuration-Package.json_Pro-yellow',
        markdown: '[![Package.json Pro](https://img.shields.io/badge/Configuration-Package.json_Pro-yellow)]',
        criteria: (stats) => stats.hasPackageJson
      },
      {
        id: 'code-minimalist',
        name: 'Code Minimalist',
        description: 'Clean and minimal codebase',
        svgUrl: 'https://img.shields.io/badge/Code-Minimalist-lightblue',
        markdown: '[![Code Minimalist](https://img.shields.io/badge/Code-Minimalist-lightblue)]',
        criteria: (stats) => stats.fileCount < 20 && stats.dependencyCount < 10
      },
      {
        id: 'test-enthusiast',
        name: 'Test Enthusiast',
        description: 'Good test coverage (70%+)',
        svgUrl: 'https://img.shields.io/badge/Testing-Enthusiast-green',
        markdown: '[![Test Enthusiast](https://img.shields.io/badge/Testing-Enthusiast-green)]',
        criteria: (stats) => stats.hasTests && stats.testCoverage >= 70
      },
      {
        id: 'modern-framework-user',
        name: 'Modern Framework User',
        description: 'Uses modern frameworks appropriately',
        svgUrl: 'https://img.shields.io/badge/Framework-Modern_User-blue',
        markdown: '[![Modern Framework User](https://img.shields.io/badge/Framework-Modern_User-blue)]',
        criteria: (stats) => stats.usesFrameworks && stats.frameworkUsage >= 1
      },
      {
        id: 'performance-optimizer',
        name: 'Performance Optimizer',
        description: 'Good performance optimization',
        svgUrl: 'https://img.shields.io/badge/Performance-Optimizer-orange',
        markdown: '[![Performance Optimizer](https://img.shields.io/badge/Performance-Optimizer-orange)]',
        criteria: (stats) => stats.performanceOptimized && stats.bundleSize < 800
      },
      {
        id: 'documentation-pro',
        name: 'Documentation Pro',
        description: 'Good documentation practices',
        svgUrl: 'https://img.shields.io/badge/Docs-Pro-brightgreen',
        markdown: '[![Documentation Pro](https://img.shields.io/badge/Docs-Pro-brightgreen)]',
        criteria: (stats) => stats.hasGoodDocs && stats.commentRatio >= 0.15
      }
    ];
  }

  getEarnedBadges(repoStats) {
    return this.badges.filter(badge => badge.criteria(repoStats));
  }

  generateBadgesMarkdown(badges) {
    return badges.map(badge => badge.markdown).join(' ');
  }

  getBadgesByType(badges, type) {
    return badges.filter(badge => badge.type === type);
  }

  getRegularBadges(badges) {
    return badges.filter(badge => !badge.type || badge.type !== 'roasting');
  }

  getRoastingBadges(badges) {
    return badges.filter(badge => badge.type === 'roasting');
  }

  getBadgeProgress(repoStats) {
    return this.badges.map(badge => ({
      ...badge,
      earned: badge.criteria(repoStats),
      progress: this.calculateBadgeProgress(badge, repoStats)
    }));
  }

  calculateBadgeProgress(badge, repoStats) {
    return badge.criteria(repoStats) ? 100 : 0;
  }
}

export const defaultBadgeSystem = new BadgeSystem();