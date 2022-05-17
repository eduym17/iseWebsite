/* eslint-disable no-undef */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ContactForm from '../ContactForm';

describe('Contact Form component', () => {
  it('Render using default values', () => {
    const contactForm = render(
      <ContactForm />,
    );
    const phNameDefault = screen.getByPlaceholderText('Tu nombre*');
    const phLastNameDefault = screen.getByPlaceholderText('Tu apellido*');
    const phMailDefault = screen.getByPlaceholderText('Tu correo electrónico*');
    const phPhoneDefault = screen.getByPlaceholderText('Tu teléfono');
    const phMessageDefault = screen.getByPlaceholderText('¡Haz una pregunta o comentario!');
    const submitButtonDefault = screen.getByText('Enviar');
    expect(contactForm).toBeDefined();
    expect(phNameDefault).toBeInTheDocument();
    expect(phLastNameDefault).toBeInTheDocument();
    expect(phMailDefault).toBeInTheDocument();
    expect(phPhoneDefault).toBeInTheDocument();
    expect(phMessageDefault).toBeInTheDocument();
    expect(submitButtonDefault).toBeInTheDocument();
  });

  it('Render after submitting', () => {
    const { baseElement } = render(
      <ContactForm />,
    );
    const phNameDefault = screen.getByPlaceholderText('Tu nombre*');
    const phLastNameDefault = screen.getByPlaceholderText('Tu apellido*');
    const phMailDefault = screen.getByPlaceholderText('Tu correo electrónico*');
    const phPhoneDefault = screen.getByPlaceholderText('Tu teléfono');
    const phMessageDefault = screen.getByPlaceholderText('¡Haz una pregunta o comentario!');
    fireEvent.input(phNameDefault, { target: { value: 'Benny' } });
    fireEvent.input(phLastNameDefault, { target: { value: 'García' } });
    fireEvent.input(phMailDefault, { target: { value: 'benny.garcia@losreyes.com' } });
    fireEvent.input(phPhoneDefault, { target: { value: '5512341234' } });
    fireEvent.input(phMessageDefault, { target: { value: 'Una cosa es una cosa y otra cosa es otra cosa.' } });
    fireEvent.submit(baseElement.firstChild.firstChild);
    const successMsg = screen.getByText('¡Gracias por contactarnos!');
    expect(successMsg).toBeInTheDocument();
  });
});
