/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function LogInForm() {
  return (
    <div className="bg-ise-gray-20 px-5 py-8 rounded-lg w-[90%] max-w-sm">
      <p className="text-3xl text-center font-bold lg:text-4xl">
        ¡Inicia sesión!
      </p>
      <p className="font-Hero text-sm text-center md:w-full pb-6">
        Para uso exclusivo de In Situ Energía.
      </p>
      <form className="space-y-6" action="/" method="POST">
        <div>
          <div className="shadow-md -space-y-px">
            <label htmlFor="email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Correo electrónico"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 bg-ise-white border border-gray-300 placeholder:text-sm placeholder-gray-500 text-ise-gray-30 font-Hero rounded-t-lg focus:outline-none focus:ring-ise-orange focus:border-ise-orange focus:z-10"
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              required
              className="appearance-none rounded-none relative block w-full px-3 py-2 bg-ise-white border border-gray-300 placeholder:text-sm placeholder-gray-500 text-ise-gray-30 font-Hero rounded-b-lg focus:outline-none focus:ring-ise-orange focus:border-ise-orange focus:z-10"
            />
          </div>
        </div>
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-ise-gray-30">
              Recuérdame
            </label>
          </div>
          <div>
            <a href="mailto:mail@mail.com?subject=Contacta&body=con soporte técnico" className="text-sm hover:text-ise-orange">
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <button
            type="submit"
            className="font-bold text-center whitespace-nowrap py-1.5 px-6 bg-ise-orange hover:bg-sungradient-o active:bg-sungradient-o text-ise-gray-10 hover:text-ise-white active:text-ise-white rounded-full lg:text-lg"
          >
            Iniciar sesión
          </button>
        </div>
      </form>
    </div>
  );
}

export default LogInForm;
