import * as React from 'react';
import { RequirementForm } from './RequirementForm';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | RequirementForm',
  decorators: [withA11y],
};

const onKeyPressExample = (event: string) => {
  console.log(event)
}

export const withText = () => <RequirementForm addRequirement={onKeyPressExample} />;
