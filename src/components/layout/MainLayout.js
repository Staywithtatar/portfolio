import Navbar from './Navbar';

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* Enhanced animated background */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900">
        {/* Animated background shapes */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-tr-3xl rounded-bl-3xl bg-purple-500/10 blur-xl animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-tl-[40%] rounded-br-[60%] bg-blue-500/5 blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-tl-[30%] rounded-br-[70%] rounded-tr-xl bg-indigo-500/10 blur-xl animate-pulse" style={{ animationDelay: '4s' }}></div>
        
        {/* Additional floating elements */}
        <div className="absolute top-1/3 left-1/3 w-16 h-16 rounded-full bg-green-500/5 blur-lg animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-yellow-500/5 blur-lg animate-ping" style={{ animationDelay: '1s' }}></div>
        
        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        
        {/* Animated mesh gradient */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-transparent to-blue-600/20 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-600/10 to-purple-600/20 animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <Navbar />
        {children}
      </div>
    </main>
  );
}