import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: false,
  cartshow: false,
};

export const navbar = createSlice({
  name: "navbar",
  initialState,
  reducers: {
    visible: (state) => {
      state.value = !state.value;
    },
    cartvisible: (state) => {
      state.cartshow = !state.cartshow;
    },
  },
});

// Action creators are generated for each case reducer function
export const { visible, cartvisible } = navbar.actions;

export default navbar.reducer;
