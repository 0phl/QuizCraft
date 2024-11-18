import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export default function TakeQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  // Temporary mock quiz data
  const quiz = {
    id: '1',
    title: 'Introduction to React',
    description: 'Test your knowledge of React fundamentals',
    timeLimit: 30,
    questions: [
      {
        id: '1',
        type: 'multiple-choice',
        text: 'What is React?',
        answers: [
          { id: 'a', text: 'A JavaScript library for building user interfaces' },
          { id: 'b', text: 'A programming language' },
          { id: 'c', text: 'A database management system' },
          { id: 'd', text: 'An operating system' },
        ],
      },
      // Add more questions as needed
    ],
  };

  useEffect(() => {
    if (quiz.timeLimit) {
      setTimeLeft(quiz.timeLimit * 60);
    }
  }, [quiz.timeLimit]);

  useEffect(() => {
    if (timeLeft === null) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === null || prev <= 0) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleAnswer = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    // TODO: Implement quiz submission
    navigate('/quizzes');
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">{quiz.title}</h1>
          {timeLeft !== null && (
            <div className="text-lg font-medium">
              Time Left: {formatTime(timeLeft)}
            </div>
          )}
        </div>

        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">
              Question {currentQuestion + 1} of {quiz.questions.length}
            </h2>
            <div className="text-sm text-gray-500">
              {Math.round(((currentQuestion + 1) / quiz.questions.length) * 100)}% Complete
            </div>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
            <div
              className="bg-indigo-600 h-2 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%`,
              }}
            />
          </div>

          <div className="space-y-4">
            {/* Question content will be rendered here */}
            <p className="text-lg">{quiz.questions[currentQuestion].text}</p>
            
            <div className="space-y-2">
              {quiz.questions[currentQuestion].answers.map((answer) => (
                <button
                  key={answer.id}
                  onClick={() => handleAnswer(quiz.questions[currentQuestion].id, answer.id)}
                  className={`w-full text-left p-4 rounded-lg border ${
                    answers[quiz.questions[currentQuestion].id] === answer.id
                      ? 'border-indigo-600 bg-indigo-50'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  {answer.text}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between">
          <button
            onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
            disabled={currentQuestion === 0}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          
          {currentQuestion === quiz.questions.length - 1 ? (
            <button
              onClick={handleSubmit}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Submit Quiz
            </button>
          ) : (
            <button
              onClick={() => setCurrentQuestion((prev) => Math.min(quiz.questions.length - 1, prev + 1))}
              className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700"
            >
              Next
            </button>
          )}
        </div>
      </div>
    </div>
  );
}