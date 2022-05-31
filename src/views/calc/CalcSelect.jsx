import React from 'react';
import { Link } from 'react-router-dom';

function CalcSelect() {
  return (
    <div>
      <Link to="pv/client-info">Link pv</Link>
      <Link to="pt/client-info">Link pt</Link>
    </div>
  );
}

export default CalcSelect;
