import React from 'react';
import { ConvocatoryInfo } from './ConvocatoryInfo';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';
import town from '../../../pages/Convocations/assets/Convocatory-icons/town.jpeg';

export default {
  title: 'Atom | ConvocatoryInfo',
  decorators: [withA11y, withKnobs],
};

export const withText = () => (
  <ConvocatoryInfo
    description="Hi I am a convocatory information component"
    title="Convocatory Info component"
    imageURL={town}
  ></ConvocatoryInfo>
);
