import { apiGetPokemon } from '../../api/pokemon.api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchPokemons = createAsyncThunk('pokemons/fetchPokemons', async (params) => {
  const data = await apiGetPokemon({ ...params })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return data;
});

export const pokemonSlice = createSlice({
  name: 'pokemon',
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
  // extraReducers: {
  //   [fetchPokemons.pending]: (state) => {
  //     state.status = 'loading';
  //   },
  //   [fetchPokemons.fulfilled]: (state, action) => {
  //     state.status = 'succeeded';
  //     state.items = action.payload;
  //   },
  //   [fetchPokemons.rejected]: (state, action) => {
  //     state.status = 'failed';
  //     state.error = action.error.message;
  //   }
  // }
});

export const selectAllPokemons = (state) => state.pokemon.items;
export const getPokemonsStatus = (state) => state.pokemon.status;
export const getPokemonsError = (state) => state.pokemon.error;

export default pokemonSlice.reducer;
