import * as React from 'react';
import { FrequentlyAskedQuestions } from './FrequentlyAskedQuestions';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Pages | FrequentlyAskedQuestions',
  decorators: [withA11y],
};

export const withText = () => <FrequentlyAskedQuestions />;
