import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryInformationDisplay} from './';

describe('ConvocatoryInformationDisplay', () => {
  it('should display the default message when no convocatory provided', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryInformationDisplay/>,
    );
    expect(renderResult.queryByText('No information available')).toBeTruthy();
  });
});