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

      if (state.visibleValue === '0' || state.visibleValue === 'Ошибка') {
        state.visibleValue = '';
      }

      if (action.payload === '0' && !state.visibleOperator.length) { // set 0 only when we clean value
        state.visibleValue = '0';
      } else {
        state.visibleValue += newValue;
      }
    },
    setVisibleOperator: (state, action: PayloadAction<string>) => { // set the operator which we highlight
      state.visibleOperator = action.payload;
    },
    removeValue: (state) => {
      state.value = '0';
    },
    removeVisibleValue: (state) => {
      state.visibleValue = '';
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
        }
        if (!isInteger(newValue)) {
          newValue = newValue.toFixed(2);
        }
      } catch {
        newValue = 'Ошибка';
      }
      state.value = String(newValue);
      state.visibleValue = state.value;
    },
  },
});

export const {
  setValue, setVisibleValue, setVisibleOperator, removeValue, removeVisibleValue, removeVisibleOperator, calculate,
} = calculatorSlice.actions;
export default calculatorSlice.reducer;
