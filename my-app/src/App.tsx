import React from 'react';
import styles from './App.module.scss';
import Palette from './components/Palette/Palette';
import Constructor from './components/Constructor/Constructor';

function App() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <Palette />
        <Constructor />
      </div>
    </div>
  );
}

export default App;
