import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RequirementForm } from './';

describe('RequirementForm', () => {
  it('should display the placeholder', () => {
    const addRequirement = jest.fn((test: string) => { })
    const renderResult: RenderResult = render(
      <RequirementForm addRequirement={addRequirement} />,
    );
    expect(renderResult.queryByPlaceholderText("Nuevo requisito")).toBeTruthy();
  });
});