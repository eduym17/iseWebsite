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
});
