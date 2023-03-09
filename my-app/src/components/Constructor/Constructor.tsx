import React from 'react';
import Switch from './Switch/Switch';
import Canvas from './Canvas/Canvas';
import styles from './Constructor.module.scss';
import { IProps } from './Constructor.types';

function Constructor({ items, board }: IProps) {
  return (
    <div className={styles.construct}>
      <Switch />
      <Canvas items={items} board={board} />
    </div>
  );
}

export default Constructor;
