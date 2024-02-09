import React from 'react';
import RadioButton from './RadioButton';
import CheckboxButton from './CheckboxButton';

const Diseases = () => {
  return (
    <div className='p-4'>
      <h2>Checkbox Buttons</h2>
      <CheckboxButton id="checkbox1" label="Option 1" paragraph="Description for Option 1" name="checkbox_group" />
      <CheckboxButton id="checkbox2" label="Option 2" paragraph="Description for Option 2" name="checkbox_group" />
      <CheckboxButton id="checkbox3" label="Option 3" name="checkbox_group" />

      <h2>Diseases</h2>
      <RadioButton id="disease1" label="Disease 1" paragraph="Paragraph for Disease 1" name="diseases_group" />
      <RadioButton id="disease2" label="Disease 2" paragraph="Paragraph for Disease 2" name="diseases_group" />
      <RadioButton id="disease3" label="Disease 3" name="diseases_group" />
      <div className='mt-[-20px]'><RadioButton id="disease4" label="Disease 4" name="diseases_group" /></div>
      <hr /> {/* Горизонтальная линия разделения */}
      <div>
        <h2>Survey 2</h2>
        <div>
          <RadioButton id="survey1_disease4" label="Disease 4" paragraph="Paragraph for Disease 4" name="survey2_group" />
          <RadioButton id="survey1_disease5" label="Disease 5" paragraph="Paragraph for Disease 5" name="survey2_group" />
          <RadioButton id="survey1_disease6" label="Disease 6" name="survey2_group" />
        </div>
      </div>
      <hr /> {/* Горизонтальная линия разделения */}
      {/* Другие опросы */}
    </div>
  );
};

export default Diseases;
