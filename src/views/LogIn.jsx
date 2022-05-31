import React from 'react';
import {
  Header, Footer, ScrollToTop, LogInForm,
} from '../components';

function Solutions() {
  return (
    <div className="containerFullHeightFullWidth text-ise-gray-30 font-Cabin selection:bg-ise-orange selection:text-ise-white">
      <ScrollToTop />
      <Header />
      <div className="bg-ise-gray-10 containerScreenHeightFullWidth">
        <div className="containerContent h-full justify-center">
          <LogInForm />
        </div>
      </div>
      <Footer customClass="my-5" />
    </div>
  );
}

export default Solutions;
