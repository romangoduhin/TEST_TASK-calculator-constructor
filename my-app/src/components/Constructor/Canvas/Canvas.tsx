import React, { useEffect, useState } from 'react';
// @ts-ignore
import { Droppable } from 'react-drag-and-drop';
import AddIconSvg from '../../../assets/addIcon.svg';
import styles from './Canvas.module.scss';
import { IProps } from './Canvas.types';
import { useAppDispatch } from '../../../store/hooks';
import { disableItem, setItem } from '../../../store/slices/boardsSlice';
import { parse } from '../../../helpers/jsonMethods';
import Palette from '../../Palette/Palette';

function Canvas({ items, board }: IProps) {
  const dispatch = useAppDispatch();

  const [isEmpty, setIsEmpty] = useState(false);

  function handleDrop(data: string) {
    const parsedData = parse(data);

    if (parsedData) {
      dispatch(setItem({ boardId: 2, item: parsedData }));
      dispatch(disableItem(parsedData.id));
    }
  }

  useEffect(() => {
    if (items.length) {
      setIsEmpty(false);
      return;
    }
    setIsEmpty(true);
  }, [items]);

  return (
    <Droppable
      types="item"
      className={isEmpty ? styles.droppableAreaCanvas : styles.droppableAreaPalette}
      onDrop={(data: { item: string }) => handleDrop(data.item)}
    >
      {isEmpty ? (
        <div className={styles.emptyCanvas}>
          <img src={AddIconSvg} alt="add-icon" />
          <p className={styles.text}>
            Перетащите сюда
            <span>
              любой элемент
              <br />
              из левой панели
            </span>
          </p>
        </div>
      ) : (
        <Palette items={items} board={board} />
      )}
    </Droppable>
  );
}

export default Canvas;
