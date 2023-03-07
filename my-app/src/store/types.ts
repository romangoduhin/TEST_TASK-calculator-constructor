export interface InitialState {
  boards: {
    id: number;
    name: string;
    items: {
      id:number,
      name: string
    }[]
  }[];
}
