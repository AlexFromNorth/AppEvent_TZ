export interface Item {
  id: string;
  text?: string;
  completed: boolean;
}

export interface ItemsState {
  items: Item[];
}
