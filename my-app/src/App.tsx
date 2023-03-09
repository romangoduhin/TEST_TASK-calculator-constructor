import React from 'react';
import styles from './App.module.scss';
import Palette from './components/Palette/Palette';
import Constructor from './components/Constructor/Constructor';
import { useAppSelector } from './redux/hooks';
import { isPalette, isRuntimeMode } from './helpers/checkers';

function App() {
  const { boards, disabledItems, mode } = useAppSelector((state) => state.boards);

  const isRuntime = isRuntimeMode(mode);

  return (
    <div className={styles.main}>
      <div className={styles.content}>
        {boards.map((board) => (
          <div className={styles.side} key={board.id}>
            {(isPalette(board))
              ? !isRuntime && (
              <Palette
                items={board.items}
                board={board}
                disabledItems={disabledItems}
              />
              )
              : <Constructor items={board.items} board={board} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
