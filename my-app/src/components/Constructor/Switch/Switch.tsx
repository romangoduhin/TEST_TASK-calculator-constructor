import React, { useState } from 'react';
import eyeIcon from '../../../assets/eyeIcon.svg';
import eyeIconActive from '../../../assets/eyeIconActive.svg';
import arrowsIcon from '../../../assets/arrowsIcon.svg';
import arrowsIconActive from '../../../assets/arrowsIconActive.svg';
import styles from './Switch.module.scss';

function Switch() {
  const [isRuntime, setIsRuntime] = useState(false);

  return (
    <div className={styles.switch}>
      <button
        type="button"
        onClick={() => setIsRuntime(true)}
        className={`${isRuntime ? `${styles.activeButton} ${styles.runtimeButton}` : `${styles.runtimeButton}`}`}
      >
        <img src={isRuntime ? eyeIconActive : eyeIcon} alt="runtime-icon" />
        <span>Runtime</span>
      </button>

      <button
        type="button"
        onClick={() => setIsRuntime(false)}
        className={`${!isRuntime ? `${styles.activeButton} ${styles.constructorButton}` : `${styles.constructorButton}`}`}
      >
        <img src={!isRuntime ? arrowsIconActive : arrowsIcon} alt="constructor-icon" />
        <span>Constructor</span>
      </button>
    </div>
  );
}

export default Switch;
