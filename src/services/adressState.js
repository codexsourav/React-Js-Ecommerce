import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: {
    name: "n",
    mobile: "5",
    houseno: "h",
    area: "a",
    pincode: "5",
    city: "c",
    state: "s",
  },
};

export const addresstate = createSlice({
  name: "addresstate",
  initialState,
  reducers: {
    upaddress: (state, action) => {
      state.address = action.payload.data;
    },
  },
});

// Action creators are generated for each case reducer function
export const { upaddress } = addresstate.actions;

export default addresstate.reducer;
