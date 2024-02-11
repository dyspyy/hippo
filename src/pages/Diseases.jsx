import React from 'react';
import RadioButton from './RadioButton';
import CheckboxButton from './CheckboxButton';

const Diseases = () => {
  return (
    <div className='p-4 pt-1 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>

      {/* Среднее потребление овощей и фруктов в день */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Мои заболевания</h3>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гипертоническая болезнь:</h3>
      <RadioButton id="hypertensiond1" label="Нет" name="hypertension_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond2" label="Гипертония 1 стадии латентная" name="hypertensiond_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond3" label="Гипертония 1 стадии транзиторная" name="hypertensiond_group" value="3" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond4" label="Гипертония 2 стадии лабильная" name="hypertensiond_group" value="4" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond5" label="Гипертония 2 стадии стабильная" name="hypertensiond_group" value="5" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond6" label="Гипертония 3 стадии" name="hypertensiond_group" value="6" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond7" label="Не знаю" name="hypertensiond_group" value="7" /></div>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гипотония:</h3>
      <RadioButton id="hypertension1" label="Нет" name="hypertension_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="hypertension2" label="Да, ортостатическая" name="hypertension_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertension3" label="Да, постоянная" paragraph="(хроническая/идиопатическая)" name="hypertension_group" value="3" /></div>
      <div className='mt-[-10px]'><RadioButton id="hypertension4" label="Не знаю" name="hypertension_group" value="4" /></div>
      
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

export default Diseases;
