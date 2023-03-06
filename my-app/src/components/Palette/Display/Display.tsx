import React from 'react';

function Display() {
  return (
    <div className="w-[240px] h-[60px] p-[4px] rounded-[4px] bg-white shadow-small-yellow">
      <div className="w-full h-full rounded-[4px] bg-light-grey">
        <p className="px-[8px] py-[4px] w-full h-full flex justify-end items-center font-extrabold text-4xl">0</p>
      </div>
    </div>
  );
}

export default Display;
