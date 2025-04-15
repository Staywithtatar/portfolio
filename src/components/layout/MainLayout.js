import Navbar from './Navbar';

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen relative p-4 md:p-8 overflow-hidden">
      {/* พื้นหลังสไตล์ญี่ปุ่นโมเดิร์นด้วยรูปทรงที่หลากหลาย */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900">
        {/* รูปทรงอิสระแบบญี่ปุ่น */}
        <div className="absolute top-10 left-10 w-32 h-32 rounded-tr-3xl rounded-bl-3xl bg-purple-500/20 blur-xl"></div>
        <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-tl-[40%] rounded-br-[60%] bg-blue-500/10 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 rounded-tl-[30%] rounded-br-[70%] rounded-tr-xl bg-indigo-500/20 blur-xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-40 h-40 rounded-tr-[50%] rounded-bl-[40%] bg-cyan-500/15 blur-xl"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <Navbar />
        {children}
      </div>
    </main>
  );
}