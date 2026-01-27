import { QuizCategory, CategoryInfo } from '../types';

// カテゴリー情報
export const CATEGORY_INFO: Record<QuizCategory, CategoryInfo> = {
  random: { name: 'ランダム', emoji: '🎲', color: 'purple' },
  basic: { name: '基礎知識', emoji: '📚', color: 'blue' },
  geography: { name: '地理', emoji: '🌍', color: 'green' },
  science: { name: '理科', emoji: '🔬', color: 'cyan' },
  math: { name: '算数', emoji: '🔢', color: 'indigo' },
  animals: { name: '動物', emoji: '🐾', color: 'orange' },
  history: { name: '歴史', emoji: '📜', color: 'amber' },
  sports: { name: 'スポーツ', emoji: '⚽', color: 'red' },
  food: { name: '食べ物', emoji: '🍱', color: 'pink' },
  language: { name: '言葉', emoji: '✏️', color: 'violet' },
  life: { name: '生活', emoji: '🏠', color: 'teal' }
};
