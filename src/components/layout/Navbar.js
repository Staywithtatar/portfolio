import Link from 'next/link';
import { MdHome } from 'react-icons/md';
import { IoMdApps } from 'react-icons/io';

export default function Navbar() {
  return (
    <nav className="bg-gray-900/40 backdrop-blur-sm rounded-xl mb-6 p-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-gray-800 p-1 rounded">
          <IoMdApps className="text-white text-xl" />
        </div>
        <h1 className="font-semibold text-xl">
          <span className="text-white">Guitar</span>
          <span className="text-green-500"> Folio</span>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/" className="flex items-center gap-2 text-white bg-gray-800/50 hover:bg-gray-800 px-3 py-2 rounded-lg transition">
          <MdHome />
          Home
        </Link>
        <Link href="/projects" className="flex items-center gap-2 text-white bg-gray-800/50 hover:bg-gray-800 px-3 py-2 rounded-lg transition">
          <IoMdApps />
          Projects
        </Link>
        <button className="bg-gray-800/50 hover:bg-gray-800 p-2 rounded-lg text-white transition">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
          </svg>
        </button>
      </div>
    </nav>
  );
}