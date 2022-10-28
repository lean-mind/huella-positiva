import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryListRequirements} from './';

describe('ConvocatoryListRequirements', () => {
  it('should display the Title', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryListRequirements title = "Title" requirements = {[]}/>,
    );
    expect(renderResult.queryByText('Title')).toBeTruthy();
  });
});