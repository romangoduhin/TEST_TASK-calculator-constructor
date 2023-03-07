import React from 'react';
import Switch from './Switch/Switch';
import Canvas from './Canvas/Canvas';
import styles from './Constructor.module.scss';

function Constructor() {
  return (
    <div className={styles.construct}>
      <Switch />
      <Canvas />
    </div>
  );
}

export default Constructor;
