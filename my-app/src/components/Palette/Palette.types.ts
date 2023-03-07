import React from 'react';
import { Items } from '../../store/types';

export interface IProps {
  items : Items
}

export interface IComponents {
  display: React.ReactNode,
  operators: React.ReactNode,
  numbers: React.ReactNode,
  equal: React.ReactNode,
}
