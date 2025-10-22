import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <h1 className="text-xl font-bold text-gray-900">ContentGen</h1>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Главная
            </a>
            <a href="/login" className="text-gray-600 hover:text-gray-900">
              Войти
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
