import React from 'react';
import Display from './Display/Display';
import Operators from './Operators/Operators';
import Numbers from './Numbers/Numbers';
import EqualButton from './EqualButton/EqualButton';
import styles from './Palette.module.scss';

function Palette() {
  return (
    <div className={styles.palette}>
      <Display />
      <Operators />
      <Numbers />
      <EqualButton />
    </div>
  );
}

export default Palette;
