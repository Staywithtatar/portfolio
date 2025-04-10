import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/profile/ProfileCard';
import TechStack from '../components/tech/TechStack';
import ExpertArea from '../components/tech/ExpertArea';
import RecentProjects from '../components/projects/RecentProjects';

export default function Home() {
  return (
    <MainLayout>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Profile Card */}
        <ProfileCard />

        {/* Middle Column */}
        <div className="flex flex-col gap-6">
          <TechStack />
          <ExpertArea />
        </div>

        {/* Right Column - Recent Projects */}
        <RecentProjects />
      </div>
    </MainLayout>
  );
}