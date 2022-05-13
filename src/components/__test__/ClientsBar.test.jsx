/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ClientsBar from '../ClientsBar';
import { mockClientsBar } from './__mockData__';

jest.mock('../icons.js', () => ({
  iconToyota: '', iconRobles: '', iconPemex: '', iconRecsa: '',
}));

const CLASS = 'clientsBar w-full flex flex-wrap gap-10 gap-y-6 px-4 items-center justify-evenly md:justify-center md:gap-20 py-5 lg:py-8';

describe('Clients Bar component', () => {
  it('Render using default values', () => {
    const clientsBar = render(
      <ClientsBar />,
    );
    const clientsBarDefault = screen.getByAltText('Toyota');
    expect(clientsBar).toBeDefined();
    expect(clientsBarDefault).toBeInTheDocument();
  });

  it('Should render', () => {
    const { baseElement } = render(
      <ClientsBar customClass={mockClientsBar.mockCustomClass} />,
    );
    const prueba = screen.getByAltText('Toyota').parentElement;
    expect(baseElement).toBeDefined();
    expect(prueba).toHaveClass(CLASS);
  });
});
