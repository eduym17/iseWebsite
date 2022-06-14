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
const CLASS_TITLES_ONE = 'text-ise-orange';
const MAIN_TEXT = 'Fundada en el año 2017, y con más de diez años de experiencia dentro de la industria de las energías renovables, In Situ Energía se ha convertido en la empresa proveedora de servicios de Ingeniería, Procura y Construcción (EPC, por sus siglas en inglés), referente del rubro. Desarrollamos con profesionalismo cada uno de nuestros proyectos, apoyados en nuestras capacidades técnicas, regulatorias y financieras, a través de las cuales somos capaces de generar proyectos de alta calidad.';
const CLASS_MAIN_TEXT = 'font-Hero text-sm text-center w-[90%] md:w-full lg:text-base mt-3 mb-6 whitespace-pre-line text-justify md:w-full md:mt-4';
const SECONDARY_TEXT = 'Somos una empresa profundamente comprometida con las causas sociales y el combate al cambio climático, estamos seguros de que podemos ayudar a dejar un mundo mejor para las siguientes generaciones. Actualmente nuestra plantilla está compuesta por 50% de integrantes del género femenino y 50% del género masculino. No tenemos duda de que los mejores resultados surgen cuando combinamos todos nuestros talentos.';
const CLASS_SECONDARY_TEXT = 'font-Hero text-sm text-center w-[90%] md:w-full lg:text-base mt-3 mb-8 whitespace-pre-line text-justify md:w-full md:mt-4';
const CLASS_PV_ONE = 'hidden w-4/6 max-w-xs md:flex md:w-1/3 lg:max-w-sm';
const CLASS_PV_TWO = `${CLASS_PV_ONE} md:mt-2`;
const CLASS_ALLIANCES_IMG = 'h-10 lg:h-14';

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

  it('Should render titles component', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
    );
    const alianzasTitlesText = screen.getByText(/alianzas/i);
    const compromisoTitlesText = screen.getByText(/compromiso/i);
    expect(alianzasTitlesText).toBeInTheDocument();
    expect(alianzasTitlesText).toHaveClass(CLASS_TITLES_ONE);
    expect(alianzasTitlesText.previousSibling).toHaveTextContent('Nuestras');
    expect(compromisoTitlesText).toBeInTheDocument();
    expect(compromisoTitlesText).toHaveClass(CLASS_TITLES_ONE);
    expect(compromisoTitlesText.previousSibling).toHaveTextContent('Nuestro');
  });

  it('Should render paragraph component', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
    );
    const companyMainText = screen.getByText(MAIN_TEXT);
    const companySecondaryText = screen.getByText(SECONDARY_TEXT);
    expect(companyMainText).toBeInTheDocument();
    expect(companyMainText).toHaveClass(CLASS_MAIN_TEXT);
    expect(companySecondaryText).toBeInTheDocument();
    expect(companySecondaryText).toHaveClass(CLASS_SECONDARY_TEXT);
  });

  it('Should render images', () => {
    render(
      <BrowserRouter>
        <AboutUs />
      </BrowserRouter>,
    );
    const pvImgOne = screen.getAllByAltText('sistema fotovoltaico')[0];
    const pvImgTwo = screen.getAllByAltText('sistema fotovoltaico')[1];
    const canadianSolarImg = screen.getByAltText('Canadian Solar');
    const pdcEnergyImg = screen.getByAltText('PDC Energy');
    const trinaSolarImg = screen.getByAltText('Trina Solar');
    expect(pvImgOne).toBeInTheDocument();
    expect(pvImgOne).toHaveClass(CLASS_PV_ONE);
    expect(pvImgTwo).toBeInTheDocument();
    expect(pvImgTwo).toHaveClass(CLASS_PV_TWO);
    expect(canadianSolarImg).toBeInTheDocument();
    expect(canadianSolarImg).toHaveClass(CLASS_ALLIANCES_IMG);
    expect(pdcEnergyImg).toBeInTheDocument();
    expect(pdcEnergyImg).toHaveClass(CLASS_ALLIANCES_IMG);
    expect(trinaSolarImg).toBeInTheDocument();
    expect(trinaSolarImg).toHaveClass(CLASS_ALLIANCES_IMG);
  });
});
