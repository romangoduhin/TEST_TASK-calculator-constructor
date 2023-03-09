/* eslint-disable no-param-reassign, max-len, no-eval */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { InitialStateCalculator } from '../types';
import { isInteger } from '../../helpers/checkers';

const initialState: InitialStateCalculator = {
  numbers: ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', '.'],
  operators: ['/', '*', '-', '+'],
  value: '0',
  visibleValue: '0',
  visibleOperator: '',
};

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<string>) => { // setting the invisible value that we calculate
      const newValue = action.payload;

      if (state.value === '0' || state.value === 'Ошибка') {
        state.value = '';
      }

      if (state.operators.includes(newValue) && state.operators.includes(state.value[state.value.length - 1])) { // replacing operator
        const splitValue: Array<string> = state.value.split('');
        splitValue.pop();
        state.value = splitValue.join('');
      }
      state.value += newValue;
    },
    setVisibleValue: (state, action: PayloadAction<string>) => { // setting the visible value that we show on display
      const newValue = action.payload;

      if (newValue === '.') {
        state.visibleValue = `${state.visibleValue}.`;
        return;
      }

      if (newValue === '') {
        state.visibleValue = '';
        return;
      }

      if (state.visibleValue === '0' || state.visibleValue === 'Ошибка' || state.visibleValue === 'Не определено') {
        state.visibleValue = '';
      }

      state.visibleValue += newValue;
    },
    setVisibleOperator: (state, action: PayloadAction<string>) => { // set the operator which we highlight
      const operator = action.payload;

      state.visibleOperator = operator;
    },
    removeValue: (state) => {
      state.value = '0';
    },
    removeVisibleValue: (state) => {
      state.visibleValue = '0';
    },
    removeVisibleOperator: (state) => {
      state.visibleOperator = '';
    },
    calculate: (state) => { // calculating the value and setting it
      const { value } = state;
      let newValue;

      try {
        newValue = eval(value); // i know about a lot of problems with eval but im working on speed now

        if (!Number.isFinite(newValue)) {
          newValue = 'Не определено';
        } else if (!isInteger(newValue)) {
          newValue = +(newValue.toFixed(10)); // fix value till 10 digits length and cut useless zeroes
        }
      } catch {
        newValue = 'Ошибка';
      }

      newValue = String(newValue);

      state.value = newValue;
      state.visibleValue = newValue;
    },
  },
});

export const {
  setValue, setVisibleValue, setVisibleOperator, removeValue, removeVisibleValue, removeVisibleOperator, calculate,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
