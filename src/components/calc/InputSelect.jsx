import React from 'react';
import PropTypes from 'prop-types';

function InputSelect({
  label, customClass, isRequired, isDisabled, options, val, onStateChangeProp,
}) {
  return (
    <div className={`py-1 ${customClass}`}>
      <div className="flex justify-between items-center">
        <label htmlFor={label} className="pl-1 font-medium">
          {label}
        </label>
        <span className="pr-1 text-xs text-gray-500">
          {isRequired === false ? 'Opcional' : 'Requerido'}
        </span>
      </div>
      <div>
        <select
          name={label}
          id={label}
          className={`appearance-none w-full bg-ise-white px-2 py-1 rounded-lg font-Hero shadow-sm border focus:outline-none focus:border-ise-orange placeholder:text-sm disabled:cursor-not-allowed ${isDisabled === false ? 'border-gray-400' : 'opacity-50 border-gray-600'}`}
          required={isRequired}
          disabled={isDisabled}
          value={val}
          onChange={(e) => onStateChangeProp(e)}
        >
          <option selected disabled hidden>Elige una entidad</option>
          {options.map((entity) => (
            <option key={entity}>
              {entity}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

InputSelect.propTypes = {
  label: PropTypes.string,
  customClass: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  val: PropTypes.string.isRequired,
  onStateChangeProp: PropTypes.func.isRequired,
};

InputSelect.defaultProps = {
  label: 'Label aquí',
  customClass: '',
  isRequired: false,
  isDisabled: false,
};
export default InputSelect;
