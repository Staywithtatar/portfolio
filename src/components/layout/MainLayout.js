import Navbar from './Navbar';

export default function MainLayout({ children }) {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        {children}
      </div>
    </main>
  );
}