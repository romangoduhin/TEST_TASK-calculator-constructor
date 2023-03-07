import React, { useEffect, useState } from 'react';
import AddIconSvg from '../../../assets/addIcon.svg';
import styles from './Canvas.module.scss';
import { IProps } from './Canvas.types';

function Canvas({ items }: IProps) {
  const [isEmpty, setIsEmpty] = useState(true);

  useEffect(() => {
    if (items.length) {
      setIsEmpty(false);
      return;
    }
    setIsEmpty(true);
  }, [items]);

  return isEmpty ? (
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
  )
    : (
      <div className={styles.filledCanvas} />
    );
}

export default Canvas;
