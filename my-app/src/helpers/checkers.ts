import { Board, Item } from '../store/types';

export function isDisplay(obj: Item) {
  return !!(obj.id && obj.name === 'display' && obj.id === 1);
}

export function isConstructor(obj: Board) {
  return !!(obj.id && obj.name === 'constructor' && obj.id === 2);
}

export function isPalette(obj: Board) {
  return !!(obj.id && obj.name === 'palette' && obj.id === 1);
}
