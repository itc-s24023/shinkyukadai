import React from 'react';
import { Trophy } from 'lucide-react';
import { RankingData } from '../types';

interface RankingScreenProps {
  rankings: RankingData[];
  onBack: () => void;
}

export const RankingScreen: React.FC<RankingScreenProps> = ({
  rankings,
  onBack
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl p-8 shadow-2xl">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-900 drop-shadow-sm">
          <Trophy className="inline mr-2 text-yellow-500" />
          ランキング
        </h2>

        {rankings.length === 0 ? (
          <div className="text-center text-gray-600 py-12 font-semibold text-lg">
            まだ記録がありません
          </div>
        ) : (
          <div className="space-y-3">
            {rankings.map((rank, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg flex items-center justify-between ${
                  index === 0 ? 'bg-yellow-100 border-2 border-yellow-400' :
                  index === 1 ? 'bg-gray-100 border-2 border-gray-400' :
                  index === 2 ? 'bg-orange-100 border-2 border-orange-400' :
                  'bg-gray-50 border border-gray-300'
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`text-2xl font-bold ${
                    index === 0 ? 'text-yellow-600' :
                    index === 1 ? 'text-gray-600' :
                    index === 2 ? 'text-orange-600' :
                    'text-gray-400'
                  }`}>
                    #{index + 1}
                  </div>
                  <div>
                    <div className="font-bold text-lg text-gray-900">{rank.playerName}</div>
                    <div className="text-sm text-gray-700 font-medium">
                      🎯 クイズ | {rank.timestamp}
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-purple-600">{rank.finalScore}</div>
                  <div className="text-xs text-gray-600 font-semibold">pts</div>
                </div>
              </div>
            ))}
          </div>
        )}

        <button
          onClick={onBack}
          className="w-full mt-8 bg-purple-500 text-white py-4 rounded-lg text-xl font-bold hover:bg-purple-600 transition-all shadow-lg"
        >
          タイトルに戻る
        </button>
      </div>
    </div>
  );
};
