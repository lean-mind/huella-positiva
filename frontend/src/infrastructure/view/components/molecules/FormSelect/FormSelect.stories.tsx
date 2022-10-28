import * as React from 'react';
import { FormSelect } from './FormSelect';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | Form/Select',
  decorators: [withA11y],
};

export const Default = () => <FormSelect
  text={'Ejemplo'}
  name={'example'}
  optionsList={['Opcion 1', 'Opcion 2', 'Opcion 3', 'Opcion 4']}
/>;
