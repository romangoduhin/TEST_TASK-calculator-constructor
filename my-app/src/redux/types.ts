export interface Item { id: number, name: string}

export type Items = Array<Item> | [];
export type Mode = 'constructor' | 'runtime';

export interface Board {
  id: number,
  name: string,
  items: Items,
}

export interface InitialStateBoards {
  boards: Array<Board>;
  disabledItems: Array<number> | [],
  currentItem: Item | null;
  currentBoard: Board | null;
  mode: Mode,
}

export interface InitialStateCalculator {
  numbers: any[],
  operators: any[],
  value: string,
  visibleValue: string
  visibleOperator: string
}
