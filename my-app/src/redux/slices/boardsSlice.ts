/* eslint-disable no-param-reassign, max-len */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item, Board, InitialStateBoards } from '../types';
import elementSwapper from '../../helpers/elementSwapper';
import { isConstructor, isDisplay } from '../../helpers/checkers';

const initialState: InitialStateBoards = {
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
  swappedItem: null,
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<{ boardId: number, item: Item }>) => { // setting item to board
      const { boardId, item } = action.payload;

      state.boards = state.boards.map((board) => {
        const isSearchBoard = board.id === boardId; // check if board is desired
        const isBoardExistItem = board.items.some((i) => i.id === item.id); // check if board exist setting item

        if (isSearchBoard && !isBoardExistItem) {
          const newBoard = { ...board };

          if (isDisplay(item)) { // setting only Display as first element
            newBoard.items = [item, ...newBoard.items];
          } else {
            newBoard.items = [...newBoard.items, item];
          }

          return newBoard;
        }
        return board;
      });
    },
    removeItem: (state, action: PayloadAction<{ boardId: number, itemId: number }>) => { // remove item from board
      const { boardId, itemId } = action.payload;

      state.boards = state.boards.map((board) => {
        const isSearchBoard = board.id === boardId; // check if board is desired

        if (isSearchBoard) {
          const newBoard = { ...board };
          newBoard.items = newBoard.items.filter((item) => item.id !== itemId); // removing the current item
          return newBoard;
        }
        return board;
      });
    },
    disableItem: (state, action: PayloadAction<number>) => { // set item id to array with disabled items
      const itemId = action.payload;
      const isExistItem = state.disabledItems.some((i) => i === itemId); // check if array already has item

      if (!isExistItem) {
        state.disabledItems = [...state.disabledItems, itemId]; // push item to the array
      }
    },
    enableItem: (state, action: PayloadAction<number>) => { // remove item from array with disabled items
      const itemId = action.payload;

      state.disabledItems = state.disabledItems.filter((id) => id !== itemId);
    },
    setCurrentItem: (state, action: PayloadAction<Item>) => { // setting current item
      const item = action.payload;

      state.currentItem = item;
    },
    setCurrentBoard: (state, action: PayloadAction<Board>) => { // setting current board
      const board = action.payload;

      state.currentBoard = board;
    },
    setSwappedItem: (state, action: PayloadAction<Item>) => { // setting item that will swap with current item
      const item = action.payload;

      state.swappedItem = item;
    },
    swapItem: (state) => { // swap the current and swapped items
      const { currentItem, swappedItem, currentBoard } = state;
      const isItemsExist = currentItem && swappedItem; // check if items exist
      const isItemsNotDisplay = isItemsExist && ((!isDisplay(currentItem)) && (!isDisplay(swappedItem))); // check if one of the item is Display, because ww cant swap Display part
      const isBoardConstructor = currentBoard && isConstructor(currentBoard); // check if the board is constructor board

      if (isBoardConstructor && isItemsNotDisplay && isItemsExist) {
        state.boards = state.boards.map((board) => {
          if (isConstructor(board)) {
            const newBoard = { ...board };

            const swappedItemIndex = board.items.findIndex((i) => i.id === swappedItem.id);
            const currentItemIndex = board.items.findIndex((i) => i.id === currentItem.id);

            const isIndexesCorrect = (swappedItemIndex >= 0 && currentItemIndex >= 0); // check if indexes are correct, because it can be -1 if we finish onDragEnd on non Droppable area
            const isIndexesEqual = swappedItemIndex === currentItemIndex; // check if indexes equal each other

            if (!isIndexesEqual && isIndexesCorrect) {
              elementSwapper(newBoard.items, swappedItemIndex, currentItemIndex); // swap current item and swapped item
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
  setSwappedItem,
  swapItem,
  setCurrentBoard,
} = boardsSlice.actions;
export default boardsSlice.reducer;
