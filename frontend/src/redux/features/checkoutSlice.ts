import { createSlice } from "@reduxjs/toolkit";
import { CheckoutState } from "~/models/cart";
const initialState: CheckoutState = {
  cart: [],
  activeStep: 0,
  bill: null,
  subTotal: 0,
  shipping: 0,
  discount: 0,
  paymentMethod: "",
  totalItems: 0,
};

export const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    getCart: (state, action) => {
      state.cart = action.payload;
      state.totalItems = state.cart.reduce((acc, item) => acc + item.quantity, 0);
      state.subTotal = state.cart.reduce((acc, item) => acc + item.subTotal, 0);
    },
    nextStep: (state) => {
      state.activeStep++;
    },
    backStep: (state) => {
      state.activeStep--;
    },
    createBilling: (state, action) => {
      state.bill = action.payload;
    },
    applyDiscount: (state, action) => {
      state.discount = action.payload;
    },
    applyShipping: (state, action) => {
      state.shipping = action.payload;
    },
    setPaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
    },
    reset: (state) => {
      state.activeStep = 0;
      state.bill = null;
      state.subTotal = 0;
      state.shipping = 0;
      state.discount = 0;
      state.paymentMethod = "";
      state.totalItems = 0;
    },
  },
});

export const { getCart, backStep, nextStep, createBilling, applyShipping, applyDiscount, setPaymentMethod, reset } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
