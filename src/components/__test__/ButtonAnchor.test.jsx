/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import ButtonAnchor from '../ButtonAnchor';
import '@testing-library/jest-dom';

// arrange
// act
// assert
// npm test -- --coverage

const mockChildren = 'Conoce más';
const mockCustomClass = 'bg-violet-200';
const mockHref = 'https://www.in-situ.com.mx/soluciones';

describe('Button Anchor component', () => {
  test('Should render', () => {
    const button = render(
      <ButtonAnchor href={mockHref} customClass={mockCustomClass}>
        {mockChildren}
      </ButtonAnchor>,
    );
    expect(button).toBeDefined();
  });

  test('Default values rendering', () => {
    const button = render(
      <ButtonAnchor />,
    );
    const buttonDefault = screen.getByText('Texto aquí');
    expect(button).toBeDefined();
    expect(buttonDefault).toBeInTheDocument();
  });
});
