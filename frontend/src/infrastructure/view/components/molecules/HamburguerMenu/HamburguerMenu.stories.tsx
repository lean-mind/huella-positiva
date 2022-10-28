import * as React from 'react';
import { HamburguerMenu } from './HamburguerMenu';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Navbar/HamburguerMenu',
  decorators: [withA11y],
};

export const Mobil = () => <HamburguerMenu />;
