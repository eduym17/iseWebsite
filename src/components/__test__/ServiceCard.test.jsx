/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ServiceCard from '../ServiceCard';
import { mockServiceCard } from './__mockData__';

const CLASS_ICON = 'h-6 lg:h-12 lg:mt-4';
const CHILDREN_ONE = 'Llevamos hasta ti diferentes esquemas y fuentes de financiamiento, de acuerdo con las necesidades y requerimientos de tu proyecto.';
const MAIN_CLASS = 'bg-ise-gray-40 w-[90%] rounded-lg p-2 hover:drop-shadow-lg md:mt-0 lg:hover:drop-shadow-xl';
const CUSTOM_CLASS = `${MAIN_CLASS} mt-6 md:mt-0`;
const TEXT_CLASS = 'font-Hero text-sm text-justify p-2 w-full lg:text-base lg:px-4';

jest.mock('../icons.js', () => ({
  // epcIcon: '',
}));

describe('Service Card component', () => {
  it('Should render using default values', () => {
    const serviceCard = render(
      <ServiceCard />,
    );
    expect(serviceCard).toBeDefined();
  });

  it('Should render icon', () => {
    render(
      <ServiceCard
        title={mockServiceCard.mockTitleOne}
        mobileImg={mockServiceCard.mockIcon}
      />,
    );
    const serviceCardIcon = screen.getByAltText('Financiamiento');
    expect(serviceCardIcon).toBeInTheDocument();
    expect(serviceCardIcon).toHaveClass(CLASS_ICON);
  });

  it('Should render children text', () => {
    render(
      <ServiceCard>
        {mockServiceCard.mockChildren}
      </ServiceCard>,
    );
    const serviceCardText = screen.getByText(CHILDREN_ONE);
    expect(serviceCardText).toHaveClass(TEXT_CLASS);
    expect(serviceCardText).toBeInTheDocument();
  });

  it('Should change custom classes', () => {
    render(
      <ServiceCard customClass={mockServiceCard.mockCustomClass}>
        {mockServiceCard.mockChildren}
      </ServiceCard>,
    );
    const parentEl = screen.getByText(CHILDREN_ONE).parentElement;
    expect(parentEl).toBeInTheDocument();
    expect(parentEl).toHaveClass(CUSTOM_CLASS);
  });
});
