/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Footer from '../Footer';
import { mockFooter } from './__mockData__';

const CLASS = 'containerContent px-3 md:px-4 items-stretch divide-y-2 divide-gray-400 my-5';

jest.mock('../icons.js', () => ({
  logoInSitu: '', linkedinIcon: '', twitterIcon: '', facebookIcon: '', instagramIcon: '',
}));

describe('Footer component', () => {
  it('Should render links texts', () => {
    const footer = render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const defaultSolutions = screen.getByText('Soluciones');
    const defaultCopyRight = screen.getByText('Política de privacidad');
    const defaultLogIn = screen.getByText('Log In');
    expect(footer).toBeDefined();
    expect(defaultSolutions).toBeInTheDocument();
    expect(defaultCopyRight).toBeInTheDocument();
    expect(defaultLogIn).toBeInTheDocument();
  });

  it('Should render icons', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>,
    );
    const logoInSitu = screen.getByAltText('In Situ Energía');
    const defaultLinkedinIcon = screen.getByAltText('LinkedIn icon');
    expect(logoInSitu).toBeInTheDocument();
    expect(defaultLinkedinIcon).toBeInTheDocument();
  });
});
