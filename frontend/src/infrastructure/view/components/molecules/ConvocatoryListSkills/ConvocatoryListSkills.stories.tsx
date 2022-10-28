import * as React from 'react';
import { ConvocatoryListSkills } from './ConvocatoryListSkills';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Convocatory/ConvocatoryListSkills',
  decorators: [withA11y],
};

export const withText = () => <ConvocatoryListSkills title="" skills={[]} />;
