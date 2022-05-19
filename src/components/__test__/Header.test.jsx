/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from '../Header';

jest.mock('../icons.js', () => ({
  logoInSitu: '',
}));

describe('Header component', () => {
  it('Should render links texts', () => {
    const header = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const defaultSolutions = screen.getAllByText('Soluciones');
    const defaultAboutUs = screen.getAllByText('Nosotros');
    expect(header).toBeDefined();
    expect(defaultSolutions[0]).toBeInTheDocument();
    expect(defaultAboutUs[0]).toBeInTheDocument();
  });

  it('Should render icons', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const logoInSitu = screen.getByAltText('In Situ Energía');
    expect(logoInSitu).toBeInTheDocument();
  });

  it('Should handle click', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const textInicio = screen.getAllByText('Inicio');
    const svgButton = textInicio[0].parentElement.nextSibling;
    expect(svgButton).toBeDefined();
    expect(screen.queryByTestId('svgButton false')).toBeTruthy();
    fireEvent.click(svgButton);
    expect(screen.queryByTestId('svgButton true')).toBeTruthy();
  });

  it('Should blur menu', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const menuButton = screen.getByAltText('In Situ Energía').parentElement.nextSibling;
    expect(screen.queryByTestId('menuButton true')).toBeDefined();
    fireEvent.blur(menuButton);
    expect(screen.queryByTestId('menuButton false')).toBeTruthy();
  });

  it('Should handle keyUp', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const menuButton = screen.getByAltText('In Situ Energía').parentElement.nextSibling;
    expect(screen.queryByTestId('menuButton false')).toBeDefined();
    fireEvent.keyUp(menuButton, { key: 'Enter' });
    expect(screen.queryByTestId('menuButton true')).toBeTruthy();
  });
});
