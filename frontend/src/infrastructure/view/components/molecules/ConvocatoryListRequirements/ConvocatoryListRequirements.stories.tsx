import * as React from 'react';
import { ConvocatoryListRequirements } from './ConvocatoryListRequirements';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Convocatory/ConvocatoryListRequirements',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryListRequirements title="" requirements={[]} />;
