import { apiGetExample, apiPostExample } from '../../api/example.api';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchExample = createAsyncThunk(
  'example/fetchExample',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await apiGetExample({ ...params });
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const postExample = createAsyncThunk(
  'example/postExample',
  async (params, { fulfillWithValue, rejectWithValue }) => {
    try {
      const { data } = await apiPostExample(params);
      return fulfillWithValue(data);
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

export const exampleSlice = createSlice({
  name: 'example',
  initialState: {
    updateState: false,
    loading: false,
    items: null,
    error: ``,
    response: ``
  },
  reducers: {
    changeStateTrue: (state) => {
      state.updateState = true;
    },
    changeStateFalse: (state) => {
      state.updateState = false;
    },
    clearResponse: (state) => {
      state.response = ``;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(postExample.pending, (state) => {
        state.loading = true;
      })
      .addCase(postExample.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.response = `add`;
      })
      .addCase(postExample.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
    builder
      .addCase(fetchExample.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchExample.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.response = `fetch`;
      })
      .addCase(fetchExample.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  }
});

export default exampleSlice.reducer;
export const { changeStateTrue, changeStateFalse, clearResponse } = exampleSlice.actions;
