/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import NotFound from '../NotFound';

jest.mock('../../components/icons.js', () => ({
  // epcIcon: '',
}));

jest.mock('../../components/images.js', () => ({
}));

const CLASS_INICIO_ONE = 'hidden';
const CLASS_INICIO_TWO = 'hidden font-semibold text-lg lg:flex items-center gap-12';
const CLASS_PRIVACY = 'hover:text-ise-orange';
const CLASS_TWITTER = 'h-7';

describe('Not Found view', () => {
  it('Should render', () => {
    const notFound = render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    expect(notFound).toBeDefined();
  });

  it('Should render header and footer', () => {
    render(
      <BrowserRouter>
        <NotFound />
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
});
