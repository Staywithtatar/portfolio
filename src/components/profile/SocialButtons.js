import { MdContentCopy } from 'react-icons/md';
import { FaGithub, FaFacebook } from 'react-icons/fa';

export default function SocialButtons() {
  return (
    <div className="flex gap-2">
      <button className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition">
        <MdContentCopy />
        Copy Email
      </button>
      <a href="https://github.com/Staywithtatar" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition">
        <FaGithub size={20} />
      </a>
      <a href="https://web.facebook.com/nongta.nongree" target="_blank" rel="noreferrer" className="bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-lg transition">
        <FaFacebook size={20} />
      </a>
    </div>
  );
}