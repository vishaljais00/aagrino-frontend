// loaderSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false,
};

const loaderSlice = createSlice({
  name: 'loader',
  initialState,
  reducers: {
    setLoader: (state, payload) => {
      state.isLoading = payload.payload;
    },
  },
});

export const { setLoader } = loaderSlice.actions;
export default loaderSlice.reducer;
