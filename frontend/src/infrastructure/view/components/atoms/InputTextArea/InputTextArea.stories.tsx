import * as React from 'react';
import { InputTextArea } from './InputTextArea';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Atom | InputTextArea',
  decorators: [withA11y],
};

export const withText = () => <InputTextArea name="Input Text Area" placeholder="Input Text area" />;
