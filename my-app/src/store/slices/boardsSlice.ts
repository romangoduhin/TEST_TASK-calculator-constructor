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
  disabledItems: [],
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<{ boardId: number, item: Item }>) => {
      const { boardId, item } = action.payload;

      // eslint-disable-next-line no-param-reassign
      state.boards = state.boards.map((board) => {
        const isDesiredBoard = board.id === boardId;
        const isBoardExistItem = board.items.some((i) => i.id === item.id);

        if (isDesiredBoard && !isBoardExistItem) {
          const newBoard = { ...board };
          newBoard.items = [...newBoard.items, item];
          return newBoard;
        }
        return board;
      });
    },
    removeItem: (state, action: PayloadAction<{ boardId: number, itemId: number }>) => {
      const { boardId, itemId } = action.payload;

      // eslint-disable-next-line no-param-reassign
      state.boards = state.boards.map((board) => {
        const isDesiredBoard = board.id === boardId;

        if (isDesiredBoard) {
          const newBoard = { ...board };
          newBoard.items = newBoard.items.filter((item) => item.id !== itemId);
          return newBoard;
        }
        return board;
      });
    },
    disableItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      // eslint-disable-next-line no-param-reassign
      state.disabledItems = [...state.disabledItems, itemId];
    },
    enableItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      // eslint-disable-next-line no-param-reassign
      state.disabledItems = state.disabledItems.filter((id) => id !== itemId);
    },
  },
});

export const {
  setItem, removeItem, disableItem, enableItem,
} = boardsSlice.actions;
export default boardsSlice.reducer;
