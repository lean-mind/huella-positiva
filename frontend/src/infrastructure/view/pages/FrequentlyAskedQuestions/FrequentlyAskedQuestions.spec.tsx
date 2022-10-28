import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FrequentlyAskedQuestions} from './';

describe('FrequentlyAskedQuestions', () => {
  it('should display the page title', () => {
    const renderResult: RenderResult = render(
      <FrequentlyAskedQuestions/>,
    );
    expect(renderResult.queryByText('Preguntas frecuentes')).toBeTruthy();
  });
});