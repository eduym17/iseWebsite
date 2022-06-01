import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addInfoClient } from '../../store/calc/calcSlice';
import InputGeneral from '../../components/calc/InputGeneral';
import INFOCLIENT from './fields';

function InfoClient() {
  const infoClient = useSelector((state) => state.calc.infoClient);
  const dispatch = useDispatch();
  const onChange = (e) => {
    const { name, value } = e.target;
    dispatch(addInfoClient({
      ...infoClient, [name]: value,
    }));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <form className="md:w-4/5">
        {INFOCLIENT.map((field) => (
          <InputGeneral
            key={field.label}
            field={field}
            infoClient={infoClient}
            onStateChange={onChange}
          />
        ))}
        <button type="submit">Enviar</button>
      </form>
      <pre>{JSON.stringify(infoClient)}</pre>
    </div>
  );
}

export default InfoClient;
