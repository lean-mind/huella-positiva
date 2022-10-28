import * as React from 'react';
import './FormRadio.scss';
import { InputFieldForm } from '../../atoms/InputFieldForm';
import { FormRadioProps } from './types';

export const FormRadio: React.FC<FormRadioProps> = ({
  title = '',
  type = 'text',
  name = '',
  value = 'Radio Button',
  onChange,
  onBlur,
  stateValidate,
  disabled,
}) => (
  <div className="FormRadio">
    <InputFieldForm
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      stateValidate={stateValidate}
      disabled={disabled}
    />
    {value}
  </div>
);

FormRadio.displayName = 'FormRadio';
