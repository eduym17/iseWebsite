/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Solutions from '../Solutions';

jest.mock('../../components/icons.js', () => ({
  // epcIcon: '',
}));

jest.mock('../../components/images.js', () => ({
}));

const CLASS_INICIO_ONE = 'hidden';
const CLASS_INICIO_TWO = 'hidden font-semibold text-lg lg:flex items-center gap-12';
const CLASS_PRIVACY = 'hover:text-ise-orange';
const CLASS_TWITTER = 'h-7';

describe('Solutions view', () => {
  it('Should render', () => {
    const solutions = render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>,
    );
    expect(solutions).toBeDefined();
  });

  it('Should render header and footer', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>,
    );
    const inicioHeaderTextOne = screen.getAllByText('Soluciones')[0];
    const inicioHeaderTextTwo = screen.getAllByText('Soluciones')[1];
    const privacyPolicyFooter = screen.getByText('Política de privacidad');
    const twitterIconFooter = screen.getByAltText('Twitter icon');
    expect(inicioHeaderTextOne).toBeInTheDocument();
    expect(inicioHeaderTextOne.parentElement).toHaveClass(CLASS_INICIO_ONE);
    expect(inicioHeaderTextTwo).toBeInTheDocument();
    expect(inicioHeaderTextTwo.parentElement).toHaveClass(CLASS_INICIO_TWO);
    expect(privacyPolicyFooter).toBeInTheDocument();
    expect(privacyPolicyFooter).toHaveClass(CLASS_PRIVACY);
    expect(twitterIconFooter).toBeInTheDocument();
    expect(twitterIconFooter).toHaveClass(CLASS_TWITTER);
  });

  it('Should render titles', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>,
    );
    const titleOne = screen.getAllByText(/eléctrica/i)[0];
    const titleTwo = screen.getAllByText(/Calentamiento/i)[0];
    const titleThree = screen.getAllByText(/Almacenamiento/i)[0];
    expect(titleOne).toBeInTheDocument();
    expect(titleOne).toHaveClass('text-ise-orange');
    expect(titleTwo).toBeInTheDocument();
    expect(titleTwo).toHaveClass('text-ise-orange');
    expect(titleThree).toBeInTheDocument();
    expect(titleThree).toHaveClass('text-ise-orange');
  });
});
