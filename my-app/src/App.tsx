import React from 'react';
import styles from './App.module.scss';
import Palette from './components/Palette/Palette';
import Constructor from './components/Constructor/Constructor';
import { useAppSelector } from './store/hooks';

function App() {
  const { boards } = useAppSelector((state) => state.boards);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {boards.map((el) => (
          <div className={styles.side}>
            {(el.name === 'palette')
              ? <Palette key={el.id} items={el.items} />
              : <Constructor key={el.id} items={el.items} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
