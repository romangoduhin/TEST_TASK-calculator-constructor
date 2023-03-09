import React from 'react';
import styles from './Line.module.scss';

function Line() {
  return (
    <div className={styles.lineWrapper}>
      <div className={styles.circle} />
      <div className={styles.line} />
      <div className={styles.circle} />
    </div>
  );
}

export default Line;
