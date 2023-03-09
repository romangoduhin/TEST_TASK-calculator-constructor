/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
// @ts-ignore
import { Draggable, Droppable } from 'react-drag-and-drop';
import styles from './Palette.module.scss';
import { IComponents, IProps } from './Palette.types';
import { parse, stringify } from '../../helpers/jsonMethods';
import { useAppDispatch } from '../../store/hooks';
import {
  removeItem, enableItem, setCurrentItem, swapItem, setSwappedItem, setCurrentBoard,
} from '../../store/slices/boardsSlice';
import Display from './Display/Display';
import Operators from './Operators/Operators';
import Numbers from './Numbers/Numbers';
import EqualButton from './EqualButton/EqualButton';
import Line from './Line/Line';
import { isConstructor, isDisplay } from '../../helpers/checkers';

function Palette({ items, board, disabledItems }: IProps) {
  const dispatch = useAppDispatch();

  const [isLineVisible, setIsLineVisible] = useState(false);

  const constructorParts: IComponents = {
    display: <Display />,
    operators: <Operators />,
    numbers: <Numbers />,
    equal: <EqualButton />,
  };

  function switchLineVisibility(bool: boolean) {
    const isDisplayExist = items.some((item) => isDisplay(item));

    if (isConstructor(board) && isDisplayExist) {
      setIsLineVisible(bool);
    }
  }

  function handleDoubleClick(itemId: number) {
    if (isConstructor(board)) {
      const boardId = board.id;

      dispatch(removeItem({ boardId, itemId }));
      dispatch(enableItem(itemId));
    }
  }

  function handleDragStart(data: string) {
    switchLineVisibility(true);

    const parsedData = parse(data);

    if (parsedData) {
      dispatch(setCurrentItem(parsedData));
    }
  }

  function handleDragEnter(data: string) {
    const parsedData = parse(data);

    if (board && parsedData) {
      dispatch(setSwappedItem(parsedData));
      dispatch(setCurrentBoard(board));
    }
  }

  function handleDragEnd() {
    switchLineVisibility(false);

    dispatch(swapItem());
  }

  return (
    <Droppable
      types="item"
    >
      <div className={styles.palette}>
        {isLineVisible && <Line />}

        {items.map((item) => {
          const data = stringify(item);
          const isDisabled = disabledItems && disabledItems.includes(item.id);
          const isConstructorBoard = isConstructor(board);
          const isDisplayPart = isDisplay(item);

          return (
            <Draggable
              id={item.id}
              enabled={!(isConstructorBoard && isDisplayPart) && !isDisabled}
              className={isConstructorBoard
                ? isDisplayPart ? styles.draggableNotAllowed : styles.draggable
                : isDisabled ? styles.draggableDisabled : styles.draggableBordered}
              key={item.id}
              type="item"
              data={data}
              onDragStart={() => handleDragStart(data)}
              onDragEnter={() => handleDragEnter(data)}
              onDragEnd={() => handleDragEnd()}
              onDoubleClick={() => handleDoubleClick(item.id)}
            >
              <div className={styles.part}>{constructorParts[item.name as keyof IComponents]}</div>
            </Draggable>
          );
        })}
      </div>
    </Droppable>
  );
}

export default Palette;
