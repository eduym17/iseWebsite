/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Titles from '../Titles';

describe('Titles component', () => {
  it('Should render using default values', () => {
    const title = render(
      <Titles />,
    );
    const titleDefaultOne = screen.getByText(/Título/i);
    const titleDefaultTwo = screen.getByText(/sección/i);
    expect(title).toBeDefined();
    expect(titleDefaultOne).toBeInTheDocument();
    expect(titleDefaultTwo).toBeInTheDocument();
  });
});
