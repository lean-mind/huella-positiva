import React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { InputImageForm } from './InputImageForm';

export default {
  title: 'Atom | InputImageForm',
  decorators: [withA11y],
};

export const inputImageForm = () => <InputImageForm name="Image input " />;
