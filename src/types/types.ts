// export interface Item {
//   id: string;
//   text?: string;
//   completed: boolean;
// }

// export interface ItemsState {
//   items: Item[];
// }

export interface CatalogItem {
  id: number;
  image: string;
  name: string;
  price: number;
}

export interface CatalogState {
  catalog: CatalogItem[];
  basket: CatalogItem[];
}

export interface State {
  items: CatalogState;
}
