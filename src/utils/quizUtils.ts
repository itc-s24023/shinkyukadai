import { QuizQuestion, QuizCategory } from '../types';
import { QUIZ_DATA_POOL } from '../data/quizData';

// クイズ問題をシャッフルして選択肢もシャッフルする関数
export const prepareQuizData = (category: QuizCategory = 'random'): QuizQuestion[] => {
  // カテゴリーでフィルタリング
  let filteredQuestions = category === 'random' 
    ? QUIZ_DATA_POOL 
    : QUIZ_DATA_POOL.filter(q => q.category === category);
  
  // 問題をランダムに15問選択
  const shuffled = [...filteredQuestions].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(15, filteredQuestions.length));
  
  // 各問題の選択肢をシャッフル
  return selected.map(q => {
    const correctAnswer = q.options[q.correct];
    const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);
    const newCorrectIndex = shuffledOptions.indexOf(correctAnswer);
    
    return {
      ...q,
      options: shuffledOptions,
      correct: newCorrectIndex
    };
  });
};
