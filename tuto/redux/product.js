import {createSlice} from '@reduxjs/toolkit';
import {dataProducts} from '../data';

export const product = createSlice({
  name: 'product',
  initialState: dataProducts,
  reducers: {
    asc: (state, action) => {
      console.log('store_asc');
      // Retourne le State classé par ordre croissant en comparant le prix du produit A au B
      return state.sort((a, b) => a.price - b.price);
    },
    init: (state, action) => {
      console.log('store_init');
      // Retourne les datas initiales {dataProducts}
      return dataProducts;
    },
    desc: (state, action) => {
      console.log('store_desc');
      // Retourne le State classé par ordre décroissant en comparant le prix du produit A au B
      return state.sort((a, b) => b.price - a.price);
    },
    gestion: (state, action) => {
      console.log('gestion', action.payload);
    },
  },
});

export const {asc, init, desc} = product.actions;
export default product.reducer;
