'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden flex items-center justify-center">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="mb-8 sm:mb-12">
          <div className="w-20 h-20 sm:w-24 sm:h-24 lg:w-32 lg:h-32 mx-auto bg-gradient-to-r from-purple-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 transform rotate-12 hover:rotate-0 transition-transform duration-500">
            <span className="text-3xl sm:text-4xl lg:text-5xl">🏠</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-4 sm:mb-6">
          <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
            YourButler
          </span>
        </h1>

        {/* Coming Soon with Animation */}
        <div className="relative mb-8 sm:mb-12">
          <div className="inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 rounded-full border border-purple-500/50 bg-black/20 backdrop-blur-lg">
            <div className="flex items-center space-x-3">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
              <span className="text-lg sm:text-xl lg:text-2xl font-medium text-white">
                Coming Soon
              </span>
              <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse animation-delay-2000"></div>
            </div>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Your personal AI assistant is on the way
        </p>

        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mt-8 sm:mt-12">
          <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce"></div>
          <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce animation-delay-2000"></div>
          <div className="w-3 h-3 bg-pink-500 rounded-full animate-bounce animation-delay-4000"></div>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} YourButler
      </footer>
    </div>
  );
}
