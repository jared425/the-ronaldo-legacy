import { useState, useEffect } from 'react';
import Loader from '@/components/Loader';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import OriginsSection from '@/components/OriginsSection';
import TimelineSection from '@/components/TimelineSection';
import StatsSection from '@/components/StatsSection';
import Number7Section from '@/components/Number7Section';
import TrophySection from '@/components/TrophySection';
import CelebrationSection from '@/components/CelebrationSection';
import LegacySection from '@/components/LegacySection';
import Footer from '@/components/Footer';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Prevent scroll during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader onComplete={() => setIsLoading(false)} />}
      
      <div className={isLoading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}>
        <Navigation />
        <main>
          <HeroSection />
          <OriginsSection />
          <TimelineSection />
          <StatsSection />
          <Number7Section />
          <TrophySection />
          <CelebrationSection />
          <LegacySection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
