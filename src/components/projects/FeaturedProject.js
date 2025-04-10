import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedProject({ 
  title, 
  imageUrl, 
  description, 
  tags, 
  viewSiteUrl 
}) {
  return (
    <div className="bg-gray-800/30 backdrop-blur-sm rounded-xl overflow-hidden">
      <div className="p-6">
        <h2 className="text-white text-2xl font-semibold mb-2">{title}</h2>
        
        <div className="relative h-64 rounded-lg overflow-hidden mb-4">
          <Image
            src={imageUrl}
            alt={title}
            width={800}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
        
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <div key={index} className="bg-white/10 text-white text-xs px-2 py-1 rounded-md">
              {tag}
            </div>
          ))}
        </div>
        
        <Link 
          href={viewSiteUrl} 
          className="inline-flex items-center text-white bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
        >
          View Site <span className="ml-1">↗</span>
        </Link>
      </div>
    </div>
  );
}