import React from 'react';
import Button from '../../../templates/Button/Button';
import styles from './Operators.module.scss';

function Operators() {
  const operators = ['/', 'x', '-', '+'];

  return (
    <div draggable className={styles.operatorsBlock}>
      {operators.map((el) => (<Button key={el} styles="small-btn">{el}</Button>))}
    </div>
  );
}

export default Operators;
