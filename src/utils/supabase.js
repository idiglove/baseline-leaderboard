//src\utils\supabase.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const saveScoreToLeaderboard = async (repoData) => {
  try {
    const { data, error } = await supabase
      .from('leaderboard')
      .insert([
        {
          repo_url: repoData.repoUrl,
          repo_name: repoData.repoName,
          score: repoData.scoreResult.totalScore,
          baseline_approved: repoData.scoreResult.baselineApproved,
          suggestions_count: repoData.scoreResult.suggestionsCount,
          badges_earned: repoData.earnedBadges.length,
          analyzed_at: new Date().toISOString(),
        }
      ])
      .select();

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error saving to leaderboard:', error);
    return null;
  }
};

export const getLeaderboard = async (limit = 50) => {
  try {
    const { data, error } = await supabase
      .from('leaderboard')
      .select('*')
      .order('score', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
};