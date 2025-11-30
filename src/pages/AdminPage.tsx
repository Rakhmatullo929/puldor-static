import React, { useState, useEffect } from 'react';
import Auth from '../components/admin/Auth';
import AdminDashboard from '../components/admin/AdminDashboard';

const AdminPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => {
    const authenticated = localStorage.getItem('admin_authenticated');
    const authTime = localStorage.getItem('admin_auth_time');
    
    if (authenticated === 'true' && authTime) {
      // Проверка на срок действия сессии (24 часа)
      const timeDiff = Date.now() - parseInt(authTime);
      const hoursPassed = timeDiff / (1000 * 60 * 60);
      
      if (hoursPassed < 24) {
        setIsAuthenticated(true);
      } else {
        localStorage.removeItem('admin_authenticated');
        localStorage.removeItem('admin_auth_time');
      }
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Auth onSuccess={handleAuthSuccess} />;
  }

  return <AdminDashboard />;
};

export default AdminPage;

