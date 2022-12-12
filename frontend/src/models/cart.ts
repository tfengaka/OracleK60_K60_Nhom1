import { Product } from "./product";

export interface CartItem {
  product: Product;
  quantity: number;
  subTotal: number;
}

export interface BillAddress {
  fullName: string;
  phoneNumber: string;
  address: string;
  isDefault: boolean;
}

export interface CheckoutState {
  cart: CartItem[];
  activeStep: number;
  bill: BillAddress | null;
  subTotal: number;
  shipping: number;
  discount: number;
  paymentMethod: string;
  totalItems: number;
}
