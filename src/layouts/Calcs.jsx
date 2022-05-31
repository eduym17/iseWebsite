import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header, Footer } from '../components';

function Calcs() {
  return (
    <div className="containerScreenHeightFullWidth bg-ise-gray-10">
      <Header />
      <div className="containerContent w-full">
        <Outlet />
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Calcs;
