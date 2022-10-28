import * as React from 'react';
import { ConvocatoryDetails } from './ConvocatoryDetails';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Pages | ConvocatoryDetails',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryDetails />;
