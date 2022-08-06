import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "",
};

export const inputSlice = createSlice({
  name: "input",
  initialState,
  reducers: {
    updateValue: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { updateValue } = inputSlice.actions;

export default inputSlice.reducer;
