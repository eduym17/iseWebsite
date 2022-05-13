import React from 'react';
import { render } from '@testing-library/react';
import ButtonAnchor from '../ButtonAnchor';

// arrange
// act
// assert

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
});
