import React from 'react';
import Button from '../../../templates/Button/Button';

function Numbers() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

  return (
    <div className="w-[240px] h-[224px] flex-wrap custom-block">
      {numbers.map((el) => (<Button key={el} styles={el === 0 ? 'big-btn' : 'medium-btn'}>{el}</Button>))}
    </div>
  );
}

export default Numbers;
