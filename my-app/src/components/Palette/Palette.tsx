import React from 'react';
import Display from './Display/Display';
import Operators from './Operators/Operators';
import Numbers from './Numbers/Numbers';
import EqualButton from './EqualButton/EqualButton';

function Palette() {
  return (
    <div className="w-1/2 h-full flex-centred flex-col gap-[12px] bg-white">
      <Display />
      <Operators />
      <Numbers />
      <EqualButton />
    </div>
  );
}

export default Palette;
