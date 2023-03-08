import React from 'react';
import { Board, Items } from '../../store/types';

export interface IProps {
  items: Items,
  board: Board
}

export interface IComponents {
  display: React.ReactNode,
  operators: React.ReactNode,
  numbers: React.ReactNode,
  equal: React.ReactNode,
}
