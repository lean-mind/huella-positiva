import * as React from 'react';
import { TextAreaForm } from './TextAreaForm';
import { withA11y } from '@storybook/addon-a11y';
import { text } from '@storybook/addon-knobs';

export default {
  title: 'MOLECULES | Form/TextArea',
  decorators: [withA11y],
};

export const withText = () => (
  <TextAreaForm
    name={'Text-Area'}
    placeholder={'Información adicional'}
    cols={10}
    rows={5}
    title={text('Label', 'Label Text')}
    messageInfoUser={''}
  />
);
