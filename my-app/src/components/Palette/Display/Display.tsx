import React from 'react';
import styles from './Display.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { removeValue, removeVisibleValue, removeVisibleOperator } from '../../../redux/slices/calculatorSlice';

function Display() {
  const { visibleValue } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  function cleanLastNumb() {
    dispatch(removeValue());
    dispatch(removeVisibleValue());
    dispatch(removeVisibleOperator());
  }

  return (
    <div onClick={cleanLastNumb} className={styles.display}>
      <p className={(visibleValue === '0') ? styles.big : styles.default}>{visibleValue}</p>
    </div>
  );
}

export default Display;
