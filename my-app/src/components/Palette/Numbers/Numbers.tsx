import React from 'react';
import Button from '../../../templates/Button/Button';
import styles from './Numbers.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { removeVisibleOperator, setValue, setVisibleValue } from '../../../redux/slices/calculatorSlice';

function Numbers() {
  const { numbers } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  function handleClick(value: string) {
    dispatch(setValue(value));
    dispatch(setVisibleValue(value));
    dispatch(removeVisibleOperator());
  }

  return (
    <div className={styles.numbersBlock}>
      {numbers.map((el) => (<Button onClick={() => handleClick(el)} key={el} styles={el === '0' ? 'big-btn' : 'medium-btn'}>{el}</Button>))}
    </div>
  );
}

export default Numbers;
