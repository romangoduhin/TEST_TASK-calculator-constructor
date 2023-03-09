import React from 'react';
import styles from './EqualButton.module.scss';
import { useAppDispatch } from '../../../redux/hooks';
import { removeVisibleOperator } from '../../../redux/slices/calculatorSlice';
import { calculateThunk } from '../../../redux/thunks';

function EqualButton() {
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(calculateThunk());
    dispatch(removeVisibleOperator());
  }

  return (
    <div role="button" tabIndex={0} onKeyDown={handleClick} className={styles.equalButton} onClick={handleClick}>
      <div>
        =
      </div>
    </div>
  );
}

export default EqualButton;
