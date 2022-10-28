import React from 'react';
import {ModifyUser} from './ModifyUser';
import {withA11y} from '@storybook/addon-a11y';

export default {
    title: 'Pages | ModifyUser',
    decorators: [withA11y],
};

export const Default = () => <ModifyUser/>;