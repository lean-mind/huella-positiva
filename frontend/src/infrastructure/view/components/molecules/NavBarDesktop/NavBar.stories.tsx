import * as React from 'react';
import { NavBarDesktop } from './NavBarDesktop';
import { withA11y } from '@storybook/addon-a11y';
import { BrowserRouter } from 'react-router-dom';

export default {
  title: 'Molecules |  Navbar/NavBarDesktop',
  decorators: [withA11y,
    (storyFn: any) => <BrowserRouter>{storyFn()}</BrowserRouter>,
  ],
};

export const Dashboard = () => <NavBarDesktop isAuth={true}/>;
