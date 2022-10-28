import * as React from 'react';
import { LegalAdvice } from './LegalAdvice';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages | LegalAdvice',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const LegalAdvices = () => <LegalAdvice />;
