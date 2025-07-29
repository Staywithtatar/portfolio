'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900">
      <div className="relative">
        {/* Main spinner */}
        <div className="w-16 h-16 border-4 border-white/20 border-t-blue-400 rounded-full animate-spin"></div>
        
        {/* Outer ring */}
        <div className="absolute inset-0 w-16 h-16 border-2 border-purple-400/30 rounded-full animate-ping"></div>
        
        {/* Inner glow */}
        <div className="absolute inset-2 w-12 h-12 bg-blue-400/20 rounded-full animate-pulse"></div>
        
        {/* Loading text */}
        <div className="mt-8 text-center">
          <div className="text-white text-lg font-medium animate-pulse">Loading...</div>
          <div className="text-gray-300 text-sm mt-2">Preparing your experience</div>
        </div>
        
        {/* Floating particles */}
        <div className="absolute -top-4 -left-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute -top-4 -right-4 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute -bottom-4 -left-4 w-2 h-2 bg-green-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute -bottom-4 -right-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
      </div>
    </div>
  );
} 