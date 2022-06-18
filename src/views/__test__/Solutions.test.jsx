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
const PARAGRAPH_ONE = 'Aprovecha techos, suelos y estacionamientos para generar tu propia energía eléctrica, reduciendo costos internos. Existen diversos esquemas de conexión eléctrica de acuerdo con la normativa emitida por la Comisión Reguladora de Energía (CRE). A continuación, una breve descripción de los más utilizados y convenientes para ti y tu negocio:';
const PARAGRAPH_TWO = 'Diseñamos sistemas especiales para calentamiento solar de agua, generación de vapor o calentamiento de fluidos, con el objetivo de ahorrar combustible o energía eléctrica. De acuerdo con la temperatura requerida, serán necesarios fluidos y procesos diferentes. A cotinuación, una breve descripción de las soluciones para calentamiento solar que ofrecemos:';
const PARAGRAPH_THREE = 'Somos pioneros en la implementación de sistemas para el almacenamiento de energía en México. Hemos encontrado una forma de generarte ahorros muy atractivos. Nuestro equipo de ingeniería ha desarrollado un sistema que permite llevar el control y monitoreo de baterías de forma inteligente y sencilla.';

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

  it('Should render paragraphs', () => {
    render(
      <BrowserRouter>
        <Solutions />
      </BrowserRouter>,
    );
    const paragraphOne = screen.getByText(PARAGRAPH_ONE);
    const paragraphTwo = screen.getByText(PARAGRAPH_TWO);
    const paragraphThree = screen.getByText(PARAGRAPH_THREE);
    expect(paragraphOne).toBeInTheDocument();
    expect(paragraphTwo).toBeInTheDocument();
    expect(paragraphThree).toBeInTheDocument();
  });
});
