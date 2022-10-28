import * as React from 'react';
import { TextAreaFormProps } from './types';
import './TextAreaForm.scss';
import { Label } from '../../atoms/Label';
import { InputTextArea } from '../../atoms/InputTextArea';

export const TextAreaForm: React.FC<TextAreaFormProps> = ({
  name = '',
  title = '',
  placeholder,
  rows,
  cols,
  value,
  maxlength,
  wrap,
  onBlur,
  onChange,
  readonly,
  messageInfoUser,
}) => {
  return (
    <div className="TextAreaForm">
      <Label text={title} />
      <InputTextArea
        name={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        wrap={wrap}
        readonly={readonly}
        maxlength={maxlength}
      />
    </div>
  );
};

TextAreaForm.displayName = 'TextAreaForm';
