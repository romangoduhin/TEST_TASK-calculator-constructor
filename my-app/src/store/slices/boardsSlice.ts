import { createSlice } from '@reduxjs/toolkit';
import { InitialState } from '../types';

const initialState: InitialState = {
  boards: [
    {
      id: 1,
      name: 'palette',
      items: [
        { id: 1, name: 'display' },
        { id: 2, name: 'operators' },
        { id: 3, name: 'numbers' },
        { id: 4, name: 'equal' },
      ],
    },
    {
      id: 2,
      name: 'constructor',
      items: [],
    }],
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    // setUser: (state, action: PayloadAction<User>) => {
    //     state.email = action.payload.email;
    // },
    // removeUser: (state) => {
    //     state.email = null;
    // }
  },
});

// export const {} = boardsSlice.actions;
export default boardsSlice.reducer;
