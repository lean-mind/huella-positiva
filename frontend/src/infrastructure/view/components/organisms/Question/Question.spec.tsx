import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { Question} from '.';

describe('Question', () => {
  it('should display the passed question', () => {
    const renderResult: RenderResult = render(
      <Question title = "Pregunta" body = "Respuesta"/>,
    );
    expect(renderResult.queryByText('Pregunta')).toBeTruthy();
  });
});