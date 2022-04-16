import React from 'react';
import propTypes from 'prop-types';
import { pemexIcon, bbvaIcon, toyotaIcon } from './icons';

function ClientsBar({ customClass }) {
  return (
    <div className={`clientsBar w-full flex items-center justify-evenly md:justify-center md:gap-20 ${customClass}`}>
      <img src={toyotaIcon} alt="TOYOTA" className="h-10" />
      <img src={bbvaIcon} alt="BBVA" className="h-10" />
      <img src={pemexIcon} alt="PEMEX" className="h-10" />
    </div>
  );
}

ClientsBar.propTypes = {
  customClass: propTypes.string,
};

ClientsBar.defaultProps = {
  customClass: '',
};

export default ClientsBar;
