import React from 'react';
import { RotateCcw, Trophy } from 'lucide-react';
import { RankingData } from '../types';

interface ResultScreenProps {
  result: RankingData;
  onPlayAgain: () => void;
  onShowRanking: () => void;
}

export const ResultScreen: React.FC<ResultScreenProps> = ({
  result,
  onPlayAgain,
  onShowRanking
}) => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center p-4 relative" style={{ backgroundImage: "url('/result-background.jpg')" }}>
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="max-w-2xl w-full bg-white rounded-2xl p-8 shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <div className="text-6xl mb-4">🎉</div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2 drop-shadow-sm">結果発表!</h2>
          <p className="text-xl text-gray-800 font-semibold">{result.playerName}</p>
        </div>

        <div className="space-y-4">
          <div className="bg-blue-50 rounded-lg p-4 flex justify-between border-2 border-blue-200">
            <span className="text-gray-800 font-semibold">正答数</span>
            <span className="font-bold text-blue-600 text-xl">{result.correctCount} / {result.total}</span>
          </div>
          <div className="bg-green-50 rounded-lg p-4 flex justify-between border-2 border-green-200">
            <span className="text-gray-800 font-semibold">正答率</span>
            <span className="font-bold text-green-600 text-xl">{result.accuracy}%</span>
          </div>
          <div className="bg-purple-50 rounded-lg p-4 flex justify-between border-2 border-purple-200">
            <span className="text-gray-800 font-semibold">平均回答時間</span>
            <span className="font-bold text-purple-600 text-xl">{result.avgTime}秒</span>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg p-6 text-center shadow-lg">
          <div className="text-white text-sm mb-1 font-semibold">最終スコア</div>
          <div className="text-5xl font-bold text-white drop-shadow-md">{result.finalScore}</div>
        </div>

        <div className="mt-8 space-y-3">
          <button
            onClick={onPlayAgain}
            className="w-full bg-blue-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-blue-600 transition-all shadow-lg"
          >
            <RotateCcw className="inline mr-2" />
            もう一度プレイ
          </button>
          <button
            onClick={onShowRanking}
            className="w-full bg-yellow-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-yellow-600 transition-all shadow-lg"
          >
            <Trophy className="inline mr-2" />
            ランキングを見る
          </button>
        </div>
      </div>
    </div>
  );
};
