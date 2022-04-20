import React from 'react';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  logoInSitu, linkedinIcon, twitterIcon, facebookIcon, instagramIcon,
} from './icons';

function Footer({ customClass }) {
  return (
    <div className="containerFull bg-ise-gray-20">
      <div className={`containerContent px-3 md:px-4 items-stretch divide-y-2 divide-gray-400 ${customClass}`}>
        <div className="flex items-center justify-between mb-1 md:mb-4">
          <a href="/#header">
            <img src={logoInSitu} alt="In Situ Energía" className="h-10 lg:h-12" />
          </a>
          <div className="flex flex-col items-end gap-2 md:flex-row-reverse md:items-center md:gap-10">
            <div className="social flex gap-3">
              <a href="https://www.linkedin.com/company/insituenergia" target="_blank" rel="noreferrer">
                <img src={linkedinIcon} alt="LinkedIn icon" className="h-7" />
              </a>
              <a href="https://twitter.com/InSituEnergia" target="_blank" rel="noreferrer">
                <img src={twitterIcon} alt="Twitter icon" className="h-7" />
              </a>
              <a href="https://www.facebook.com/insituenergia" target="_blank" rel="noreferrer">
                <img src={facebookIcon} alt="Facebook icon" className="h-7" />
              </a>
              <a href="https://www.instagram.com/insituenergia/" target="_blank" rel="noreferrer">
                <img src={instagramIcon} alt="Instagram icon" className="h-7" />
              </a>
            </div>
            <div className="router flex gap-2 text-sm">
              <Link to="/soluciones" className="hover:text-ise-orange">Soluciones</Link>
              <Link to="/nosotros" className="hover:text-ise-orange">Nosotros</Link>
              <a href="/#projects" className="hover:text-ise-orange">Proyectos</a>
              <a href="/#faqs" className="hover:text-ise-orange">FAQs</a>
            </div>
          </div>
        </div>
        <div className="pt-1 flex flex-col md:flex-row md:justify-between md:items-center ">
          <div className="router flex text-sm items-center justify-around md:gap-4">
            <Link to="/" className="hover:text-ise-orange">Política de privacidad</Link>
            <Link to="/" className="hover:text-ise-orange">Términos y condiciones</Link>
            <Link to="/" className="hover:text-ise-orange">Log In</Link>
          </div>
          <div className="copyright pt-1 text-sm flex justify-center">
            <p>{`© Todos los derechos reservados. In Situ Energía, ${new Date().getFullYear()}.`}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

Footer.propTypes = {
  customClass: propTypes.string,
};

Footer.defaultProps = {
  customClass: '',
};

export default Footer;
