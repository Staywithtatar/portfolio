'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900 relative overflow-hidden">
      {/* Background particles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10">
        {/* Main spinner container */}
        <div className="relative">
          {/* Outer ring */}
          <div className="w-20 h-20 border-4 border-white/10 border-t-blue-400 rounded-full animate-spin"></div>
          
          {/* Middle ring */}
          <div className="absolute inset-2 w-16 h-16 border-4 border-white/5 border-t-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }}></div>
          
          {/* Inner ring */}
          <div className="absolute inset-4 w-12 h-12 border-4 border-white/5 border-t-green-400 rounded-full animate-spin" style={{ animationDuration: '2s' }}></div>
          
          {/* Center glow */}
          <div className="absolute inset-6 w-8 h-8 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full animate-pulse"></div>
        </div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <div className="text-white text-xl font-medium animate-pulse gradient-text">
            Loading...
          </div>
          <div className="text-gray-300 text-sm mt-3 opacity-80">
            Preparing your experience
          </div>
        </div>
        
        {/* Progress dots */}
        <div className="flex justify-center space-x-2 mt-6">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
          <div className="w-2 h-2 bg-green-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
        </div>
      </div>
    </div>
  );
} 