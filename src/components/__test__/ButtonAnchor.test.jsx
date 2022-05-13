/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ButtonAnchor from '../ButtonAnchor';
import { mockButtonData } from './mockData';

// arrange
// act
// assert
// npm test -- --coverage

describe('Button Anchor component', () => {
  it('Render using default values', () => {
    const button = render(
      <ButtonAnchor />,
    );
    const buttonDefault = screen.getByText('Texto aquí');
    expect(button).toBeDefined();
    expect(buttonDefault).toBeInTheDocument();
  });

  it('Should render', () => {
    const button = render(
      <ButtonAnchor href={mockButtonData.mockHref} customClass={mockButtonData.mockCustomClass}>
        {mockButtonData.mockChildren}
      </ButtonAnchor>,
    );
    const buttonChildrenText = screen.getByText('Acerca de nosotros');
    expect(buttonChildrenText).toBeInTheDocument();
    expect(button).toBeDefined();
  });
});
