import * as React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { NavBarDesktop } from './index';
import { BrowserRouter } from 'react-router-dom';

describe('NavBarDesktop', () => {
  it('should display the default controls', () => {
    const { queryByText } = render(
      <BrowserRouter>
        <NavBarDesktop isAuth={false} />
      </BrowserRouter>,
    );
    expect(queryByText('Inicio')).toBeTruthy();
    expect(queryByText('Acceder')).toBeTruthy();
    expect(queryByText('Quiero ayudar')).toBeTruthy();
    expect(queryByText('Necesito ayuda')).toBeTruthy();
    expect(queryByText('Blog')).toBeTruthy();
    expect(queryByText('Contacto')).toBeTruthy();
    expect(queryByText('Desconectar')).toBeFalsy();
  });

  it('should display a button disconnect', () => {
    const renderResult: RenderResult = render(
      <BrowserRouter>
        <NavBarDesktop isAuth={true} />
      </BrowserRouter>,
    );
    expect(renderResult.queryByText('Inicio')).toBeTruthy();
    expect(renderResult.queryByText('Acceder')).toBeFalsy();
    expect(renderResult.queryByText('Quiero ayudar')).toBeFalsy();
    expect(renderResult.queryByText('Necesito Ayuda')).toBeFalsy();
    expect(renderResult.queryByText('Desconectar')).toBeTruthy();
  });
});
