import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { DescriptiveImage } from './DescriptiveImage';

describe('descriptiveImage', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <DescriptiveImage
        title=""
        text="Hello from descriptiveImage!"
        source=""
        description=""
      />,
    );
    expect(renderResult.queryByText('Hello from descriptiveImage!')).toBeTruthy();
  });
});
