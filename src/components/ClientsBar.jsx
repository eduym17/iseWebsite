import React from 'react';
import propTypes from 'prop-types';
import {
  iconPemex, iconRecsa, iconRobles, iconToyota,
} from './icons';

function ClientsBar({ customClass }) {
  return (
    <div className={`clientsBar w-full flex flex-wrap gap-10 gap-y-6 px-4 items-center justify-evenly md:justify-center md:gap-20 ${customClass}`}>
      <img src={iconToyota} alt="Toyota" className="h-10 md:h-12 lg:h-14" />
      <img src={iconRobles} alt="Los Robles" className="h-10 md:h-12 lg:h-14" />
      <img src={iconPemex} alt="PEMEX" className="h-10 md:h-12 lg:h-14" />
      <img src={iconRecsa} alt="RECSA" className="hidden h-10 md:h-12 lg:h-14" />
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
