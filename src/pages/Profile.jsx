import React from 'react';

export default function Profile() {
  return (
    <div className="max-w-2xl mx-auto p-4 mt-8">
      {/* Настройки профиля */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Настройки профиля</h2>
        <form>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Фотография профиля:</label>
            <input type="file" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Дата рождения:</label>
            <input type="date" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Пол:</label>
            <div className="w-3/4">
              <label className="inline-block mr-4">
                <input type="radio" name="gender" value="male" className="mr-2" /> Мужской
              </label>
              <label className="inline-block">
                <input type="radio" name="gender" value="female" className="mr-2" /> Женский
              </label>
            </div>
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Ваш рост:</label>
            <input type="number" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Ваш вес:</label>
            <input type="number" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Номер телефона:</label>
            <input type="tel" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
            Сохранить
          </button>
        </form>
      </div>

      {/* Контакты и безопасность */}
      <div>
        <h2 className="text-2xl font-bold mb-4">Контакты и безопасность</h2>
        <form>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Электронная почта:</label>
            <input type="email" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Текущий пароль:</label>
            <input type="password" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Новый пароль:</label>
            <input type="password" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <div className="flex items-center mb-4">
            <label className="w-1/4">Повторите новый пароль:</label>
            <input type="password" className="w-3/4 p-2 border border-gray-300 rounded" />
          </div>
          <button type="submit" className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
            Сохранить
          </button>

        </form>
      </div>
    </div>
  );
}
