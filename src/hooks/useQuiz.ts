import { useState, useEffect } from 'react';
import { QuizQuestion, QuizCategory } from '../types';
import { prepareQuizData } from '../utils/quizUtils';

export const useQuiz = () => {
  const [quizData, setQuizData] = useState<QuizQuestion[]>([]);
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState<boolean[]>([]);
  const [quizTimes, setQuizTimes] = useState<number[]>([]);
  const [quizTimer, setQuizTimer] = useState(10);
  const [quizStartTime, setQuizStartTime] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<QuizCategory>('random');

  // クイズタイマー
  useEffect(() => {
    if (quizData.length > 0 && !showResult && quizTimer > 0) {
      const timer = setTimeout(() => setQuizTimer(quizTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (quizData.length > 0 && quizTimer === 0 && !showResult) {
      // タイムアップ時は不正解として処理（正解インデックス以外を選択）
      handleQuizAnswer(quizData[quizIndex].correct === 0 ? 1 : 0);
    }
  }, [quizTimer, showResult, quizData.length, quizIndex, quizData]);

  const startQuiz = (category: QuizCategory = 'random') => {
    const newQuizData = prepareQuizData(category);
    setQuizData(newQuizData);
    setQuizIndex(0);
    setQuizAnswers([]);
    setQuizTimes([]);
    setQuizTimer(newQuizData[0].timeLimit);
    setQuizStartTime(Date.now());
    setSelectedAnswer(null);
    setShowResult(false);
    setSelectedCategory(category);
  };

  const handleQuizAnswer = (answerIndex: number) => {
    if (showResult) return;
    
    const responseTime = (Date.now() - quizStartTime) / 1000;
    const isCorrect = answerIndex === quizData[quizIndex].correct;
    
    setSelectedAnswer(answerIndex);
    setQuizAnswers([...quizAnswers, isCorrect]);
    setQuizTimes([...quizTimes, responseTime]);
    setShowResult(true);

    setTimeout(() => {
      if (quizIndex < quizData.length - 1) {
        setQuizIndex(quizIndex + 1);
        setQuizTimer(quizData[quizIndex + 1].timeLimit);
        setQuizStartTime(Date.now());
        setSelectedAnswer(null);
        setShowResult(false);
      }
    }, 1500);
  };

  const getQuizResult = () => {
    const correctCount = quizAnswers.filter(a => a).length;
    const accuracy = (correctCount / quizData.length) * 100;
    const avgTime = quizTimes.reduce((a, b) => a + b, 0) / quizTimes.length;
    const finalScore = Math.round(correctCount * 100 + Math.max(0, (10 - avgTime) * 10));

    return {
      correctCount,
      total: quizData.length,
      accuracy: accuracy.toFixed(1),
      avgTime: avgTime.toFixed(2),
      finalScore
    };
  };

  const isQuizComplete = () => {
    return quizIndex === quizData.length - 1 && showResult;
  };

  const resetQuiz = () => {
    setQuizData([]);
    setQuizIndex(0);
    setQuizAnswers([]);
    setQuizTimes([]);
    setQuizTimer(10);
    setQuizStartTime(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setSelectedCategory('random');
  };

  return {
    quizData,
    quizIndex,
    quizAnswers,
    quizTimes,
    quizTimer,
    selectedAnswer,
    showResult,
    selectedCategory,
    startQuiz,
    handleQuizAnswer,
    getQuizResult,
    isQuizComplete,
    resetQuiz
  };
};
