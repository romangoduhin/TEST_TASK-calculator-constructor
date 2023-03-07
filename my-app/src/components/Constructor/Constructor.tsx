import React from 'react';
import Switch from './Switch/Switch';
import Canvas from './Canvas/Canvas';
import styles from './Constructor.module.scss';
import { IProps } from './Constructor.types';

function Constructor({ items }: IProps) {
  return (
    <div className={styles.construct}>
      <Switch />
      <Canvas items={items} />
    </div>
  );
}

export default Constructor;
