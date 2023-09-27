import {configureStore} from '@reduxjs/toolkit';
import playerReducer from './player';
import loading from './loading';

export const store = configureStore({
  reducer: {
    player: playerReducer,
    loading: loading,
  },
});
