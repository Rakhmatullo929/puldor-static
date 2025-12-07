import React, { useEffect, useRef, useState } from 'react';
import Layout from '../components/layout/Layout';
import { useI18n } from '../i18n/I18nContext';
import Logo from '../components/common/Logo';
import { motion, useScroll, useTransform } from 'framer-motion';

/**
 * Demo page component for AI500 Stage 2.
 * Contains project title, summary, demo video, and video description.
 */
const DemoPage: React.FC = () => {
  const { t } = useI18n();

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-b from-dark-bg to-dark-bg-alt">
        {/* 1. Project Title Section */}
        <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center animate-fade-in flex justify-center">
              <Logo variant="large" className="mb-4 md:mb-6" />
            </div>
          </div>
        </section>

        {/* 2. Summarize Section */}
        <section className="relative py-6 md:py-8 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center animate-fade-in-delay">
              <p className="text-lg md:text-xl lg:text-2xl text-text-light leading-relaxed opacity-90 max-w-3xl mx-auto">
                {t.demo.summarize}
              </p>
            </div>
          </div>
        </section>

        {/* 3. Video Section */}
        <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                {t.demo.video.title}
              </h2>
            </div>

            <div className="relative glass-card-strong rounded-3xl p-4 md:p-8 overflow-hidden">
              <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-black/20">
                <iframe
                  className="w-full h-full"
                  src={t.demo.video.url}
                  title={t.demo.video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </section>

        {/* 4. Video Description Section */}
        <section className="relative py-12 md:py-16 px-4 sm:px-6 lg:px-8">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-8 md:mb-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-green to-white bg-clip-text text-transparent mb-4">
                {t.demo.description.title}
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {/* What's Shown Card */}
              <div className="group relative glass-card-strong rounded-3xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-green/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent-green shadow-lg shadow-accent-green/50 animate-pulse"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent-green">
                      {t.demo.description.whatShown.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 text-text-light text-base md:text-lg">
                    {t.demo.description.whatShown.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <span className="text-accent-green mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Problem & Solution Card */}
              <div className="group relative glass-card-strong rounded-3xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-accent-blue shadow-lg shadow-accent-blue/50 animate-pulse"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-accent-blue">
                      {t.demo.description.problemSolution.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 text-text-light text-base md:text-lg">
                    {t.demo.description.problemSolution.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <span className="text-accent-blue mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Technologies Card */}
              <div className="group relative glass-card-strong rounded-3xl p-6 md:p-8 transition-all duration-500 hover:scale-[1.02]">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse"></div>
                    <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
                      {t.demo.description.technologies.title}
                    </h3>
                  </div>
                  <ul className="space-y-4 text-text-light text-base md:text-lg">
                    {t.demo.description.technologies.items.map((item, index) => (
                      <li key={index} className="flex items-start gap-3 group/item">
                        <span className="text-purple-400 mt-1 text-xl group-hover/item:scale-125 transition-transform duration-200">⚡</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. API & Technologies Section with Parallax Animation */}
        <APITechnologiesSection />
      </div>
    </Layout>
  );
};

/**
 * API & Technologies section with premium scroll animations.
 * Features parallax effects and fade-in animations on scroll.
 */
const APITechnologiesSection: React.FC = () => {
  const { t } = useI18n();
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax transforms
  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1, 0.95]);

  // Intersection Observer for fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      style={{ minHeight: '100vh' }}
    >
      {/* Animated background gradients with parallax */}
      <motion.div
        className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-br from-accent-green/10 via-accent-blue/5 to-purple-500/10 rounded-full blur-3xl"
        style={{ y: y1, opacity }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-500/10 via-accent-blue/5 to-accent-green/10 rounded-full blur-3xl"
        style={{ y: y2, opacity }}
      />

      <motion.div
        className="container mx-auto max-w-7xl relative z-10"
        style={{ opacity, scale }}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-accent-green via-accent-blue to-purple-400 bg-clip-text text-transparent mb-4 animate-gradient">
            {t.demo.api.title}
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            {t.demo.api.subtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* API Endpoints Card */}
          <motion.div
            className="group relative glass-card-strong rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, x: -100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent-green/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-accent-green shadow-lg shadow-accent-green/50 animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent-green">
                  {t.demo.api.endpoints.title}
                </h3>
              </div>
              <div className="space-y-4">
                {t.demo.api.endpoints.items.map((endpoint, index) => (
                  <motion.div
                    key={index}
                    className="glass-card rounded-2xl p-4 border border-accent-green/20 hover:border-accent-green/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5, borderColor: 'rgba(34, 197, 94, 0.6)' }}
                  >
                    <div className="flex items-start gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-lg text-xs font-bold ${
                        endpoint.method === 'POST' 
                          ? 'bg-accent-green/20 text-accent-green' 
                          : 'bg-accent-blue/20 text-accent-blue'
                      }`}>
                        {endpoint.method}
                      </span>
                      <code className="flex-1 text-sm md:text-base text-accent-blue font-mono break-all">
                        {endpoint.path}
                      </code>
                    </div>
                    <p className="text-text-light text-sm md:text-base opacity-90 ml-0 md:ml-[calc(3rem+12px)]">
                      {endpoint.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Technology Stack Card */}
          <motion.div
            className="group relative glass-card-strong rounded-3xl p-6 md:p-8"
            initial={{ opacity: 0, x: 100 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
            whileHover={{ scale: 1.02, y: -5 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/15 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 rounded-full bg-purple-400 shadow-lg shadow-purple-400/50 animate-pulse"></div>
                <h3 className="text-2xl md:text-3xl font-bold text-purple-400">
                  {t.demo.api.techStack.title}
                </h3>
              </div>
              <div className="space-y-6">
                {t.demo.api.techStack.categories.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="glass-card rounded-2xl p-4 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isVisible ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 + categoryIndex * 0.1 }}
                    whileHover={{ x: 5, borderColor: 'rgba(196, 181, 253, 0.6)' }}
                  >
                    <h4 className="text-lg md:text-xl font-bold text-purple-300 mb-3">
                      {category.title}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item, itemIndex) => (
                        <motion.span
                          key={itemIndex}
                          className="px-3 py-1.5 bg-purple-500/10 border border-purple-400/30 rounded-lg text-sm text-text-light hover:bg-purple-500/20 hover:border-purple-400/50 transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: 0.6 + categoryIndex * 0.1 + itemIndex * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default DemoPage;

