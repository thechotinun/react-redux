import { apiGetExample } from '../../api/example.api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExample = createAsyncThunk('example/fetchExample', async (params) => {
  const data = await apiGetExample({ ...params })
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err;
    });

  return data;
});

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    items: null,
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExample.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchExample.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchExample.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
  // extraReducers: {
  //   [fetchExample.pending]: (state) => {
  //     state.status = 'loading';
  //   },
  //   [fetchExample.fulfilled]: (state, action) => {
  //     state.status = 'succeeded';
  //     state.items = action.payload;
  //   },
  //   [fetchExample.rejected]: (state, action) => {
  //     state.status = 'failed';
  //     state.error = action.error.message;
  //   }
  // }
});

export const selectAllExample = (state) => state.example.items;
export const getExampleStatus = (state) => state.example.status;
export const getExampleError = (state) => state.example.error;

export default exampleSlice.reducer;
