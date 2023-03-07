import React from 'react';
import Button from '../../../templates/Button/Button';
import styles from './Numbers.module.scss';

function Numbers() {
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, ','];

  return (
    <div draggable className={styles.numbersBlock}>
      {numbers.map((el) => (<Button key={el} styles={el === 0 ? 'big-btn' : 'medium-btn'}>{el}</Button>))}
    </div>
  );
}

export default Numbers;
