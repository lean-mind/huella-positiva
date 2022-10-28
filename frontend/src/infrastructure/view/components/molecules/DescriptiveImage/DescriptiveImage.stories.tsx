import * as React from 'react';
import { DescriptiveImage } from './DescriptiveImage';
import { withA11y } from '@storybook/addon-a11y';
import imageExample from '../../atoms/Image/assets/superHeroes.svg';

export default {
  title: 'Molecules | DescriptiveImage',
  decorators: [withA11y],
};

export const descriptiveImage = () => (
  <DescriptiveImage
    title="Title"
    text="This should be a description"
    source={imageExample}
    description="Description for the image"
  />
);
