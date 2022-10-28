import * as React from 'react';
import { RequirementsFormList } from './RequirementsFormList';
import { withA11y } from '@storybook/addon-a11y';

export default {
  title: 'Organisms | Forms | RequirementsFormList',
  decorators: [withA11y],
};

function mock() {
  void 0
}

export const RequirementDisplay = () => <RequirementsFormList requirements={["Requirement 1", "Requirement 2", "Requirement 3"]} addRequirement={mock} />;