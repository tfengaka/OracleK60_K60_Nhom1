export interface ProductImage {
  id?: string;
  url: string;
}
export interface Category {
  alias: string;
  name: string;
  description?: string;
}
export interface Product {
  id: string;
  name: string;
  description: string;
  images: ProductImage[];
  price: number;
  quantityStore: number;
  category: Category;
}

export interface PaginationData {
  totalElements: number;
  currentPage: number;
  totalPages: number;
  perPage: number;
}

export interface ProductList {
  data: Product[];
  pagination?: PaginationData;
}
