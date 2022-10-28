import * as React from 'react';
import { FormRegisterOrganization } from './FormRegisterOrganization';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organization | Fields Register',
  decorators: [withA11y],
};

export const Default = () => <FormRegisterOrganization />;
