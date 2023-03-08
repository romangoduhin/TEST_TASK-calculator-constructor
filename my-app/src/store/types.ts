export interface Item { id: number, name: string }

export type Items = Array<Item> | [];

export interface Board {
  id: number,
  name: string,
  items: Items,
}

export interface InitialState {
  boards: Array<Board>;
  disabledItems: Array<number> | [],
  currentItem: Item | null;
  currentBoard: Board | null;
  swipedItem: Item | null;
}
