import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Users, BookOpen } from 'lucide-react';

export default function QuizList() {
  // Temporary mock data
  const quizzes = [
    {
      id: '1',
      title: 'Introduction to React',
      description: 'Test your knowledge of React fundamentals',
      category: 'Programming',
      timeLimit: 30,
      attempts: 150,
      questions: 10,
    },
    // Add more mock quizzes as needed
  ];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">My Quizzes</h1>
        <Link
          to="/create"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-500"
        >
          Create New Quiz
        </Link>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {quizzes.map((quiz) => (
          <div
            key={quiz.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{quiz.title}</h3>
              <p className="text-gray-600 mb-4">{quiz.description}</p>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {quiz.timeLimit} mins
                </div>
                <div className="flex items-center">
                  <Users className="h-4 w-4 mr-1" />
                  {quiz.attempts} attempts
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-4 w-4 mr-1" />
                  {quiz.questions} questions
                </div>
              </div>
            </div>
            
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100">
              <div className="flex justify-between items-center">
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                  {quiz.category}
                </span>
                <Link
                  to={`/quiz/${quiz.id}`}
                  className="text-indigo-600 hover:text-indigo-800 font-medium text-sm"
                >
                  Take Quiz →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}