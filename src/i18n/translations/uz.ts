import { Translations } from '../../types/i18n';

/**
 * Uzbek translations for the application.
 */
export const uz: Translations = {
  header: {
    nav: {
      problemSolution: 'Muammo → Yechim',
      team: 'Jamoa',
      whyUs: 'Nima uchun biz',
      roadmap: 'Yo\'l xaritasi',
      howWeBuild: 'Qanday qilamiz',
    },
    cta: 'Telegramda sinab ko\'ring',
  },
  hero: {
    badge: 'AI500 Demo · Ovoz → Tushunchalar',
    title: 'Puldor — aqlli xarajatlarni hisobga olish uchun AI Telegram bot',
    subtitle:
      'Faqat ovoz bilan qancha va nimaga sarflaganingizni ayting — bot o\'zi tushunadi, toifalarga ajratadi, daromadlarni, maqsadlarni, qarzlarni hisobga oladi va qayerda tejash mumkinligini taklif qiladi.',
    button1: 'Qanday ishlashini ko\'ring',
    button2: 'Nima uchun biz',
    stats: {
      languages: '3 til · RU / UZ / EN',
      voiceToCategories: 'Ovoz → matn → toifalar',
      goalsAndAnalytics: 'Maqsadlar, qarzlar, tahlil',
    },
    demo: {
      interface: 'Demo interfeys',
      voiceMessage: '💬 Ovozli xabar',
      voiceExample: '"Tushlikka 5000 so\'m sarfladim"',
      autoProcessing: '✅ Avtomatik qayta ishlash',
      categoryExample: 'Toifa: Ovqat · Miqdor: 5000 UZS',
    },
  },
  problemSolution: {
    title: 'Muammo → Yechim',
    subtitle:
      'An\'anaviy xarajatlar kuzatuvchilari ko\'p qo\'lda ish talab qiladi va tezda zerikarli bo\'lib qoladi. Biz ovoz va AI orqali aqlli yondashuvni taklif qilamiz.',
    problem: {
      title: 'Muammo',
      items: [
        'Odamlar xarajatlarni eslatmalarda, Excel yoki oddiy ilovalarda kuzatishga harakat qilishadi, lekin tezda tashlab ketishadi.',
        'Ko\'pchilik har bir to\'lovdan keyin qo\'l bilan toifalar va summalarni bosishdan dangasa.',
        'O\'zbekistonda va MDHda ko\'pincha RU + UZ + EN aralashmasi ishlatiladi — standart ilovalar bunday ma\'lumotlarni yomon tushunadi.',
        'Haqiqiy xarajatlar tarixiga asoslanmagan "havodan" moliyaviy maslahatlar odatlarni o\'zgartirishga yordam bermaydi.',
      ],
    },
    solution: {
      title: 'Bizning yechimimiz',
      items: [
        'Rus, o\'zbek va ingliz tillarida ovoz va matnni qabul qiladigan Telegram-bot.',
        'AI (Whisper + LLM) iboraning ma\'nosini tushunadi: xarajat, daromad, qarz, maqsad, tahlil/savol.',
        'Summa, valyuta, toifa va sanani ajratib oladi, tranzaksiyalarni avtomatik yaratadi.',
        'Maqsadlarni quradi, qarzlarni hisobga oladi, tahlilni hisoblaydi va shaxsiy maslahatlar beradi.',
        'To\'g\'ridan-to\'g\'ri Telegramda ishlaydi — alohida ilova yoki veb-saytda ro\'yxatdan o\'tish kerak emas.',
      ],
    },
  },
  team: {
    title: 'Jamoa',
    subtitle: 'AI yadrosidan ingliz tilida pitch qilishgacha bo\'lgan mahsulotni qamrab olgan to\'rt kishi',
    members: {
      member1: {
        name: 'Azizov Rakhmatullo',
        title: 'Full-stack',
        description:
          'API va tizim arxitekturasini loyihalash. Yuqori yuklanishli tizimlar bilan ishlash tajribasi, Telegram Bot API va to\'lov tizimlari bilan integratsiya. Backendning masshtablanuvchanligi va ishonchliligini ta\'minlaydi.',
      },
      member2: {
        name: 'Muhammad Chariev',
        title: 'AI / ML muhandisi',
        description:
          'Ovozli xabarlar va matnni qayta ishlash uchun AI pipeline-larini ishlab chiqish. Tranzaksiyalarni tasniflash, ob\'yektlarni ajratib olish (summalar, toifalar, sanalar). Whisper va GPT-4.x bilan integratsiya.',
      },
      member3: {
        name: 'Nematullo Irgashev',
        title: 'Backend muhandisi (Mahsulot xususiyatlari)',
        description:
          'Mahsulot xususiyatlarini ishlab chiqish: maqsadlar, qarzlar, xarajatlar tahlili. Ma\'lumotlar bazasi so\'rovlarini optimallashtirish, fon vazifalari uchun Celery bilan ishlash, tashqi API-lar bilan integratsiya.',
      },
      member4: {
        name: 'Muhammad Annas',
        title: 'Product Manager',
        description:
          'Loyihani pitch qilish, mahsulot mantiqi va ingliz tilidagi UX matnlariga javobgar. Tanlov hakamlar hay\'ati va ingliz tilida so\'zlashuvchi foydalanuvchilar bilan muloqot.',
      },
    },
    links: {
      linkedin: 'LinkedIn (tez orada)',
      github: 'GitHub (tez orada)',
    },
  },
  whyUs: {
    title: 'Nima uchun bizning jamoamiz bu vazifani hal qiladi',
    subtitle:
      'Bizda nafaqat texnik ko\'nikmalar, balki muammoning chuqur tushunishi, shunga o\'xshash mahsulot bilan ishlash tajribasi va aniq amalga oshirish rejasi mavjud.',
    description: {
      paragraph1:
        'Biz allaqachon 6 oydan ortiq vaqt davomida xarajatlarni hisobga olish uchun bot prototipini ishlab chiqmoqdamiz. Bu vaqt ichida biz g\'oyadan ishlaydigan mahsulotgacha bo\'lgan yo\'lni bosib o\'tdik, foydalanuvchilardan fikr-mulohazalar oldik va nimalarni yaxshilash kerakligini tushundik. Hozir biz to\'plangan tajribadan foydalanib, yanada toza va masshtablanuvchan versiyani yaratmoqdamiz.',
      paragraph2:
        'Jamoada asosiy kompetentsiyalar to\'plangan: yuqori yuklanishli tizimlar bilan ishlash tajribasiga ega kuchli backend dasturchi, NLP va NLU bo\'yicha ixtisoslashgan ML muhandisi va pitch va mahsulot mantiqiga javobgar IELTS 8.5 ga ega shaxs. Bu kombinatsiya bizga mahsulotning barcha jihatlarini — texnik amalga oshirishdan tortib tanlov hakamlar hay\'ati bilan muloqotgacha qamrab olish imkonini beradi.',
      paragraph3:
        'Biz mahalliy kontekstni yaxshi tushunamiz: bir chatda rus, o\'zbek va ingliz tillarining aralashmasi, mintaqadagi moliyaviy madaniyatning xususiyatlari, haqiqiy foydalanuvchilar og\'riqlari. Bu mavhum g\'oya emas — biz odamlar qanday muammolarga duch kelishini bilamiz, chunki biz allaqachon ular bilan to\'g\'ridan-to\'g\'ri ishladik.',
    },
    reasons: {
      reason1: {
        title: 'Shunga o\'xshash bot bilan jangovar tajriba allaqachon mavjud',
        description:
          'Xarajatlarni hisobga olish uchun bot prototipini ishlab chiqish va takomillashtirish 6+ oy. Hozir yanada toza va masshtablanuvchan versiyani yaratmoqdamiz.',
      },
      reason2: {
        title: 'Tabiiy nutq uchun kuchli AI/ML va NLU',
        description:
          'Moliyaviy kontekstda tabiiy tilni tushunish uchun Whisper, GPT-4.x va maxsus modellar bilan ishlash tajribasi.',
      },
      reason3: {
        title: 'Telegram Bot API bilan ishlab chiqarish tajribasi',
        description:
          'Ishlab chiqarishda haqiqiy botlar, tashqi API-lar bilan integratsiya (AI modellari, to\'lov provayderlari, saqlash).',
      },
      reason4: {
        title: 'RU / UZ / EN kontekstining chuqur bilimi',
        description:
          'Biz mintaqadagi moliyaviy madaniyat va til aralashmalarining xususiyatlarini tushunamiz. Bot haqiqiy foydalanuvchi ma\'lumotlari bilan ishlaydi.',
      },
      reason5: {
        title: 'Foydali tahlilga aniq e\'tibor',
        description:
          'Faqat grafiklar emas, balki foydalanuvchining haqiqiy xarajatlar tarixiga asoslangan shaxsiy maslahatlar va tavsiyalar.',
      },
      reason6: {
        title: 'Mahsulotni yo\'l xaritasiga bo\'lish qobiliyati',
        description:
          'Murakkab mahsulotlarni realistik bosqichlarga bo\'lish va ularni o\'lchanadigan natijalar bilan chiqarishga olib kelish tajribasi.',
      },
    },
  },
  roadmap: {
    title: 'Yo\'l xaritasi',
    subtitle:
      'Biz g\'oyadan jangovar mahsulotgacha boramiz, bosqichma-bosqich funksionallik qo\'shib, foydalanuvchi tajribasini yaxshilaymiz.',
    stages: {
      idea: {
        title: 'G\'oya',
        subtitle: 'Kontseptsiya va texnik stackni rasmiylashtirish',
        items: [
          'Muammo va funksionallikni rasmiylashtirish',
          'Telegram bot uchun UX oqimi dizayni',
          'AI stackini belgilash: ovoz uchun Whisper, intents va ob\'yektlarni ajratib olish uchun GPT-4.x / shunga o\'xshash LLM',
        ],
      },
      prototype: {
        title: 'Prototip',
        subtitle: 'Asosiy xarajatlar va daromadlarni hisobga olish uchun ishlaydigan bot',
        items: [
          'Xarajatlar/daromadlarni ovozli va matnli kiritish uchun ishlaydigan Telegram-bot',
          'Asosiy toifalar va matn shaklida oddiy haftalik/oylik hisobot',
          'Ma\'lumotlarni PostgreSQL-da saqlash',
          'Oddiy maqsadlar va qarzlar mantiqi (tranzaksiyalarni qo\'lda belgilash)',
        ],
      },
      mvp: {
        title: 'MVP',
        subtitle: 'Aqlli tasniflash, maqsadlar, qarzlar va ko\'p tillilik',
        items: [
          'Aqlli toifa tasnifi (AI model + nozik sozlash qobiliyati)',
          'To\'liq maqsadlar (kassa), qarzlar, eslatmalar',
          'Oylik hisobotlar + qayerda kamroq sarflash mumkinligi haqida maslahatlar (tarixga asoslangan)',
          'Bir chatda bir vaqtning o\'zida uch tilni qo\'llab-quvvatlash',
          'Asosiy boshqaruv paneli (jamoa uchun)',
        ],
      },
      launched: {
        title: 'Ishga tushirildi',
        subtitle: 'Masshtablash va monetizatsiya bilan ishlab chiqarishga tayyor mahsulot',
        items: [
          'Infratuzilmani masshtablash (Docker, orchestrator, monitoring)',
          'Kechikishni yaxshilash, AI xarajatlarini optimallashtirish',
          'To\'lov modelini sozlash (freemium / obuna)',
          'AI maslahatlari va shaxsiylashtirilgan tavsiyalarni kengaytirish',
        ],
      },
    },
    current: 'Hozir',
  },
  implementation: {
    title: 'Yechimni qanday amalga oshirishni rejalashtirmoqdamiz',
    subtitle:
      'Aqlli moliyaviy yordamchi yaratish uchun zamonaviy texnologiya stack va AI vositalaridan foydalangan holda bosqichma-bosqich ishlab chiqish.',
    architecture: {
      title: 'Texnik arxitektura',
      interface: {
        title: 'Interfeys',
        items: [
          '<strong>Telegram Bot API</strong> — asosiy o\'zaro ta\'sir interfeysi',
          '<strong>Veb interfeys</strong> (React) — landing va kelajakdagi boshqaruv paneli',
          'Ovozli va matnli kirish',
        ],
      },
      backend: {
        title: 'Backend va Ma\'lumotlar',
        items: [
          '<strong>Python</strong> — FastAPI yoki Django',
          '<strong>PostgreSQL</strong> — asosiy ma\'lumotlar ombori',
          '<strong>Redis</strong> — keshlash va navbatlar',
          '<strong>Celery</strong> — fon vazifalari',
        ],
      },
      ai: {
        title: 'AI qatlami',
        items: [
          '<strong>Whisper API</strong> — nutqni tanib olish (STT)',
          '<strong>GPT-4.x</strong> — intent aniqlash va ma\'lumotlarni ajratib olish',
          '<strong>NLU/NLP</strong> — tasniflash va tahlil',
          'Shaxsiy maslahatlar yaratish',
        ],
      },
    },
    sprints: {
      title: 'Bosqichma-bosqich amalga oshirish rejasi',
      sprint1: {
        title: 'Sprint 1: Asosiy funksionallik',
        goal: 'Xarajatlar va daromadlarni matnli kiritish bilan asosiy Telegram-bot',
        tasks: [
          'Telegram Bot API sozlash',
          'Python-da backend (FastAPI/Django)',
          'Tranzaksiyalarni saqlash uchun PostgreSQL',
          'Matnli buyruqlarni qayta ishlash (xarajat/daromad)',
          'Asosiy DB va API struktura',
        ],
      },
      sprint2: {
        title: 'Sprint 2: Ovozli kirish',
        goal: 'Nutqni tanib olish va avtomatik tasniflashni qo\'shish',
        tasks: [
          'Nutqni tanib olish uchun Whisper API integratsiyasi',
          'Ovozli xabarlarni qayta ishlash',
          'Oddiy tranzaksiya tasnifi (LLM)',
          'Matndan summa, valyuta, sanani ajratib olish',
          'RU/UZ/EN tillarini qo\'llab-quvvatlash',
        ],
      },
      sprint3: {
        title: 'Sprint 3: Maqsadlar va qarzlar',
        goal: 'Funksionallikni kengaytirish: maqsadlar, qarzlar, eslatmalar',
        tasks: [
          'Moliyaviy maqsadlar tizimi',
          'Qarzlarni hisobga olish (kreditlar, qarzlar)',
          'Eslatmalar va bildirishnomalar',
          'Maqsad bo\'yicha taraqqiyotni hisoblash',
          'Tranzaksiyalar bilan integratsiya',
        ],
      },
      sprint4: {
        title: 'Sprint 4: Tahlil va maslahatlar',
        goal: 'Tarixga asoslangan AI tahlili va shaxsiy tavsiyalar',
        tasks: [
          'Xarajatlar tarixini tahlil qilish (LLM-prompting)',
          'Shaxsiy maslahatlar yaratish',
          'Statistikani vizualizatsiya qilish',
          'Xarajatlar naqshlarini aniqlash',
          'Tejash tavsiyalari',
        ],
      },
      sprint5: {
        title: 'Sprint 5: Optimallashtirish va masshtablash',
        goal: 'Ishlashni optimallashtirish va masshtablashga tayyorgarlik',
        tasks: [
          'Keshlash uchun Redis',
          'Fon vazifalari uchun Celery',
          'Monitoring va loglashtirish',
          'Ma\'lumotlar bazasi so\'rovlarini optimallashtirish',
          'Ishlab chiqarishga joylashtirishga tayyorgarlik',
        ],
      },
    },
  },
  footer: {
    text: 'AI500 demo · Puldor — AI bilan quvvatlanadigan Telegram xarajatlar yordamchisi',
  },
};

