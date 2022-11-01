import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchItems = createAsyncThunk('items/fetchItems', async (params) => {
  const { activeCategory, currentPage, selectedSort } = params;
  const res = await axios.get(
    `https://63501d4edf22c2af7b63d4a3.mockapi.io/items?page=${currentPage}&limit=4&${
      activeCategory > 0 ? `category=${activeCategory}` : ''
    }&sortBy=${selectedSort}&order=desc`,
  );
  return res.data;
});

const initialState = {
  items: [],
  status: 'loading',
};

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload;
    },
  },
  extraReducers: {
    [fetchItems.pending]: (state) => {
      state.status = 'loading';
      state.items = [];
    },
    [fetchItems.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.status = 'success';
    },
    [fetchItems.rejected]: (state) => {
      state.status = 'error';
      state.items = [];
    },
  },
});

export const itemsSelector = (state) => state.itemsSlice;

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
