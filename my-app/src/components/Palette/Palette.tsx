import React from 'react';
// @ts-ignore
import { Draggable, Droppable } from 'react-drag-and-drop';
import styles from './Palette.module.scss';
import { IComponents, IProps } from './Palette.types';
import { parse, stringify } from '../../helpers/jsonMethods';
import { useAppDispatch } from '../../store/hooks';
import {
  removeItem, enableItem, setCurrentItem, swipeItem, setSwipedItem, setCurrentBoard,
} from '../../store/slices/boardsSlice';
import Display from './Display/Display';
import Operators from './Operators/Operators';
import Numbers from './Numbers/Numbers';
import EqualButton from './EqualButton/EqualButton';

function Palette({ items, board, disabledItems }: IProps) {
  const dispatch = useAppDispatch();

  const constructorParts: IComponents = {
    display: <Display />,
    operators: <Operators />,
    numbers: <Numbers />,
    equal: <EqualButton />,
  };

  function handleDoubleClick(itemId: number, boardId: number) {
    if (boardId === 2) {
      dispatch(removeItem({ boardId, itemId }));
      dispatch(enableItem(itemId));
    }
  }

  function handleDragStart(data: string) {
    const parsedData = parse(data);
    if (parsedData) {
      dispatch(setCurrentItem(parsedData));
    }
  }

  function handleDragEnter(data: string) {
    const parsedData = parse(data);

    if (board && parsedData) {
      dispatch(setSwipedItem(parsedData));
      dispatch(setCurrentBoard(board));
    }
  }

  function handleDragEnd() {
    dispatch(swipeItem());
  }

  return (
    <Droppable
      types="item"
    >
      <div className={styles.palette}>
        {items.map((item) => {
          const data = stringify(item);
          const isDisabled = disabledItems && disabledItems.includes(item.id);

          return (
            <Draggable
              id={item.id}
              className={`${isDisabled ? styles.draggableDisabled : styles.draggable}`}
              key={item.id}
              type="item"
              data={data}
              onDragStart={() => handleDragStart(data)}
              onDragEnter={() => handleDragEnter(data)}
              onDragEnd={() => handleDragEnd()}
              onDoubleClick={() => handleDoubleClick(item.id, board.id)}
            >
              <div>{constructorParts[item.name as keyof IComponents]}</div>
            </Draggable>
          );
        })}
      </div>
    </Droppable>
  );
}

export default Palette;
