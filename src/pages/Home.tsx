import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, BookOpen, Share2, Trophy } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Create, Share, and Master Knowledge with QuizCraft
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Craft engaging quizzes, share knowledge, and track progress. Perfect for educators,
              students, and lifelong learners.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to="/create"
                className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Create Quiz
              </Link>
              <Link
                to="/quizzes"
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                Browse Quizzes <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Features
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to create amazing quizzes
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Brain className="h-5 w-5 flex-none text-indigo-600" />
                  Smart Quiz Creation
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Create engaging quizzes with multiple question types, custom scoring, and
                    detailed feedback options.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Share2 className="h-5 w-5 flex-none text-indigo-600" />
                  Easy Sharing
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Share your quizzes instantly with anyone through unique links or embed them
                    in your website.
                  </p>
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <Trophy className="h-5 w-5 flex-none text-indigo-600" />
                  Track Progress
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">
                    Monitor performance with detailed analytics, leaderboards, and progress
                    tracking.
                  </p>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
}