import React from 'react';
import Switch from './Switch/Switch';
import Canvas from './Canvas/Canvas';

function Constructor() {
  return (
    <div className="w-1/2 h-full flex-centred flex-col gap-[41px] bg-white">
      <Switch />
      <Canvas />
    </div>
  );
}

export default Constructor;
