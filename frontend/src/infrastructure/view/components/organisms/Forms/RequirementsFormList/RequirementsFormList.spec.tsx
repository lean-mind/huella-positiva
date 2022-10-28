import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RequirementsFormList } from './';

describe('RequirementsFormList', () => {
  it('should display the passed requirements', () => {
    var requirements = ['Requirement 1', 'Requirement 2']
    const addRequirement = jest.fn((test: string) => { requirements.push(test) })
    const renderResult: RenderResult = render(
      <RequirementsFormList addRequirement={addRequirement} requirements={requirements} />,
    );
    expect(renderResult.queryByText(requirements[0])).toBeTruthy();
  });
});