import * as React from 'react';
import { CookiesPolicy } from './CookiesPolicy';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';


export default {
  title: 'Pages | CookiesPolicy',
  decorators: [withA11y, (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>],
};

export const CookiesPolicies = () => <CookiesPolicy />;
