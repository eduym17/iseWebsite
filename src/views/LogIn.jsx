import React from 'react';
import {
  Header, Footer, ScrollToTop, LogInForm,
} from '../components';

function Solutions() {
  return (
    <div className="containerHeightScreenWidthFull bg-ise-gray-10 text-ise-gray-30 font-Cabin selection:bg-ise-orange selection:text-ise-white">
      <ScrollToTop />
      <Header />
      <div className="w-full flex justify-center items-center py-4">
        <LogInForm />
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Solutions;
