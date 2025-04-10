import Image from 'next/image';
import Link from 'next/link';

export default function RecentProjects() {
  const projects = [
    {
      id: 1,
      image: "/image/project/project5.png",
      tags: ["NextJS + MongoDB"],
      title: "It is a thread system that has been developed further.",
      url: "/projects/database-app"
    },
    {
      id: 2,
      image: "/image/project/project6.png",
      tags: ["AngularTS + API"],
      title: "A website for advertising and finding real estate for sale.",
      url: "/projects/data-viz"
    },
   
  ];

  return (
    <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-white text-xl font-semibold">Recent Projects</h2>
        <Link href="/projects" className="text-green-500 hover:text-green-400 transition">
          All Projects →
        </Link>
      </div>
      
      <div className="space-y-4">
        {projects.map((project) => (
          <Link href={project.url} key={project.id}>
            <div className="bg-gray-800/50 rounded-lg overflow-hidden hover:bg-gray-800/70 transition cursor-pointer">
              {project.image && (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="w-full h-36 object-cover"
                />
              )}
              <div className="p-3">
                {project.isNew ? (
                  <div className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-sm mb-2">
                    NEW
                  </div>
                ) : (
                  project.tags && project.tags.map((tag, i) => (
                    <div key={i} className="inline-block bg-white/10 text-white text-xs px-2 py-1 rounded-md mb-2 mr-2">
                      {tag}
                    </div>
                  ))
                )}
                <h3 className="text-white">{project.title}</h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}