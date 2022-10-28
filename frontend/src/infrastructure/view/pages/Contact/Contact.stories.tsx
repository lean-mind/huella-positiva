import * as React from 'react';
import { withA11y } from '@storybook/addon-a11y';
import { Contact } from './Contact';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Pages | Contact ',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const defaultView = () => <Contact />;
