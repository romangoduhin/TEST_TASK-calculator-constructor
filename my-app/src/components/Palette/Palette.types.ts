import React from 'react';
import { Board, Items } from '../../redux/types';

export interface IProps {
  items: Items,
  board: Board,
  disabledItems?: Array<number>
}

export interface IComponents {
  display: React.ReactNode,
  operators: React.ReactNode,
  numbers: React.ReactNode,
  equal: React.ReactNode,
}
