import * as React from 'react';
import {LoginRegister} from './LoginRegister';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Pages | LoginRegister',
  decorators: [withA11y],
};

export const Default = () => <LoginRegister />;
