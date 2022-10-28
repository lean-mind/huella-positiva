import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryTextSection} from './';

describe('ConvocatoryTextSection', () => {
  it('should display the passed title', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryTextSection title = "Title" content = ""/>,
    );
    expect(renderResult.queryByText('Title')).toBeTruthy();
  });
});