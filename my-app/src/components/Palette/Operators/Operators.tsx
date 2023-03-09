import React from 'react';
import Button from '../../../templates/Button/Button';
import styles from './Operators.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { setValue, setVisibleOperator, setVisibleValue } from '../../../redux/slices/calculatorSlice';

function Operators() {
  const { visibleOperator, operators } = useAppSelector((state) => state.calculator);
  const dispatch = useAppDispatch();

  function handleClick(value: string) {
    dispatch(setValue(value));
    dispatch(setVisibleValue(''));
    dispatch(setVisibleOperator(value));
  }

  return (
    <div className={styles.operatorsBlock}>
      {operators.map((el) => (
        <Button
          onClick={() => handleClick(el)}
          key={el}
          styles={visibleOperator === el ? styles.visibleOperator : 'small-btn'}
        >
          {el}
        </Button>
      ))}
    </div>
  );
}

export default Operators;
