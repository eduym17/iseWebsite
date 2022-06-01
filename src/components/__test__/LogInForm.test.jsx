/* eslint-disable no-undef */
import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginForm from '../LogInForm';

const CLASS_PARENT = 'bg-ise-gray-20 px-5 py-8 rounded-lg w-[90%] max-w-sm';
const CLASS_TITLE = 'text-3xl text-center font-bold lg:text-4xl';
const CLASS_INFO = 'font-Hero text-sm text-center md:w-full pb-6';
const CLASS_INPUT_USER = 'appearance-none rounded-none relative block w-full px-3 py-2 bg-ise-white border border-gray-300 placeholder:text-sm placeholder-gray-500 text-ise-gray-30 font-Hero rounded-t-lg focus:outline-none focus:ring-ise-orange focus:border-ise-orange focus:z-10';
const CLASS_INPUT_PASSWORD = 'appearance-none rounded-none relative block w-full px-3 py-2 bg-ise-white border border-gray-300 placeholder:text-sm placeholder-gray-500 text-ise-gray-30 font-Hero rounded-b-lg focus:outline-none focus:ring-ise-orange focus:border-ise-orange focus:z-10';
const CLASS_REMEMBER_ME = 'ml-2 block text-sm text-ise-gray-30';
const CLASS_FORGOT_PASSWORD = 'text-sm hover:text-ise-orange';
const CLASS_SUBMIT_BUTTON = 'font-bold text-center whitespace-nowrap py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full lg:text-lg';

describe('Login Form test', () => {
  it('Should render using default values', () => {
    const loginForm = render(
      <LoginForm />,
    );
    const parentEl = screen.getByText('¡Inicia sesión!').parentElement;
    const titleDefault = screen.getByText('¡Inicia sesión!');
    const infoDefault = screen.getByText('Para uso exclusivo de In Situ Energía.');
    expect(loginForm).toBeDefined();
    expect(parentEl).toBeInTheDocument();
    expect(parentEl).toHaveClass(CLASS_PARENT);
    expect(titleDefault).toBeInTheDocument();
    expect(titleDefault).toHaveClass(CLASS_TITLE);
    expect(infoDefault).toBeInTheDocument();
    expect(infoDefault).toHaveClass(CLASS_INFO);
  });

  it('Should render inputs', () => {
    render(
      <LoginForm />,
    );
    const inputUser = screen.getByPlaceholderText('Correo electrónico');
    const inputPassword = screen.getByPlaceholderText('Contraseña');
    expect(inputUser).toBeInTheDocument();
    expect(inputUser).toHaveClass(CLASS_INPUT_USER);
    expect(inputPassword).toBeInTheDocument();
    expect(inputPassword).toHaveClass(CLASS_INPUT_PASSWORD);
  });

  it('Should render actions', () => {
    render(
      <LoginForm />,
    );
    const rememberMe = screen.getByText('Recuérdame');
    const forgotPassword = screen.getByText('¿Olvidaste tu contraseña?');
    const submitButton = screen.getByText('Iniciar sesión');
    expect(rememberMe).toBeInTheDocument();
    expect(rememberMe).toHaveClass(CLASS_REMEMBER_ME);
    expect(forgotPassword).toBeInTheDocument();
    expect(forgotPassword).toHaveClass(CLASS_FORGOT_PASSWORD);
    expect(submitButton).toBeInTheDocument();
    expect(submitButton).toHaveClass(CLASS_SUBMIT_BUTTON);
  });
});
