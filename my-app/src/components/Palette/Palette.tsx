import React from 'react';
// @ts-ignore
import { Draggable } from 'react-drag-and-drop';
import styles from './Palette.module.scss';
import { IComponents, IProps } from './Palette.types';
import { stringify } from '../../helpers/jsonMethods';
import { useAppDispatch } from '../../store/hooks';
import { removeItem, undisableItem } from '../../store/slices/boardsSlice';
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
      dispatch(undisableItem(itemId));
    }
  }

  return (
    <div className={styles.palette}>
      {items.map((item) => {
        const data = stringify(item);
        return (
          <Draggable
            className={`${(disabledItems && disabledItems.includes(item.id)) ? styles.draggableDisabled : styles.draggable}`}
            key={item.id}
            type="item"
            data={data}
            onDoubleClick={() => handleDoubleClick(item.id, board.id)}
          >
            <div>{constructorParts[item.name as keyof IComponents]}</div>
          </Draggable>
        );
      })}
    </div>
  );
}

export default Palette;
