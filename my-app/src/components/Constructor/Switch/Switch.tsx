import React, { useState } from 'react';
import eyeIcon from '../../../assets/eyeIcon.svg';
import eyeIconActive from '../../../assets/eyeIconActive.svg';
import arrowsIcon from '../../../assets/arrowsIcon.svg';
import arrowsIconActive from '../../../assets/arrowsIconActive.svg';

function Switch() {
  const [isRuntime, setIsRuntime] = useState(false);

  return (
    <div className="w-[243px] h-[38px] custom-switch">
      <button
        type="button"
        onClick={() => setIsRuntime(true)}
        className={`w-[108px] ${isRuntime ? 'active-switch-btn switch-btn' : 'switch-btn'}`}
      >
        <img src={isRuntime ? eyeIconActive : eyeIcon} alt="runtime-icon" />
        <span>Runtime</span>
      </button>

      <button
        type="button"
        onClick={() => setIsRuntime(false)}
        className={`w-[133px] ${!isRuntime ? 'active-switch-btn switch-btn' : 'switch-btn'}`}
      >
        <img src={!isRuntime ? arrowsIconActive : arrowsIcon} alt="constructor-icon" />
        <span>Constructor</span>
      </button>
    </div>
  );
}

export default Switch;
