/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { InitialState, Item, Board } from '../types';
import elementSwapper from '../../helpers/elementSwapper';

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
  currentItem: null,
  currentBoard: null,
  swipedItem: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<{ boardId: number, item: Item }>) => {
      const { boardId, item } = action.payload;

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
      const isExistItem = state.disabledItems.some((i) => i === itemId);

      if (!isExistItem) {
        state.disabledItems = [...state.disabledItems, itemId];
      }
    },
    enableItem: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;

      state.disabledItems = state.disabledItems.filter((id) => id !== itemId);
    },
    setCurrentItem: (state, action: PayloadAction<Item>) => {
      const item = action.payload;

      state.currentItem = item;
    },
    setCurrentBoard: (state, action: PayloadAction<Board>) => {
      const board = action.payload;

      state.currentBoard = board;
    },
    setSwipedItem: (state, action: PayloadAction<Item>) => {
      const item = action.payload;

      state.swipedItem = item;
    },
    swipeItem: (state) => {
      const { currentItem, swipedItem, currentBoard } = state;

      if (currentItem && swipedItem && currentBoard && currentBoard.id === 2) {
        state.boards = state.boards.map((board) => {
          if (board.id === 2) {
            const newBoard = { ...board };

            const swipedItemIndex = board.items.findIndex((i) => i.id === swipedItem.id);
            const currentItemIndex = board.items.findIndex((i) => i.id === currentItem.id);

            const isIndexesCorrect = (swipedItemIndex >= 0 && currentItemIndex >= 0);
            const isIndexesEqual = swipedItemIndex === currentItemIndex;

            if (!isIndexesEqual && isIndexesCorrect) {
              elementSwapper(newBoard.items, swipedItemIndex, currentItemIndex);
            }

            return newBoard;
          }
          return board;
        });
      }
    },
  },
});

export const {
  setItem,
  removeItem,
  disableItem,
  enableItem,
  setCurrentItem,
  setSwipedItem,
  swipeItem,
  setCurrentBoard,
} = boardsSlice.actions;
export default boardsSlice.reducer;
