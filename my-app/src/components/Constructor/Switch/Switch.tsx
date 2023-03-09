import React, { useEffect, useState } from 'react';
import eyeIcon from '../../../assets/eyeIcon.svg';
import eyeIconActive from '../../../assets/eyeIconActive.svg';
import arrowsIcon from '../../../assets/arrowsIcon.svg';
import arrowsIconActive from '../../../assets/arrowsIconActive.svg';
import styles from './Switch.module.scss';
import { useAppDispatch, useAppSelector } from '../../../redux/hooks';
import { switchMode } from '../../../redux/slices/boardsSlice';

function Switch() {
  const dispatch = useAppDispatch();

  const { mode } = useAppSelector((state) => state.boards);

  const [isRuntime, setIsRuntime] = useState(false);

  function handleSwitch() {
    dispatch(switchMode());
  }

  useEffect(() => {
    if (mode === 'runtime') {
      setIsRuntime(true);
      return;
    }
    setIsRuntime(false);
  }, [mode]);

  return (
    <div className={styles.switch}>
      <button
        type="button"
        onClick={handleSwitch}
        className={`${isRuntime ? `${styles.activeButton} ${styles.runtimeButton}` : `${styles.runtimeButton}`}`}
      >
        <img src={isRuntime ? eyeIconActive : eyeIcon} alt="runtime-icon" />
        <span>Runtime</span>
      </button>

      <button
        type="button"
        onClick={handleSwitch}
        className={`${!isRuntime ? `${styles.activeButton} ${styles.constructorButton}` : `${styles.constructorButton}`}`}
      >
        <img src={!isRuntime ? arrowsIconActive : arrowsIcon} alt="constructor-icon" />
        <span>Constructor</span>
      </button>
    </div>
  );
}

export default Switch;
