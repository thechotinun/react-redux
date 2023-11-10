import { configureStore } from '@reduxjs/toolkit';
import aboutReducer from './slice/about';
import pokemonReducer from './slice/pokemon';
import exampleReducer from './slice/example';

export default configureStore({
  reducer: {
    about: aboutReducer,
    pokemon: pokemonReducer,
    exampleKey: exampleReducer
  }
});
