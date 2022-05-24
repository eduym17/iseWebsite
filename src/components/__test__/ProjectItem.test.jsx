/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProjectItem from '../ProjectItem';
import { mockProjectItem } from './__mockData__';

const CLASS_MOBILE = 'md:hidden max-w-sm rounded-t-lg w-[90%]';
const CLASS_DESKTOP = 'hidden md:flex rounded-t-lg md:w-full';
const CHILDREN_ONE = 'Calentamiento solar de alberca. Capacidad instalada: 84 kW.';
const CHILDREN_TWO = 'Sistema fotovoltaico. Generación distribuida. Capacidad instalada: 499 kW.';
const MAIN_CLASS = 'flex flex-col items-center w-full hover:drop-shadow-lg lg:hover:drop-shadow-xl lg:w-[29%]';
const CUSTOM_CLASS = `${MAIN_CLASS} mt-6 md:mt-0`;
const MAIN_CLASS_TEXTS = 'bg-ise-gray-40 flex flex-col items-center rounded-b-lg w-[90%] px-2 py-2 max-w-sm md:w-full';
const CUSTOM_CLASS_TEXTS = `${MAIN_CLASS_TEXTS} mt-1`;

jest.mock('../icons.js', () => ({
  // epcIcon: '',
}));

describe('Project Item component', () => {
  it('Should render using default values', () => {
    const projectItem = render(
      <ProjectItem />,
    );
    expect(projectItem).toBeDefined();
  });

  it('Should render mobile image', () => {
    render(
      <ProjectItem
        title={mockProjectItem.mockTitleOne}
        mobileImg={mockProjectItem.mockMobileImg}
      />,
    );
    const mobileImage = screen.getByText(/Robles/i).parentElement.parentElement.previousSibling.previousSibling;
    expect(mobileImage).toHaveClass(CLASS_MOBILE);
    expect(mobileImage).toBeInTheDocument();
  });

  it('Should render desktop image', () => {
    render(
      <ProjectItem
        title={mockProjectItem.mockTitleTwo}
        mobileImg={mockProjectItem.mockDesktopImg}
      />,
    );
    const desktopImage = screen.getByText(/Junco/i).parentElement.parentElement.previousSibling;
    expect(desktopImage).toHaveClass(CLASS_DESKTOP);
    expect(desktopImage).toBeInTheDocument();
  });

  it('Should render children text one', () => {
    render(
      <ProjectItem>
        {mockProjectItem.mockChildrenOne}
      </ProjectItem>,
    );
    const projectItemText = screen.getByText(CHILDREN_ONE);
    expect(projectItemText).toBeInTheDocument();
  });

  it('Should render children text two', () => {
    render(
      <ProjectItem>
        {mockProjectItem.mockChildrenTwo}
      </ProjectItem>,
    );
    const projectItemText = screen.getByText(CHILDREN_TWO);
    expect(projectItemText).toBeInTheDocument();
  });

  // it('Should change custom classes', () => {
  //   render(
  //     <ProjectItem
  //       customClass={mockProjectItem.mockCustomClass}
  //       customClassTexts={mockProjectItem.mockCustomClassTexts}
  //     >
  //       {mockProjectItem.mockChildren}
  //     </ProjectItem>,
  //   );
  //   const projectItemTextParent = screen.getByText(CHILDREN_ONE).parentElement;
  //   const parentEl = screen.getByText(CHILDREN_ONE).parentElement.parentElement;
  //   expect(projectItemTextParent).toHaveClass(CUSTOM_CLASS_TEXTS);
  //   expect(parentEl).toHaveClass(CUSTOM_CLASS);
  // });
});
