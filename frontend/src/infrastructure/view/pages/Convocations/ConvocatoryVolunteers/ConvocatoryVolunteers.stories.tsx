import * as React from 'react';
import { ConvocatoryVolunteers } from './ConvocatoryVolunteers';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'ConvocatoryVolunteers',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryVolunteers />;
