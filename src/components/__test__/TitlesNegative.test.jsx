/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import TitlesNegative from '../TitlesNegative';
import { mockTitlesNegative } from './__mockData__';

const CLASS_MAIN = 'text-3xl font-bold text-center w-[90%] lg:text-4xl';
const CLASS_CUSTOM = `${CLASS_MAIN} mt-6 md:text-left`;

describe('TitlesNegative component', () => {
  it('Should render using default values', () => {
    const title = render(
      <TitlesNegative />,
    );
    const titleDefaultOne = screen.getByText(/Título/i);
    const titleDefaultTwo = screen.getByText(/sección/i);
    expect(title).toBeDefined();
    expect(titleDefaultOne).toBeInTheDocument();
    expect(titleDefaultTwo).toBeInTheDocument();
  });

  it('Should render using real values', () => {
    render(
      <TitlesNegative title={mockTitlesNegative.mockTitleNegative} />,
    );
    const titleOne = screen.getByText(/alguna/i);
    expect(titleOne).toBeInTheDocument();
    expect(titleOne).toHaveClass(CLASS_MAIN);
  });

  it('Should change custom classes', () => {
    render(
      <TitlesNegative
        title={mockTitlesNegative.mockTitleNegative}
        customClass={mockTitlesNegative.mockCustomClass}
      />,
    );
    const titleOne = screen.getByText(/alguna/i);
    expect(titleOne).toBeInTheDocument();
    expect(titleOne).toHaveClass(CLASS_CUSTOM);
  });
});
