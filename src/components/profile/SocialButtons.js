import { MdContentCopy } from 'react-icons/md';
import { FaGithub, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';

export default function SocialButtons() {
  const { t } = useLanguage();
  
  return (
    <div className="flex gap-2">
      <button className="flex-1 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 flex items-center justify-center gap-2 transition hover:shadow-lg hover:-translate-y-0.5 border border-white/10"
        style={{ borderRadius: '20px 10px 20px 10px' }}>
        <MdContentCopy />
        {t('copyEmail')}
      </button>
      <a href="https://github.com/Staywithtatar" target="_blank" rel="noreferrer" className="bg-gray-800/60 hover:bg-gray-700/80 text-white p-3 transition hover:shadow-lg hover:-translate-y-0.5 border border-white/10"
        style={{ borderRadius: '30% 50% 30% 50%' }}>
        <FaGithub size={20} />
      </a>
      <a href="https://web.facebook.com/nongta.nongree" target="_blank" rel="noreferrer" className="bg-gray-800/60 hover:bg-gray-700/80 text-white p-3 transition hover:shadow-lg hover:-translate-y-0.5 border border-white/10"
        style={{ borderRadius: '50% 30% 50% 30%' }}>
        <FaFacebook size={20} />
      </a>
    </div>
  );
}