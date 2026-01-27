import React, { useState } from 'react';
import { GameMode, QuizCategory, RankingData } from './types';
import { useQuiz } from './hooks/useQuiz';
import { TitleScreen } from './components/TitleScreen';
import { CategorySelectScreen } from './components/CategorySelectScreen';
import { QuizScreen } from './components/QuizScreen';
import { ResultScreen } from './components/ResultScreen';
import { RankingScreen } from './components/RankingScreen';

const App = () => {
  const [mode, setMode] = useState<GameMode>('title');
  const [playerName, setPlayerName] = useState('');
  const [rankings, setRankings] = useState<RankingData[]>([]);

  // クイズロジック
  const quiz = useQuiz();

  // クイズ完了時の処理
  React.useEffect(() => {
    if (quiz.isQuizComplete()) {
      showQuizResult();
    }
  }, [quiz.isQuizComplete()]);

  // 結果表示
  const showQuizResult = () => {
    const result = quiz.getQuizResult();
    const rankingData: RankingData = {
      mode: 'quiz',
      playerName: playerName || 'プレイヤー',
      ...result,
      timestamp: new Date().toLocaleString('ja-JP')
    };

    setRankings([...rankings, rankingData].sort((a, b) => b.finalScore - a.finalScore).slice(0, 10));
    setMode('result');
  };

  // リセット
  const resetGame = () => {
    setMode('category');
  };

  // 画面レンダリング
  if (mode === 'title') {
    return (
      <TitleScreen
        playerName={playerName}
        onPlayerNameChange={setPlayerName}
        onStart={() => setMode('category')}
        onShowRanking={() => setMode('ranking')}
      />
    );
  }

  if (mode === 'category') {
    return (
      <CategorySelectScreen
        onSelectCategory={(category: QuizCategory) => {
          quiz.startQuiz(category);
          setMode('quiz');
        }}
        onBack={() => setMode('title')}
      />
    );
  }

  if (mode === 'quiz') {
    return (
      <QuizScreen
        currentQ={quiz.quizData[quiz.quizIndex]}
        quizIndex={quiz.quizIndex}
        totalQuestions={quiz.quizData.length}
        quizTimer={quiz.quizTimer}
        selectedCategory={quiz.selectedCategory}
        selectedAnswer={quiz.selectedAnswer}
        showResult={quiz.showResult}
        onAnswer={quiz.handleQuizAnswer}
      />
    );
  }

  if (mode === 'result' && rankings.length > 0) {
    return (
      <ResultScreen
        result={rankings[0]}
        onPlayAgain={resetGame}
        onShowRanking={() => setMode('ranking')}
      />
    );
  }

  if (mode === 'ranking') {
    return (
      <RankingScreen
        rankings={rankings}
        onBack={() => setMode('title')}
      />
    );
  }

  return null;
};

export default App;

