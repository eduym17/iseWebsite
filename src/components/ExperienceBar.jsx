import React from 'react';
import propTypes from 'prop-types';

function ExperienceBar({ customClass }) {
  return (
    <div className={`xpresumeSection bg-sungradient-y text-ise-white flex flex-wrap gap-x-4 justify-center items-center py-3 ${customClass}`}>
      <div className="flex items-center gap-1">
        <span className="text-4xl font-bold">+25</span>
        <div>
          <p className="leading-none font-Hero text-sm">
            clientes
            <br />
            satisfechos
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-4xl font-bold">+25 </span>
        <div>
          <p className="leading-none font-Hero text-sm">
            proyectos
            <br />
            terminados
          </p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <span className="text-4xl font-bold">+3</span>
        <div>
          <p className="leading-none font-Hero text-sm">
            MegaWatts
            <br />
            instalados
          </p>
        </div>
      </div>
    </div>
  );
}

ExperienceBar.propTypes = {
  customClass: propTypes.string,
};

ExperienceBar.defaultProps = {
  customClass: '',
};

export default ExperienceBar;
