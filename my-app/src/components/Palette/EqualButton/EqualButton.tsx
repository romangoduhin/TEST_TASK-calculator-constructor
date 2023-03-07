import React from 'react';
import styles from './EqualButton.module.scss';

function EqualButton() {
  return (
    <div draggable className={styles.equalButton}>
      <div>
        =
      </div>
    </div>
  );
}

export default EqualButton;
