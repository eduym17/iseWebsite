/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import ButtonLink from '../ButtonLink';
import { mockButtonData } from './mockData';

describe('Button Link component', () => {
  it('Render using default values', () => {
    const button = render(
      <BrowserRouter>
        <ButtonLink />
      </BrowserRouter>,
    );
    const buttonDefault = screen.getByText('Texto aquí');
    expect(button).toBeDefined();
    expect(buttonDefault).toBeInTheDocument();
  });

  it('Should render', () => {
    const button = render(
      <BrowserRouter>
        <ButtonLink customClass={mockButtonData.mockCustomClass} to={mockButtonData.mockTo}>
          {mockButtonData.mockChildren}
        </ButtonLink>
      </BrowserRouter>,
    );
    const buttonChildrenText = screen.getByText('Acerca de nosotros');
    expect(buttonChildrenText).toBeInTheDocument();
    expect(button).toBeDefined();
  });
});
