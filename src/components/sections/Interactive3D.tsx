import React, { useState, useRef, useEffect } from 'react';

interface Feature {
  id: string;
  title: string;
  description: string;
  color: string;
}

/**
 * Interactive 3D Phone Demo component
 * Similar to Apple's product showcase with interactive 3D phone model
 */
const Interactive3D: React.FC = () => {
  const [selectedFeature, setSelectedFeature] = useState<string>('voice');
  const [isDragging, setIsDragging] = useState(false);
  const [rotation, setRotation] = useState({ x: -15, y: 25 });
  const phoneRef = useRef<HTMLDivElement>(null);
  const startPos = useRef({ x: 0, y: 0 });

  const features: Feature[] = [
    {
      id: 'voice',
      title: 'Голосовой ввод',
      description: 'Просто скажите голосом, сколько и на что потратили — бот автоматически распознает и категоризирует',
      color: 'from-green-500 to-emerald-500',
    },
    {
      id: 'ai',
      title: 'AI-обработка',
      description: 'Whisper распознает речь, GPT-4.x понимает смысл и извлекает сумму, категорию, дату',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      id: 'categories',
      title: 'Умная категоризация',
      description: 'Автоматическое распределение расходов по категориям на основе контекста сообщения',
      color: 'from-purple-500 to-pink-500',
    },
    {
      id: 'multilang',
      title: '3 языка',
      description: 'Работает с русским, узбекским и английским одновременно в одном чате',
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 'analytics',
      title: 'Аналитика',
      description: 'Цели, долги, персональные советы по экономии на основе истории трат',
      color: 'from-indigo-500 to-purple-500',
    },
  ];

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;
    
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    
    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3,
    }));
    
    startPos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch handlers для мобильных устройств
  const handleTouchStart = (e: React.TouchEvent) => {
    const touch = e.touches[0];
    setIsDragging(true);
    startPos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!isDragging || !e.touches[0]) return;
    
    const touch = e.touches[0];
    const deltaX = touch.clientX - startPos.current.x;
    const deltaY = touch.clientY - startPos.current.y;
    
    setRotation(prev => ({
      x: Math.max(-45, Math.min(45, prev.x - deltaY * 0.3)),
      y: prev.y + deltaX * 0.3,
    }));
    
    startPos.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove, { passive: false });
      window.addEventListener('touchend', handleTouchEnd);
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
      };
    }
  }, [isDragging]);

  const selectedFeatureData = features.find(f => f.id === selectedFeature);

  return (
    <section
      id="interactive-demo"
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-dark-bg to-dark-bg-alt overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent-green/5 via-transparent to-accent-blue/5"></div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white via-accent-green to-accent-blue bg-clip-text text-transparent mb-4">
            Интерактивная демонстрация
          </h2>
          <p className="text-lg md:text-xl text-text-light max-w-3xl mx-auto opacity-90">
            Покрутите телефон и узнайте больше о возможностях Puldor
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[500px] lg:min-h-[600px]">
          {/* Instructions for mobile - above phone */}
          <div className="lg:hidden col-span-1 order-1 text-center mb-4">
            <p className="text-text-light/70 text-sm">
              Нажмите и перетащите для вращения
            </p>
          </div>
          {/* Left: Features List */}
          <div className="space-y-3 lg:space-y-4 order-2 lg:order-1">
            {features.map((feature) => {
              const isSelected = selectedFeature === feature.id;
              return (
                <div
                  key={feature.id}
                  onClick={() => setSelectedFeature(feature.id)}
                  className={`relative group cursor-pointer transition-all duration-300 ${
                    isSelected ? 'scale-105' : 'hover:scale-102'
                  }`}
                >
                  {/* Feature Button */}
                  <div
                    className={`flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 ${
                      isSelected
                        ? `glass-card-strong border-white/20 shadow-xl`
                        : 'glass-card hover:bg-white/10'
                    }`}
                  >
                    {/* Indicator */}
                    <div
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        isSelected
                          ? 'bg-white shadow-lg scale-125'
                          : 'bg-gray-600 group-hover:bg-gray-500'
                      }`}
                    />
                    
                    {/* Title */}
                    <h3
                      className={`text-lg font-semibold transition-colors duration-300 ${
                        isSelected ? 'text-white' : 'text-text-light group-hover:text-accent-green'
                      }`}
                    >
                      {feature.title}
                    </h3>
                    
                    {/* Arrow */}
                    {isSelected && (
                      <div className="ml-auto animate-pulse">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Description (expanded) */}
                  {isSelected && (
                    <div
                      className="mt-3 p-4 rounded-xl animate-fade-in"
                      style={{
                        background: `linear-gradient(to bottom right, ${feature.color.includes('green') ? 'rgba(34, 197, 94, 0.2)' : feature.color.includes('blue') ? 'rgba(59, 130, 246, 0.2)' : feature.color.includes('purple') ? 'rgba(168, 85, 247, 0.2)' : feature.color.includes('orange') ? 'rgba(249, 115, 22, 0.2)' : 'rgba(99, 102, 241, 0.2)'}, transparent)`,
                        border: `1px solid ${feature.color.includes('green') ? 'rgba(34, 197, 94, 0.3)' : feature.color.includes('blue') ? 'rgba(59, 130, 246, 0.3)' : feature.color.includes('purple') ? 'rgba(168, 85, 247, 0.3)' : feature.color.includes('orange') ? 'rgba(249, 115, 22, 0.3)' : 'rgba(99, 102, 241, 0.3)'}`,
                      }}
                    >
                      <p className="text-text-light text-sm leading-relaxed opacity-90">
                        {feature.description}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: 3D Phone */}
          <div className="relative w-full flex items-center justify-center order-2 lg:order-2 mb-8 lg:mb-0 overflow-hidden">
            {/* 3D Phone Container */}
            <div
              ref={phoneRef}
              className="relative perspective-1000 mx-auto"
              style={{
                perspective: '1000px',
                transformStyle: 'preserve-3d',
              }}
              onMouseDown={handleMouseDown}
              onTouchStart={handleTouchStart}
            >
              {/* Phone Model - Full 3D with both sides */}
              <div
                className="relative w-[280px] h-[540px] sm:w-[320px] sm:h-[600px] md:w-[360px] md:h-[650px] lg:w-[400px] lg:h-[700px]"
                style={{
                  transformStyle: 'preserve-3d',
                  cursor: isDragging ? 'grabbing' : 'grab',
                  touchAction: 'none',
                  WebkitTouchCallout: 'none',
                  userSelect: 'none',
                  maxWidth: '100%',
                }}
              >
                {/* Phone Container - rotates */}
                <div
                  className="relative w-full h-full transition-transform duration-200"
                  style={{
                    transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                    transformStyle: 'preserve-3d',
                  }}
                >
                  {/* Phone Frame - iPhone 17 Pro Style */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] sm:rounded-[3rem] shadow-2xl border-[8px] sm:border-[10px] border-gray-950"
                    style={{
                      transformStyle: 'preserve-3d',
                    }}
                  >
                    {/* Phone Thickness/Edge */}
                    <div 
                      className="absolute inset-0 rounded-[2.5rem] sm:rounded-[3rem]"
                      style={{
                        background: 'linear-gradient(90deg, rgba(17,24,39,0.9) 0%, rgba(31,41,55,0.9) 50%, rgba(17,24,39,0.9) 100%)',
                        transform: 'translateZ(-5px)',
                        border: '8px solid rgba(3, 7, 18, 0.95)',
                      }}
                    ></div>
                    
                    {/* Front Screen */}
                    <div 
                      className="absolute inset-[0.3rem] sm:inset-[0.4rem] bg-black rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden"
                      style={{
                        transform: 'translateZ(2px)',
                      }}
                    >
                      {/* Screen Display with iPhone notch/Dynamic Island */}
                      <div className="absolute inset-0 bg-gradient-to-b from-[#17212b] to-[#0e1621]">
                      {/* Dynamic Island - iPhone 17 style */}
                      <div className="absolute top-2 sm:top-3 left-1/2 transform -translate-x-1/2 w-28 sm:w-32 h-7 sm:h-8 bg-black rounded-full z-20 shadow-lg">
                        <div className="absolute inset-0 flex items-center justify-center gap-2">
                          <div className="w-3 h-3 sm:w-4 sm:h-4 bg-gray-700 rounded-full"></div>
                          <div className="absolute right-2 sm:right-3 w-1 h-1 bg-gray-600 rounded-full"></div>
                        </div>
                      </div>
                      
                      {/* Status Bar */}
                      <div className="absolute top-0 left-0 right-0 h-10 sm:h-11 z-10 flex items-center justify-between px-4 sm:px-6 pt-2">
                        <span className="text-white text-[11px] sm:text-xs font-semibold">9:41</span>
                        <div className="flex items-center gap-1 sm:gap-1.5">
                          <div className="w-3.5 h-1.5 sm:w-4 sm:h-2 border border-white rounded-sm">
                            <div className="w-2.5 h-1 sm:w-3 sm:h-1.5 bg-white rounded-sm m-0.5"></div>
                          </div>
                          <svg className="w-3.5 h-2.5 sm:w-4 sm:h-3 text-white" fill="currentColor" viewBox="0 0 24 16">
                            <path d="M2 0h20a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2zm0 2v12h20V2H2z"/>
                            <path d="M4 4h16v8H4V4z"/>
                          </svg>
                          <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.07 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                          </svg>
                        </div>
                      </div>
                      
                      {/* Telegram Interface */}
                      <div className="absolute inset-0 pt-10 sm:pt-11 flex flex-col">
                        {/* Telegram Header - More recognizable */}
                        <div className="bg-[#17212b] px-3 sm:px-4 py-2.5 sm:py-3 flex items-center gap-2 sm:gap-3 border-b border-[#0e1621]">
                          <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#0088cc] flex items-center justify-center flex-shrink-0">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                            </svg>
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-white text-[12px] sm:text-sm font-semibold flex items-center gap-1.5 sm:gap-2 truncate">
                              <span className="truncate">Puldor Bot</span>
                              <span className="text-[#0088cc] text-[10px] sm:text-xs flex-shrink-0">✓✓</span>
                            </p>
                            <p className="text-[#7c8a96] text-[10px] sm:text-xs truncate">был(а) недавно</p>
                          </div>
                          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c8a96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                            </svg>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c8a96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-[#7c8a96]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </div>
                        </div>
                        
                        {/* Chat Messages Area */}
                        <div className="flex-1 bg-[#0e1621] p-3 sm:p-4 space-y-2.5 sm:space-y-3 overflow-y-auto">

                          {/* Messages based on feature */}
                          {selectedFeature === 'voice' && (
                            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
                              {/* User message bubble - Telegram style */}
                              <div className="flex justify-end">
                                <div className="bg-[#0088cc] rounded-lg rounded-tr-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[85%]">
                                  <div className="flex items-center gap-1.5 sm:gap-2">
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                      <path d="M12 2a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
                                      <path d="M19 10v1a7 7 0 0 1-14 0v-1h2v1a5 5 0 0 0 10 0v-1h2z" />
                                    </svg>
                                    <div className="flex-1 min-w-0">
                                      <p className="text-white text-[11px] sm:text-xs font-medium mb-1">Голосовое сообщение</p>
                                      <div className="flex items-center gap-0.5 sm:gap-1">
                                        {[...Array(16)].map((_, i) => (
                                          <div
                                            key={i}
                                            className="w-0.5 sm:w-[1px] bg-white/80 rounded-full"
                                            style={{
                                              height: `${4 + Math.sin(i * 0.5) * 3 + (i % 3) * 1.5}px`,
                                            }}
                                          />
                                        ))}
                                      </div>
                                      <p className="text-white/70 text-[9px] sm:text-[10px] mt-1 text-right">0:03</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedFeature === 'ai' && (
                            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
                              {/* User message */}
                              <div className="flex justify-end">
                                <div className="bg-[#0088cc] rounded-lg rounded-tr-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[85%]">
                                  <p className="text-white text-[11px] sm:text-xs leading-tight">"Потратил 5000 сумов на обед"</p>
                                  <p className="text-white/70 text-[9px] sm:text-[10px] mt-1 text-right">12:34</p>
                                </div>
                              </div>
                              {/* Bot processing */}
                              <div className="flex justify-start">
                                <div className="bg-[#182533] rounded-lg rounded-tl-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[75%]">
                                  <div className="flex items-center gap-1.5 sm:gap-2">
                                    <div className="flex gap-0.5 sm:gap-1">
                                      <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
                                      <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                      <div className="w-1.5 h-1.5 bg-[#0088cc] rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                    </div>
                                    <p className="text-[#7c8a96] text-[11px] sm:text-xs">AI обрабатывает...</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedFeature === 'categories' && (
                            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
                              {/* User message */}
                              <div className="flex justify-end">
                                <div className="bg-[#0088cc] rounded-lg rounded-tr-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[85%]">
                                  <p className="text-white text-[11px] sm:text-xs leading-tight">"Потратил 5000 сумов на обед"</p>
                                  <p className="text-white/70 text-[9px] sm:text-[10px] mt-1 text-right">12:34</p>
                                </div>
                              </div>
                              {/* Bot response */}
                              <div className="flex justify-start">
                                <div className="bg-[#182533] rounded-lg rounded-tl-none px-3 sm:px-4 py-2.5 sm:py-3 max-w-[80%]">
                                  <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                                    <div className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#0088cc]/20 flex items-center justify-center flex-shrink-0">
                                      <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#0088cc]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                      </svg>
                                    </div>
                                    <p className="text-white text-[11px] sm:text-xs font-medium">✅ Категория: Еда</p>
                                  </div>
                                  <div className="bg-[#0088cc]/10 rounded px-2 py-1.5 mb-2">
                                    <p className="text-[#0088cc] text-xs sm:text-sm font-bold">5000 UZS</p>
                                  </div>
                                  <p className="text-[#7c8a96] text-[9px] sm:text-[10px]">12:35</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedFeature === 'multilang' && (
                            <div className="space-y-2 sm:space-y-2.5 animate-fade-in">
                              {/* Russian */}
                              <div className="flex justify-end">
                                <div className="bg-[#0088cc] rounded-lg rounded-tr-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[85%]">
                                  <p className="text-white text-[11px] sm:text-xs leading-tight">🇷🇺 "Потратил 5000 сумов на обед"</p>
                                  <p className="text-white/70 text-[9px] sm:text-[10px] mt-1 text-right">12:30</p>
                                </div>
                              </div>
                              {/* Uzbek */}
                              <div className="flex justify-end">
                                <div className="bg-[#0088cc] rounded-lg rounded-tr-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[85%]">
                                  <p className="text-white text-[11px] sm:text-xs leading-tight">🇺🇿 "Tushlikka 5000 so'm sarfladim"</p>
                                  <p className="text-white/70 text-[9px] sm:text-[10px] mt-1 text-right">12:31</p>
                                </div>
                              </div>
                              {/* English */}
                              <div className="flex justify-end">
                                <div className="bg-[#0088cc] rounded-lg rounded-tr-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[85%]">
                                  <p className="text-white text-[11px] sm:text-xs leading-tight">🇬🇧 "Spent 5000 sums on lunch"</p>
                                  <p className="text-white/70 text-[9px] sm:text-[10px] mt-1 text-right">12:32</p>
                                </div>
                              </div>
                              {/* Bot response */}
                              <div className="flex justify-start">
                                <div className="bg-[#182533] rounded-lg rounded-tl-none px-3 sm:px-4 py-2 sm:py-2.5 max-w-[75%]">
                                  <p className="text-white text-[11px] sm:text-xs">✅ Все три языка распознаны!</p>
                                  <p className="text-[#7c8a96] text-[9px] sm:text-[10px] mt-1">12:33</p>
                                </div>
                              </div>
                            </div>
                          )}

                          {selectedFeature === 'analytics' && (
                            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
                              {/* Bot analytics card */}
                              <div className="flex justify-start">
                                <div className="bg-[#182533] rounded-lg rounded-tl-none px-3 sm:px-4 py-2.5 sm:py-3 max-w-[85%]">
                                  <p className="text-white text-[11px] sm:text-xs font-semibold mb-2 sm:mb-3 flex items-center gap-1.5 sm:gap-2">
                                    <span>📊</span>
                                    <span>Ваша статистика за месяц</span>
                                  </p>
                                  <div className="space-y-2 sm:space-y-2.5 mb-2 sm:mb-3">
                                    <div className="flex justify-between items-center gap-2">
                                      <span className="text-[#7c8a96] text-[10px] sm:text-xs">Всего расходов:</span>
                                      <span className="text-white font-bold text-xs sm:text-sm whitespace-nowrap">450,000 UZS</span>
                                    </div>
                                    <div className="w-full bg-[#0e1621] rounded-full h-1.5 sm:h-2">
                                      <div className="bg-[#0088cc] h-1.5 sm:h-2 rounded-full transition-all duration-500" style={{ width: '65%' }}></div>
                                    </div>
                                    <div className="pt-1.5 sm:pt-2 border-t border-[#0e1621]">
                                      <p className="text-[#0088cc] text-[10px] sm:text-xs flex items-center gap-1">
                                        <span>💡</span>
                                        <span>Совет: Можно сэкономить на транспорте</span>
                                      </p>
                                    </div>
                                  </div>
                                  <p className="text-[#7c8a96] text-[9px] sm:text-[10px]">12:40</p>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                        
                        {/* Telegram Input Area */}
                        <div className="bg-[#17212b] px-3 sm:px-4 py-2.5 sm:py-3 border-t border-[#0e1621]">
                          <div className="flex items-center gap-1.5 sm:gap-2">
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088cc] flex items-center justify-center flex-shrink-0">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                              </svg>
                            </button>
                            <div className="flex-1 bg-[#242f3d] rounded-full px-3 sm:px-4 py-1.5 sm:py-2 min-w-0">
                              <p className="text-[#7c8a96] text-[11px] sm:text-xs truncate">Сообщение</p>
                            </div>
                            <button className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0088cc] flex items-center justify-center flex-shrink-0">
                              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                              </svg>
                            </button>
                          </div>
                        </div>
                      </div>
                      </div>
                    </div>
                    
                    {/* Back Panel - Full iPhone 17 Pro back */}
                    <div
                      className="absolute inset-[0.3rem] sm:inset-[0.4rem] rounded-[2.2rem] sm:rounded-[2.8rem] overflow-hidden"
                      style={{
                        transform: 'rotateY(180deg) translateZ(-2px)',
                        backfaceVisibility: 'hidden',
                      }}
                    >
                      {/* Back Panel Material - Titanium look */}
                      <div className="absolute inset-0 bg-gradient-to-br from-slate-800/95 via-gray-800/95 to-slate-900/95 rounded-[2.8rem]">
                        {/* Texture overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-black/20 rounded-[2.8rem]"></div>
                        
                        {/* Apple Logo */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                          <svg className="w-12 h-12 sm:w-14 sm:h-14 md:w-18 md:h-18 text-white/20" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                          </svg>
                        </div>
                        
                        {/* Camera Module - iPhone 17 Pro style - Prominent */}
                        <div className="absolute top-5 sm:top-6 left-1/2 transform -translate-x-1/2 z-20">
                          <div className="relative w-28 h-32 sm:w-32 sm:h-36 md:w-36 md:h-40 bg-black/95 rounded-2xl sm:rounded-3xl shadow-2xl border-2 border-gray-900/80">
                            {/* Camera Module Background with depth */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-950/95 to-black rounded-3xl"></div>
                            <div className="absolute inset-[2px] bg-gradient-to-t from-black/50 to-transparent rounded-3xl"></div>
                            
                            {/* Three Main Cameras - Larger */}
                            <div className="absolute inset-0 flex items-center justify-center gap-2 sm:gap-2.5 pt-4 sm:pt-5">
                              {/* Wide Camera - Largest */}
                              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700/60 shadow-2xl">
                                <div className="absolute inset-1 rounded-full bg-gray-950 border border-gray-800/80"></div>
                                <div className="absolute inset-2 rounded-full bg-black"></div>
                                <div className="absolute inset-2.5 rounded-full bg-gray-900/30"></div>
                                <div className="absolute inset-[10px] rounded-full bg-gray-800/20"></div>
                                <div className="absolute inset-[3px] rounded-full bg-white/5"></div>
                              </div>
                              
                              {/* Ultra Wide Camera */}
                              <div className="relative w-8 h-8 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700/60 shadow-2xl">
                                <div className="absolute inset-1 rounded-full bg-gray-950 border border-gray-800/80"></div>
                                <div className="absolute inset-2 rounded-full bg-black"></div>
                                <div className="absolute inset-2.5 rounded-full bg-gray-900/30"></div>
                                <div className="absolute inset-[10px] rounded-full bg-gray-800/20"></div>
                                <div className="absolute inset-[3px] rounded-full bg-white/5"></div>
                              </div>
                              
                              {/* Telephoto Camera */}
                              <div className="relative w-7 h-7 sm:w-9 sm:h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-gray-800 to-black border-2 border-gray-700/60 shadow-2xl">
                                <div className="absolute inset-1 rounded-full bg-gray-950 border border-gray-800/80"></div>
                                <div className="absolute inset-2 rounded-full bg-black"></div>
                                <div className="absolute inset-[8px] rounded-full bg-gray-800/20"></div>
                                <div className="absolute inset-[3px] rounded-full bg-white/5"></div>
                              </div>
                            </div>
                            
                            {/* Flash and Sensors */}
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-2.5">
                              {/* Flash */}
                              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-white/95 via-gray-300 to-gray-500 border border-gray-600/70 shadow-lg">
                                <div className="absolute inset-1 rounded-full bg-white/50"></div>
                              </div>
                              
                              {/* LiDAR */}
                              <div className="w-4 h-4 rounded-full bg-black border-2 border-gray-700/70 shadow-inner">
                                <div className="absolute inset-1 rounded-full bg-gray-900"></div>
                              </div>
                              
                              {/* Microphone */}
                              <div className="w-1.5 h-1.5 rounded-full bg-gray-600"></div>
                            </div>
                            
                            {/* Camera Module Glare/Reflection */}
                            <div className="absolute top-3 left-6 w-10 h-1.5 bg-white/15 rounded-full blur-sm"></div>
                            <div className="absolute top-2 right-8 w-6 h-1 bg-white/10 rounded-full blur-sm"></div>
                          </div>
                        </div>
                        
                        {/* Antenna Lines - Top */}
                        <div className="absolute top-28 left-4 right-4 h-[1px] bg-gray-700/40"></div>
                        <div className="absolute top-30 left-4 right-4 h-[0.5px] bg-gray-800/30"></div>
                        
                        {/* Antenna Lines - Bottom */}
                        <div className="absolute bottom-28 left-4 right-4 h-[1px] bg-gray-700/40"></div>
                        <div className="absolute bottom-30 left-4 right-4 h-[0.5px] bg-gray-800/30"></div>
                        
                        {/* Model Text at bottom */}
                        <div className="absolute bottom-8 sm:bottom-10 left-1/2 transform -translate-x-1/2 text-center z-10">
                          <p className="text-white/30 text-[10px] sm:text-[11px] font-medium tracking-wider">iPhone</p>
                          <p className="text-white/40 text-[8px] sm:text-[9px] tracking-widest mt-0.5">17 PRO</p>
                          <div className="mt-1.5 sm:mt-2 flex items-center justify-center gap-3 sm:gap-4 text-white/25 text-[7px] sm:text-[8px]">
                            <span>DESIGNED BY APPLE</span>
                            <span>•</span>
                            <span>IN CALIFORNIA</span>
                          </div>
                        </div>
                        
                        {/* Subtle reflections */}
                        <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2.8rem]"></div>
                      </div>
                    </div>
                  
                  {/* Side Buttons - Left */}
                  <div 
                    className="absolute -left-[4px] top-[22%] w-[6px] h-14 bg-gray-950 rounded-l-sm"
                    style={{ transform: 'translateZ(2px)' }}
                  ></div>
                  <div 
                    className="absolute -left-[4px] top-[36%] w-[6px] h-16 bg-gray-950 rounded-l-sm"
                    style={{ transform: 'translateZ(2px)' }}
                  ></div>
                  
                  {/* Action Button - Right */}
                  <div 
                    className="absolute -right-[4px] top-[42%] w-[6px] h-12 bg-gray-950 rounded-r-sm"
                    style={{ transform: 'translateZ(2px)' }}
                  ></div>
                  
                  {/* Power Button - Right */}
                  <div 
                    className="absolute -right-[4px] top-[32%] w-[6px] h-10 bg-gray-950 rounded-r-sm"
                    style={{ transform: 'translateZ(2px)' }}
                  ></div>
                  
                  {/* SIM Tray */}
                  <div 
                    className="absolute left-0 top-[15%] w-[20px] h-2 bg-gray-900/50 rounded-r border-r border-gray-800"
                    style={{ transform: 'translateZ(3px)' }}
                  ></div>
                  </div>
                </div>
              </div>

              {/* Instructions */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-center">
                <p className="text-text-light text-xs opacity-70">
                  {isDragging ? 'Перетаскивайте для вращения' : 'Нажмите и перетащите для вращения'}
                </p>
              </div>
            </div>

            {/* Ambient Glow */}
            {selectedFeatureData && (
              <div
                className="absolute inset-0 pointer-events-none opacity-20 blur-3xl transition-all duration-500"
                style={{
                  background: selectedFeatureData.color.includes('green') 
                    ? 'radial-gradient(circle, rgba(34, 197, 94, 0.4) 0%, transparent 70%)'
                    : selectedFeatureData.color.includes('blue')
                    ? 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, transparent 70%)'
                    : selectedFeatureData.color.includes('purple')
                    ? 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 70%)'
                    : selectedFeatureData.color.includes('orange')
                    ? 'radial-gradient(circle, rgba(249, 115, 22, 0.4) 0%, transparent 70%)'
                    : 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, transparent 70%)',
                }}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interactive3D;

