'use client';

import { useEffect, useState, Suspense, lazy, useMemo } from 'react';
import MainLayout from '../components/layout/MainLayout';
import LoadingSpinner from '../components/ui/LoadingSpinner';

// Optimized lazy loading with preload hints
const ProfileCard = lazy(() => import('../components/profile/ProfileCard'), {
  ssr: false
});
const TechStack = lazy(() => import('../components/tech/TechStack'), {
  ssr: false
});
const ExpertArea = lazy(() => import('../components/tech/ExpertArea'), {
  ssr: false
});
const RecentProjects = lazy(() => import('../components/projects/RecentProjects'), {
  ssr: false
});

// Preload critical components
if (typeof window !== 'undefined') {
  // Preload components after initial render
  setTimeout(() => {
    import('../components/profile/ProfileCard');
    import('../components/tech/TechStack');
    import('../components/tech/ExpertArea');
    import('../components/projects/RecentProjects');
  }, 1000);
}

// Optimized loading component
const ComponentLoader = () => (
  <div className="glass p-6 border border-white/10 rounded-lg animate-pulse">
    <div className="h-4 bg-gray-700 rounded mb-4"></div>
    <div className="h-32 bg-gray-700 rounded"></div>
  </div>
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Memoized mobile check
  const checkMobile = useMemo(() => {
    return () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth < 768);
      }
    };
  }, []);

  // Check if mobile with debouncing
  useEffect(() => {
    checkMobile();
    
    let timeoutId;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 100);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timeoutId);
    };
  }, [checkMobile]);

  // Optimized loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      // Trigger animations after loading with minimal delay
      requestAnimationFrame(() => {
        setTimeout(() => setIsVisible(true), 50);
      });
    }, 600); // Reduced loading time

    return () => clearTimeout(timer);
  }, []);

  // Early return for loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <MainLayout>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
        {/* Left Column - Profile Card */}
        <div className={`lg:col-span-1 ${isVisible ? 'animate-fade-in-up stagger-1' : 'opacity-0'}`}>
          <Suspense fallback={<ComponentLoader />}>
            <ProfileCard />
          </Suspense>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-4 lg:gap-6 lg:col-span-1">
          <div className={`${isVisible ? 'animate-fade-in-up stagger-2' : 'opacity-0'}`}>
            <Suspense fallback={<ComponentLoader />}>
              <TechStack />
            </Suspense>
          </div>
          <div className={`${isVisible ? 'animate-fade-in-up stagger-3' : 'opacity-0'}`}>
            <Suspense fallback={<ComponentLoader />}>
              <ExpertArea />
            </Suspense>
          </div>
        </div>

        {/* Right Column - Recent Projects */}
        <div className={`lg:col-span-1 ${isVisible ? 'animate-fade-in-up stagger-4' : 'opacity-0'}`}>
          <Suspense fallback={<ComponentLoader />}>
            <RecentProjects />
          </Suspense>
        </div>
      </div>

      {/* Enhanced welcome message with performance optimization */}
      <div className={`fixed bottom-4 left-4 glass p-4 rounded-lg border border-white/10 text-white text-sm ${isVisible ? 'animate-slide-in-up stagger-5' : 'opacity-0 translate-y-full'}`}>
        <div className="flex items-center gap-2">
          <span className="text-lg">✨</span>
          <span className="font-medium">Welcome to my portfolio!</span>
        </div>
        <div className="text-xs text-gray-300 mt-1">
          Explore my projects and skills
        </div>
      </div>
    </MainLayout>
  );
}