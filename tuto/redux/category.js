import {createSlice} from '@reduxjs/toolkit';

const categories = [
  {id: 1, name: 'All'},
  {id: 2, name: 'PHP'},
  {id: 3, name: 'JS'},
  {id: 4, name: 'SQL'},
  {id: 5, name: 'HTML'},
];

export const category = createSlice({
  name: 'category',
  initialState: categories,
  reducers: {},
});

export default category.reducer;
