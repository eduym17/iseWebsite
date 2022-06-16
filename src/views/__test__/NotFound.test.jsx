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
const CLASS_BUTTONLINK = 'font-bold text-center whitespace-nowrap py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full lg:text-lg my-8 lg:my-12';
const PARAGRAPH_TEXT = 'Lo sentimos pero no pudimos encontrar lo que buscabas. ¡Vuelve a intentar desde nuestra página de inicio!';
const CLASS_PARAGRAPH = 'font-Hero text-sm text-center w-[90%] md:w-full lg:text-base mt-2 whitespace-pre-line lg:mb-4';

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

  it('Should render buttons', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    const buttonLinkText = screen.getByText('Volver a Inicio');
    expect(buttonLinkText).toBeInTheDocument();
    expect(buttonLinkText).toHaveClass(CLASS_BUTTONLINK);
  });

  it('Should render titles', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    const titleText = screen.getAllByText(/Página/i)[0];
    expect(titleText).toBeInTheDocument();
    expect(titleText).toHaveClass('text-ise-orange');
  });

  it('Should render paragraphs', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    const paragraphText = screen.getByText(PARAGRAPH_TEXT);
    expect(paragraphText).toBeInTheDocument();
    expect(paragraphText).toHaveClass(CLASS_PARAGRAPH);
  });

  it('Should render image', () => {
    render(
      <BrowserRouter>
        <NotFound />
      </BrowserRouter>,
    );
    const notFoundImg = screen.getByAltText('Not Found');
    expect(notFoundImg).toBeInTheDocument();
    expect(notFoundImg).toHaveClass('w-3/4 max-w-xs lg:w-1/3');
  });
});
