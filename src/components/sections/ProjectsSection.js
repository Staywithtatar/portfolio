'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { featuredProjects } from '../../utils/projectData';

export default function ProjectsSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="projects" className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrow="Selected Projects"
            title="Case Studies"
            subtitle="Real production systems and freelance client work. Each case study shows my role, the stack, and what I delivered."
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 group"
          >
            View all projects
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-5">
          {/* First project gets featured horizontal layout */}
          {featuredProjects[0] && (
            <ProjectCard
              project={featuredProjects[0]}
              onClick={() => setSelected(featuredProjects[0])}
              variant="featured"
            />
          )}

          {/* Remaining featured projects in 2-column grid */}
          {featuredProjects.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {featuredProjects.slice(1).map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onClick={() => setSelected(project)}
                />
              ))}
            </div>
          )}
        </div>

        <ProjectModal
          project={selected}
          isOpen={!!selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </section>
  );
}
