import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { ConvocatoryListSkills} from './';

describe('ConvocatoryListSkills', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <ConvocatoryListSkills title="Title" skills={[]}/>,
    );
    expect(renderResult.queryByText('Title')).toBeTruthy();
  });
});