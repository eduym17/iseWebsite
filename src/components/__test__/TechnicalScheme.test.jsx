/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TechnicalScheme from '../TechnicalScheme';
import { mockTechnicalScheme } from './__mockData__';

jest.mock('../icons.js', () => ({
  // epcIcon: '',
}));

const CLASS_BASE_ELEMENT = 'flex flex-col items-center md:flex-row md:items-center md:justify-center md:gap-2 md:w-[90%]';
const CLASS_CUSTOM_ONE = `${CLASS_BASE_ELEMENT} mt-4 md:mt-5 lg:mt-12`;
const CLASS_DEFAULT_TITLE = 'flex flex-col items-center justify-center w-full md:w-2/5';
const CLASS_DEFAULT_SUBTITLE = 'leading-none text-sm font-semibold text-center md:w-full md:text-left lg:text-base';
const CLASS_DEFAULT_CHILDREN = 'md:whitespace-pre-line font-Hero text-sm text-justify w-[90%] mt-2 md:w-full lg:text-base';
const CHILDREN_ONE = 'Sistemas con una capacidad instalada mayor o igual a 500 kW para generación y consumo in situ. Pueden tener, o no, intercambio de energía con la red.';
const CHILDREN_TWO = 'La temperatura del fluido, comúnmente agua, se eleva hasta obtener vapor sobrecalentado. Este tipo de sistemas se utilizan para procesos industriales de alta especialización.';
const CHILDREN_THREE = 'Almacena energía barata de manera estratégica y utilizala cuando más te convenga. Puedes hacerlo desde la red de CFE o generarla por tu propia cuenta, tenemos opciones a tu medida.';

describe('Technical Scheme component', () => {
  it('Should render using default values', () => {
    const technicalScheme = render(
      <TechnicalScheme />,
    );
    const defaultTitle = screen.getByText(/Título/i);
    const defaultSubtitle = screen.getByText(/Pie/i);
    const defaultChildren = screen.getByText(/Descripción/i);
    expect(technicalScheme).toBeDefined();
    expect(defaultTitle).toBeInTheDocument();
    expect(defaultTitle.parentElement.parentElement).toHaveClass(CLASS_DEFAULT_TITLE);
    expect(defaultSubtitle).toBeInTheDocument(CLASS_DEFAULT_SUBTITLE);
    expect(defaultChildren).toBeInTheDocument(CLASS_DEFAULT_CHILDREN);
  });

  it('Should render using real values one', () => {
    render(
      <TechnicalScheme
        title={mockTechnicalScheme.mockTitleOne}
        customClass={mockTechnicalScheme.mockCustomClassOne}
      >
        {mockTechnicalScheme.mockChildrenOne}
      </TechnicalScheme>,
    );
    const titleOne = screen.getByText(/Net/i);
    const childrenOne = screen.getByText(CHILDREN_ONE);
    const parentEl = screen.getByText(/Net/i).parentElement.parentElement.parentElement;
    expect(titleOne).toBeInTheDocument();
    expect(childrenOne).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_CUSTOM_ONE);
  });
});
