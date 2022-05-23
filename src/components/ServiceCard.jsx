import React from 'react';
import propTypes from 'prop-types';
import { epcIcon } from './icons';

function ServiceCard({
  children, customClass, title, icon,
}) {
  return (
    <div className={`bg-ise-gray-40 w-[90%] rounded-lg p-2 hover:drop-shadow-lg md:mt-0 lg:hover:drop-shadow-xl ${customClass}`}>
      <div className="flex items-center gap-2 lg:flex-col lg:gap-0">
        <img src={icon} alt={title} className="h-6 lg:h-12 lg:mt-4" />
        <p className="text-2xl font-bold text-left py-1 lg:text-2xl lg:text-center">
          {title}
        </p>
      </div>
      <p className="font-Hero text-sm text-justify p-2 w-full lg:text-base lg:px-4">
        {children}
      </p>
    </div>
  );
}

ServiceCard.propTypes = {
  children: propTypes.oneOfType([propTypes.string, propTypes.arrayOf(propTypes.string)]),
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
