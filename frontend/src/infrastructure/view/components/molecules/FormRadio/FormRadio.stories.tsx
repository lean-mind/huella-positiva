import * as React from 'react';
import { FormRadio } from './FormRadio';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Form/FormRadio',
  decorators: [withA11y],
};

export const RadioButton = () => (
  <FormRadio type={'radio'} name={'Ubicación'} title={'Ubicación'} />
);
