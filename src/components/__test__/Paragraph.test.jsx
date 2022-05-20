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
});
