import React, { useState } from 'react';
import {
  InputText, InputNumber, InputCurrency, InputSelect,
} from '../../components/calc';
import fields from './fields.json';

function InfoClient() {
  const [infoClient, infoClientSet] = useState({});
  const onChange = (e) => {
    const { name, value } = e.target;
    infoClientSet({
      ...infoClient, [name]: value,
    });
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form className="md:w-2/3">
        {fields['INFO-CLIENT'].map((field) => (
          <SuperComponent field={field} infoClient={infoClient} onStateChange={onChange} />
        ))}
        <button type="submit">Enviar</button>
      </form>
      <pre>{JSON.stringify(infoClient)}</pre>
    </div>
  );
}

function SuperComponent({
  field:{
    type, label, placeholder, customClass, required, disabled, options,
  }, infoClient, onStateChange
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

export default InfoClient;
