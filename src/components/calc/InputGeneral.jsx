import React from 'react';
import PropTypes from 'prop-types';
import { InputText, InputSelect } from '.';

function InputGeneral({
  field: {
    type, label, placeholder, customClass, required, disabled, options,
  }, infoClient, onStateChange,
}) {
  if (type === 'text' || type === 'email' || type === 'tel') {
    return (
      <InputText
        label={label}
        customPlaceholder={placeholder}
        customClass={customClass}
        isRequired={required}
        isDisabled={disabled}
        type={type}
        key={label}
        onStateChangeProp={onStateChange}
        val={infoClient[label]}
      />
    );
  }
  if (type === 'select') {
    return (
      <InputSelect
        label={label}
        customPlaceholder={placeholder}
        customClass={customClass}
        isRequired={required}
        isDisabled={disabled}
        type={type}
        key={label}
        options={options}
        onStateChangeProp={onStateChange}
        val={infoClient[label]}
      />
    );
  }
}

InputGeneral.propTypes = {
  field: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array])).isRequired,
  infoClient: PropTypes.objectOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool,
    PropTypes.array])).isRequired,
  onStateChange: PropTypes.func.isRequired,
};

InputGeneral.defaultProps = {
};

export default InputGeneral;
