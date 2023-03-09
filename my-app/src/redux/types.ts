export interface Item { id: number, name: string }

export type Items = Array<Item> | [];

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
  swappedItem: Item | null;
  mode: string,
}

export interface InitialStateCalculator {
  numbers: any[],
  operators: any[],
  value: string,
  visibleValue: string
  visibleOperator: string
}
