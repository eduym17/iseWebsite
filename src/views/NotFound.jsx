import React from 'react';
import {
  ScrollToTop, Header, Footer, ButtonLink, Titles, Paragraph,
} from '../components';
import {
  notFound,
} from '../components/images';

function NotFound() {
  return (
    <div className="text-ise-gray-30 bg-ise-gray-10 font-Cabin h-screen flex flex-col justify-between selection:bg-ise-orange selection:text-ise-white">
      <ScrollToTop />
      <Header />
      <div
        id="notFoundPage"
        className="notFoundPage bg-ise-gray-10 containerFull"
      >
        <div className="containerContent lg:flex-row lg:items-center lg:justify-center gap-10">
          <img
            src={notFound}
            alt="Not Found"
            className="w-3/4 max-w-xs lg:w-1/3"
          />
          <div className="w-full md:w-1/2 flex flex-col items-center">
            <Titles
              title="Página no encontrada"
              magicWord="Página"
              customClass="mt-5"
            />
            <Paragraph customClass="mt-2 whitespace-pre-line lg:mb-4">
              {`Lo sentimos pero no pudimos encontrar lo que buscabas.
              ¡Vuelve a intentar desde nuestra página de inicio!`}
            </Paragraph>
            <ButtonLink
              to="/"
              customClass="my-8 lg:my-12"
            >
              Volver a Inicio
            </ButtonLink>
          </div>
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default NotFound;
