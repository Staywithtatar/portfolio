import Navbar from "./Navbar";
import Footer from "./Footer";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
