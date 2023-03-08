import React from 'react';
import { IComponents } from '../components/Palette/Palette.types.js';
import Display from '../components/Palette/Display/Display.js';
import Operators from '../components/Palette/Operators/Operators.js';
import Numbers from '../components/Palette/Numbers/Numbers.js';
import EqualButton from '../components/Palette/EqualButton/EqualButton.js';

// eslint-disable-next-line import/prefer-default-export
export const constructorParts: IComponents = {
  display: <Display />,
  operators: <Operators />,
  numbers: <Numbers />,
  equal: <EqualButton />,
};
