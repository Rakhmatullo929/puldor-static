/**
 * Analytics tracking utility
 * Tracks visitor information: IP, device, time spent, cookies, fingerprinting, etc.
 */

export interface VisitData {
  id: string;
  visitorId: string; // Уникальный ID посетителя (cookie-based)
  fingerprint: string; // Браузерный отпечаток
  timestamp: number;
  ip?: string;
  userAgent: string;
  device: string;
  deviceType: string;
  browser: string;
  browserVersion: string;
  os: string;
  osVersion: string;
  language: string;
  languages: string[]; // Все языки браузера
  referrer: string;
  screenWidth: number;
  screenHeight: number;
  viewportWidth: number;
  viewportHeight: number;
  colorDepth: number;
  pixelRatio: number;
  timezone: string;
  timezoneOffset: number;
  platform: string;
  cookieEnabled: boolean;
  doNotTrack: string | null;
  hardwareConcurrency: number; // Количество ядер CPU
  maxTouchPoints: number;
  connection?: string; // Тип соединения (если доступен)
  timeSpent: number;
  pagesVisited: string[];
  sessionStart: number;
  lastActivity: number;
  visitCount: number; // Сколько раз этот посетитель заходил
  firstVisit?: number; // Дата первого визита
  lastVisit?: number; // Дата последнего визита
  isReturning: boolean;
}

const STORAGE_KEY = 'puldor_analytics';
const VISITOR_ID_COOKIE = 'puldor_visitor_id';
const MAX_VISITS = 1000; // Максимальное количество записей

/**
 * Установить cookie
 */
const setCookie = (name: string, value: string, days: number = 365): void => {
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
  const expires = `expires=${date.toUTCString()}`;
  document.cookie = `${name}=${value};${expires};path=/`;
};

/**
 * Получить cookie
 */
const getCookie = (name: string): string | null => {
  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

/**
 * Сгенерировать уникальный Visitor ID
 */
const getOrCreateVisitorId = (): string => {
  let visitorId = getCookie(VISITOR_ID_COOKIE);
  if (!visitorId) {
    visitorId = `visitor_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    setCookie(VISITOR_ID_COOKIE, visitorId, 365);
  }
  return visitorId;
};

/**
 * Создать браузерный отпечаток (fingerprint)
 */
const createFingerprint = (): string => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  if (ctx) {
    ctx.textBaseline = 'top';
    ctx.font = '14px Arial';
    ctx.fillText('Browser fingerprint 🎨', 2, 2);
  }
  const canvasFp = canvas.toDataURL();
  
  const components = [
    navigator.userAgent,
    navigator.language,
    screen.width + 'x' + screen.height,
    new Date().getTimezoneOffset(),
    navigator.platform,
    canvasFp,
    navigator.hardwareConcurrency || 'unknown',
    navigator.maxTouchPoints || '0',
  ];
  
  // Простой hash функции
  let hash = 0;
  const str = components.join('|');
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  
  return Math.abs(hash).toString(36);
};

/**
 * Получить IP адрес через внешний сервис
 */
export const getIpAddress = async (): Promise<string> => {
  try {
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip || 'Unknown';
  } catch {
    return 'Unknown';
  }
};

/**
 * Определить устройство из User Agent
 */
export const getDeviceInfo = (userAgent: string) => {
  const isMobile = /Mobile|Android|iPhone|iPad/i.test(userAgent);
  const isTablet = /Tablet|iPad/i.test(userAgent);
  
  let device = 'Desktop';
  let deviceType = 'desktop';
  if (isTablet) {
    device = 'Tablet';
    deviceType = 'tablet';
  } else if (isMobile) {
    device = 'Mobile';
    deviceType = 'mobile';
  }

  // Определение браузера с версией
  let browser = 'Unknown';
  let browserVersion = 'Unknown';
  
  const chromeMatch = userAgent.match(/Chrome\/([0-9.]+)/);
  const firefoxMatch = userAgent.match(/Firefox\/([0-9.]+)/);
  const safariMatch = userAgent.match(/Version\/([0-9.]+).*Safari/);
  const edgeMatch = userAgent.match(/Edg\/([0-9.]+)/);
  const operaMatch = userAgent.match(/OPR\/([0-9.]+)/);
  
  if (chromeMatch && !userAgent.includes('Edg')) {
    browser = 'Chrome';
    browserVersion = chromeMatch[1];
  } else if (firefoxMatch) {
    browser = 'Firefox';
    browserVersion = firefoxMatch[1];
  } else if (safariMatch && !userAgent.includes('Chrome')) {
    browser = 'Safari';
    browserVersion = safariMatch[1];
  } else if (edgeMatch) {
    browser = 'Edge';
    browserVersion = edgeMatch[1];
  } else if (operaMatch) {
    browser = 'Opera';
    browserVersion = operaMatch[1];
  }

  // Определение OS с версией
  let os = 'Unknown';
  let osVersion = 'Unknown';
  
  if (userAgent.includes('Windows NT')) {
    os = 'Windows';
    const winVersion = userAgent.match(/Windows NT ([0-9.]+)/);
    if (winVersion) {
      const versionMap: Record<string, string> = {
        '10.0': '10/11',
        '6.3': '8.1',
        '6.2': '8',
        '6.1': '7',
      };
      osVersion = versionMap[winVersion[1]] || winVersion[1];
    }
  } else if (userAgent.includes('Mac OS X')) {
    os = 'macOS';
    const macVersion = userAgent.match(/Mac OS X ([0-9_]+)/);
    if (macVersion) osVersion = macVersion[1].replace(/_/g, '.');
  } else if (userAgent.includes('Linux')) {
    os = 'Linux';
    osVersion = 'Unknown';
  } else if (userAgent.includes('Android')) {
    os = 'Android';
    const androidVersion = userAgent.match(/Android ([0-9.]+)/);
    if (androidVersion) osVersion = androidVersion[1];
  } else if (userAgent.includes('iPhone') || userAgent.includes('iPad')) {
    os = 'iOS';
    const iosVersion = userAgent.match(/OS ([0-9_]+)/);
    if (iosVersion) osVersion = iosVersion[1].replace(/_/g, '.');
  }

  return { device, deviceType, browser, browserVersion, os, osVersion };
};

/**
 * Определить тип соединения (если доступно)
 */
const getConnectionType = (): string | undefined => {
  const nav = navigator as any;
  if (nav.connection) {
    const conn = nav.connection || nav.mozConnection || nav.webkitConnection;
    return `${conn.effectiveType || 'unknown'} (${conn.downlink || '?'} Mbps)`;
  }
  return undefined;
};

/**
 * Создать новую запись о посещении
 */
export const createVisit = async (): Promise<VisitData> => {
  const userAgent = navigator.userAgent;
  const { device, deviceType, browser, browserVersion, os, osVersion } = getDeviceInfo(userAgent);
  const now = Date.now();
  const ip = await getIpAddress();
  const visitorId = getOrCreateVisitorId();
  const fingerprint = createFingerprint();
  
  // Проверить, возвращающийся ли это посетитель
  const previousVisits = getAllVisits().filter(v => v.visitorId === visitorId);
  const isReturning = previousVisits.length > 0;
  const firstVisit = isReturning ? previousVisits[previousVisits.length - 1].firstVisit || previousVisits[previousVisits.length - 1].timestamp : now;
  const visitCount = previousVisits.length + 1;

  return {
    id: `${now}-${Math.random().toString(36).substr(2, 9)}`,
    visitorId,
    fingerprint,
    timestamp: now,
    ip,
    userAgent,
    device,
    deviceType,
    browser,
    browserVersion,
    os,
    osVersion,
    language: navigator.language,
    languages: [...(navigator.languages || [navigator.language])],
    referrer: document.referrer || 'Direct',
    screenWidth: window.screen.width,
    screenHeight: window.screen.height,
    viewportWidth: window.innerWidth,
    viewportHeight: window.innerHeight,
    colorDepth: window.screen.colorDepth,
    pixelRatio: window.devicePixelRatio || 1,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: new Date().getTimezoneOffset(),
    platform: navigator.platform,
    cookieEnabled: navigator.cookieEnabled,
    doNotTrack: navigator.doNotTrack || null,
    hardwareConcurrency: navigator.hardwareConcurrency || 0,
    maxTouchPoints: navigator.maxTouchPoints || 0,
    connection: getConnectionType(),
    timeSpent: 0,
    pagesVisited: [window.location.pathname],
    sessionStart: now,
    lastActivity: now,
    visitCount,
    firstVisit,
    lastVisit: isReturning ? previousVisits[0].timestamp : undefined,
    isReturning,
  };
};

/**
 * Сохранить данные о посещении
 */
export const saveVisit = (visit: VisitData): void => {
  try {
    const visits = getAllVisits();
    visits.unshift(visit);
    
    // Ограничить количество записей
    if (visits.length > MAX_VISITS) {
      visits.splice(MAX_VISITS);
    }
    
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visits));
  } catch (error) {
    console.error('Error saving visit:', error);
  }
};

/**
 * Получить все посещения
 */
export const getAllVisits = (): VisitData[] => {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
};

/**
 * Обновить текущую сессию
 */
export const updateCurrentSession = (visitId: string, timeSpent: number): void => {
  try {
    const visits = getAllVisits();
    const visit = visits.find(v => v.id === visitId);
    if (visit) {
      visit.timeSpent = timeSpent;
      visit.lastActivity = Date.now();
      if (!visit.pagesVisited.includes(window.location.pathname)) {
        visit.pagesVisited.push(window.location.pathname);
      }
      saveVisits(visits);
    }
  } catch (error) {
    console.error('Error updating session:', error);
  }
};

/**
 * Сохранить массив посещений
 */
const saveVisits = (visits: VisitData[]): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(visits));
  } catch (error) {
    console.error('Error saving visits:', error);
  }
};

/**
 * Инициализировать трекинг
 */
export const initAnalytics = async (): Promise<string> => {
  const sessionKey = sessionStorage.getItem('current_session_id');
  
  if (!sessionKey) {
    const visit = await createVisit();
    sessionStorage.setItem('current_session_id', visit.id);
    saveVisit(visit);
    
    // Обновлять время на сайте каждые 5 секунд
    const interval = setInterval(() => {
      const currentId = sessionStorage.getItem('current_session_id');
      if (currentId) {
        const timeSpent = Math.floor((Date.now() - visit.sessionStart) / 1000);
        updateCurrentSession(currentId, timeSpent);
      }
    }, 5000);
    
    // Очистить при закрытии страницы
    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
      const finalId = sessionStorage.getItem('current_session_id');
      if (finalId) {
        const finalTimeSpent = Math.floor((Date.now() - visit.sessionStart) / 1000);
        updateCurrentSession(finalId, finalTimeSpent);
      }
    });
    
    return visit.id;
  }
  
  return sessionKey;
};

/**
 * Очистить все данные аналитики
 */
export const clearAnalytics = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};
