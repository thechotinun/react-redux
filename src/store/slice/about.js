import { createSlice } from '@reduxjs/toolkit';

export const aboutSlice = createSlice({
  name: 'about',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    setComplete: (state, action) => {
      let itemIndex = state.items.findIndex((item, id) => id === action.payload);
      if (itemIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[itemIndex].complete = !updatedItems[itemIndex].complete;
      }
    },
  },
});

export const { addItem, setComplete } = aboutSlice.actions;

export const getAbout = (state) => state.about.items;

export default aboutSlice.reducer;
