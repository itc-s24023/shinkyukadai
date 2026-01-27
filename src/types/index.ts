// ゲームモード
export type GameMode = 'title' | 'category' | 'quiz' | 'result' | 'ranking';

// クイズカテゴリー
export type QuizCategory = 'random' | 'basic' | 'geography' | 'science' | 'math' | 'animals' | 'history' | 'sports' | 'food' | 'language' | 'life';

// クイズ問題の型
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  timeLimit: number;
  category: QuizCategory;
}

// ランキングデータの型
export interface RankingData {
  mode: 'quiz';
  playerName: string;
  correctCount?: number;
  total?: number;
  accuracy?: string;
  avgTime: string;
  finalScore: number;
  timestamp: string;
}

// カテゴリー情報の型
export interface CategoryInfo {
  name: string;
  emoji: string;
  color: string;
}
