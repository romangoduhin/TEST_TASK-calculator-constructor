import React from 'react';
import styles from './EqualButton.module.scss';
import { useAppDispatch } from '../../../redux/hooks';
import { calculate, removeVisibleOperator } from '../../../redux/slices/calculatorSlice';

function EqualButton() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(calculate());
    dispatch(removeVisibleOperator());
  }

  return (
    <div className={styles.equalButton} onClick={handleClick}>
      <div>
        =
      </div>
    </div>
  );
}

export default EqualButton;
