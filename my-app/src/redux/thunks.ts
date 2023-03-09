import { Dispatch } from '@reduxjs/toolkit';
import {
  calculate, removeValue, removeVisibleOperator, removeVisibleValue,
} from './slices/calculatorSlice';

export const calculateThunk = () => (dispatch: Dispatch) => {
  dispatch(calculate());
  setTimeout(
    () => {
      dispatch(removeValue());
      dispatch(removeVisibleValue());
    },
    1000,
  );
};

export const cleanCalculator = () => (dispatch: Dispatch) => {
  dispatch(removeValue());
  dispatch(removeVisibleValue());
  dispatch(removeVisibleOperator());
};
