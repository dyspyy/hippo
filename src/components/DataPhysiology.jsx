import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataPhysiology = () => {
  

  return (
    <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Пульс</h3>

      
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Рабочее артериальное давление</h3>
      <div className='w-[540px]'>
      <p className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-1">
      Физиологические показатели человека, такие как пульс и артериальное давление индивидуальны и зависят от многих факторов. По умолчанию нормой для артериального давления считается среднепопуляционная величина в зависимости от возраста. Однако, на давление влияют анатомические особенности (рост, вес), физическая тренированность, уровень стресса, место проживания, сфера деятельности, заболевания и другие факторы, под влиянием которых индивидуальное нормальное давление может быть выше или ниже популяционного. Артериальное давление, измеренное в состоянии покоя, при котором человек чувствует себя хорошо, называется «нормальным». А если человек принимает препараты от давления (при наличии соответствующего диагноза), то «рабочим», «целевым» или «адаптированным».
      В зависимости от возраста нормальными считаются следующие показатели артериального давления:
        </p>
        <h3 className="font-sans text-sm antialiased font-semibold leading-normal text-gray-700">18-44 лет:
        <span class="font-sans text-sm antialiased font-normal leading-normal text-gray-700"> 120/80 мм рт. ст.</span></h3>
        <h3 className="font-sans text-sm antialiased font-semibold leading-normal text-gray-700">45-59 лет:
        <span class="font-sans text-sm antialiased font-normal leading-normal text-gray-700"> 130/85 мм рт. ст.</span></h3>
        <h3 className="font-sans text-sm antialiased font-semibold leading-normal text-gray-700">60 лет и старше:
        <span class="font-sans text-sm antialiased font-normal leading-normal text-gray-700"> 140/85 мм рт. ст.</span></h3>
      </div>

      <div className='w-[540px] mt-6'>
        <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">
        Если комфортное значение Вашего артериального давления, которое часто называют рабочим, отличается от данной величины (в большую или в меньшую сторону) более чем на 10 единиц, то поставьте галочку около слова «Отличается», а затем введите значение Вашего рабочего давления:
        </h3>
      </div>
      <div className=''><CheckboxButton id="cbpv" label="Отличается" name="cbpv_group" /></div>


      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-10">Текущее артериальное давление</h3>


      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>
  );
};

export default DataPhysiology;
