import { Product } from "./product";

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  quantity: number;
  paymentType: string;
  totalMoney: string;
  createdAt: string;
  createdBy: string;
  deliveryStatus: string;
  deliveryAddress: string;
  orderDetails: OrderItem[];
}
