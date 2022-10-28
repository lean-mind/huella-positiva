import * as React from 'react';
import { OrganizationRegister } from './OrganizationRegister';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organization | Form Register',
  decorators: [withA11y],
};

export const Default = () => <OrganizationRegister />;
