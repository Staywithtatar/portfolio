'use client';

import { useEffect, useState, Suspense } from 'react';
import dynamic from 'next/dynamic';
import MainLayout from '../components/layout/MainLayout';
import LoadingSpinner from '../components/ui/LoadingSpinner';

const ProfileCard = dynamic(() => import('../components/profile/ProfileCard'), { ssr: false });
const TechStack = dynamic(() => import('../components/tech/TechStack'), { ssr: false });
const ExpertArea = dynamic(() => import('../components/tech/ExpertArea'), { ssr: false });
const RecentProjects = dynamic(() => import('../components/projects/RecentProjects'), { ssr: false });

const ComponentLoader = () => (
  <div className="surface rounded-3xl p-6 animate-pulse">
    <div className="h-3 w-20 bg-white/5 rounded mb-3" />
    <div className="h-5 w-40 bg-white/5 rounded mb-5" />
    <div className="h-32 bg-white/5 rounded-xl" />
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5">
        <div className="lg:col-span-1">
          <Suspense fallback={<ComponentLoader />}>
            <ProfileCard />
          </Suspense>
        </div>

        <div className="flex flex-col gap-4 lg:gap-5 lg:col-span-1">
          <Suspense fallback={<ComponentLoader />}>
            <TechStack />
          </Suspense>
          <Suspense fallback={<ComponentLoader />}>
            <ExpertArea />
          </Suspense>
        </div>

        <div className="lg:col-span-1">
          <Suspense fallback={<ComponentLoader />}>
            <RecentProjects />
          </Suspense>
        </div>
      </div>
    </MainLayout>
  );
}
