import React from 'react';
import styles from './Display.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { removeValue, setVisibleValue, removeVisibleOperator } from '../../../redux/slices/calculatorSlice';

function Display() {
  const { visibleValue } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(removeValue());
    dispatch(setVisibleValue('0'));
    dispatch(removeVisibleOperator());
  }

  return (
    <div role="button" onKeyDown={handleClick} tabIndex={0} onClick={handleClick} className={styles.display}>
      <p className={(visibleValue === '0') ? styles.big : styles.default}>{visibleValue}</p>
    </div>
  );
}

export default Display;
