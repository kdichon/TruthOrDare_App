import {createSlice} from '@reduxjs/toolkit';

const initState = false;

export const loading = createSlice({
  name: 'loading',
  initialState: initState,
  reducers: {
    updateLoading: (state, action) => {
      // Renvoie l'opposé du State
      return !state;
    },
  },
});

export const {updateLoading} = loading.actions;
export default loading.reducer;
