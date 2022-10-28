import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Label} from './index';

describe('Label', () => {
  it('should display the default message', () => {
    const textLabel = 'irrelevant text';
    const renderResult: RenderResult = render(
      <Label text={textLabel}/>,
    );
    expect(renderResult.queryByText(textLabel)).toBeTruthy();
  });
});
