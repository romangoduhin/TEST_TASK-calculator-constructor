import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InitialState, Item } from '../types';

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
    setItem: (state, action: PayloadAction<{ boardId: number, item: Item }>) => {
      // eslint-disable-next-line no-param-reassign
      state.boards = state.boards.map((board) => {
        if (board.id === action.payload.boardId) {
          const newBoard = { ...board };
          const newItems : Array<Item> = newBoard.items;
          newItems.push(action.payload.item);
          return newBoard;
        }
        return board;
      });
    },
  },
});

export const { setItem } = boardsSlice.actions;
export default boardsSlice.reducer;
