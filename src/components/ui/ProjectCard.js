'use client';

import { ArrowUpRight, Briefcase } from 'lucide-react';
import OptimizedImage from './OptimizedImage';
import OptimizedVideo from './OptimizedVideo';

export default function ProjectCard({ project, onClick, variant = 'default' }) {
  const featured = variant === 'featured';

  return (
    <article
      onClick={onClick}
      className={`group cursor-pointer surface rounded-2xl overflow-hidden hover:border-zinc-300 hover:shadow-md transition-all ${
        featured ? 'lg:flex lg:gap-6' : ''
      }`}
    >
      {/* Media */}
      <div
        className={`relative overflow-hidden ${
          featured
            ? 'lg:w-1/2 lg:flex-shrink-0 aspect-video lg:aspect-auto'
            : 'aspect-[16/10]'
        }`}
      >
        {project.type === 'image' ? (
          <OptimizedImage
            src={project.image}
            alt={project.title}
            usage="project"
            index={0}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
          />
        ) : (
          <OptimizedVideo
            src={project.image}
            className="w-full h-full object-cover"
            muted
            preload="metadata"
          />
        )}
      </div>

      {/* Content */}
      <div className={`p-6 ${featured ? 'lg:flex-1 lg:flex lg:flex-col lg:justify-center' : ''}`}>
        <div className="flex items-center gap-2 text-xs text-zinc-500 mb-3">
          <Briefcase size={12} />
          <span>{project.role}</span>
          {project.period && (
            <>
              <span className="text-zinc-300">·</span>
              <span>{project.period}</span>
            </>
          )}
        </div>

        <h3 className="text-lg md:text-xl font-semibold text-zinc-900 tracking-tight leading-snug group-hover:text-indigo-600 transition-colors">
          {project.title}
        </h3>

        {project.summary && (
          <p className="mt-2 text-sm text-zinc-600 leading-relaxed">
            {project.summary}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span key={tag} className="chip">
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 group-hover:text-indigo-700">
          View case study
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </article>
  );
}
