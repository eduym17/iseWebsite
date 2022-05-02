import React from 'react';
import {
  Header, Footer, Titles, Paragraph, ScrollToTop,
} from '../components';
import PrivacyTexts from '../components/PrivacyTexts';
import Privacy from '../components/texts/privacy';

function PrivacyPolicy() {
  return (
    <div className="text-ise-gray-30 font-Cabin selection:bg-ise-orange selection:text-ise-white">
      <ScrollToTop />
      <Header />
      <div id="landingPage" className="landingPage bg-ise-gray-10 containerFull">
        <div className="containerContent pb-8 md:pb-10 md:px-7 lg:pb-12">
          <Titles title="Política de privacidad" magicWord="privacidad" customClass="mt-5 lg:mt-6" />
          <Paragraph customClass="mt-4 text-justify whitespace-pre-line lg:mb-4">
            De conformidad con la Ley Federal de Protección de Datos personales en Posesión de
            {' '}
            los Particulares (en adelante la &quot;Ley&quot;), vigente en los Estados Unidos
            {' '}
            Mexicanos, hacemos de su conocimiento que In Situ Energía, con domicilio en Insurgentes
            {' '}
            Sur 615, Col. Nápoles, Benito Juárez, CDMX, C.P. 03810, podrá recolectar y usar
            {' '}
            información proporcionada por usted (en adelante &quot;El Usuario&quot;) en este sitio
            {' '}
            web.
          </Paragraph>
          {
            Privacy.map((subtitle) => (
              <PrivacyTexts title={subtitle.title} key={subtitle.title} magicWord="" customClass="mt-8" customClassParagraph="mt-2">
                {subtitle.info}
              </PrivacyTexts>
            ))
          }
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default PrivacyPolicy;
