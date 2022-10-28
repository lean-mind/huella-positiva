import * as React from 'react';
import {RequirementDisplay} from './RequirementDisplay';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Molecules | RequirementDisplay',
  decorators: [withA11y],
};

export const withText = () => <RequirementDisplay content = "Example"/>;
