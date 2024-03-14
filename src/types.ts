export interface CartItem {
  productId: number;
  quantity: number;
}

export interface CartEvent {
  altImg: string;
  cost: number;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  quantity: number;
}

export interface Product {
  altImg: string;
  cost: number;
  description: string;
  id: number;
  imageUrl: string;
  name: string;
  validityDate: string;
}

export interface ProductState {
  isLoading: boolean;
  error: boolean;
  products: Product[];
  filteredProducts: Product[];
}

export interface SortOrder {
  order: string;
  suborder: string;
}
