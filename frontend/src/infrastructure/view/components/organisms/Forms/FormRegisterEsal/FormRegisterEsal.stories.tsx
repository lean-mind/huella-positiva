import React from 'react';
import { FormRegisterEsal } from './FormRegisterEsal';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organisms | Forms',
  decorators: [withA11y],
};

export const RegisterEsal = () => <FormRegisterEsal />;
