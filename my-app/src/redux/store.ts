import { configureStore } from '@reduxjs/toolkit';
import boardsReducer from './slices/boardsSlice';
import calculatorReducer from './slices/calculatorSlice';

export const store = configureStore({
  reducer: {
    boards: boardsReducer,
    calculator: calculatorReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
