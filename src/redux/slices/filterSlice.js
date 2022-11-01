import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  searchValue: '',
  activeCategory: 0,
  currentPage: 1,
  selectedSort: { name: 'popularity', sortProperty: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSearchValue(state, action) {
      state.searchValue = action.payload;
    },
    setSort(state, action) {
      state.selectedSort = action.payload;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const sortSelector = (state) => state.filterSlice.selectedSort;
export const filterSelector = (state) => state.filterSlice;

export const { setActiveCategory, setSort, setCurrentPage, setSearchValue } = filterSlice.actions;

export default filterSlice.reducer;
