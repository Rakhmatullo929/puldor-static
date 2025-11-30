import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import ProblemSolution from './components/sections/ProblemSolution';
import Team from './components/sections/Team';
import WhyUs from './components/sections/WhyUs';
import Roadmap from './components/sections/Roadmap';
import Implementation from './components/sections/Implementation';

/**
 * Main App component.
 * Wraps all sections in the Layout component.
 */
const App: React.FC = () => {
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

export default App;

