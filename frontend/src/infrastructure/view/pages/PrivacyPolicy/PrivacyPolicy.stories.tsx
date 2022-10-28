import * as React from 'react';
import {PrivacyPolicy} from './PrivacyPolicy';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'PrivacyPolicy',
  decorators: [withA11y],
};

export const withText = () => <PrivacyPolicy />;
