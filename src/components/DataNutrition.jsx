import React from 'react';

const DataNutrition = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">DataNutrition</h1>
      <div className="bg-gray-200 p-8 overflow-y-auto"> {/* Добавляем класс overflow-y-auto для вертикального скролла */}
        {/* Контент */}
        {/* Важно: контент должен быть достаточно большим, чтобы вызвать появление скролла */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        {/* Пример большого количества контента для демонстрации скролла */}
        {Array.from({ length: 20 }, (_, index) => (
          <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        ))}
      </div>
    </div>
  );
};

export default DataNutrition;
