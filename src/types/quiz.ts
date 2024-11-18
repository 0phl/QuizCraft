export type QuestionType = 'multiple-choice' | 'essay' | 'true-false' | 'fill-blank';

export interface Answer {
  id: string;
  text: string;
  isCorrect?: boolean;
}

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  answers: Answer[];
  points: number;
  feedback?: string;
  category?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  questions: Question[];
  timeLimit?: number;
  shuffleQuestions: boolean;
  createdBy: string;
  createdAt: string;
  category?: string;
  isPublic: boolean;
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  userId: string;
  answers: Record<string, string | string[]>;
  score?: number;
  startedAt: string;
  completedAt?: string;
  timeSpent: number;
}