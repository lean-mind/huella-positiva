import * as React from 'react';
import { Question } from './Question';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organisms | Question',
  decorators: [withA11y],
};

export const withText = () => <Question title="" body="" />;
