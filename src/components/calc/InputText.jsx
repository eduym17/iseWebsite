import React from 'react';
import PropTypes from 'prop-types';

function InputText({
  label, customPlaceholder, customClass, isRequired, isDisabled, type, val, onStateChangeProp,
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
      <div className="mt-px">
        <input
          type={type}
          name={label}
          id={label}
          placeholder={customPlaceholder}
          className="w-full px-2 py-1 rounded-lg font-Hero shadow-sm border border-gray-400 focus:outline-none focus:border-ise-orange placeholder:text-sm disabled:cursor-not-allowed"
          required={isRequired}
          disabled={isDisabled}
          value={val}
          onChange={(e) => onStateChangeProp(e)}
        />
      </div>
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  customPlaceholder: PropTypes.string,
  customClass: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
  type: PropTypes.string.isRequired,
  val: PropTypes.string,
  onStateChangeProp: PropTypes.func.isRequired,
};

InputText.defaultProps = {
  label: 'Label aquí',
  customPlaceholder: 'Placeholder aquí',
  customClass: '',
  isRequired: false,
  isDisabled: false,
  val: '',
};

export default InputText;
