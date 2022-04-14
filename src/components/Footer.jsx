import React from 'react';
import propTypes from 'prop-types';
import {
  logoInSitu, linkedinIcon, twitterIcon, facebookIcon, instagramIcon,
} from './icons';

function Footer({ customClass }) {
  return (
    <div className={`"footer bg-ise-gray-20 px-2 flex flex-col items-stretch divide-y-2 divide-gray-400 ${customClass}`}>
      <div className="flex items-center justify-between mb-1">
        <a href="/">
          <img src={logoInSitu} alt="In Situ Energía" className="h-10" />
        </a>
        <div className="flex flex-col items-end gap-2">
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
            <a href="/" className="hover:text-ise-orange">Soluciones</a>
            <a href="/" className="hover:text-ise-orange">Nosotros</a>
            <a href="/" className="hover:text-ise-orange">Proyectos</a>
            <a href="/" className="hover:text-ise-orange">FAQ</a>
          </div>
        </div>
      </div>
      <div className="pt-1">
        <div className="router flex text-sm items-center justify-around">
          <a href="/" className="hover:text-ise-orange">Política de privacidad</a>
          <a href="/" className="hover:text-ise-orange">Términos y condiciones</a>
          <a href="/" className="hover:text-ise-orange">Log In</a>
        </div>
        <div className="copyright pt-1 text-sm flex justify-center">
          <p>{`© Todos los derechos reservados. In Situ Energía, ${new Date().getFullYear()}.`}</p>
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
