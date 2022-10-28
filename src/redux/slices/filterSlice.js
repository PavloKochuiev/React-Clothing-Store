import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeCategory: 0,
  selectedSort: { name: 'popularity', sortProperty: 'rating' },
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setActiveCategory(state, action) {
      state.activeCategory = action.payload;
    },
    setSort(state, action) {
      state.selectedSort = action.payload;
    },
  },
});

export const { setActiveCategory, setSort } = filterSlice.actions;

export default filterSlice.reducer;
