import React from 'react';
import propTypes from 'prop-types';
import epcIcon from '../assets/icons/epc-icon.png';

function ServiceCard({
  children, customClass, title, icon,
}) {
  return (
    <div className={`bg-ise-gray-40 w-[90%] rounded-lg p-2 mb-4 hover:drop-shadow-lg ${customClass}`}>
      <div className="flex items-center gap-2">
        <img src={icon} alt={title} className="h-6" />
        <p className="text-2xl font-bold text-left py-1">
          {title}
        </p>
      </div>
      <p className="font-Hero text-xs text-justify p-2 w-full">
        {children}
      </p>
    </div>
  );
}

ServiceCard.propTypes = {
  children: propTypes.string,
  customClass: propTypes.string,
  title: propTypes.string,
  icon: propTypes.string,
};
ServiceCard.defaultProps = {
  children: 'Descripción aquí',
  customClass: '',
  title: 'Título aquí',
  icon: epcIcon,
};

export default ServiceCard;
