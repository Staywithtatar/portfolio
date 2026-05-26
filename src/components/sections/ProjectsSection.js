'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import SectionHeader from '../ui/SectionHeader';
import ProjectCard from '../ui/ProjectCard';
import ProjectModal from '../ui/ProjectModal';
import { projectData } from '../../utils/projectData';
import { useLanguage } from '../context/LanguageContext';

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [selected, setSelected] = useState(null);

  // First project = featured horizontal layout; remaining 7 in 2-col grid
  const [hero, ...rest] = projectData;

  return (
    <section id="projects" className="py-20 md:py-28 bg-zinc-50 border-y border-zinc-200">
      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <SectionHeader
            eyebrowKey="projects.eyebrow"
            titleKey="projects.title"
            subtitleKey="projects.subtitle"
          />
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-indigo-600 hover:text-indigo-700 group"
          >
            {t('projects.viewAll')}
            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5"
            />
          </Link>
        </div>

        <div className="mt-12 space-y-5">
          {hero && (
            <ProjectCard
              project={hero}
              onClick={() => setSelected(hero)}
              variant="featured"
            />
          )}

          {rest.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {rest.map((project) => (
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
