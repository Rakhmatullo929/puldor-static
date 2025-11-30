import React, { useEffect } from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/sections/Hero';
import ProblemSolution from '../components/sections/ProblemSolution';
import Team from '../components/sections/Team';
import WhyUs from '../components/sections/WhyUs';
import Roadmap from '../components/sections/Roadmap';
import Implementation from '../components/sections/Implementation';
import { initAnalytics } from '../utils/analytics';

/**
 * Main landing page component.
 */
const MainPage: React.FC = () => {
  useEffect(() => {
    // Инициализация аналитики для отслеживания посещений
    initAnalytics();
  }, []);

  return (
    <Layout>
      <Hero />
      <ProblemSolution />
      <Team />
      <WhyUs />
      <Roadmap />
      <Implementation />
    </Layout>
  );
};

export default MainPage;

