import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./features/authSlice";
import cartReducer from "./features/cartSlice";
import checkoutReducer from "./features/checkoutSlice";

const persistConfig = {
  key: "product",
  storage,
  whitelist: ["cart", "checkout"],
};

const rootReducer = persistReducer(
  persistConfig,
  combineReducers({
    auth: authReducer,
    cart: cartReducer,
    checkout: checkoutReducer,
  }),
);

export default rootReducer;
