import React from 'react';
// @ts-ignore
import { Draggable } from 'react-drag-and-drop';
import styles from './Palette.module.scss';
import { IComponents, IProps } from './Palette.types';
import { constructorParts } from '../../helpers/meta';
import { stringify } from '../../helpers/jsonMethods';
import { useAppDispatch } from '../../store/hooks';
import { removeItem } from '../../store/slices/boardsSlice';

function Palette({ items, board }: IProps) {
  const dispatch = useAppDispatch();

  function handleDoubleClick(itemId: number, boardId: number) {
    if (boardId === 2) {
      dispatch(removeItem({ boardId, itemId }));
    }
  }

  return (
    <div className={styles.palette}>
      {items.map((item) => {
        const data = stringify(item);

        return (
          <Draggable key={item.id} type="item" data={data} onDoubleClick={() => handleDoubleClick(item.id, board.id)}>
            {constructorParts[item.name as keyof IComponents]}
          </Draggable>
        );
      })}
    </div>
  );
}

export default Palette;
