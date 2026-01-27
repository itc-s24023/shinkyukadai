import React from 'react';
import { Trophy } from 'lucide-react';

interface TitleScreenProps {
  playerName: string;
  onPlayerNameChange: (name: string) => void;
  onStart: () => void;
  onShowRanking: () => void;
}

export const TitleScreen: React.FC<TitleScreenProps> = ({
  playerName,
  onPlayerNameChange,
  onStart,
  onShowRanking
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-white mb-4 animate-bounce drop-shadow-lg">
          🎮 クイズゲーム
        </h1>
        <p className="text-2xl text-white mb-8 font-semibold drop-shadow-md">頭脳を鍛えよう!</p>
        <input
          type="text"
          placeholder="プレイヤー名を入力"
          value={playerName}
          onChange={(e) => onPlayerNameChange(e.target.value)}
          className="px-6 py-3 rounded-lg text-lg mb-4 w-64 text-center text-gray-800 font-semibold"
        />
        <div className="space-y-4">
          <button
            onClick={onStart}
            className="block mx-auto px-8 py-4 bg-white text-purple-600 rounded-lg text-xl font-bold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
          >
            スタート →
          </button>
          <button
            onClick={onShowRanking}
            className="block mx-auto px-8 py-4 bg-yellow-400 text-gray-800 rounded-lg text-lg font-bold hover:bg-yellow-300 transition-all shadow-lg"
          >
            <Trophy className="inline mr-2" />
            ランキング
          </button>
        </div>
      </div>
    </div>
  );
};
