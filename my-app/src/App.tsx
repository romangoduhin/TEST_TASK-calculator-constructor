import React from 'react';
import './App.css';
import Palette from './components/Palette/Palette';

function App() {
  return (
    <div className="w-screen h-screen flex-centred bg-orange-200">
      <div className="w-[695px] h-[640px] bg-red-200">
        <Palette />
      </div>
    </div>
  );
}

export default App;
