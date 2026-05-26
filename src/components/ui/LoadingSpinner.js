'use client';

export default function LoadingSpinner() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#07090F] relative overflow-hidden">
      <div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-25"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(167, 139, 250, 0.35) 0%, transparent 60%)',
        }}
      />

      <div className="text-center relative z-10">
        <div className="w-12 h-12 rounded-full border-2 border-white/10 border-t-indigo-400 animate-spin mx-auto" />
        <div className="mt-5 text-sm font-medium text-slate-400 tracking-wider uppercase">
          Loading
        </div>
      </div>
    </div>
  );
}
