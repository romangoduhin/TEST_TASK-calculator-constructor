/* eslint-disable import/prefer-default-export */
import { Dispatch } from '@reduxjs/toolkit';
import {
  calculate, removeValue, removeVisibleValue,
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
