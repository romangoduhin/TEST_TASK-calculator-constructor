/* eslint-disable no-param-reassign, max-len */
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Item, Board, InitialStateBoards } from '../types';
import { isConstructorMode, isDisplay, isRuntimeMode } from '../../helpers/checkers';

const initialState: InitialStateBoards = {
  boards: [
    {
      id: 1,
      name: 'palette',
      items: [
        {
          id: 1, name: 'display',
        },
        {
          id: 2, name: 'operators',
        },
        {
          id: 3, name: 'numbers',
        },
        {
          id: 4, name: 'equal',
        },
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
  mode: 'constructor',
};

export const boardsSlice = createSlice({
  name: 'boards',
  initialState,
  reducers: {
    setItem: (state, action: PayloadAction<{ boardId:number, item: Item }>) => { // setting item to board
      const { boardId, item } = action.payload;
      const { currentBoard, currentItem } = state;

      if (boardId === 1 || !currentItem || !currentBoard) return; // case when we try to swap item which is on palette board or current item or current board are not exist

      const currentItemId = currentItem.id;

      state.boards = state.boards.map((board) => {
        const isConstructor = boardId === board.id; // is constructor board
        const isItemAlreadyExist = board.items.some((i) => i.id === item.id); // is swapped items is already on the constructor board

        const newBoard = { ...board };

        if (!isConstructor && isItemAlreadyExist) return board; // case when mapped board is not constructor and item already exist on it

        if (isConstructor && isItemAlreadyExist) { // case when item is already exist on constructor board
          newBoard.items = newBoard.items.filter((el) => el.id !== currentItemId);
        }

        if (isDisplay(item)) { // case when we swap something on display
          newBoard.items = [...newBoard.items.slice(0, 1), currentItem, ...newBoard.items.slice(1)];

          state.disabledItems = [...state.disabledItems, currentItemId]; // disable item
          return newBoard;
        }

        if (isDisplay(currentItem)) { // when we move display from palette to canvas
          newBoard.items = [currentItem, ...board.items.filter((el) => el.id !== currentItemId)];

          state.disabledItems = [...state.disabledItems, currentItemId]; // disable item
          return newBoard;
        }

        const itemIndex = currentBoard.items.findIndex((el) => el.id === item.id);

        newBoard.items = [...newBoard.items.slice(0, itemIndex), currentItem, ...newBoard.items.slice(itemIndex)]; // case when we swap items

        state.disabledItems = [...state.disabledItems, currentItemId]; // disable item

        return newBoard;
      });
    },
    setItemToCanvas: (state, action: PayloadAction<Item>) => {
      const item = action.payload;
      const currentBoard = { ...state.boards[1] };

      state.boards = state.boards.map((board) => {
        const isCanvas = board.id === currentBoard.id; // is canvas board
        const isItemAlreadyExist = board.items.some((i) => i.id === item.id); // is adding item is already on the canvas

        if (!isCanvas || isItemAlreadyExist) return board; // case when item is already on the canvas or mapped board is not canvas

        board.items = isDisplay(item) ? [item, ...currentBoard.items] : [...currentBoard.items, item]; // case when if adding item is Display add to begin, if not push it to the end

        return board;
      });
    },
    setCurrentItem: (state, action: PayloadAction<Item>) => { // setting current item
      const item = action.payload;

      state.currentItem = item;
    },
    setCurrentBoard: (state, action: PayloadAction<Board>) => { // setting current board
      const board = action.payload;

      state.currentBoard = board;
    },
    removeItem: (state, action: PayloadAction<{ boardId: number, itemId: number }>) => { // remove item from board
      const { boardId, itemId } = action.payload;

      if (boardId === 1) return; // case when we try to remove item from not a constructor board

      state.boards = state.boards.map((board) => {
        const isConstructor = board.id === boardId; //  is constructor board

        if (isConstructor) {
          const newBoard = { ...board };

          newBoard.items = newBoard.items.filter((item) => item.id !== itemId); // removing the item
          return newBoard;
        }
        return board;
      });
    },
    disableItem: (state, action: PayloadAction<number>) => { // set item id to array with disabled items
      const itemId = action.payload;
      const isItemAlreadyExist = state.disabledItems.some((i) => i === itemId); // check if array already has item

      if (!isItemAlreadyExist) {
        state.disabledItems = [...state.disabledItems, itemId]; // add item to the end of array
      }
    },
    enableItem: (state, action: PayloadAction<number>) => { // remove item from array with disabled items
      const itemId = action.payload;

      state.disabledItems = state.disabledItems.filter((id) => id !== itemId);
    },
    switchMode: (state) => { // switch mode
      const { mode } = state;

      if (isRuntimeMode(mode)) {
        state.mode = 'constructor';
      } else if (isConstructorMode(mode)) {
        state.mode = 'runtime';
      }
    },
  },
});

export const {
  setItem,
  setItemToCanvas,
  removeItem,
  disableItem,
  enableItem,
  setCurrentItem,
  setCurrentBoard,
  switchMode,
} = boardsSlice.actions;
export default boardsSlice.reducer;
