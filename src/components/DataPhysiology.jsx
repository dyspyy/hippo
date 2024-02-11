import React, { useState } from 'react';
import RadioButton from '../pages/RadioButton';
import CheckboxButton from '../pages/CheckboxButton';

const DataPhysiology = () => {
  

  return (
    <div className='p-4 pt-5 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>

      {/* Среднее потребление овощей и фруктов в день */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Среднее потребление овощей и фруктов в день</h3>
      <p className="font-sans italic text-sm antialiased font-normal leading-normal text-amber-500 mt-1 mb-4">(всех, кроме консервированных)</p>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Фрукты:</h3>
      <RadioButton id="fruit1" label="Менее 200 грамм" name="fruit_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="fruit2" label="Более 200 грамм" name="fruit_group" value="2" /></div>
      
      <div className='ml-32'>
          <div className="ml-[150px] mb-[-25px] mt-[-136px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Овощи:</h3>
            <RadioButton id="vegetable_y" label="Менее 200 грамм" name="vegetable_group_y" value="1" />
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="vegetable2_y" label="Более 200 грамм" name="vegetable_group_y" value="2" /></div>
          </div>
        </div>

      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>
  );
};

export default DataPhysiology;
