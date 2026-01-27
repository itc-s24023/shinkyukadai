import React from 'react';
import { Timer } from 'lucide-react';
import { QuizQuestion, QuizCategory } from '../types';
import { CATEGORY_INFO } from '../data/categoryInfo';

interface QuizScreenProps {
  currentQ: QuizQuestion;
  quizIndex: number;
  totalQuestions: number;
  quizTimer: number;
  selectedCategory: QuizCategory;
  selectedAnswer: number | null;
  showResult: boolean;
  onAnswer: (index: number) => void;
}

export const QuizScreen: React.FC<QuizScreenProps> = ({
  currentQ,
  quizIndex,
  totalQuestions,
  quizTimer,
  selectedCategory,
  selectedAnswer,
  showResult,
  onAnswer
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl p-8 shadow-2xl">
        {/* ヘッダー */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-lg font-bold text-gray-800">
            問題 {quizIndex + 1} / {totalQuestions}
          </div>
          <div className={`text-3xl font-bold ${quizTimer <= 3 ? 'text-red-500 animate-pulse' : 'text-blue-600'}`}>
            <Timer className="inline mr-2" />
            {quizTimer}
          </div>
        </div>

        {/* カテゴリー表示 */}
        <div className="text-center mb-4">
          <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-bold">
            {CATEGORY_INFO[selectedCategory].emoji} {CATEGORY_INFO[selectedCategory].name}
          </span>
        </div>

        {/* 問題文 */}
        <div className="bg-blue-50 rounded-lg p-6 mb-6">
          <h3 className="text-2xl font-bold text-gray-900">{currentQ.question}</h3>
        </div>

        {/* 選択肢 */}
        <div className="space-y-3">
          {currentQ.options.map((option, index) => {
            let bgColor = 'bg-gray-100 hover:bg-gray-200 text-gray-900';
            
            if (showResult) {
              if (index === currentQ.correct) {
                bgColor = 'bg-green-500 text-white';
              } else if (index === selectedAnswer && selectedAnswer !== currentQ.correct) {
                bgColor = 'bg-red-500 text-white';
              }
            }

            return (
              <button
                key={index}
                onClick={() => onAnswer(index)}
                disabled={showResult}
                className={`w-full p-4 rounded-lg text-left font-bold transition-all transform hover:scale-102 ${bgColor}`}
              >
                <span className="text-lg">{String.fromCharCode(65 + index)}. {option}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
