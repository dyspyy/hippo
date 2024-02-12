import React, { useState } from 'react';
import RadioButton from './RadioButton';
import CheckboxButton from './CheckboxButton';

const Diseases = () => {
  const [diabetes, setDiabetes] = useState('never');
  const [headache, setHeadache] = useState('never');
  const [other, setOther] = useState('never');
  const [otherz, setOtherz] = useState('never');

  const handleDiabetesChange = (event) => {
    setDiabetes(event.target.value); 
  };
  const handleHeadacheChange = (event) => {
    setHeadache(event.target.value); 
  };
  const handleOtherChange = (event) => {
    setOther(event.target.value); 
  };
  const handleOtherzChange = (event) => {
    setOtherz(event.target.value); 
  };

  return (
    <div className='p-4 pt-1 h-screen flex flex-col pt-2 pb-60 overflow-y-auto font-light'>

      {/* Среднее потребление овощей и фруктов в день */}
      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mt-5 mb-2">Мои заболевания</h3>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гипертоническая болезнь:</h3>
      <RadioButton id="hypertensiond1" label="Нет" name="hypertensiond_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond2" label="Гипертония 1 стадии латентная" name="hypertensiond_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond3" label="Гипертония 1 стадии транзиторная" name="hypertensiond_group" value="3" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond4" label="Гипертония 2 стадии лабильная" name="hypertensiond_group" value="4" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond5" label="Гипертония 2 стадии стабильная" name="hypertensiond_group" value="5" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond6" label="Гипертония 3 стадии" name="hypertensiond_group" value="6" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertensiond7" label="Не знаю" name="hypertensiond_group" value="7" /></div>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Гипотония:</h3>
      <RadioButton id="hypertension1" label="Нет" name="hypertension_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="hypertension2" label="Да, ортостатическая" name="hypertension_group" value="2" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertension3" label="Да, постоянная" name="hypertension_group" value="3" /></div>
      <div className='mt-[-20px]'><RadioButton id="hypertension4" label="Не знаю" name="hypertension_group" value="4" /></div>

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Диабет (наличие и тип):</h3>
      <RadioButton id="diab1" label="Нет диабета" name="diab_group" value="1" checked={diabetes === '1'} onChange={handleDiabetesChange}/>
      <div className='mt-[-20px]'><RadioButton id="diab2" label="Сахарный диабет первого типа" name="diab_group" value="2" checked={diabetes === '2'} onChange={handleDiabetesChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="diab3" label="Сахарный диабет второго типа" name="diab_group" value="3" checked={diabetes === '3'} onChange={handleDiabetesChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="diab4" label="Гестационный диабет" name="diab_group" value="4" checked={diabetes === '4'} onChange={handleDiabetesChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="diab5" label="Гестационный диабет" name="diab_group" value="5" checked={diabetes === '5'} onChange={handleDiabetesChange}/></div>
      {(diabetes === '3') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-270px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Форма диабета:</h3>
            <RadioButton id="diabetes1_y" label="Лёгкая форма" name="diabetes_group_y" value="1" paragraph="(регулируется диетой)"/>
            <div className='mt-[-10px]'><RadioButton id="diabetes2_y" label="Средней степени тяжести" name="diabetes_group_y" value="2" paragraph="(регулируется сахароснижающими препаратами)"/></div>
            <div className='mt-[-10px] mb-[-20px]'><RadioButton id="diabetes3_y" label="Тяжёлое течение" name="diabetes_group_y" value="3" paragraph="(регулируется инсулином)"/></div>
          </div>
        </div>
      )}

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Мерцательная аритмия:</h3>
      <RadioButton id="arrhythmia1" label="Нет" name="arrhythmia_group" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="arrhythmia2" label="Да, периодическая форма" paragraph="(приступы несколько раз в месяц и реже)" name="arrhythmia_group" /></div>
      <div className='mt-[-10px]'><RadioButton id="arrhythmia3" label="Да, постоянная форма" paragraph="(приступы еженедельно, несколько раз в неделю)" name="arrhythmia_group" /></div>
      <div className='mt-[-10px]'><RadioButton id="arrhythmia4" label="Не знаю" name="arrhythmia_group" value="4" /></div>


      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Болевой синдром</h3>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Головная боль (наличие и частота):</h3>
      <RadioButton id="headache1" label="Нет" name="headache_group" value="1" checked={headache === '1'} onChange={handleHeadacheChange}/>
      <div className='mt-[-20px]'><RadioButton id="headache2" label="Редко" name="headache_group"  value="2" checked={headache === '2'} onChange={handleHeadacheChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="headache3" label="Периодически" name="headache_group" value="3" checked={headache === '3'} onChange={handleHeadacheChange} /></div>
      <div className='mt-[-20px]'><RadioButton id="headache4" label="Часто" name="headache_group" value="4" checked={headache === '4'} onChange={handleHeadacheChange}/></div>
      {(headache === '2' || headache === '3' || headache === '4') && (
        <div className='ml-32'>
          <div className="ml-40 mb-[-25px] mt-[-225px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Сила головной боли:</h3>
            <RadioButton id="headache1_y" label="Слабая" name="headache_group_y" value="1" />
            <div className='mt-[-20px]'><RadioButton id="headache2_y" label="Умеренная" name="headache_group_y" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="headache3_y" label="Сильная" name="headache_group_y" value="3" /></div>
            <div className='mt-[-20px] mb-[-20px]'><RadioButton id="headache4_y" label="Очень сильная" name="headache_group_y" value="4" /></div>

          </div>
          <div className="ml-96 mb-[-25px] mt-[-225px] z-[10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов:</h3>
            <RadioButton id="headache1_с" label="Несколько часов" name="headache_group_с" value="1" />
            <div className='mt-[-20px]'><RadioButton id="headache2_с" label="Сутки и более" name="headache_group_с" value="2" /></div>
          </div>
        </div>
      )}
      <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Помогают ли вам от головной боли лекарственные препараты
            <span class="italic text-sm antialiased font-normal leading-normal text-amber-500"> (анальгетики)</span>:</h3>
            <RadioButton id="headache1_yes" label="Да" name="headache_group_с" value="1" />
            <div className='mt-[-20px]'><RadioButton id="headache2_yes" label="Нет" name="headache_group_с" value="2" /></div>
      </div>

      <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Беспокоит ли вас мигрень?</h3>
            <RadioButton id="headache1_no" label="Нет, не беспокоит" name="headache_group_с1" value="1" />
            <div className='mt-[-20px]'><RadioButton id="headache2_no" label="Да" name="headache_group_с1" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="headache3_no" label="Да, с аурой" name="headache_group_с1" value="2" /></div>
      </div>

      <div className="">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Хроническая боль
            <span class="italic text-sm antialiased font-normal leading-normal text-amber-500"> (любой локализации)</span>:</h3>
            <RadioButton id="headache1_c_no" label="Нет, не беспокоит" name="headache_group_с2" value="1" />
            <div className='mt-[-20px]'><RadioButton id="headache2_c_yes" label="Да" name="headache_group_с2" value="2" /></div>
      </div>

      <h3 className="text-xl leading-relaxed font-bold text-gray-700 mb-2">Прочее</h3>
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Беспокоило ли вас беспричинное головокружение<br /> 
      <span class="italic text-sm antialiased font-normal leading-normal text-amber-500">(необъяснимое предшествующей ситуацией)</span>?</h3>
      <RadioButton id="other1" label="Нет, не беспокоило" name="other_group" value="1" checked={other === '1'} onChange={handleOtherChange}/>
      <div className='mt-[-20px]'><RadioButton id="other2" label="Беспокоило однократно" name="other_group" value="2" checked={other === '2'} onChange={handleOtherChange}/></div>
      <div className='mt-[-20px]'><RadioButton id="other3" label="Беспокоит периодически" name="other_group" value="3" checked={other === '3'} onChange={handleOtherChange} /></div>
      {(other === '2' || other === '3') && (
        <div className='ml-32'>
          <div className="ml-64 mb-[-25px] mt-[-203px] z-[-10]">
            <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов головокружения:</h3>
            <RadioButton id="other1_y" label="Несколько минут" name="other_group_y" value="1" />
            <div className='mt-[-20px]'><RadioButton id="other2_y" label="Несколько часов" name="other_group_y" value="2" /></div>
            <div className='mt-[-20px]'><RadioButton id="other3_y" label="Сутки и более" name="other_group_y" value="3" /></div>
          </div>
        </div>
      )}

      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Возникала ли у Вас когда-нибудь внезапно<br /> кратковременная потеря зрения на один глаз или<br /> выпадение полей зрения?</h3>
        <RadioButton id="other1_z" label="Нет, не возникала" name="other_group_z" value="1" checked={otherz === '1'} onChange={handleOtherzChange}/>
        <div className='mt-[-20px]'><RadioButton id="other2_z" label="Возникала однократно" name="other_group_z" value="2" checked={otherz === '2'} onChange={handleOtherzChange}/></div>
        <div className='mt-[-20px]'><RadioButton id="other3_z" label="Возникает периодически" name="other_group_z" value="3" checked={otherz === '3'} onChange={handleOtherzChange} /></div>
        {(otherz === '2' || otherz === '3') && (
          <div className='ml-32'>
            <div className="ml-64 mb-[-25px] mt-[-223px] z-[-10]">
              <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Продолжительность приступов нарушения зрения:</h3>
              <RadioButton id="other1_z" label="Несколько минут" name="2other_group_z" value="1" />
              <div className='mt-[-20px]'><RadioButton id="other2_z" label="Несколько часов" name="2other_group_z" value="2" /></div>
              <div className='mt-[-20px]'><RadioButton id="other3_z" label="Сутки и более" name="2other_group_z" value="3" /></div>
            </div>
          </div>
        )}
      <h3 className="font-sans text-sm antialiased font-normal leading-normal text-gray-700 mb-2">Вы отмечаете за последние годы заметное снижение памяти?</h3>
      <RadioButton id="other2_z1" label="Да" name="3other_group_z" value="1"/>
      <div className='mt-[-20px]'><RadioButton id="other2_z2" label="Нет" name="3other_group_z" value="2"/></div>


      <button type="submit" className="text-lg leading-relaxed font-normal bg-amber-400 mb-[-20px] text-white py-2 px-4 rounded-lg duration-700 hover:shadow-lg hover:bg-amber-500">
        Сохранить
      </button>

    </div>
  );
};

export default Diseases;
