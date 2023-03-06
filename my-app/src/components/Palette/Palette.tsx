import React from 'react';
import Display from './Display/Display';
import Operators from './Operators/Operators';

function Palette() {
  return (
    <div className="w-1/2 h-full flex-column justify-center items-center bg-white">
      <Display />
      <Operators />
    </div>
  );
}

export default Palette;
