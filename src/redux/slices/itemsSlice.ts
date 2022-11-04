import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../store';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

type FetchItemsArgs = {
  activeCategory: number;
  currentPage: string;
  selectedSort: string;
};

type Item = {
  id: string;
  title: string;
  price: number;
  image: string;
  size: string[];
  rating: number;
};

interface ItemSliceState {
  items: Item[];
  status: 'loading' | 'success' | 'error';
}

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: ItemSliceState = {
  items: [],
  status: Status.LOADING,
};

export const fetchItems = createAsyncThunk<Item[], FetchItemsArgs>('items/fetchItems', async (params) => {
  const { activeCategory, currentPage, selectedSort } = params;
  const res = await axios.get<Item[]>(
    `https://63501d4edf22c2af7b63d4a3.mockapi.io/items?page=${currentPage}&limit=4&${
      activeCategory > 0 ? `category=${activeCategory}` : ''
    }&sortBy=${selectedSort}&order=desc`,
  );
  return res.data;
});

export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.pending, (state) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },

  //   extraReducers: {
  //     [fetchItems.pending]: (state) => {
  // state.status = 'loading';
  // state.items = [];
  //     },
  //     [fetchItems.fulfilled]: (state, action) => {
  // state.items = action.payload;
  // state.status = 'success';
  //     },
  //     [fetchItems.rejected]: (state) => {
  // state.status = 'error';
  // state.items = [];
  //     },
  //   },
});

export const itemsSelector = (state: RootState) => state.itemsSlice;

export const { setItems } = itemsSlice.actions;

export default itemsSlice.reducer;
