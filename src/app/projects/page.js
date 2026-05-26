'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import MainLayout from '../../components/layout/MainLayout';
import ProjectCard from '../../components/ui/ProjectCard';
import ProjectModal from '../../components/ui/ProjectModal';
import SectionHeader from '../../components/ui/SectionHeader';
import { projectData } from '../../utils/projectData';

export default function ProjectsPage() {
  const [selected, setSelected] = useState(null);

  return (
    <MainLayout>
      <div className="pt-28 pb-20">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-sm text-zinc-600 hover:text-zinc-900 mb-8 group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-0.5" />
            Back to home
          </Link>

          <SectionHeader
            eyebrow="Portfolio"
            title="All Case Studies"
            subtitle="A complete record of selected projects — from current production work to earlier prototypes and academic builds."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projectData.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onClick={() => setSelected(project)}
              />
            ))}
          </div>
        </div>

        <ProjectModal
          project={selected}
          isOpen={!!selected}
          onClose={() => setSelected(null)}
        />
      </div>
    </MainLayout>
  );
}
