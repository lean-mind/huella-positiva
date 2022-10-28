import * as React from 'react';
import { ConvocatoryTextSection } from './ConvocatoryTextSection';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Convocatory/ConvocatoryTextSection',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryTextSection title="" content="" />;
