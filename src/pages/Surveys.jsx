import React from 'react';

const Surveys = () => {
  return (
    <div className="h-screen flex flex-col gap-1 pt-2 overflow-y-auto">
      {/* Контент */}
      {/* Важно: контент должен быть достаточно большим, чтобы вызвать появление скролла */}
      <div>
        {/* Высота контента больше высоты контейнера для появления скролла */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...</p>
        {/* Пример большого количества контента для демонстрации скролла */}
        {Array.from({ length: 60 }, (_, index) => (
          <p key={index}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        ))}
      </div>
    </div>
  );
};

export default Surveys;
