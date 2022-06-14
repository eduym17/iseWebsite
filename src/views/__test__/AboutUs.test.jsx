/* eslint-disable no-undef */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutUs from '../AboutUs';

jest.mock('../../components/icons.js', () => ({
  // epcIcon: '',
}));

jest.mock('../../components/images.js', () => ({
}));

const CLASS_INICIO_ONE = 'hidden';
const CLASS_INICIO_TWO = 'hidden font-semibold text-lg lg:flex items-center gap-12';
const CLASS_PRIVACY = 'hover:text-ise-orange';
const CLASS_LINKEDIN = 'h-7';

describe('About Us view', () => {
  it('Should render view', () => {
    const aboutUs = render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
    );
    expect(aboutUs).toBeDefined();
  });

  it('Should render header component', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
    );
    const inicioHeaderTextOne = screen.getAllByText('Inicio')[0];
    const inicioHeaderTextTwo = screen.getAllByText('Inicio')[1];
    expect(inicioHeaderTextOne).toBeInTheDocument();
    expect(inicioHeaderTextOne.parentElement).toHaveClass(CLASS_INICIO_ONE);
    expect(inicioHeaderTextTwo).toBeInTheDocument();
    expect(inicioHeaderTextTwo.parentElement).toHaveClass(CLASS_INICIO_TWO);
  });

  it('Should render footer component', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
    );
    const privacyPolicyFooter = screen.getByText('Política de privacidad');
    const linkedInIconFooter = screen.getByAltText('LinkedIn icon');
    expect(privacyPolicyFooter).toBeInTheDocument();
    expect(privacyPolicyFooter).toHaveClass(CLASS_PRIVACY);
    expect(linkedInIconFooter).toBeInTheDocument();
    expect(linkedInIconFooter).toHaveClass(CLASS_LINKEDIN);
  });
});
