import React from 'react';
import { QuizCategory } from '../types';
import { CATEGORY_INFO } from '../data/categoryInfo';

interface CategorySelectScreenProps {
  onSelectCategory: (category: QuizCategory) => void;
  onBack: () => void;
}

export const CategorySelectScreen: React.FC<CategorySelectScreenProps> = ({
  onSelectCategory,
  onBack
}) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/it.jpeg')" }}>
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/60 to-indigo-900/60"></div>
      
      {/* コンテンツ */}
      <div className="max-w-6xl w-full relative z-10">
        <h2 className="text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">カテゴリーを選択</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
          {(Object.keys(CATEGORY_INFO) as QuizCategory[]).map((cat) => {
            const info = CATEGORY_INFO[cat];
            return (
              <button
                key={cat}
                onClick={() => onSelectCategory(cat)}
                className="bg-white rounded-xl p-6 cursor-pointer transform hover:scale-105 transition-all hover:shadow-2xl text-center"
              >
                <div className="text-5xl mb-2">{info.emoji}</div>
                <h3 className="text-xl font-bold text-gray-800">{info.name}</h3>
              </button>
            );
          })}
        </div>
        <button
          onClick={onBack}
          className="block mx-auto px-8 py-3 bg-white text-indigo-600 rounded-lg text-lg font-bold hover:bg-gray-100 transition-all shadow-lg"
        >
          ← 戻る
        </button>
      </div>
    </div>
  );
};
