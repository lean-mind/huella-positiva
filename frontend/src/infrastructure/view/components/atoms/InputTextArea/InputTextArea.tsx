import * as React from 'react';
import './InputTextArea.scss';
import { InputTextAreaProps } from './types';

export const InputTextArea: React.FC<InputTextAreaProps> = ({
  name,
  placeholder,
  rows,
  cols,
  readonly,
  onChange,
  onBlur,
  value,
  wrap,
  maxlength,
}) => (
  <textarea
    className="InputTextArea"
    name={name}
    value={value}
    placeholder={placeholder}
    rows={rows}
    cols={cols}
    readOnly={readonly}
    onChange={onChange}
    onBlur={onBlur}
    wrap={wrap}
    maxLength={maxlength}
    aria-label="input-textArea"
  />
);

InputTextArea.displayName = 'InputTextArea';
