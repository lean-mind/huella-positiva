import React from 'react';

export interface InputFieldFormProps {
  type: inputTypes | string;
  name: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => string | void;
  onBlur?: any;
  stateValidate?: stateValidateTypes;
  checked?: boolean;
  disabled?: disableType;
}

export type inputTypes = 'email' | 'password' | 'text' | 'radio' | 'checkbox';
export type stateValidateTypes = '' | 'correct' | 'incorrect';
export type disableType = true | false;

const formatRoles = {
  regexPhone: new RegExp(/[+][0-9]{1,3}\s\d+$/),
  regexEmail: new RegExp(
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
  ),
  regexOnlyText: new RegExp(/^[a-zA-Z]+/),
  regexDate: new RegExp(/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/),
  regexTwitter: new RegExp(/(https):\/\/(twitter)\.(com)\/[-a-zA-Z0-9+&@#%=~_|]+/),
  regexInstagram: new RegExp(/(https):\/\/(instagram)\.(com)\/[-a-zA-Z0-9+&@#%=~_|]+/),
  regexLinkedin: new RegExp(
    /(https):\/\/(www\.)(linkedin)\.(com)\/(in)\/[-a-zA-Z0-9+&@#%=~_|]+/,
  ),
  regexZipcode: new RegExp(/\d{5}/),
  regexAddress: new RegExp(/^[a-z A-Z]+\s[0-9]+$/),
  regexPassword: new RegExp(/^[a-zA-Z0-9.,:+`%!@#$^'?(){}~_/\-\[\]]*$/),
};

export default formatRoles;
