/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Titles6xl from '../Titles6xl';
import { mockTitles6xl } from './__mockData__';

const CLASS_MAIN = 'text-3xl font-bold text-center w-[90%] lg:text-6xl';
const MAGIC_WORD_CLASS = 'text-ise-orange';

describe('Titles6xl component', () => {
  it('Should render using default values', () => {
    const title = render(
      <Titles6xl />,
    );
    const titleDefaultOne = screen.getByText(/Título/i);
    const titleDefaultTwo = screen.getByText(/sección/i);
    expect(title).toBeDefined();
    expect(titleDefaultOne).toBeInTheDocument();
    expect(titleDefaultTwo).toBeInTheDocument();
  });

  it('Should render using real values', () => {
    render(
      <Titles6xl title={mockTitles6xl.mockTitle6xl} />,
    );
    const titleOne = screen.getByText(/alcance/i);
    const parentEl = screen.getByText(/alcance/i).parentElement;
    expect(titleOne).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_MAIN);
  });

  it('Should change magic word class', () => {
    render(
      <Titles6xl title={mockTitles6xl.mockTitle6xl} magicWord={mockTitles6xl.mockMagicWord} />,
    );
    const magicWordOne = screen.getByText(/beneficios/i);
    expect(magicWordOne).toBeInTheDocument();
    expect(magicWordOne).toHaveClass(MAGIC_WORD_CLASS);
  });
});
