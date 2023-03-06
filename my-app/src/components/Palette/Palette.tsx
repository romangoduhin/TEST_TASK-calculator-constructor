import React from 'react';
import Display from './Display/Display';
import Operators from './Operators/Operators';
import Numbers from './Numbers/Numbers';

function Palette() {
  return (
    <div className="w-1/2 h-full flex flex-col gap-[12px] justify-center items-center bg-white">
      <Display />
      <Operators />
      <Numbers />
    </div>
  );
}

export default Palette;
