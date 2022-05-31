import React from 'react';
import {
  InputText, InputNumber, InputCurrency, InputSelect,
} from '../../components/calc';

function InfoClient() {
  return (
    <div className="w-full flex flex-col items-center">
      <form className="md:w-2/3">
        <InputText label="Nombre" customPlaceholder="Nombre aquí" isRequired customClass="" />
        <InputText label="Apellido" customPlaceholder="Apellido aquí" isRequired customClass="" />
        <InputText label="E-mail" customPlaceholder="E-mail aquí" isRequired customClass="" />
        <InputText label="Dirección" customPlaceholder="Calle, Número, Colonia, Municipio, Estado, CP" isRequired customClass="" />
        <InputNumber label="Input número 1" customPlaceholder="0.00" isRequired customClass="" />
        <InputSelect label="Entidad" isRequired />
        <InputNumber label="Input número 2" customPlaceholder="0.00" isRequired customClass="" />
        <InputCurrency label="Precio 1" customPlaceholder="0.00" isRequired isDisabled customClass="" />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default InfoClient;
