import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { RequirementDisplay } from './';

describe('RequirementDisplay', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <RequirementDisplay content={"TestText"} />,
    );
    expect(renderResult.queryByText("TestText")).toBeTruthy();
  });
});