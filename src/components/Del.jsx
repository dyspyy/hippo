import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataHealth = () => {
  const [sleepQuality, setSleepQuality] = useState({
    frequentWaking: false,
    difficultyFallingAsleep: false
  });

  const [smoking, setSmoking] = useState('never');
  const [duration, setDuration] = useState('');
  const [cigarettesPerDay, setCigarettesPerDay] = useState('');
  const [quitDuration, setQuitDuration] = useState('');
  const [alcohol, setAlcohol] = useState('never');
  const [activity, setActivity] = useState('low');
  const [mobilityLimitation, setMobilityLimitation] = useState(false);
  const [mobilityLimitationDuration, setMobilityLimitationDuration] = useState('lessThan5Years');
  const [maxPhysicalActivity, setMaxPhysicalActivity] = useState('normalActivities');
  const [workConditions, setWorkConditions] = useState('normalWeek');
  const [socialMediaIntensity, setSocialMediaIntensity] = useState('low');
  const [lightExposure, setLightExposure] = useState('daytimeLessThan3Hours');

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setSleepQuality((prev) => ({ ...prev, [name]: checked }));
  };

  return (
    <div className="">
      <div className="p-2 h-screen flex flex-col gap-1 pt-2 pb-60 overflow-y-auto font-light">
        <h2 className="text-lg font-bold mb-4"></h2>
        <div className="mb-6 ">
          <h3 className="text-lg font-light mb-2">Ваша оценка качества сна:</h3>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="frequentWaking"
              className="mr-2"
              checked={sleepQuality.frequentWaking}
              onChange={handleCheckboxChange}
            /> Частые пробуждения
          </label>
          <label className="block mb-2">
            <input
              type="checkbox"
              name="difficultyFallingAsleep"
              className="mr-2 w-4 h-4"
              checked={sleepQuality.difficultyFallingAsleep}
              onChange={handleCheckboxChange}
            /> Долгое засыпание
          </label>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-light mb-2">Курение:</h3>
          <div>
            <label className="block mb-2">
              <input
                type="radio"
                name="smoking"
                value="never"
                checked={smoking === 'never'}
                onChange={(e) => setSmoking(e.target.value)}
                className="mr-2"
              /> Никогда не курил
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="smoking"
                value="continue"
                checked={smoking === 'continue'}
                onChange={(e) => setSmoking(e.target.value)}
                className="mr-2"
              /> Продолжаю курить
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="smoking"
                value="quitLessYear"
                checked={smoking === 'quitLessYear'}
                onChange={(e) => setSmoking(e.target.value)}
                className="mr-2"
              /> Бросил менее года назад
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="smoking"
                value="quitMoreYear"
                checked={smoking === 'quitMoreYear'}
                onChange={(e) => setSmoking(e.target.value)}
                className="mr-2"
              /> Бросил более года назад
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="smoking"
                value="quitMoreTenYears"
                checked={smoking === 'quitMoreTenYears'}
                onChange={(e) => setSmoking(e.target.value)}
                className="mr-2"
              /> Бросил более 10 лет назад
            </label>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-light mb-2">Злоупотребление алкоголем:</h3>
          <div>
            <label className="block mb-2">
              <input
                type="radio"
                name="alcohol"
                value="never"
                checked={alcohol === 'never'}
                onChange={(e) => setAlcohol(e.target.value)}
                className="mr-2"
              /> Никогда не злоупотреблял
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="alcohol"
                value="current"
                checked={alcohol === 'current'}
                onChange={(e) => setAlcohol(e.target.value)}
                className="mr-2"
              /> Злоупотребляю в настоящее время
            </label>
            <label className="block mb-2">
              <input
                type="radio"
                name="alcohol"
                value="past"
                checked={alcohol === 'past'}
                onChange={(e) => setAlcohol(e.target.value)}
                className="mr-2"
              /> Ранее злоупотреблял
            </label>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-lg font-light mb-2">Активность</h3>
          <div>
            <label className="block mb-1 mt-3s text-gray-700">
              <input
                type="radio"
                name="activity"
                value="veryHigh"
                checked={activity === 'veryHigh'}
                onChange={(e) => setActivity(e.target.value)}
                className="mr-2"
              /> Очень высокая активность
            </label>
            <p className="text-gray-500 pl-6">
              (Хожу пешком более 1.5 часа в день. Занимаюсь 5 и более раз в неделю дополнительной физической активностью (любой))
            </p>
            <label className="block mb-1 mt-3 text-gray-700">
              <input
                type="radio"
                name="activity"
                value="high"
                checked={activity === 'high'}
                onChange={(e) => setActivity(e.target.value)}
                className="mr-2"
              /> Высокая активность
            </label>
            <p className="text-gray-500 pl-6">
              (Хожу пешком более 1 часа в день. Занимаюсь более 3-х раз в неделю дополнительной физической активностью (любой))
            </p>
            <label className="block mb-1 mt-3 text-gray-700">
              <input
                type="radio"
                name="activity"
                value="moderate"
                checked={activity === 'moderate'}
                onChange={(e) => setActivity(e.target.value)}
                className="mr-2"
              /> Умеренная активность
            </label>
            <p className="text-gray-500 pl-6">
              (Хожу пешком не менее 1 часа в день. Занимаюсь 2-3 раза в неделю дополнительной физической активностью (любой))
            </p>
            <label className="block mb-1 mt-3 text-gray-700">
              <input
                type="radio"
                name="activity"
                value="low"
                checked={activity === 'low'}
                onChange={(e) => setActivity(e.target.value)}
                className="mr-2"
              /> Низкая активность
            </label>
            <p className="text-gray-500 pl-6">
              (Хожу пешком менее 30 минут в день. Не имею другой физической нагрузки)
            </p>
            <label className="block mb-1 mt-3 text-gray-700">
              <input
                type="radio"
                name="activity"
                value="veryLow"
                checked={activity === 'veryLow'}
                onChange={(e) => setActivity(e.target.value)}
                className="mr-2"
              /> Очень низкая активность
            </label>
            <p className="text-gray-500 pl-6">
              (Хожу пешком менее 15 минут в день. Не имею другой физической нагрузки)
            </p>
          </div>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-bold mb-2">Ограничение возможности передвижения:</h3>
          {/* Реализуйте выбор наличия ограничения передвижения */}
          {/* Реализуйте выбор длительности ограничения передвижения */}
        </div>
        {/* Добавьте остальные вопросы опроса в аналогичном формате */}
        <button className="bg-amber-400 text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500 max-w-xs">
          Сохранить
        </button>
      </div>
    </div>
  );
};

export default DataHealth;
