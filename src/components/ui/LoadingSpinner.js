'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-10 h-10 rounded-full border-2 border-zinc-200 border-t-indigo-500 animate-spin" />
    </div>
  );
}
