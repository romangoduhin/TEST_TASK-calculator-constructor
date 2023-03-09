/* eslint-disable no-bitwise */

import { Board, Item, Mode } from '../redux/types';

export function isDisplay(obj: Item) {
  return !!(obj.id && obj.name === 'display' && obj.id === 1);
}

export function isConstructor(obj: Board) {
  return !!(obj.id && obj.name === 'constructor' && obj.id === 2);
}

export function isPalette(obj: Board) {
  return !!(obj.id && obj.name === 'palette' && obj.id === 1);
}

export function isRuntimeMode(mode: Mode) {
  return mode === 'runtime';
}

export function isConstructorMode(mode: Mode) {
  return mode === 'constructor';
}

export function isInteger(num: number) {
  return (num ^ 0) === num;
}
