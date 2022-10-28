import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { FormRegisterEsal } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('Register Esal', () => {
  it('should display the default message', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <FormRegisterEsal />
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('Datos Entidad')).toBeTruthy();
  });
});
