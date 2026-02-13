import { QuizQuestion } from '../types';
import { BASIC_QUESTIONS } from './categories/basic';
import { GEOGRAPHY_QUESTIONS } from './categories/geography';
import { SCIENCE_QUESTIONS } from './categories/science';
import { MATH_QUESTIONS } from './categories/math';
import { ANIMALS_QUESTIONS } from './categories/animals';
import { HISTORY_QUESTIONS } from './categories/history';
import { SPORTS_QUESTIONS } from './categories/sports';
import { FOOD_QUESTIONS } from './categories/food';
import { LANGUAGE_QUESTIONS } from './categories/language';
import { LIFE_QUESTIONS } from './categories/life';

// クイズ問題データ(870問)
export const QUIZ_DATA_POOL: QuizQuestion[] = [
  ...BASIC_QUESTIONS,
  ...GEOGRAPHY_QUESTIONS,
  ...SCIENCE_QUESTIONS,
  ...MATH_QUESTIONS,
  ...ANIMALS_QUESTIONS,
  ...HISTORY_QUESTIONS,
  ...SPORTS_QUESTIONS,
  ...FOOD_QUESTIONS,
  ...LANGUAGE_QUESTIONS,
  ...LIFE_QUESTIONS,
];
