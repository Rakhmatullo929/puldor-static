import React, { useEffect, useState } from 'react';
import { getAllVisits, clearAnalytics, VisitData } from '../../utils/analytics';

const AdminDashboard: React.FC = () => {
  const [visits, setVisits] = useState<VisitData[]>([]);
  const [filteredVisits, setFilteredVisits] = useState<VisitData[]>([]);
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState<'time' | 'recent'>('recent');

  useEffect(() => {
    loadVisits();
    const interval = setInterval(loadVisits, 5000); // Обновлять каждые 5 секунд
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    applyFilters();
  }, [visits, filter, sortBy]);

  const loadVisits = () => {
    const data = getAllVisits();
    setVisits(data);
  };

  const applyFilters = () => {
    let filtered = [...visits];

    // Фильтрация
    if (filter === 'today') {
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      filtered = filtered.filter(v => v.timestamp >= today.getTime());
    } else if (filter === 'week') {
      const weekAgo = Date.now() - 7 * 24 * 60 * 60 * 1000;
      filtered = filtered.filter(v => v.timestamp >= weekAgo);
    }

    // Сортировка
    if (sortBy === 'recent') {
      filtered.sort((a, b) => b.timestamp - a.timestamp);
    } else {
      filtered.sort((a, b) => b.timeSpent - a.timeSpent);
    }

    setFilteredVisits(filtered);
  };

  const handleClear = () => {
    if (confirm('Вы уверены, что хотите очистить всю статистику?')) {
      clearAnalytics();
      setVisits([]);
      setFilteredVisits([]);
    }
  };

  const formatTime = (seconds: number) => {
    if (seconds < 60) return `${seconds} сек`;
    if (seconds < 3600) return `${Math.floor(seconds / 60)} мин ${seconds % 60} сек`;
    return `${Math.floor(seconds / 3600)} ч ${Math.floor((seconds % 3600) / 60)} мин`;
  };

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  // Статистика
  const totalVisits = visits.length;
  const totalTimeSpent = visits.reduce((sum, v) => sum + v.timeSpent, 0);
  const avgTimeSpent = totalVisits > 0 ? Math.floor(totalTimeSpent / totalVisits) : 0;
  const uniqueDevices = new Set(visits.map(v => v.device)).size;
  const uniqueIPs = new Set(visits.map(v => v.ip)).size;
  const uniqueVisitors = new Set(visits.map(v => v.visitorId)).size;
  const uniqueFingerprints = new Set(visits.map(v => v.fingerprint)).size;
  const returningVisitors = visits.filter(v => v.isReturning).length;

  // Распределение по устройствам
  const deviceStats = visits.reduce((acc, v) => {
    acc[v.device] = (acc[v.device] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Распределение по браузерам
  const browserStats = visits.reduce((acc, v) => {
    acc[v.browser] = (acc[v.browser] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // Посещения по времени суток
  const hourlyStats = Array.from({ length: 24 }, (_, i) => {
    const hour = i;
    return visits.filter(v => {
      const date = new Date(v.timestamp);
      return date.getHours() === hour;
    }).length;
  });

  const maxHourlyVisits = Math.max(...hourlyStats, 1);

  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-bg to-dark-bg-alt py-8 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent mb-2">
                Аналитика посещений
              </h1>
              <p className="text-text-light opacity-70">Статистика просмотров сайта</p>
            </div>
            <button
              onClick={() => {
                localStorage.removeItem('admin_authenticated');
                window.location.reload();
              }}
              className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Выйти
            </button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-4 mb-6">
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Всего посещений</p>
              <p className="text-2xl font-bold text-accent-green">{totalVisits}</p>
            </div>
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Уникальных посетителей</p>
              <p className="text-2xl font-bold text-blue-400">{uniqueVisitors}</p>
            </div>
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Возвращающихся</p>
              <p className="text-2xl font-bold text-purple-400">{returningVisitors}</p>
            </div>
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Среднее время</p>
              <p className="text-2xl font-bold text-accent-blue">{formatTime(avgTimeSpent)}</p>
            </div>
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Устройств</p>
              <p className="text-2xl font-bold text-yellow-400">{uniqueDevices}</p>
            </div>
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Уникальных IP</p>
              <p className="text-2xl font-bold text-orange-400">{uniqueIPs}</p>
            </div>
            <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-4">
              <p className="text-text-light opacity-70 text-sm mb-1">Отпечатков</p>
              <p className="text-2xl font-bold text-green-400">{uniqueFingerprints}</p>
            </div>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="flex items-center gap-2">
              <label className="text-text-light text-sm">Фильтр:</label>
              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="px-4 py-2 bg-dark-bg-alt border border-gray-800 rounded-lg text-text-light focus:outline-none focus:border-accent-green"
              >
                <option value="all">Все время</option>
                <option value="today">Сегодня</option>
                <option value="week">Неделя</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-text-light text-sm">Сортировка:</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'time' | 'recent')}
                className="px-4 py-2 bg-dark-bg-alt border border-gray-800 rounded-lg text-text-light focus:outline-none focus:border-accent-green"
              >
                <option value="recent">Новые сначала</option>
                <option value="time">По времени на сайте</option>
              </select>
            </div>
            <button
              onClick={handleClear}
              className="px-4 py-2 bg-red-500/20 border border-red-500/50 text-red-400 rounded-lg hover:bg-red-500/30 transition-colors"
            >
              Очистить данные
            </button>
          </div>
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Device Distribution */}
          <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Устройства</h2>
            <div className="space-y-3">
              {Object.entries(deviceStats).map(([device, count]) => {
                const percentage = (count / totalVisits) * 100;
                return (
                  <div key={device}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-text-light text-sm">{device}</span>
                      <span className="text-text-light text-sm font-medium">{count} ({percentage.toFixed(1)}%)</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent-green to-accent-blue h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Browser Distribution */}
          <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-6">
            <h2 className="text-xl font-bold text-white mb-4">Браузеры</h2>
            <div className="space-y-3">
              {Object.entries(browserStats).map(([browser, count]) => {
                const percentage = (count / totalVisits) * 100;
                return (
                  <div key={browser}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-text-light text-sm">{browser}</span>
                      <span className="text-text-light text-sm font-medium">{count} ({percentage.toFixed(1)}%)</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-accent-blue to-purple-400 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Hourly Stats */}
          <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-6 lg:col-span-2">
            <h2 className="text-xl font-bold text-white mb-4">Посещения по часам</h2>
            <div className="flex items-end justify-between gap-1 h-48">
              {hourlyStats.map((count, hour) => (
                <div key={hour} className="flex-1 flex flex-col items-center gap-2">
                  <div className="relative w-full flex items-end justify-center" style={{ height: '180px' }}>
                    <div
                      className="w-full bg-gradient-to-t from-accent-green to-accent-blue rounded-t transition-all duration-500 hover:opacity-80"
                      style={{ height: `${(count / maxHourlyVisits) * 100}%`, minHeight: count > 0 ? '4px' : '0' }}
                      title={`${hour}:00 - ${count} посещений`}
                    />
                  </div>
                  <span className="text-xs text-text-light opacity-70">{hour}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Visits Table */}
        <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Детальная статистика ({filteredVisits.length})</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-800">
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Время</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Visitor ID</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">IP</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Устройство</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Браузер / OS</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Время на сайте</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Визитов</th>
                  <th className="text-left py-3 px-4 text-text-light text-sm font-medium">Реферер</th>
                </tr>
              </thead>
              <tbody>
                {filteredVisits.slice(0, 100).map((visit) => (
                  <tr key={visit.id} className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="py-3 px-4 text-text-light text-sm">{formatDate(visit.timestamp)}</td>
                    <td className="py-3 px-4 text-text-light text-xs font-mono">
                      <div className="flex items-center gap-2">
                        <span className="truncate max-w-[120px]" title={visit.visitorId}>{visit.visitorId}</span>
                        {visit.isReturning && (
                          <span className="px-1.5 py-0.5 bg-purple-500/20 text-purple-400 rounded text-xs">↩</span>
                        )}
                      </div>
                    </td>
                    <td className="py-3 px-4 text-text-light text-sm font-mono">{visit.ip || 'Unknown'}</td>
                    <td className="py-3 px-4 text-text-light text-sm">
                      <div>
                        <div>{visit.device}</div>
                        <div className="text-xs opacity-70">{visit.screenWidth}x{visit.screenHeight}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-text-light text-sm">
                      <div>
                        <div>{visit.browser} {visit.browserVersion}</div>
                        <div className="text-xs opacity-70">{visit.os} {visit.osVersion}</div>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-text-light text-sm">
                      <span className={`px-2 py-1 rounded ${visit.timeSpent > 60 ? 'bg-green-500/20 text-green-400' : visit.timeSpent > 30 ? 'bg-yellow-500/20 text-yellow-400' : 'bg-red-500/20 text-red-400'}`}>
                        {formatTime(visit.timeSpent)}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text-light text-sm">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-400 rounded">
                        #{visit.visitCount}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-text-light text-sm text-xs truncate max-w-xs" title={visit.referrer}>
                      {visit.referrer === 'Direct' ? (
                        <span className="text-gray-500">Прямой заход</span>
                      ) : (
                        visit.referrer
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredVisits.length === 0 && (
              <div className="text-center py-12 text-text-light opacity-50">
                Нет данных для отображения
              </div>
            )}
          </div>
          
          {/* Detailed Visitor Info Modal/Expand */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-dark-bg/50 border border-gray-800/30 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">ℹ️ Детальная информация о посетителях</h3>
              <p className="text-xs text-text-light opacity-70">
                Каждый посетитель отслеживается через:
              </p>
              <ul className="text-xs text-text-light opacity-70 mt-2 space-y-1 list-disc list-inside">
                <li><strong>Visitor ID</strong> - уникальный cookie ID (хранится 365 дней)</li>
                <li><strong>Fingerprint</strong> - браузерный отпечаток (canvas, screen, timezone, платформа)</li>
                <li><strong>IP адрес</strong> - определяется через внешний API</li>
                <li><strong>User Agent</strong> - полная информация о браузере и ОС</li>
                <li><strong>Экран и viewport</strong> - разрешение экрана и окна браузера</li>
                <li><strong>Timezone</strong> - часовой пояс посетителя</li>
                <li><strong>Языки</strong> - все языки, настроенные в браузере</li>
                <li><strong>CPU ядра</strong> - количество ядер процессора</li>
                <li><strong>Соединение</strong> - тип интернет-соединения (если доступно)</li>
              </ul>
            </div>
            <div className="bg-dark-bg/50 border border-gray-800/30 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-white mb-2">📊 Что отслеживается</h3>
              <ul className="text-xs text-text-light opacity-70 mt-2 space-y-1">
                <li>✅ Возвращающиеся посетители (через cookie)</li>
                <li>✅ Количество визитов каждого посетителя</li>
                <li>✅ Первое и последнее посещение</li>
                <li>✅ Время на сайте (обновляется каждые 5 сек)</li>
                <li>✅ Все просмотренные страницы</li>
                <li>✅ Реферер (откуда пришел посетитель)</li>
                <li>✅ Детальная информация об устройстве</li>
                <li>✅ Версии браузера и ОС</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

