import * as React from 'react';
import { VolunteerList } from './VolunteerList';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'VolunteerList',
  decorators: [withA11y],
};

export const withText = () => <VolunteerList title="" volunteers={[]} clickAction={() => { }} buttonText="" />;
