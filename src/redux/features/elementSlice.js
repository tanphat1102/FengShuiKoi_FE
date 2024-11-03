import { createSlice } from "@reduxjs/toolkit";

const elementSlice = createSlice({
  name: "element",
  initialState: {
    elementData: null, // This will hold the data from the API
  },
  reducers: {
    setElementData: (state, action) => {
      state.elementData = action.payload;
    },
  },
});

export const { setElementData } = elementSlice.actions;
export default elementSlice.reducer;
