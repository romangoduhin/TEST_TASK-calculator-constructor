import React, { useState } from 'react';
import eyeIconSvg from '../../../assets/eyeIcon.svg';
import constructorIconSvg from '../../../assets/constructorIcon.svg';

function Switch() {
  const [isRuntime, setIsRuntime] = useState(false);

  return (
    <div className=" w-[243px] h-[38px] custom-switch ">
      <button
        type="button"
        onClick={() => setIsRuntime(true)}
        className={`w-[108px] ${isRuntime ? 'active-switch-btn switch-btn' : 'switch-btn'}`}
      >
        <img src={eyeIconSvg} alt="runtime-icon" />
        <span>Runtime</span>
      </button>

      <button
        type="button"
        onClick={() => setIsRuntime(false)}
        className={`w-[133px] ${!isRuntime ? 'active-switch-btn switch-btn' : 'switch-btn'}`}
      >
        <img src={constructorIconSvg} alt="constructor-icon" />
        <span>Constructor</span>
      </button>
    </div>
  );
}

export default Switch;
