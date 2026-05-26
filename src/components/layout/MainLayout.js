import Navbar from './Navbar';

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen relative px-4 py-6 md:px-8 md:py-10">
      {/* Background — static elegant gradients */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#07090F]">
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.45) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute -bottom-40 -right-40 w-[700px] h-[700px] rounded-full opacity-25"
          style={{
            background: 'radial-gradient(circle, rgba(167, 139, 250, 0.4) 0%, transparent 60%)',
          }}
        />
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[420px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(ellipse, rgba(52, 211, 153, 0.22) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="noise-overlay" />

      <div className="max-w-7xl mx-auto relative z-10 pt-20">
        <Navbar />
        {children}
      </div>
    </main>
  );
}
