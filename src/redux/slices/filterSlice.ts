import { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './../store';
import { createSlice } from '@reduxjs/toolkit';

type Sort = {
  name: string;
  sortProperty: 'rating' | 'price' | 'title';
};

interface FilterSliceState {
  searchValue: string;
  activeCategory: number;
  currentPage: number;
  selectedSort: Sort;
}

const initialState: FilterSliceState = {
  searchValue: '',
  activeCategory: 0,
  currentPage: 1,
  selectedSort: { name: 'popularity', sortProperty: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action: PayloadAction<number>) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.selectedSort = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
  },
});

export const sortSelector = (state: RootState) => state.filterSlice.selectedSort;
export const filterSelector = (state: RootState) => state.filterSlice;

export const { setActiveCategory, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
