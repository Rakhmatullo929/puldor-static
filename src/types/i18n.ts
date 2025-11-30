/**
 * Language type definition.
 * Supported languages: Russian, English, Uzbek.
 */
export type Language = 'ru' | 'en' | 'uz';

/**
 * Translation keys structure.
 * Defines all translatable strings in the application.
 */
export interface Translations {
  // Header
  header: {
    nav: {
      problemSolution: string;
      team: string;
      whyUs: string;
      roadmap: string;
      howWeBuild: string;
    };
    cta: string;
  };

  // Hero Section
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    button1: string;
    button2: string;
    stats: {
      languages: string;
      voiceToCategories: string;
      goalsAndAnalytics: string;
    };
    demo: {
      interface: string;
      voiceMessage: string;
      voiceExample: string;
      autoProcessing: string;
      categoryExample: string;
    };
  };

  // Problem & Solution Section
  problemSolution: {
    title: string;
    subtitle: string;
    problem: {
      title: string;
      items: string[];
    };
    solution: {
      title: string;
      items: string[];
    };
  };

  // Team Section
  team: {
    title: string;
    subtitle: string;
    members: {
      member1: {
        name: string;
        title: string;
        description: string;
      };
      member2: {
        name: string;
        title: string;
        description: string;
      };
      member3: {
        name: string;
        title: string;
        description: string;
      };
      member4: {
        name: string;
        title: string;
        description: string;
      };
    };
    links: {
      linkedin: string;
      github: string;
    };
  };

  // Why Us Section
  whyUs: {
    title: string;
    subtitle: string;
    description: {
      paragraph1: string;
      paragraph2: string;
      paragraph3: string;
    };
    reasons: {
      reason1: {
        title: string;
        description: string;
      };
      reason2: {
        title: string;
        description: string;
      };
      reason3: {
        title: string;
        description: string;
      };
      reason4: {
        title: string;
        description: string;
      };
      reason5: {
        title: string;
        description: string;
      };
      reason6: {
        title: string;
        description: string;
      };
    };
  };

  // Roadmap Section
  roadmap: {
    title: string;
    subtitle: string;
    stages: {
      idea: {
        title: string;
        subtitle: string;
        items: string[];
      };
      prototype: {
        title: string;
        subtitle: string;
        items: string[];
      };
      mvp: {
        title: string;
        subtitle: string;
        items: string[];
      };
      launched: {
        title: string;
        subtitle: string;
        items: string[];
      };
    };
    current: string;
  };

  // Implementation Section
  implementation: {
    title: string;
    subtitle: string;
    architecture: {
      title: string;
      interface: {
        title: string;
        items: string[];
      };
      backend: {
        title: string;
        items: string[];
      };
      ai: {
        title: string;
        items: string[];
      };
    };
    sprints: {
      title: string;
      sprint1: {
        title: string;
        goal: string;
        tasks: string[];
      };
      sprint2: {
        title: string;
        goal: string;
        tasks: string[];
      };
      sprint3: {
        title: string;
        goal: string;
        tasks: string[];
      };
      sprint4: {
        title: string;
        goal: string;
        tasks: string[];
      };
      sprint5: {
        title: string;
        goal: string;
        tasks: string[];
      };
    };
  };

  // Footer
  footer: {
    text: string;
  };
}

