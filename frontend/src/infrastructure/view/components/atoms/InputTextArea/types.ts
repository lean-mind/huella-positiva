import React from 'react';

export interface InputTextAreaProps {
  name: string;
  value?: string;
  placeholder: string;
  rows?: number;
  cols?: number;
  readonly?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => string | void;
  onBlur?: any;
  maxlength?: number;
  wrap?: wrapSpecifies;
}

export type wrapSpecifies = 'hard' | 'soft';
