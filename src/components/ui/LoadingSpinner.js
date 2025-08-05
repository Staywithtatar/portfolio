'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900">
      <div className="text-center">
        {/* Simple spinner */}
        <div className="w-16 h-16 border-4 border-white/20 border-t-blue-400 rounded-full animate-spin mx-auto"></div>
        
        {/* Loading text */}
        <div className="mt-6 text-white text-lg font-medium">
          Loading...
        </div>
      </div>
    </div>
  );
} 