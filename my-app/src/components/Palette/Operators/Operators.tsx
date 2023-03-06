import React from 'react';
import Button from '../../../templates/Button/Button';

function Operators() {
  const operators = ['/', 'x', '-', '+'];

  return (
    <div className="w-[240px] h-[56px] custom-block">
      {operators.map((el) => (<Button key={el} styles="medium-btn">{el}</Button>))}
    </div>
  );
}

export default Operators;
