import React, { useState } from 'react';

const ADMIN_LOGIN = 'adminchikpenis';
const ADMIN_PASSWORD = 'PuldorAI500_2024_SecretAdmin!@#$%^&*()';

interface AuthProps {
  onSuccess: () => void;
}

const Auth: React.FC<AuthProps> = ({ onSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login === ADMIN_LOGIN && password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_authenticated', 'true');
      localStorage.setItem('admin_auth_time', Date.now().toString());
      onSuccess();
    } else {
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-dark-bg to-dark-bg-alt px-4">
      <div className="w-full max-w-md">
        <div className="bg-gradient-to-br from-dark-bg-alt to-dark-bg border border-gray-800/50 rounded-2xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-accent-green to-accent-blue bg-clip-text text-transparent mb-2">
              Admin Panel
            </h1>
            <p className="text-text-light opacity-70">Вход в панель управления</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Логин
              </label>
              <input
                type="text"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
                className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-text-light focus:outline-none focus:border-accent-green transition-colors"
                placeholder="Введите логин"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-2">
                Пароль
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-dark-bg border border-gray-800 rounded-lg text-text-light focus:outline-none focus:border-accent-green transition-colors"
                placeholder="Введите пароль"
                required
              />
            </div>

            {error && (
              <div className="bg-red-500/20 border border-red-500/50 rounded-lg p-3 text-red-400 text-sm">
                {error}
              </div>
            )}

            <button
              type="submit"
              className="w-full px-4 py-3 bg-gradient-to-r from-accent-green to-green-500 text-dark-bg font-semibold rounded-lg hover:shadow-lg hover:shadow-accent-green/50 transition-all duration-300"
            >
              Войти
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Auth;

