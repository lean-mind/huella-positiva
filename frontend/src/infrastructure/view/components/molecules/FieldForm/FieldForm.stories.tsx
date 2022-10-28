import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { FieldForm } from './FieldForm';
import { select, text, withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Molecules | Form/Field',
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  const label = 'TYPE';
  const options = ['text', 'email', 'password'];
  const defaultValue = 'text';

  return (
    <FieldForm
      name={'text'}
      title={text('LABEL', 'Label text')}
      type={select(label, options, defaultValue)}
    />
  );
};
