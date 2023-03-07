import React from 'react';
import './App.css';
import Palette from './components/Palette/Palette';
import Constructor from './components/Constructor/Constructor';

function App() {
  return (
    <div className="w-screen h-screen flex-centred bg-orange-200">
      <div className="w-[695px] h-[640px] flex flex-row bg-red-200">
        <Palette />
        <Constructor />
      </div>
    </div>
  );
}

export default App;
