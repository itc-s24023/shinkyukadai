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
    <div className="min-h-screen flex items-center justify-center p-4 relative bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/background.jpg')" }}>
      {/* 背景オーバーレイ */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      {/* コンテンツ */}
      <div className="text-center relative z-10">
        <h1 className="text-6xl font-bold text-white mb-4 animate-bounce drop-shadow-lg">
          目指せ！クイズチャンピオン
        </h1>
        <p className="text-2xl text-white mb-8 font-semibold drop-shadow-md">頭脳を鍛えよう!</p>
        <input
          type="text"
          placeholder="プレイヤー名を入力"
          value={playerName}
          onChange={(e) => onPlayerNameChange(e.target.value)}
          className="px-6 py-3 rounded-lg text-lg mb-4 w-64 text-center text-white font-semibold placeholder-white"
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
