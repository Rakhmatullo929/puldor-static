import { Translations } from '../../types/i18n';

/**
 * English translations for the application.
 */
export const en: Translations = {
  header: {
    nav: {
      problemSolution: 'Problem → Solution',
      team: 'Team',
      whyUs: 'Why us',
      roadmap: 'Roadmap',
      howWeBuild: 'How we build',
    },
    cta: 'Try in Telegram',
  },
  hero: {
    badge: 'AI500 Demo · Voice → Insights',
    title: 'Puldor — AI Telegram bot for smart expense tracking',
    subtitle:
      'Just say out loud how much and what you spent — the bot will understand, categorize, track income, goals, debts, and suggest where you can save.',
    button1: 'See how it works',
    button2: 'Why us',
    stats: {
      languages: '3 languages · RU / UZ / EN',
      voiceToCategories: 'Voice → text → categories',
      goalsAndAnalytics: 'Goals, debts, analytics',
    },
    demo: {
      interface: 'Demo interface',
      voiceMessage: '💬 Voice message',
      voiceExample: '"Spent 5000 sums on lunch"',
      autoProcessing: '✅ Automatic processing',
      categoryExample: 'Category: Food · Amount: 5000 UZS',
    },
  },
  problemSolution: {
    title: 'Problem → Solution',
    subtitle:
      'Traditional expense trackers require a lot of manual work and quickly become tedious. We offer a smart approach through voice and AI.',
    problem: {
      title: 'Problem',
      items: [
        'People try to track expenses in notes, Excel, or regular apps, but quickly give up.',
        'Many are too lazy to manually click categories and amounts after each payment.',
        'In Uzbekistan and CIS, a mix of RU + UZ + EN is often used — standard apps poorly understand such data.',
        'Financial advice "out of thin air", not based on real spending history, does not help change habits.',
      ],
    },
    solution: {
      title: 'Our solution',
      items: [
        'Telegram bot that accepts voice and text in Russian, Uzbek, and English.',
        'AI (Whisper + LLM) understands the meaning of phrases: expense, income, debt, goal, analytics/question.',
        'Extracts amount, currency, category, and date, creates transactions automatically.',
        'Builds goals, tracks debts, calculates analytics, and provides personal tips.',
        'Works directly in Telegram — no separate app or website registration required.',
      ],
    },
  },
  team: {
    title: 'Team',
    subtitle: 'Four people covering the product from AI core to English pitching',
    members: {
      member1: {
        name: 'Member 1',
        title: 'Backend / Tech Lead',
        description:
          'API and system architecture design. Experience with high-load systems, integration with Telegram Bot API and payment systems. Ensures backend scalability and reliability.',
      },
      member2: {
        name: 'Member 2',
        title: 'AI / ML Engineer',
        description:
          'Development of AI pipelines for processing voice messages and text. Transaction classification, entity extraction (amounts, categories, dates). Integration with Whisper and GPT-4.x.',
      },
      member3: {
        name: 'Member 3',
        title: 'Backend Engineer (Product features)',
        description:
          'Development of product features: goals, debts, expense analytics. Database query optimization, work with Celery for background tasks, integrations with external APIs.',
      },
      member4: {
        name: 'Member 4',
        title: 'Native-speaker / Pitch & Product',
        description:
          'IELTS 8.5. Responsible for project pitching, product logic, and UX texts in English. Communication with competition jury and English-speaking users.',
      },
    },
    links: {
      linkedin: 'LinkedIn (soon)',
      github: 'GitHub (soon)',
    },
  },
  whyUs: {
    title: 'Why our team will solve this task',
    subtitle:
      'We have not only technical skills but also deep understanding of the problem, experience with a similar product, and a clear implementation plan.',
    description: {
      paragraph1:
        'We have already been developing a prototype bot for expense tracking for over 6 months. During this time, we went from idea to working product, received user feedback, and understood what needs to be improved. Now we are creating a cleaner and more scalable version using accumulated experience.',
      paragraph2:
        'The team brings together key competencies: a strong backend developer with experience in high-load systems, an ML engineer specializing in NLP and NLU, and a person with IELTS 8.5 who handles pitching and product logic. This combination allows us to cover all aspects of the product — from technical implementation to communication with the competition jury.',
      paragraph3:
        'We understand the local context well: the mix of Russian, Uzbek, and English languages in one chat, features of financial culture in the region, real user pain points. This is not an abstract idea — we know what problems people face because we have already worked with them directly.',
    },
    reasons: {
      reason1: {
        title: 'Already have battle-tested experience with a similar bot',
        description:
          '6+ months of development and refinement of a prototype bot for expense tracking. Now creating a cleaner and more scalable version.',
      },
      reason2: {
        title: 'Strong AI/ML and NLU for natural speech',
        description:
          'Experience with Whisper, GPT-4.x, and custom models for understanding natural language in financial context.',
      },
      reason3: {
        title: 'Production experience with Telegram Bot API',
        description:
          'Real bots in production, integrations with external APIs (AI models, payment providers, storage).',
      },
      reason4: {
        title: 'Deep knowledge of RU / UZ / EN context',
        description:
          'We understand the features of financial culture and language mixes in the region. The bot works with real user data.',
      },
      reason5: {
        title: 'Clear focus on useful analytics',
        description:
          'Not just charts, but personal tips and advice based on real user spending history.',
      },
      reason6: {
        title: 'Ability to break down product into roadmap',
        description:
          'Experience in breaking down complex products into realistic stages and bringing them to release with measurable results.',
      },
    },
  },
  roadmap: {
    title: 'Roadmap',
    subtitle:
      'We go from idea to battle-ready product, gradually adding functionality and improving user experience.',
    stages: {
      idea: {
        title: 'Idea',
        subtitle: 'Formalization of concept and tech stack',
        items: [
          'Formalization of problem and functionality',
          'UX flow design for Telegram bot',
          'AI stack definition: Whisper for voice, GPT-4.x / similar LLM for intents and entity extraction',
        ],
      },
      prototype: {
        title: 'Prototype',
        subtitle: 'Working bot for basic expense and income tracking',
        items: [
          'Working Telegram bot for voice and text input of expenses/income',
          'Basic categories and simple weekly/monthly report in text format',
          'Data storage in PostgreSQL',
          'Simple goals and debts logic (manually mark transactions)',
        ],
      },
      mvp: {
        title: 'MVP',
        subtitle: 'Smart classification, goals, debts, and multilingual support',
        items: [
          'Smart category classification (AI model + fine-tuning capability)',
          'Full goals (savings), debts, reminders',
          'Monthly reports + advice on where to spend less (based on history)',
          'Support for three languages simultaneously in one chat',
          'Basic admin panel (for team)',
        ],
      },
      launched: {
        title: 'Launched',
        subtitle: 'Production-ready product with scaling and monetization',
        items: [
          'Infrastructure scaling (Docker, orchestrator, monitoring)',
          'Latency improvement, AI cost optimization',
          'Payment model setup (freemium / subscription)',
          'Expansion of AI tips and personalized recommendations',
        ],
      },
    },
    current: 'Current',
  },
  implementation: {
    title: 'How we plan to implement the solution',
    subtitle:
      'Step-by-step development using modern tech stack and AI tools to create a smart financial assistant.',
    architecture: {
      title: 'Technical architecture',
      interface: {
        title: 'Interface',
        items: [
          '<strong>Telegram Bot API</strong> — main interaction interface',
          '<strong>Web interface</strong> (React) — landing and future admin panel',
          'Voice and text input',
        ],
      },
      backend: {
        title: 'Backend & Data',
        items: [
          '<strong>Python</strong> — FastAPI or Django',
          '<strong>PostgreSQL</strong> — main data storage',
          '<strong>Redis</strong> — caching and queues',
          '<strong>Celery</strong> — background tasks',
        ],
      },
      ai: {
        title: 'AI layer',
        items: [
          '<strong>Whisper API</strong> — speech recognition (STT)',
          '<strong>GPT-4.x</strong> — intent detection and data extraction',
          '<strong>NLU/NLP</strong> — categorization and analysis',
          'Personal advice generation',
        ],
      },
    },
    sprints: {
      title: 'Step-by-step implementation plan',
      sprint1: {
        title: 'Sprint 1: Basic functionality',
        goal: 'Basic Telegram bot with text input of expenses and income',
        tasks: [
          'Telegram Bot API setup',
          'Backend on Python (FastAPI/Django)',
          'PostgreSQL for transaction storage',
          'Text command processing (expense/income)',
          'Basic DB and API structure',
        ],
      },
      sprint2: {
        title: 'Sprint 2: Voice input',
        goal: 'Adding speech recognition and automatic categorization',
        tasks: [
          'Whisper API integration for speech recognition',
          'Voice message processing',
          'Simple transaction categorization (LLM)',
          'Extract amount, currency, date from text',
          'RU/UZ/EN language support',
        ],
      },
      sprint3: {
        title: 'Sprint 3: Goals and debts',
        goal: 'Feature expansion: goals, debts, reminders',
        tasks: [
          'Financial goals system',
          'Debt tracking (loans, borrowings)',
          'Reminders and notifications',
          'Goal progress calculation',
          'Integration with transactions',
        ],
      },
      sprint4: {
        title: 'Sprint 4: Analytics and advice',
        goal: 'AI analytics and personal recommendations based on history',
        tasks: [
          'Spending history analysis (LLM-prompting)',
          'Personal advice generation',
          'Statistics visualization',
          'Spending pattern detection',
          'Savings recommendations',
        ],
      },
      sprint5: {
        title: 'Sprint 5: Optimization and scaling',
        goal: 'Performance optimization and preparation for scaling',
        tasks: [
          'Redis for caching',
          'Celery for background tasks',
          'Monitoring and logging',
          'Database query optimization',
          'Preparation for production deployment',
        ],
      },
    },
  },
  footer: {
    text: 'AI500 demo · Puldor — AI-powered Telegram expense assistant',
  },
};

