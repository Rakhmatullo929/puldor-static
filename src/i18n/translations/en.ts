import { Translations } from '../../types/i18n';

/**
 * English translations for the application.
 */
export const en: Translations = {
  header: {
    nav: {
      problemSolution: 'Problem → Solution',
      demo: 'Demo',
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
        name: 'Rakhmatullo Azizov',
        firstName: 'Rakhmatullo',
        lastName: 'Azizov',
        title: 'Team Lead Fullstack',
        description:
          'High-load system architecture. Telegram Bot API and payment integrations. Ensures backend scalability.',
        shortExperience: 'Full-stack developer with experience in API and architecture design for high-load systems. Integration with Telegram Bot API and payment systems.',
        detailedExperience: {
          summary:
            'I am a Full-Stack developer with over 3 years of experience in development and system design. I have worked on dozens of commercial projects: from web platforms and Telegram bots to high-load services.',
          mainStack:
            'Main stack — Python (Django, DRF, FastAPI), React / Next.js, Docker, Nginx, PostgreSQL, GitLab CI/CD. I deploy production environments, set up monitoring, backups, and auto-deploy.',
          skills:
            'Experience with high-load systems, integration with Telegram Bot API and payment systems. I ensure backend scalability and reliability. Work with Redis, RabbitMQ, Celery, external APIs.',
          workEthic:
            'I work responsibly, quickly, and complete tasks. I am interested in projects where development, architecture, and automation can be combined.',
        },
        socialLinks: {
          linkedin: '',
          github: '',
          telegram: '',
        },
      },
      member2: {
        name: 'Muhammad Chariev',
        firstName: 'Muhammad',
        lastName: 'Chariev',
        title: 'Middle + Fullstack DevOps/MLOps',
        description:
          'Infrastructure and CI/CD. ML/AI services integration (Whisper, GPT-4.x). Deployment, monitoring and scaling.',
        shortExperience: 'Full-Stack / DevOps engineer with over 3 years of experience. I have worked on dozens of commercial projects: from web platforms and Telegram bots to AI integrations and high-load services.',
        detailedExperience: {
          summary:
            'I am a Full-Stack / DevOps engineer with over 3 years of experience in development and automation. I have worked on dozens of commercial projects: from web platforms and Telegram bots to AI integrations and high-load services.',
          mainStack:
            'Main stack — Python (Django, DRF), React / Next.js, Docker, Nginx, PostgreSQL, GitLab CI/CD. I deploy production environments, set up monitoring (Prometheus, Grafana, Alertmanager), backups, and auto-deploy.',
          devopsSkills:
            'As DevOps, I can maintain self-hosted services in production: n8n (queue-mode + Redis + Postgres), Sygnal, LiveKit, Matrix Synapse, MAS. I configured SSL, TURN, federation, and push notifications. Experience with Ansible, Redis, RabbitMQ, Supabase, OpenAI API, Playwright, Puppeteer.',
          fullstackSkills:
            'As a full-stack developer — I build clean architecture, create REST APIs, Telegram bots, admin panels, and UI with Tailwind. I love automation, clean code, and stable infrastructure.',
          workEthic:
            'I work responsibly, quickly, and complete tasks. I am interested in projects where development, DevOps, and AI integrations can be combined.',
        },
        socialLinks: {
          linkedin: '',
          github: '',
          telegram: '',
        },
      },
      member3: {
        name: 'Nematullo Irgashev',
        firstName: 'Nematullo',
        lastName: 'Irgashev',
        title: 'Middle Fullstack',
        description:
          'Product features: goals, debts, analytics. DB optimization and background tasks.',
        shortExperience: 'Backend developer specializing in product features. Development of goals, debts, expense analytics. Database query optimization and work with background tasks.',
        detailedExperience: {
          summary:
            'I am a Backend Engineer with experience in product feature development and performance optimization. I have worked on expense tracking systems, analytics, and integrations with external APIs.',
          mainStack:
            'Main stack — Python (Django, FastAPI), PostgreSQL, Celery, Redis. Database query optimization, work with background tasks, integrations with external APIs.',
          skills:
            'Development of product features: goals, debts, expense analytics. Experience with Celery for background tasks, database query optimization, work with external APIs and integrations.',
          workEthic:
            'I work responsibly, focusing on code quality and performance. I am interested in projects where I can create useful product features and improve user experience.',
        },
        socialLinks: {
          linkedin: '',
          github: '',
          telegram: '',
        },
      },
      member4: {
        name: 'Muhammad Annas',
        firstName: 'Muhammad',
        lastName: 'Annas',
        title: 'Senior Product Manager',
        description:
          'Project pitching, product logic and English UX texts. Communication with jury and English-speaking users.',
        shortExperience: 'Product Manager with IELTS 8.5. Responsible for project pitching, product logic, and UX texts in English. Communication with competition jury and English-speaking users.',
        detailedExperience: {
          summary:
            'I am a Product Manager with deep understanding of product logic and experience in English communication (IELTS 8.5). I work on project pitching, UX texts, and communication with international audiences.',
          skills:
            'Responsible for project pitching, product logic, and UX texts in English. Communication with competition jury and English-speaking users. Experience with product strategy, UX Writing, and presentations.',
          workEthic:
            'I work responsibly, focusing on clear communication and understanding user needs. I am interested in projects where product thinking, technical understanding, and international communication can be combined.',
        },
        socialLinks: {
          linkedin: '',
          github: '',
          telegram: '',
        },
      },
    },
    links: {
      linkedin: 'LinkedIn (soon)',
      github: 'GitHub (soon)',
    },
    hints: {
      clickToFlip: 'Click to flip',
      doubleClickForDetails: 'Double click for details',
      doubleClickForInfo: 'Double click for detailed information',
    },
    modal: {
      mainStack: 'Main stack',
      devopsSkills: 'DevOps skills',
      fullstackSkills: 'Full-stack skills',
      skills: 'Skills',
      workEthic: 'Work ethic',
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
        'The team brings together key competencies: a strong backend developer with experience in high-load systems, a DevOps engineer specializing in ML/AI service integration and infrastructure, and a person with IELTS 8.5 who handles pitching and product logic. This combination allows us to cover all aspects of the product — from technical implementation to communication with the competition jury.',
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
  demo: {
    title: 'Puldor',
    summarize:
      'Puldor is a smart Telegram bot for voice-based expense tracking. Just say how much you spent — AI will understand, categorize, track income, goals, debts, and suggest where you can save.',
    video: {
      title: 'Demo Video',
      url: 'https://www.youtube.com/embed/YOUR_VIDEO_ID',
    },
    description: {
      title: 'What is shown in the demo',
      whatShown: {
        title: 'Key Features',
        items: [
          'Voice input of expenses in Russian, Uzbek, and English',
          'Automatic speech recognition and data extraction (amount, category, currency)',
          'Transaction creation and expense categorization',
          'Working with goals and debts',
          'Analytics and personalized recommendations',
        ],
      },
      problemSolution: {
        title: 'Connection to problem and solution',
        items: [
          'Demonstrates solution to manual data entry problem — user simply speaks',
          'Shows multilingual support (RU/UZ/EN), solving the mixed language issue in the region',
          'Automatic categorization eliminates the need to manually select categories',
          'AI analytics provides personalized advice based on real spending history',
        ],
      },
      technologies: {
        title: 'Technologies and AI solutions used',
        items: [
          'OpenAI Whisper — speech recognition (Speech-to-Text)',
          'GPT-4.x — intent understanding and structured data extraction',
          'NLU/NLP — transaction categorization and text analysis',
          'Telegram Bot API — user interaction interface',
          'Python (FastAPI/Django) — backend processing and data storage',
        ],
      },
    },
    api: {
      title: 'API & Technologies',
      subtitle: 'RESTful API with AI processing, multi-currency and multilingual support',
      endpoints: {
        title: 'Key API Endpoints',
        items: [
          {
            method: 'POST',
            path: '/api/users/telegram_auth/',
            description: 'Telegram ID authentication with automatic user creation',
          },
          {
            method: 'POST',
            path: '/api/finance/expense/',
            description: 'Create expense with NLP parsing support',
          },
          {
            method: 'POST',
            path: '/api/ai/parse_voice/',
            description: 'Process voice messages via Whisper and extract transactions',
          },
          {
            method: 'POST',
            path: '/api/ai/parse_text/',
            description: 'NLP parsing of text messages in Russian, Uzbek and English',
          },
          {
            method: 'GET',
            path: '/api/analytics/overview/',
            description: 'Overview analytics: balance, income, expenses, goals',
          },
          {
            method: 'GET',
            path: '/api/analytics/categories/',
            description: 'Expense analysis by categories with visualization',
          },
        ],
      },
      techStack: {
        title: 'Technology Stack',
        categories: [
          {
            title: 'Backend Framework',
            items: ['Django 5.0.3', 'Django REST Framework 3.15.0', 'Gunicorn 21.2.0'],
          },
          {
            title: 'Database',
            items: ['PostgreSQL 15', 'Redis 7', 'psycopg2-binary 2.9.9'],
          },
          {
            title: 'AI & Machine Learning',
            items: ['OpenAI Whisper 20240930', 'Transformers 4.21.0+', 'PyTorch 1.12.0+', 'EasyOCR 1.7.1'],
          },
          {
            title: 'Audio Processing',
            items: ['librosa 0.10.1', 'soundfile 0.12.1', 'ffmpeg-python 0.2.0', 'pydub 0.25.1'],
          },
          {
            title: 'Telegram Bot',
            items: ['python-telegram-bot 21.7', 'aiogram 3.4.1', 'aiohttp 3.9.3'],
          },
          {
            title: 'Authentication',
            items: ['djangorestframework-simplejwt 5.3.0'],
          },
        ],
      },
    },
  },
  footer: {
    text: 'AI500 demo · Puldor — AI-powered Telegram expense assistant',
  },
};

