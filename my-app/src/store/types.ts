export type Items = { id: number, name: string }[] | [];

export interface InitialState {
  boards: {
    id: number;
    name: string;
    items: Items
  }[];
}
