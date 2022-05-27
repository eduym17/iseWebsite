import React from 'react';
import PropTypes from 'prop-types';

function InputText({
  label, customPlaceholder, customClass, condition, isRequired,
}) {
  return (
    <div className={`py-1 ${customClass}`}>
      <div className="flex justify-between items-center">
        <label htmlFor={label} className="pl-1 font-medium">
          {label}
        </label>
        <span className="pr-1 text-xs text-gray-500">
          {condition}
        </span>
      </div>
      <div className="mt-px">
        <input
          type="number"
          step=".01"
          name={label}
          id={label}
          placeholder={customPlaceholder}
          className="appearance-none w-full px-2 py-1 rounded-lg font-Hero shadow-sm border border-gray-400 focus:outline-none focus:border-ise-orange placeholder:text-sm"
          required={isRequired}
        />
      </div>
    </div>
  );
}

InputText.propTypes = {
  label: PropTypes.string,
  customPlaceholder: PropTypes.string,
  customClass: PropTypes.string,
  condition: PropTypes.string,
  isRequired: PropTypes.bool,
};

InputText.defaultProps = {
  label: 'Label aquí',
  customPlaceholder: 'Placeholder aquí',
  customClass: '',
  condition: '',
  isRequired: false,
};

export default InputText;
