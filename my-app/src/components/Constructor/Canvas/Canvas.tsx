import React from 'react';
import AddIconSvg from '../../../assets/addIcon.svg';
import styles from './Canvas.module.scss';

function Canvas() {
  return (
    <div className={styles.canvas}>
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
  );
}

export default Canvas;
