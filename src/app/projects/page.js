import MainLayout from '../../components/layout/MainLayout';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "NextJs+Mongodb",
      image: "/image/project/project5.png",
      description: "It is a thread system that has been developed further.",
      tags: ["NextJs", "MongoDB",],
      url: "https://kratoo-nextjs.vercel.app/"
    },
    {
      id: 2,
      image: "/image/project/project6.png",
      title: "AngularTS+API",
      description: "A website for advertising and finding real estate for sale.",
      tags: ["AngularTS", "API"],
      url: "https://rakabaan.com/home"
    },
  ];

  return (
    <MainLayout>
      <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-6 mb-6">
        <h1 className="text-white text-3xl font-bold mb-2">All Projects</h1>
        <p className="text-gray-300">Explore my complete portfolio of web development and AI projects</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Link href={project.url} key={project.id}>
            <div className="bg-gray-900/40 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition cursor-pointer h-full">
              {project.image && (
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.isNew && (
                    <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-sm">
                      NEW
                    </div>
                  )}
                </div>
              )}
              <div className="p-4">
                <h2 className="text-white text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-gray-300 mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <div key={i} className="bg-white/10 text-white text-xs px-2 py-1 rounded-md">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}