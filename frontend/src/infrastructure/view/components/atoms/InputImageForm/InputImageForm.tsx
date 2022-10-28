import React from 'react';
import { InputImageFormProps } from './types';
import './InputImageForm.scss';
import { Label } from '../Label';

export const InputImageForm: React.FC<InputImageFormProps> = ({ name }) => {
  return (
    <div>
      <Label text={name} />
      <br />
      <input type="file" name={name} accept="image*/" />;
    </div>
  );
};
