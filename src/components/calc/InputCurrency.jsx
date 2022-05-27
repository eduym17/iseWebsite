import React from 'react';
import PropTypes from 'prop-types';

function InputCurrency({
  label, customPlaceholder, customClass, isRequired, isDisabled,
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
      <div className="mt-px relative rounded-md shadow-sm">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-400 sm:text-sm">$</span>
        </div>
        <input
          type="text"
          name={label}
          id={label}
          placeholder={customPlaceholder}
          className="appearance-none w-full pl-7 pr-2 py-1 rounded-lg font-Hero shadow-sm border border-gray-400 focus:outline-none focus:border-ise-orange placeholder:text-sm disabled:cursor-not-allowed"
          required={isRequired}
          disabled={isDisabled}
        />
        <div className="absolute inset-y-0 right-0 flex items-center">
          <label htmlFor="currency" className="">
            <span className="sr-only">Moneda</span>
            <select
              name="currency"
              id="currency"
              className="h-full py-0 pl-2 pr-px border-transparent bg-transparent text-gray-400 sm:text-sm rounded-lg"
            >
              <option>MXN</option>
              <option>USD</option>
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}

InputCurrency.propTypes = {
  label: PropTypes.string,
  customPlaceholder: PropTypes.string,
  customClass: PropTypes.string,
  isRequired: PropTypes.bool,
  isDisabled: PropTypes.bool,
};

InputCurrency.defaultProps = {
  label: 'Label aquí',
  customPlaceholder: 'Placeholder aquí',
  customClass: '',
  isRequired: false,
  isDisabled: false,
};

export default InputCurrency;
