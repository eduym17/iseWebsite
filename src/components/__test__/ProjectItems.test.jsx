/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectItem from '../ProjectItem';
import { mockProjectItems } from './__mockData__';

const CLASS_DESKTOP = 'hidden md:flex rounded-t-lg md:w-full';
const CLASS_MOBILE = 'md:hidden max-w-sm rounded-t-lg w-[90%]';
const CHILDREN_ONE = 'Llevamos hasta ti diferentes esquemas y fuentes de financiamiento, de acuerdo con las necesidades y requerimientos de tu proyecto.';
const CUSTOM_CLASS = 'mt-6 md:mt-0';
const CUSTOM_CLASS_TEXTS = 'mt-1';

describe('Projec Items component', () => {
  it('Should render using default values', () => {
    const projectItem = render(
      <ProjectItem />,
    );
    expect(projectItem).toBeDefined();
  });

  it('Should render mobile image', () => {
    render(
      <ProjectItem
        title={mockProjectItems.mockTitleOne}
        mobileImg={mockProjectItems.mockMobileImg}
      />,
    );
    const mobileImage = screen.getByText(/Financiamiento/i).parentElement.parentElement.previousSibling.previousSibling;
    expect(mobileImage).toHaveClass(CLASS_MOBILE);
    expect(mobileImage).toBeInTheDocument();
  });

  it('Should render desktop image', () => {
    render(
      <ProjectItem
        title={mockProjectItems.mockTitleTwo}
        mobileImg={mockProjectItems.mockDesktopImg}
      />,
    );
    const desktopImage = screen.getByText(/Ingeniería,/i).parentElement.parentElement.previousSibling;
    expect(desktopImage).toHaveClass(CLASS_DESKTOP);
    expect(desktopImage).toBeInTheDocument();
  });

  it('Should render children text', () => {
    render(
      <ProjectItem>
        {mockProjectItems.mockChildren}
      </ProjectItem>,
    );
    const projectItemText = screen.getByText(CHILDREN_ONE);
    expect(projectItemText).toBeInTheDocument();
  });
});
