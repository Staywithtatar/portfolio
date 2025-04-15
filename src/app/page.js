'use client';

import { motion } from 'framer-motion';
import MainLayout from '../components/layout/MainLayout';
import ProfileCard from '../components/profile/ProfileCard';
import TechStack from '../components/tech/TechStack';
import ExpertArea from '../components/tech/ExpertArea';
import RecentProjects from '../components/projects/RecentProjects';

export default function Home() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <MainLayout>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Left Column - Profile Card */}
        <motion.div variants={itemVariants}>
          <ProfileCard />
        </motion.div>

        {/* Middle Column */}
        <motion.div className="flex flex-col gap-6">
          <motion.div variants={itemVariants}>
            <TechStack />
          </motion.div>
          <motion.div variants={itemVariants}>
            <ExpertArea />
          </motion.div>
        </motion.div>

        {/* Right Column - Recent Projects */}
        <motion.div variants={itemVariants}>
          <RecentProjects />
        </motion.div>
        
      </motion.div>
    </MainLayout>
  );
}