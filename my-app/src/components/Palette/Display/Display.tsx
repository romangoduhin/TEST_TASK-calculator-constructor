import React from 'react';
import styles from './Display.module.scss';

function Display() {
  return (
    <div draggable className={styles.display}>
      <div>
        <p>0</p>
      </div>
    </div>
  );
}

export default Display;
