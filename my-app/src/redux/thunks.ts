/* eslint-disable import/prefer-default-export */
import { Dispatch } from '@reduxjs/toolkit';
import { calculate, removeValue, setVisibleValue } from './slices/calculatorSlice';

export const calculateThunk = () => (dispatch: Dispatch) => {
  dispatch(calculate());
  setTimeout(
    () => {
      dispatch(removeValue());
      dispatch(setVisibleValue('0'));
    },
    1000,
  );
};
