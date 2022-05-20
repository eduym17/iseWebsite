/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Paragraph from '../Paragraph';
import { mockParagraph } from './__mockData__';

const CLASS_DEFAULT = 'font-Hero text-sm text-center w-[90%] md:w-full lg:text-base';
const TEXT_ONE = 'Genera tu propia energía y comienza a ahorrar de inmediato, tenemos la solución que necesitas.';
const CLASS_ONE = `${CLASS_DEFAULT} mt-3 md:text-left md:w-5/6 lg:w-4/5`;
const TEXT_TWO = 'Soluciones inteligentes, siempre a la medida de las necesidades de nuestros clientes.';
const CLASS_TWO = `${CLASS_DEFAULT} mt-1 lg:mt-2`;
const TEXT_THREE = 'Fundada en el año 2017, y con más de diez años de experiencia dentro de la industria de las energías renovables, In Situ Energía se ha convertido en la empresa proveedora de servicios de Ingeniería, Procura y Construcción (EPC, por sus siglas en inglés), referente del rubro. Desarrollamos con profesionalismo cada uno de nuestros proyectos, apoyados en nuestras capacidades técnicas, regulatorias y financieras, a través de las cuales somos capaces de generar proyectos de alta calidad.';
const CLASS_THREE = `${CLASS_DEFAULT} mt-3 mb-6 whitespace-pre-line text-justify md:w-full md:mt-4`;

describe('Paragraph component', () => {
  it('Should render using default values', () => {
    const paragraph = render(
      <Paragraph />,
    );
    expect(paragraph).toBeDefined();
    const paragraphDefaultText = screen.getByText('Texto aquí');
    expect(paragraphDefaultText).toBeInTheDocument();
    expect(paragraphDefaultText).toHaveClass(CLASS_DEFAULT);
  });

  it('Should render text one on home view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassOne}>
        {mockParagraph.mockChildrenOne}
      </Paragraph>,
    );
    const paragraphExampleOne = screen.getByText(TEXT_ONE);
    expect(paragraphExampleOne).toBeInTheDocument();
    expect(paragraphExampleOne).toHaveClass(CLASS_ONE);
  });

  it('Should render text two on home view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassTwo}>
        {mockParagraph.mockChildrenTwo}
      </Paragraph>,
    );
    const paragraphExampleTwo = screen.getByText(TEXT_TWO);
    expect(paragraphExampleTwo).toBeInTheDocument();
    expect(paragraphExampleTwo).toHaveClass(CLASS_TWO);
  });

  it('Should render text three on aboutUs view', () => {
    render(
      <Paragraph customClass={mockParagraph.mockCustomClassThree}>
        {mockParagraph.mockChildrenThree}
      </Paragraph>,
    );
    const paragraphExampleThree = screen.getByText(TEXT_THREE);
    expect(paragraphExampleThree).toBeInTheDocument();
    expect(paragraphExampleThree).toHaveClass(CLASS_THREE);
  });
});
