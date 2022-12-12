import { createSlice } from "@reduxjs/toolkit";
import { User } from "~/models";

const initialState: { data?: User } = { data: undefined };

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.data = action.payload;
    },
    signOut: (state) => {
      state.data = initialState.data;
    },
  },
});

export const { setUser, signOut } = authSlice.actions;
export default authSlice.reducer;
