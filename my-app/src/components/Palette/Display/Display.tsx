import React from 'react';
import styles from './Display.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import {
  removeValue,
  removeVisibleValue,
  removeVisibleOperator,
} from '../../../redux/slices/calculatorSlice';

function Display() {
  const { visibleValue } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(removeValue());
    dispatch(removeVisibleValue());
    dispatch(removeVisibleOperator());
  }

  return (
    <div role="button" onKeyDown={handleClick} tabIndex={0} onClick={handleClick} className={styles.display}>
      <p className={styles.text}>{visibleValue}</p>
    </div>
  );
}

export default Display;
