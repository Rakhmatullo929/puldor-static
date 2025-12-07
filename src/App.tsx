import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AdminPage from './pages/AdminPage';
import DemoPage from './pages/DemoPage';

/**
 * Main App component with routing.
 */
const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/sdv;onqwiuvbqwouvw" element={<AdminPage />} />
        {/* Fallback на главную страницу */}
        <Route path="*" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

