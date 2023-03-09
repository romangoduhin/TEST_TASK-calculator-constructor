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
    setValue: (state, action: PayloadAction<string>) => {
      const newValue = action.payload;

      if (state.value === '0' || state.value === 'Ошибка') {
        state.value = '';
      }

      if (state.operators.includes(newValue) && state.operators.includes(state.value[state.value.length - 1])) { // replacing operator
        state.value = state.value.split(''); // TODO fix it
        state.value.pop();
      }
      state.value += newValue;
    },
    setVisibleValue: (state, action: PayloadAction<string>) => {
      const newValue = action.payload;

      if (state.visibleValue === '0' || state.visibleValue === 'Ошибка') {
        state.visibleValue = '';
      }

      state.visibleValue += newValue;
    },
    setVisibleOperator: (state, action: PayloadAction<string>) => {
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
    calculate: (state) => {
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
