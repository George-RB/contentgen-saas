import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Добро пожаловать в ContentGen
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Генератор контента с системой подписок
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
          Начать бесплатно
        </button>
      </div>
    </div>
  );
};

export default Home;
