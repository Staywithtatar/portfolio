import Image from 'next/image';
import SocialButtons from './SocialButtons';

export default function ProfileCard() {
  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 flex flex-col">
      <div className="mb-4">
        <div className="rounded-xl overflow-hidden mb-4">
          <Image
            src="/image/profile1.jpg"
            alt="Profile"
            width={500}
            height={500}
            className="w-full object-cover"
            priority
          />
        </div>
        <h2 className="text-2xl font-bold text-white mb-1">Yodsaphark Champapaeng<span className="text-yellow-400">✋</span></h2>
        <p className="text-gray-300 mb-4">
        In my free time, I enjoy playing games and web development. I am excited to see how AI can improve the user experience and make apps smarter and more engaging.   <span className="text-white">🚀</span>
        </p>
      </div>
      <div className="mt-auto">
        <SocialButtons />
      </div>
    </div>
  );
}